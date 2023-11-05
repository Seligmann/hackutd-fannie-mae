"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Slider} from "@/components/ui/slider";
import {Input} from "@/components/ui/input";
import './styles.css';


const formSchema = z.object({
    appraisedValue: z.number().min(0, {message: "Appraised value must be at least 0."}).default(0),
    carPayment: z.number().min(0, {message: "Car payment must be at least 0."}).default(0),
    creditCardPayment: z.number().min(0, {message: "Credit card payment must be at least 0."}).default(0),
    creditScore: z.number().min(0, {message: "Credit score must be at least 0."}).max(850).default(0),
    downPayment: z.number().min(0, {message: "Down payment must be at least 0."}).default(0),
    grossMonthlyIncome: z.number().min(0, {message: "Gross monthly income must be at least 0."}).default(0),
    loanAmount: z.number().min(0, {message: "Loan amount must be at least 0."}).default(0),
    monthlyMortgagePayment: z.number().min(0, {message: "Monthly mortgage payment must be at least 0."}).default(0),
    studentLoanPayments: z.number().min(0, {message: "Student loan payments must be at least 0."}).default(0),
});

export default function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            appraisedValue: 0,
            carPayment: 0,
            creditCardPayment: 0,
            creditScore: 0,
            downPayment: 0,
            grossMonthlyIncome: 0,
            loanAmount: 0,
            monthlyMortgagePayment: 0,
            studentLoanPayments: 0
        },
    });

    return (
        <div className="max-w-2xl mx-auto my-12 ">
            <Form {...form}>
                <form
                    onSubmit={() => {

                        const appraisalValue = form.getValues().appraisedValue;
                        const creditScore = form.getValues().creditScore;
                        const downPayment = form.getValues().downPayment;
                        const creditCardPayment = form.getValues().creditCardPayment;
                        const carPayment = form.getValues().carPayment;
                        const grossMonthlyIncome = form.getValues().grossMonthlyIncome;
                        const loanAmount = form.getValues().loanAmount;
                        const monthlyMortgagePayment = form.getValues().monthlyMortgagePayment;
                        const studentLoanPayments = form.getValues().studentLoanPaymnets;
                        const ltv = Math.floor(appraisalValue / downPayment);
                        const dti = Math.ceil(grossMonthlyIncome / (carPayment + creditCardPayment + monthlyMortgagePayment));
                        const fedti = monthlyMortgagePayment / grossMonthlyIncome;

                        if (form.getValues().creditScore < 640) alert("No.");
                        else if (ltv < 0.80) alert("LTV is above threshold PMI might occur Suggest increase down payment or find cheaper house.");
                        else if (fedti <= 0.28) alert("It's advised to with a higher down payment or lower house price to get cheaper mortgage.")
                        else alert("Enjoy your new house!");

                    }
                    }

                    className="space-y-8 space-x-4 grid grid-flow-row grid-cols-3 content-center justify-center items-center"
                >
                    <FormField
                        control={form.control}
                        name="creditScore"
                        render={({field: {value, onChange}}) => (
                            <FormItem className={"justify-self-center"}>
                                <FormLabel className={"items-center"}>Credit Score</FormLabel>
                                <FormControl>
                                    <Slider
                                        className={"w-40 justify-self-center"}
                                        min={0}
                                        max={850}
                                        step={1}
                                        defaultValue={[value]}
                                        onValueChange={onChange}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Credit score.
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="downPayment"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Down payment</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your down payment amount.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="appraisedValue"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Appraised value</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your properties appraised value.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="creditCardPayment"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Credit card payment</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your minimum credit card payment.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="carPayment"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Car Payment</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your monthly car payment.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="grossMonthlyIncome"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Gross Monthly Income</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your gross monthly income.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="loanAmount"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Loan Amount</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your total amount in unpaid loans.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="monthlyMortgagePayment"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Monthly Mortgage Payment</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter your monthly mortgage payment.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="studentLoanPayments"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Student Loan Payments</FormLabel>
                                <FormControl>
                                    <Input placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>Enter total amount paid on student loans.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
        ;
}
