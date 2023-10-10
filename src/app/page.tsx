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

  let [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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

  const services = [
    {
      iconSrc: "/assets/logos/ri_money-dollar-circle-line.svg",
      title: "COMPETITIVE RATES",
    },
    {
      iconSrc: "/assets/logos/fontisto_taxi.svg",
      title: "MULTI-PLATFORM SUPPORT",
    },
    {
      iconSrc: "/assets/logos/ic_baseline-phone-android.svg",
      title: "MOBILE APP ACCESS",
    },
    {
      iconSrc: "/assets/logos/mdi_payment-clock.svg",
      title: "FLEXIBLE PAYMENT OPTIONS",
    },
    {
      iconSrc: "/assets/logos/mdi_support.svg",
      title: "DEDICATED 24/7 DRIVER ASSISTANCE",
    },
  ];

  return (
    <main className="px-6 pt-8 pb-4 md:px-8 md:py-8 lg:px-10 lg:py-10">
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

      <div className="flex flex-col-reverse md:flex-row justify-between mt-2 md:mt-20 lg:pb-20 items-center md:items-end">
        <div className="flex-1">
          <span className={`${myFont.className} flex mt-8 md:mt-0 hero-header`}>
            THE EV RENTAL HUB FOR RIDESHARE DRIVERS.
          </span>
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
        </div>
        <span className="flex-1">
          <img
            src="/assets/images/coming-soon-tesla.png"
            alt="My Image"
            className="car"
          />
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-8 md:mt-12">
        <div className="hidden md:block flex-1">
          <div className="flex justify-center space-x-3 md:space-x-10 mb-4">
            {services
              .filter((_, index) => index < 3)
              .map((service) => (
                <ServiceDesktop
                  key={service.title}
                  iconSrc={service.iconSrc}
                  title={service.title}
                />
              ))}
          </div>

          <div className="flex justify-center space-x-3 md:space-x-10">
            {services
              .filter((service, index) => index >= 3)
              .map((service) => (
                <ServiceDesktop
                  key={service.title}
                  iconSrc={service.iconSrc}
                  title={service.title}
                />
              ))}
          </div>
        </div>
        <div className="md:hidden block relative w-[100%]">
          {services.map((service, index) => (
            <Service
              key={service.title}
              show={index === activeIndex}
              iconSrc={service.iconSrc}
              title={service.title}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20 md:mt-10 text-center">
        <p>© Copyrights YourBlack EV | All Rights Reserved</p>
      </div>
    </main>
  );
}
interface ServiceProps {
  iconSrc: string;
  title: string;
  show?: boolean;
}
const Service = (props: ServiceProps) => {
  return (
    <span
      className={`flex space-x-1 absolute left-0 right-0 justify-center text-center`}
      style={{
        opacity: props.show ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Image src={props.iconSrc} alt="Dollar Sign" width={20} height={20} />
      <strong>{props.title}</strong>
    </span>
  );
};

const ServiceDesktop = (props: ServiceProps) => {
  return (
    <span className={`flex space-x-1`}>
      <Image src={props.iconSrc} alt="Dollar Sign" width={20} height={20} />
      <strong>{props.title}</strong>
    </span>
  );
};
