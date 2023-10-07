"use client";
import { Nunito } from "@next/font/google";
import Image from "next/image";

const nunito_bold = Nunito({
  subsets: ["latin"],
  weight: "600",
});

import localFont from "@next/font/local";
import { useEffect, useState } from "react";
const myFont = localFont({ src: "./fonts/grovana/Grovana BoldRound.otf" });

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 44,
    hours: 18,
    minutes: 32,
  });

  // Function to calculate the remaining time
  const calculateTimeRemaining = () => {
    const now: any = new Date();
    const targetDate: any = new Date("2023-12-31T23:59:59"); // Set your target date here
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setCountdown({ days, hours, minutes });
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(calculateTimeRemaining, 60000); // Update every minute
    calculateTimeRemaining(); // Initial calculation
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <main className="px-10 py-10">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
        <span className="pb-10 md:pb-0">
          <img
            src="/assets/logos/ybev-secondary-logo-inverted-rgb-900px-w-72ppi 1.png"
            alt="My Image"
            className="logo"
          />
        </span>
        <span
          className={`${nunito_bold.className} text-2xl md:text-2xl lg:text-3xl custom-text-yellow font-medium`}
        >
          {countdown.days} days : {countdown.hours} hrs : {countdown.minutes}{" "}
          mins
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between pt-10 pb-8 lg:pb-20 items-center">
        <span
          style={{ lineHeight: "1.3" }}
          className={`${myFont.className} mt-8 md:mt-0 text-center md:text-left text-3xl md:text-4xl lg:text-6xl font-Grovana-Bold`}
        >
          THE EV RENTAL HUB FOR RIDESHARE DRIVERS.
        </span>
        <span className="">
          <img
            src="/assets/images/coming-soon-tesla.png"
            alt="My Image"
            className="car"
          />
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-grow w-1/1 md:flex-1 md:pt-0">
          <div className="rental-text italic mb-4 text-gray-300">
            The rental experience you deserve, get started today.
          </div>
          <div className="flex w-[100%] md:w-[75%]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-4 px-4 rounded-l-md border border-gray-100 border-r-transparent focus:outline-none focus:ring focus:border-yellow-300 bg-transparent"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-r-md right-0 top-0 bottom-0"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex justify-items-between space-x-3 md:space-x-10 mb-4">
            <span className="flex space-x-1">
              <Image
                src="/assets/logos/ri_money-dollar-circle-line.svg"
                alt="Dollar Sign"
                width={20}
                height={20}
              />
              <strong>COMPETITIVE RATES</strong>
            </span>
            <span className="flex space-x-1">
              <Image
                src="/assets/logos/fontisto_taxi.svg"
                alt="Dollar Sign"
                width={20}
                height={20}
              />
              <strong>MULTI-PLATFORM SUPPORT</strong>
            </span>
            <span className="flex space-x-1">
              <Image
                src="/assets/logos/ic_baseline-phone-android.svg"
                alt="Dollar Sign"
                width={20}
                height={20}
              />
              <strong>MOBILE APP ACCESS</strong>
            </span>
          </div>

          <div className="flex justify-center space-x-3 md:space-x-10">
            <span className="flex space-x-1">
              <Image
                src="/assets/logos/mdi_payment-clock.svg"
                alt="Dollar Sign"
                width={20}
                height={20}
              />
              <strong>FLEXIBLE PAYMENT OPTIONS</strong>
            </span>
            <span className="flex space-x-1">
              <Image
                src="/assets/logos/mdi_support.svg"
                alt="Dollar Sign"
                width={20}
                height={20}
              />
              <strong>DEDICATED 24/7 DRIVER ASSISTANCE</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="flex fixed justify-center bottom-8 left-0 right-0">
        <p>© Copyrights YourBlack EV | All Rights Reserved</p>
      </div>
    </main>
  );
}
