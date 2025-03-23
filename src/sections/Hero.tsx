import React from 'react'
import { BackgroundBeams } from "../../@/components/ui/background-beams";
import { FaArrowRight } from 'react-icons/fa6';
import { TypewriterEffect } from "../../@/components/ui/typewriter-effect";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type Props = {}

const Hero = (props: Props) => {

    const { login, register } = useKindeAuth();

    const words = [
        {
            text: "Generate",
            className: "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold",
        },
        {
            text: "Questions",
            className: "relative z-10 text-lg md:text-7xl text-blue-500 dark:text-blue-500"
        },
        {
            text: "from",
            className: "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold",
        },
        {
            text: "your",
            className: "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold",
        },
        {
            text: "PDF",
            className: "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold",
        },
        {
            text: "in",
            className: "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold",
        },
        {
            text: "seconds.",
            className: "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold",
        },
    ];
    return (
        <>
            <div className="h-[40rem] w-full rounded-md bg-background relative grid place-items-center justify-center antialiased">

                {/* <div
                    className="inset-0 absolute bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-[length:128px] bg-repeat opacity-10 z-1 rounded-none filter"
                ></div> */}
                <div className="max-w-5xl mx-auto p-4 z-[9999999999] flex flex-col gap-2 items-center">
                    {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Generate Questions from your PDF in seconds
                    </h1> */}
                    <TypewriterEffect words={words} cursorClassName='pointer' />
                    <p className="text-neutral-500 text-base max-w-lg mx-auto my-2 text-center relative z-10">
                        Cay allows you to generate questions and answers from your PDF based on a given format. Simply upload you PDF and start creating questions with answers.
                    </p>
                    <div className="flex flex-col md:flex-row md:space-y-0 space-x-0 md:space-x-4">
                        <button onClick={register} className="w-40 flex gap-2 justify-center items-center h-10 rounded-xl bg-transparent border dark:border-white border-transparent text-white text-sm">
                            Get Started
                            <FaArrowRight />
                        </button>
                        <button onClick={() => login({
                            authUrlParams: {
                                login_hint: "jenny@example.com",
                                lang: "en"
                            }
                        })} className="w-40 h-10 rounded-xl bg-white font-medium text-black border border-black  text-sm">
                            Login
                        </button>
                    </div>
                </div>

                <BackgroundBeams className='absolute left-0 top-0 z-[9999] h-full w-full' />
            </div>
        </>
    )
}

export default Hero