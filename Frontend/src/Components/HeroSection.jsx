import React from "react";

const HeroSection = () => {
  const seasons = [
    {
      name: "Spring",
      description:
        "Spring is the season of renewal and growth. Plants awaken from their winter dormancy, and vibrant blossoms start appearing. It's the perfect time to sow seeds and watch nature come alive.",
      image:
        "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Summer",
      description:
        "Summer is marked by warmth and sunlight, providing ideal conditions for plant growth. Flowers bloom in full glory, and fruit-bearing plants produce bountiful harvests. Regular watering and care are essential in this season.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Autumn",
      description:
        "Autumn is the season of transition. Trees shed their leaves, creating a stunning tapestry of colors. It’s also a great time to plant bulbs for spring and harvest late-season crops.",
      image:
        "https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Winter",
      description:
        "Winter is a period of rest and preparation. Deciduous plants are dormant, while evergreens provide a touch of green. Protecting plants from frost and preparing for the next growth cycle is key.",
      image:
        "https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-green-100 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          The Seasons and Plants
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Explore the beauty of nature across the four seasons and how plants
          adapt and thrive in each one.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {seasons.map((season, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={season.image}
                alt={season.name}
                className="w-full md:w-1/3 h-48 md:h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-3">
                  {season.name}
                </h2>
                <p className="text-gray-700">{season.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
