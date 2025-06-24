"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

const categories = [
  { name: 'Singers', image: '/images/Singer.png' },
  { name: 'Dancers', image: '/images/Dancer.jpg' },
  { name: 'Speakers', image: '/images/Speaker.jpg' },
  { name: 'DJs', image: '/images/DJ.jpeg' },
];

export function CategoryCard() {
  return (
   <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Artists Categories</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore our curated selection of artists and find the perfect match for your event or project..</p>
            </div>
            <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <BackgroundGradient key={category.name} className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="object-cover h-48 w-full rounded-lg"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {category.name}
                        </p>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    </div>
  );
}
