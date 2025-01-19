"use client"
import './loader.css'
import { useEffect, useState } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className ="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className ="flex space-x-4 text-6xl font-extrabold relative">
        <div className ="relative">
          <div className ="ball"></div>
          <span className ="letter">S</span>
        </div>
        <div className ="relative">
          <div className ="ball"></div>
          <span className ="letter">A</span>
        </div>
        <div className ="relative">
          <div className ="ball"></div>
          <span className ="letter">D</span>
        </div>
        <div className ="relative">
          <div className ="ball"></div>
          <span className ="letter">I</span>
        </div>
        <div className ="relative">
          <div className ="ball"></div>
          <span className ="letter">A</span>
        </div>
      </div>
    </div>
    );
  }
  return children;
};

export default Loader