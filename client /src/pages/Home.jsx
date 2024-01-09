/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from "react";
import { Header } from "../components/Header";
import {  motion } from "framer-motion";
import '../assets/css/Home.scss';

export const HomePage = () => {
  const texts = [
    "Unleash your travel experiences and discover the world. Share your adventures, connect with fellow travelers to create lasting memories.",
    "Learn from other travel experiences. Get inspired by the journeys of fellow explorers, and let their stories guide you to new horizons.",
    "Connect with fellow bloggers and share your travel stories. Join our vibrant community and plan your next adventure through chat."
];



  const [currentText, setCurrentText] = useState(0);

  const textToDisplay = useMemo(() => texts[currentText], [currentText, texts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>
    <Header />
    <div className="Home">
     <div className="container">
     <motion.h1
        id="homeh1"
        initial={{  opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
        exit={{ opacity:0, transition: { duration: 1, ease: "easeOut" } }}
        key={currentText}
      >
        {textToDisplay}
      </motion.h1>
     </div>
    </div>
    <h1>Popular Categories</h1>
    </>;
};
