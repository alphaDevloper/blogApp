"use client";
import { useState } from "react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingData = [
    {
      tier: "START",
      price: "Free",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
      ],
      buttonColor: "gray",
    },
    {
      tier: "PRO",
      price: "38",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Mixtape chillwave tumeric",
      ],
      popular: true,
      buttonColor: "indigo",
    },
    {
      tier: "BUSINESS",
      price: "56",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Vexillologist pitchfork",
        "Mixtape chillwave tumeric",
      ],
      buttonColor: "gray",
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Choose the plan that best fits your needs.
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 ${
                isMonthly ? "bg-indigo-500 text-white" : ""
              } focus:outline-none`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-4 ${
                !isMonthly ? "bg-indigo-500 text-white" : ""
              } focus:outline-none`}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {pricingData.map((pricing, index) => (
            <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-lg border-2 ${
                  pricing.popular ? "border-indigo-500" : "border-gray-300"
                } flex flex-col relative overflow-hidden`}
              >
                {pricing.popular && (
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm dark:text-white tracking-widest title-font mb-1 font-medium">
                  {pricing.tier}
                </h2>
                <h1 className="text-5xl dark:text-white text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  {pricing.price === "Free" ? (
                    pricing.price
                  ) : (
                    <>
                      <span>${pricing.price}</span>
                      <span className="text-lg ml-1 font-normal text-gray-500">
                        /mo
                      </span>
                    </>
                  )}
                </h1>

                {pricing.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}

                <button
                  className={`flex items-center mt-auto text-white bg-${pricing.buttonColor}-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-${pricing.buttonColor}-600 rounded`}
                >
                  Choose Plan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
