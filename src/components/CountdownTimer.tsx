import { useEffect, useState } from "react";

// Initial countdown value
const intitalCounter = 10;

const CountdownTimer = () => {
  // State to track the countdown value
  const [counter, setCounter] = useState(intitalCounter);
  // State to control whether the countdown is active
  const [shouldStart, setShouldStart] = useState(false);

  // Effect to handle the countdown logic
  useEffect(() => {
    // Start countdown if shouldStart is true
    if (shouldStart) {
      // Stop countdown if counter reaches 0
      if (counter <= 0) {
        setShouldStart(false);
        return;
      }

      // Decrease counter every 1 second
      const intervalId = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      // Cleanup the interval on unmount or update
      return () => clearInterval(intervalId);
    }
  }, [counter, shouldStart]);

  // Starts or resets the countdown
  const handleStart = () => {
    setShouldStart(true);
    setCounter(intitalCounter);
  };

  return (
    <div className="p-10 flex items-center justify-center h-96 w-full space-y-4">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Display the current counter or "Done!" when it reaches 0 */}
        <div className="text-8xl font-bold text-red-500">
          {counter > 0 ? counter : "Done!"}
        </div>

        {/* Start/Reset button only shown when countdown is not active */}
        <div className="space-x-4">
          {!shouldStart && (
            <button
              onClick={handleStart}
              className="bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-500/80 cursor-pointer disabled:bg-blue-500/50 disabled:cursor-default"
            >
              {counter === 0 ? "Reset" : "Start"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
