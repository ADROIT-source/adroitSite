import React from 'react';
import './App.css';

import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

import Main from './Page/main'

function App() {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
