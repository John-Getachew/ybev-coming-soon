import { useEffect, useState } from "react";

const Countdown = () => {
    const [days, setDays] = useState(44);
    const [hours, setHours] = useState(18);
    const [minutes, setMinutes] = useState(32);
  
    useEffect(() => {
      // Function to update the countdown timer
      const updateCountdown = () => {
        // Calculate the remaining time in milliseconds
        const targetDate = new Date('2023-12-31T00:00:00').getTime(); // Change this date to your target date
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
  
        // Calculate days, hours, and minutes
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
  
        // Update state with the new countdown values
        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
      };
  
      // Update the countdown initially
      updateCountdown();
  
      // Update the countdown every second
      const countdownInterval = setInterval(updateCountdown, 1000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => {
        clearInterval(countdownInterval);
      };
    }, []); // Empty dependency array to run the effect once on mount

  return (
    <span className="text-2xl md:text-3xl text-yellow-400 font-medium">
      44 days : 18 hrs : 32 mins
    </span>
  );
};

export default Countdown;
