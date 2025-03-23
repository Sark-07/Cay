import React from 'react'
import StepsCard from './components/StepsCard';
type Props = {}

const Steps = (props: Props) => {
  return (
    <>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex flex-col gap-2 w-full text-center py-4'>
          <h1 className='text-4xl dark:text-white font-sans font-bold tracking-wide'>Start generating questions in seconds</h1>
          <p className='dark:text-white text-sm font-light'>Generating question from your PDF has never been easier than with Cay.</p>
        </div>
        <div className='w-full py-4 flex justify-center gap-4'>
          <StepsCard index={0} color='#262626' title='Sign up for an account' text={`Either start with a free plan or our pro plan`}/>
          <StepsCard index={1} color='#262626' title='Upload your PDF file' text={`We will process your file and get it ready to generate questions`}/>
          <StepsCard index={2} color='#262626' title='Start generating questions' text={`It's that simple. Try out cay today - it really takes less than a minute.`}/>
        </div>
      </div>
    </>
  );
}

export default Steps