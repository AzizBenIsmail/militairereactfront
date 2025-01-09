import React ,{lazy , Suspense}from 'react'
import {Routes, Route} from "react-router-dom"
import { InfinitySpin } from "react-loader-spinner";
//import Navbar from './Navbar';

import Navbar from "./composant/Navbar";
import App from './App';

const Home = lazy(()=> import("./App"))
const JSX = lazy(()=> import("./composant/JSX"))
const Exemple = lazy(()=> import("./composant/Exemple"))
const Islem = lazy(()=> import("./composant/Islem"))

export default function Routage() {
  return (
    <div>
      <Navbar/>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <InfinitySpin width="200" height="200" color="#4fa94d" />
          </div>
        }
      >
      <Routes>
      <Route path="Home" element={<Home/>} />
      <Route path="JSX" element={<JSX/>} />
      <Route path="Exemple" element={<Exemple/>} />
      <Route path="Islem" element={<Islem/>} />
      <Route path="/*" element={<Home />} />
      </Routes>
      </Suspense>

    </div>
  )
}
