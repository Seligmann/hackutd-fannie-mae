"use client";
import StartButton from "./StartButton";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {useRef} from 'react';
import "./styles.css";

import ProfileForm from "@/app/ProfileForm";
import AdviceButton from "@/app/AdviceButton";
import AboutButton from "@/app/AboutButton";

const firebaseConfig = {
    apiKey: "AIzaSyBl_iuClcP2JLNYlMsim_M9GkUp3Ob6moo",
    authDomain: "hackutd-dda6a.firebaseapp.com",
    projectId: "hackutd-dda6a",
    storageBucket: "hackutd-dda6a.appspot.com",
    messagingSenderId: "393903911592",
    appId: "1:393903911592:web:771764b972033631a1c89d"
};

firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

export default function Home() {
    const div = useRef(null);
    const sectionOne = useRef(null);
    const sectionTwo = useRef(null);
    const sectionThree = useRef(null);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
            <div className="App space-y-1000" ref={div}>
                <div className="App-header">
                    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32"><h1
                        className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">Analyze
                        your home-buying potential with just a few minutes</h1><p
                        className="mt-6 text-lg text-center max-w-3xl mx-auto text-white">View home-buying statistics
                        across
                        the United States, or enter and edit your current finances to see your home buying
                        potential.</p>
                    </div>
                    <div className={"flex flex-row space-x-5 justify-center"}>
                        <AboutButton div={sectionOne}/>
                        <StartButton div={sectionTwo}/>
                        <AdviceButton div={sectionThree}/>
                    </div>
                    <div ref={sectionOne}>
                        <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl text-white text-center pt-20">About</h2>
                        <p className="text-center mt-6 max-w-3xl mx-auto text-lg text-white">At our company, we're
                            dedicated to empowering individuals on their path to homeownership. We understand that
                            securing a mortgage can be a complex and often intimidating process. That's why we've
                            developed a user-friendly platform that allows you to input your financial information and
                            receive an instant assessment of your likelihood of being approved for a house. If you don't
                            meet the criteria, we provide personalized recommendations and actionable steps to help you
                            improve your financial situation and work towards your dream of owning a home. Our mission
                            is to make the path to homeownership more accessible, transparent, and achievable for
                            everyone..</p>
                    </div>
                    <div ref={sectionTwo}>
                        <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl text-white text-center pt-20">What
                            If?</h2>
                        <ProfileForm/>
                    </div>
                    <div ref={sectionThree}>
                        <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl text-white text-center pt-20">Advice</h2>
                        <h3 className="text-2xl tracking-tight font-extrabold sm:text-2xl text-white text-center pt-20">Bad
                            Credit</h3>
                        <p className="text-center mt-6 max-w-3xl mx-auto text-lg text-white">If you have bad credit,
                            it's essential to take proactive steps to improve your financial situation. Start by
                            reviewing your credit report to identify any errors or inaccuracies that may be negatively
                            impacting your score. Dispute and correct any mistakes you find. Create a budget to manage
                            your finances effectively and prioritize paying down high-interest debt. Make consistent,
                            on-time payments for all your bills, as payment history is a significant factor in your
                            credit score. Consider opening a secured credit card to establish a positive payment history
                            if you can't qualify for a traditional credit card. Be patient, as it takes time to rebuild
                            your credit, but with discipline and responsible financial behavior, you can gradually
                            improve your credit score and access better financial opportunities in the future..</p>

                        <h3 className="text-2xl tracking-tight font-extrabold sm:text-2xl text-white text-center pt-20">Bad
                            Debt-to-Income</h3>
                        <p className="text-center mt-6 max-w-3xl mx-auto text-lg text-white">If you're facing a
                            challenging debt-to-income ratio, it's essential to take immediate action to regain
                            financial stability. Start by creating a detailed budget that tracks your income and
                            expenses. Identify areas where you can cut back and allocate more money toward debt
                            repayment. Prioritize paying off high-interest debts first, using strategies like the debt
                            snowball or debt avalanche. Consider finding additional sources of income through part-time
                            work or freelance opportunities to accelerate your debt reduction. Don't hesitate to
                            negotiate with your creditors to explore options like reduced interest rates or modified
                            payment plans. Finally, remember that improving your debt-to-income ratio takes time and
                            discipline, but with a well-structured plan and commitment, you can work your way towards
                            financial freedom and peace of mind..</p>
                        <h3 className="text-2xl tracking-tight font-extrabold sm:text-2xl text-white text-center pt-20">Bad
                            Front-End Debt-to-Income</h3>
                        <p className="text-center mt-6 max-w-3xl mx-auto text-lg text-white">If you're dealing with a
                            poor front-end debt-to-income ratio, which typically pertains to housing costs such as
                            mortgage or rent relative to your income, it's vital to take immediate action to rebalance
                            your finances. Consider downsizing your living arrangements if your housing costs are too
                            high for your income level. Look for more affordable housing options or consider taking on a
                            roommate to share expenses. Additionally, explore opportunities to increase your income,
                            such as finding a higher-paying job or taking on a side gig. Revisiting your budget to cut
                            unnecessary expenses can also free up funds to allocate toward housing costs. Don't forget
                            to negotiate with your landlord or mortgage lender to discuss possible alternatives or
                            modifications to make your housing payments more manageable. Striving for a more balanced
                            front-end debt-to-income ratio will help alleviate financial stress and ensure more
                            stability in your housing situation..</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
