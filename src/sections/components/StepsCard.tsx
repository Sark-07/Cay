import React from 'react'
import { CardSpotlight } from '../../../@/components/ui/card-spotlight'
import { RxCheck } from 'react-icons/rx'

type Props = {
    index: number,
    title: string,
    text: string,
    color: string
}

const StepsCard = (props: Props) => {
    const Step = ({ title }: { title: string }) => {
        return (
            <li className="flex gap-2 items-center">
                <CheckIcon />
                <p className="text-white">{title}</p>
            </li>
        );
    };

    const CheckIcon = () => {
        return (
            <RxCheck/>
        );
    };
    return (
        <>
            <CardSpotlight className="group/spotlight px-10 rounded-md flex justify-center items-center relative border border-zinc-800 bg-[#18181B66] h-80 w-96" color={props.color}>
                <div>
                    <div
                        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                        style={{
                            backgroundColor: 'rgb(38, 38, 38)',
                            WebkitMaskImage: 'radial-gradient(350px at 15.4px 159.2px, white, transparent 80%)',
                            maskImage: 'radial-gradient(350px at 15.4px 159.2px, white, transparent 80%)',
                        }}
                    />
                    <p className="text-xl font-bold relative z-20 text-white">
                        {!props.index ? (
                            <>
                                {props.text}
                                <a href="javascript:void(0)" className='text-blue-500'>&nbsp;pro plan</a>
                            </>
                        ) : (
                            <a href="/">{props.title}</a>
                        )}
                    </p>
                    <div className="text-neutral-200 mt-4 relative z-20">
                        Follow these steps to secure your account:
                        <ul className="list-none  mt-2">
                            <Step title="Enter your email address" />
                            <Step title="Create a strong password" />
                            <Step title="Set up two-factor authentication" />
                            <Step title="Verify your identity" />
                        </ul>
                    </div>
                    <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                        {props.text}
                    </p>
                </div>
            </CardSpotlight>
        </>
    )
}

export default StepsCard