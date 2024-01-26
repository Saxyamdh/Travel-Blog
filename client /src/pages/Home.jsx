/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment,useEffect, useState, useMemo } from "react";
import { Header } from "../components/Header";
import { HomeComponent } from "../components/homeComponent/HomeComponent";

import {  motion } from "framer-motion";
import '../assets/css/Home.scss';

export const HomePage = () => {


  return <>
    <Header />
    <HomeComponent />
   
    </>;
};
