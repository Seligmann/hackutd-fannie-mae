"use client";
import StartButton from "@/app/StartButton";
import {useRef} from 'react';

export default function Home() {
  const div = useRef(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App space-y-1000" ref={div}>
        <div className="App-header">
          <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32"><h1
              className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">Analyze
            your home-buying potential with just a few minutes</h1><p
              className="mt-6 text-lg text-center max-w-3xl mx-auto text-white">View home-buying statistics across
            the United States, or enter and edit your current finances to see your home buying potential.</p>
          </div>
          <StartButton div={div}/>

          <div className={"pt-40 pb-20 px-20 space-x-20 flex flex-row"}>
            <div className={"w-60 h-60 bg-slate-500"}></div>
            <div className={"w-60 h-60 bg-slate-500"}></div>
            <div className={"w-60 h-60 bg-slate-500"}></div>
          </div>
          <div className={"pt-40 pb-20 px-20 space-x-20 flex flex-row"}>
            <div className={"w-60 h-60 bg-slate-500"}></div>
            <div className={"w-60 h-60 bg-slate-500"}></div>
            <div className={"w-60 h-60 bg-slate-500"}></div>
          </div>
        </div>
      </div>
    </main>
  )
}
