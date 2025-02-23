import { useState } from "react";
import { BottomAcc, LockAcc, TopAcc, Zoom } from "../../../ui/icons";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";

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
        "Seminars": {
            title: "Inaugural Lecture",
            details: "The Seminars will be conducted via Zoom and recorded for the benefit of the participants unable to attend the ‘live’ session due to a time difference.",
        },
        "Certification": {
            title: "Certificate",
            details: "Upon completing the course, you will have access to tests designed to assess your knowledge. To earn a certificate, you must achieve a score of at least 18 points. If you do not meet the required score, you will have the opportunity to retake the tests.",
            image: "/images/CourseInfo/cert.png"
        }
    };

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center p-0 sm:pt-4 pt-4">
            <div className="flex w-full space-x-4 mb-4">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 2.5 },
                        768: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {Object.keys(content).map((tab) => (
                        <SwiperSlide key={tab}>
                            <button
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenAccordion(null);
                                }}
                                className={`w-full px-4 py-2 rounded-xl transition-all ${activeTab === tab ? "bg-[#402D1D] text-white" : "bg-[#F0F0F0]"
                                    }`}
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

                {activeTab === "Course" ? (
                    content[activeTab].items.map((item, index) => (
                        <div key={index}>
                            <ButtonAcc
                                onClick={() => toggleAccordion(index)}
                                className={`w-full flex text-sm py-4 px-4 text-left bg-gray-100 focus:outline-none items-center justify-between buttonAcc 
                                ${index === 0 ? "rounded-t-lg" : ""} `}
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
                    ))
                ) : activeTab === "Seminars" ? (
                    <>
                        <div className="flex flex-col gap-4  p-[10px]" style={{ border: '0.5px solid grey' }}>
                            <div className="sm:flex lg:flex justify-between ">
                                <div className="flex items-center gap-2 ">
                                    <LockAcc />
                                    <p className="font-semibold ">Forum Shopping in International Arbitration</p>
                                </div>
                                <div className="flex gap-5 items-center sm:pt-0 pt-4 sm:pl-0 pl-7">
                                    <p>23.07.2025</p>
                                    <div className="rounded-[50%] w-1 h-1 bg-[#1E1E1E4D]">

                                    </div>
                                    <ul>
                                        <li>
                                            <p>16:00</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pl-8">
                                <p className="text-xs sm:text-sm">Theacher: Prof. Franco Ferrari and Mr. Norair Babadjanian</p>
                                <Link to='' className="flex items-center gap-2 py-2 px-4 bg-[#F0F0F0] text-[#1E1E1E] opacity-80 text-lg font-semibold rounded-xl"><LockAcc /> <Zoom /> Link</Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex flex-col md:flex-row items-center ">
                        <img
                            src={content["Certification"].image}
                            alt="Certification"
                            className="w-full md:w-2/3 rounded-lg shadow-md mt-5 cursor-pointer"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseInfo;
