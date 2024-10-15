import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-40
     px-5">
      <div className="max-w-7xl mx-auto">
        {/* About Us Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">About Us</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4"></div>{" "}
          {/* Unique underline */}
          <p className="mt-6 text-gray-600 text-lg">
            At SAMPAT, we believe in delivering the finest organic
            products that nourish your body and soul. Our commitment to
            sustainability and quality is at the heart of everything we do.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <img
              src="/images/organic farm.jpg"
              alt="Organic Farm"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center">
            <div>

              <h2 className="text-3xl font-semibold text-green-800">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Our journey started with a simple idea: to offer healthy,
                organic food that is ethically sourced from local farmers. We
                work closely with certified organic farms to ensure that every
                product is pure, natural, and free from harmful chemicals. We
                are dedicated to sustainable farming practices that protect both
                the environment and the well-being of future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-semibold text-green-800">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                We are committed to providing high-quality organic products that
                promote health, sustainability, and wellness. Our mission is to
                create a positive impact on both our customers' lives and the
                environment by supporting eco-friendly practices. We value
                transparency, quality, and community above all.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/org product.webp"
              alt="Organic Products"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-green-800">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4"></div>{" "}
          {/* Unique underline */}
          <p className="mt-6 text-gray-600 text-lg">
            We offer a wide range of organic products, including Organic Ghee,
            Organic Honey, and more. Our products are 100% natural, rich in
            nutrients, and ethically sourced from trusted farmers. Choosing us
            means choosing the best for your health and the planet.
          </p>
        </div>

        {/* Values Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <img
              src="/images/sus 2.jpg"
              alt="Sustainability"
              className="w-26 h-26 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              Sustainability
            </h3>
            <p className="mt-2 text-gray-600">
              We prioritize sustainable farming methods that protect the planet
              for future generations.
            </p>
          </div>
          <div>
            <img
              src="/images/qualoity.jpg"
              alt="Quality"
              className="w-26 h-26 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">Quality</h3>
            <p className="mt-2 text-gray-600">
              Our organic products are of the highest quality, ensuring health
              benefits for you and your family.
            </p>
          </div>
          <div>
            <img
              src="/images/farmerrr.jpg"
              alt="Community"
              className="w-26 h-26 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">Community</h3>
            <p className="mt-2 text-gray-600">
              We support local farmers and contribute to a healthy, sustainable
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
