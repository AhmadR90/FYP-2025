import React from "react";

const PlantImportance = () => {
  const points = [
    {
      title: "Life Support System",
      description:
        "Plants are the backbone of life on Earth. They provide oxygen, absorb carbon dioxide, and regulate the planet's climate. Without plants, life as we know it would cease to exist.",
      image:
        "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Food and Nutrition",
      description:
        "Plants are the primary source of food for humans and animals. Fruits, vegetables, grains, and nuts nourish us and are essential for a balanced diet.",
      image:
        "https://images.pexels.com/photos/4199053/pexels-photo-4199053.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Environmental Balance",
      description:
        "Plants prevent soil erosion, maintain the water cycle, and provide habitats for countless species. Forests and green spaces improve air quality and support biodiversity.",
      image:
        "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Health and Well-being",
      description:
        "Green spaces promote mental health by reducing stress and anxiety. Many medicinal plants are used to treat illnesses, making them vital for health care.",
      image:
        "https://images.pexels.com/photos/36717/amazing-anatomy-beautiful-blur.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Economic Importance",
      description:
        "Plants drive economies through agriculture, forestry, and industries like paper, textile, and pharmaceuticals. They are crucial for sustainable development.",
      image:
        "https://images.pexels.com/photos/264502/pexels-photo-264502.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="w-full py-10 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
          The Importance of Plants in Our Lives
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              {/* Circular Image */}
              <img
                src={point.image}
                alt={point.title}
                className="w-32 h-32 object-cover rounded-full lg:mr-6 mb-4 lg:mb-0 border-4 border-green-200"
              />
              {/* Text Content */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                  {point.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantImportance;
