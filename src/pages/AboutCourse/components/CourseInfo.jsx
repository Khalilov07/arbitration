import { useState } from "react";
import { BottomAcc, LockAcc, TopAcc } from "../../../ui/icons";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ButtonAcc = styled.button`
    @media(max-width: 1032px) {
    display: block;
        flex-direction: column;
    }
`;

const CourseInfo = () => {
    const [activeTab, setActiveTab] = useState("Course");
    const [openAccordion, setOpenAccordion] = useState(null);

    const content = {
        "Course": {
            title: "Inaugural Lecture",
            details: "8 Topics | 66 Lectures | Total duration: 56 hours 18 minutes",
            items: [
                "Topic 1: Introductory Lecture",
                "Topic 2: Introductory Lecture",
                "Topic 3: Introductory Lecture"
            ]
        },
        Seminars: {
            title: "Interactive Seminars",
            details: "5 Topics | 40 Lectures | Total duration: 30 hours 45 minutes",
            items: [
                "Upcoming seminar dates",
                "Guest speakers",
                "Interactive Q&A sessions"
            ]
        },
        Certification: {
            title: "Certification Process",
            details: "3 Topics | 20 Lectures | Total duration: 15 hours 20 minutes",
            items: [
                "Exam requirements",
                "Certification process",
                "Benefits of certification"
            ]
        }
    };

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center p-0 sm:p-4">
            <div className="flex w-full space-x-4 mb-4">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 3, 
                        },
                    }}
                    className="w-full"
                >
                    {Object.keys(content).map((tab) => (
                        <SwiperSlide key={tab}>
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-xs sm:text-base px-4 py-2 rounded-xl transition-all ${activeTab === tab ? "bg-[#402D1D] text-white" : "bg-[#F0F0F0]"}`}
                            >
                                {tab}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-full">
                <h2 className="text-xl font-bold">{content[activeTab].title}</h2>
                <p className="text-gray-600 mt-3 mb-2 text-base">{content[activeTab].details}</p>
                {content[activeTab].items.map((item, index) => (
                    <div key={index}>
                        <ButtonAcc
                            onClick={() => toggleAccordion(index)}
                            className={`w-full flex text-sm py-4 px-4 text-left bg-gray-100 focus:outline-none  items-center justify-between buttonAcc ${index === 0 ? "rounded-t-lg" : ""
                                }`}
                        >
                            <div className="flex gap-4 items-center">
                                {openAccordion === index ? <TopAcc /> : <BottomAcc />}
                                <p className="font-medium">{item}</p>
                            </div>
                            <div className="flex items-center gap-5 justify-end sm:justify-end">
                                <p className="font-normal">1 lecture</p>
                                <p className="font-medium"><span className="text-[#1E1E1E] opacity-80">Teacher:</span> John Doe</p>
                                <LockAcc />
                            </div>
                        </ButtonAcc>
                        {openAccordion === index && (
                            <div>
                                <div className="text-gray-700 py-3 pl-5 text-sm">
                                    <p>{item}</p>
                                </div>
                                <hr className="h-[2px] w-[95%] bg-gray-400 opacity-80 mx-auto" />
                                <div className="text-gray-700 py-3 pl-5 text-sm">
                                    <p>{item}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CourseInfo;
