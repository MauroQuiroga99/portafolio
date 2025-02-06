"use client";
import { Activities } from "app/db/data";
import React from "react";
import { useState } from "react";

type ActivitiesProps = {
  activities: Activities;
};

const ProyectCardE = ({ activities }: ActivitiesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    activities.image1,
    activities.image2,
    activities.image3,
    activities.image4,
    activities.image5,
    activities.image6,
  ].filter(Boolean);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden w-full mx-auto cursor-pointer">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={activities.title}
          className="w-full h-96 object-cover transition-all duration-300 brightness-50 blur-sm group-hover:brightness-100 group-hover:blur-none"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{activities.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{activities.description}</p>
        <p className="text-gray-500 text-xs mt-2">
          Ubicación: {activities.location}
        </p>
      </div>
    </div>
  );
};

export default ProyectCardE;
