import {useEffect, useState} from "react";

const AdviceButton = ({div}) => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            setClicked(false);
            div.current.scrollIntoView({behavior: "smooth"});
        }
    }, [clicked, div]);

    return (
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"><a
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            onClick={() => setClicked(true)}
        >Advice</a>
        </div>
    );
}

export default AdviceButton;
