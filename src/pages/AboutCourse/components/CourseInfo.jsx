import { useState } from "react";

const CourseInfo = () => {
    const [activeTab, setActiveTab] = useState("Course materials");
    const [openAccordion, setOpenAccordion] = useState(null);

    const content = {
        "Course materials": {
            title: "Inaugural Lecture",
            details: "8 Topics | 66 Lectures | Total duration: 56 hours 18 minutes",
            items: [
                "Introduction to the course",
                "Downloadable PDFs",
                "Video lectures"
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
        <div className="flex flex-col items-center p-4">
            <div className="flex w-full space-x-4 mb-4">
                {Object.keys(content).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-1/3 px-4 py-2 rounded-xl transition-all ${activeTab === tab ? "bg-[#402D1D] text-white" : "bg-[#F0F0F0]"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="p-4 w-full">
                <h2 className="text-xl font-bold">{content[activeTab].title}</h2>
                <p className="text-gray-600 mb-4">{content[activeTab].details}</p>
                {content[activeTab].items.map((item, index) => (
                    <div key={index} className="mb-2">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg focus:outline-none"
                        >
                            <p>{item}</p>
                        </button>
                        {openAccordion === index && (
                            <div className="p-4 text-gray-700 border rounded-lg mt-2">
                                Detailed information about {item}.
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseInfo;
