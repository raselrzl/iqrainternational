"use client"
import { useEffect, useState } from 'react';

export default function ProfileCounter() {
  const [totalFiles, setTotalFiles] = useState(0);
  const [currentFiles, setCurrentFiles] = useState(0);

  useEffect(() => {
    const totalTarget = 100;
    const currentTarget = 50;
    const duration = 2000; // Duration of the animation in ms
    const intervalTime = 20; // Time between each increment
    const totalStep = Math.ceil((totalTarget / (duration / intervalTime)));
    const currentStep = Math.ceil((currentTarget / (duration / intervalTime)));

    const totalInterval = setInterval(() => {
      setTotalFiles((prev) => {
        if (prev < totalTarget) return prev + totalStep;
        clearInterval(totalInterval);
        return totalTarget;
      });
    }, intervalTime);

    const currentInterval = setInterval(() => {
      setCurrentFiles((prev) => {
        if (prev < currentTarget) return prev + currentStep;
        clearInterval(currentInterval);
        return currentTarget;
      });
    }, intervalTime);

    return () => {
      clearInterval(totalInterval);
      clearInterval(currentInterval);
    };
  }, []);

  return (
    <div className="flex justify-center bg-black space-x-8 mt-20">
      <div className="bg-black border-4 border-yellow-500 p-4 rounded-full shadow-lg flex justify-center items-center w-28 h-28">
        <div className="text-center">
          <h1 className="text-sm font-bold text-yellow-500">Success</h1>
          <p className="text-2xl mt-4 text-yellow-500 font-extrabold">
            {totalFiles}+
          </p>
        </div>
      </div>
      <div className="bg-black border-4 border-green-500 p-8 rounded-full shadow-lg flex justify-center items-center w-28 h-28">
        <div className="text-center">
          <h1 className="text-sm font-bold text-white">Pending</h1>
          <p className="text-2xl mt-4 text-green-500 font-extrabold">
            {currentFiles}+
          </p>
        </div>
      </div>
    </div>
  );
}
