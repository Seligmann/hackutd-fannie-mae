"use client";
import StartButton from "./StartButton";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {useRef} from 'react';
import "./styles.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import ProfileForm from "@/app/ProfileForm";

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
              className="mt-6 text-lg text-center max-w-3xl mx-auto text-white">View home-buying statistics across
            the United States, or enter and edit your current finances to see your home buying potential.</p>
          </div>
          <div className={"flex flex-row space-x-5 justify-center"}>
            <StartButton div={sectionOne}/>
            <StartButton div={sectionTwo}/>
            <StartButton div={sectionThree}/>
          </div>
          <div ref={sectionOne}>
            <ProfileForm/>
          </div>
          <div ref={sectionTwo}>
            <ProfileForm/>
          </div>
          <div ref={sectionThree}>
            <ProfileForm/>
          </div>
        </div>
      </div>
    </main>
  )
}
