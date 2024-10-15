// src/components/WhyChooseUs.js
import React from "react";

const reasons = [
  {
    icon: "fas fa-check-circle",
    title: "Quality Products",
    description:
      "We offer high-quality, organic products sourced from trusted farms.",
  },
  {
    icon: "fas fa-truck-fast",
    title: "Fast Delivery",
    description:
      "Our products are delivered quickly and efficiently to your doorstep.",
  },
  {
    icon: "fas fa-headset",
    title: "Excellent Support",
    description: "Our customer support team is here to assist you 24/7.",
  },
  {
    icon: "fas fa-recycle",
    title: "Sustainable Practices",
    description: "We follow eco-friendly practices to protect the environment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What you will get ? </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className=" rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <i className={`${reason.icon} text-4xl text-green-600`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
