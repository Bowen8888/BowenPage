import React, {useState, useEffect} from "react";
import './css/TypeEffect.css'

const words = ["Hi welcome to my page!",
    "I created this page in my spare time.",
    "It's not finished yet.",
    "I also like making mobile games.", 
    "They are listed below.",
    "What is my current project?",
    "I'm working together with an influencer on a new app!",
    "Whichès     goal is to keep young people motivated and help them find their passion.",
    "Have you realized that this goes forever?",
    "Nah just kidding. Keep scrolling."
];

export default function TypingEffect() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const [enableBlink, setEnableBlink] = useState(false);

    useEffect(() => {
        if (subIndex > words[index].length && index === words.length - 1 && !reverse) {
            setEnableBlink(true);
            return;
        }

        if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 20 : subIndex === words[index].length ? 1000 : 40, 100));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            if (enableBlink) {
                setBlink((prev) => !prev);
            }
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink, enableBlink]);

    return (
        <div className="TypeEffectText" style={{
            whiteSpace: "pre-line"
        }}>
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </div>
    );
}