import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '../../../ui/icons';

const Five = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { img: '/images/udemy.png', alt: 'Udemy' },
        { img: '/images/coursera.png', alt: 'Coursera' },
        { img: '/images/khanacademy.png', alt: 'Khan Academy' },
        { img: '/images/udacity.png', alt: 'Udacity' },
    ];

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(slides.length - 1);
        }
    };

    return (
        <section className="bg-white py-10 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between">

                    <h2 className="text-lg sm:text-xl font-medium text-gray-700 flex-grow text-center">
                        Trusted by over <span className="font-semibold">16,000 companies</span> and
                        millions of learners worldwide.
                    </h2>
                    <button
                        className="text-gray-500 hover:text-black cursor-pointer"
                        onClick={prevSlide}
                    >
                        <ArrowLeft />
                    </button>

                    <span className="w-px mx-5 h-6 bg-gray-500"></span>

                    <button
                        className="text-gray-500 hover:text-black cursor-pointer"
                        onClick={nextSlide}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>


                <div className="mt-3 w-full h-1 bg-gray-200 relative">
                    <div
                        className="absolute top-0 left-0 h-full bg-black"
                        style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                    ></div>
                </div>


                <div className="flex items-center justify-center mt-6">
                    <div className="flex-1 mx-6 overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="flex-shrink-0 w-full">
                                    <img
                                        src={slide.img}
                                        alt={slide.alt}
                                        className="h-6 sm:h-8 mx-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Five;
