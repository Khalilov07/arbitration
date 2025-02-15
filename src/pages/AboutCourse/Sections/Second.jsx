import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "../../../ui/icons";

const Second = () => {
    const [activeTab, setActiveTab] = useState("info1");

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? "" : tab);
    };

    return (
        <section className="bg-[#ae9174] min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 bg-[#ae9174] p-5 flex md:flex-col gap-4">
                <button
                    className={`w-full flex justify-between items-center p-4 font-semibold  transition-all duration-300 ${
                        activeTab === "info1" ? "bg-[#402d1d] text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleTabClick("info1")}
                >
                    Info 1
                    {activeTab === "info1" ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                <button
                    className={`w-full flex justify-between items-center p-4 font-semibold  transition-all duration-300 ${
                        activeTab === "info2" ? "bg-[#402d1d] text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleTabClick("info2")}
                >
                    Info 2
                    {activeTab === "info2" ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
            </div>

            <div className="w-full md:w-3/4 p-10 flex items-center justify-center text-white text-lg font-semibold">
                {activeTab === "info1" && <p>Content for Info 1</p>}
                {activeTab === "info2" && <p>Content for Info 2</p>}
                {activeTab === "" && <p>Select an option</p>}
            </div>
        </section>
    );
};

export default Second;
