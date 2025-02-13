import React from "react";

const Four = () => {
    const styles = {
        section: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "80vh",
            background: "#AE9174",
            backgroundImage: "url('./images/Main/SecondBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            padding: "3rem 1.5rem",
        },
        imageContainer: {
            flex: "1 1 45%",
            maxWidth: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            borderRadius: "8px",
            objectFit: "cover",
        },
        content: {
            flex: "1 1 50%",
            maxWidth: "50%",
        },
        statsContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
        },
        statItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            flex: "1",
            fontSize: "1.25rem",
            fontWeight: "bold",
        },
        divider: {
            width: "2px",
            height: "100px",
            backgroundColor: "rgba(217, 217, 217, 1)",
        },
    };

    const stats = [
        { title: "TOPICS", value: "10+" },
        { title: "LECTURES", value: "25+" },
        { title: "TTL DURATION", value: "50h" },
        { title: "CERTIFICATES", value: "2" },
        { title: "INSTRUCTORS", value: "8+" },
    ];

    return (
        <section style={styles.section} className="text-black flex flex-wrap">

            <div className=" md:flex">
                <img src="ю/images/people.png" alt="Course" className="w-full h-auto max-h-96 object-cover rounded-lg" />
            </div>


            <div style={styles.content} className="w-full md:w-1/2 px-6">
                <h3 className="text-lg sm:text-xl font-light uppercase text-left">About the Platform</h3>
                <h2 className="text-6xl sm:text-2xl font-bold text-left mt-2 uppercase ">We create a space for effective online learning, bringing together teachers and students.</h2>

                <p className="text-lg sm:text-base leading-relaxed text-left mt-4">
                    International arbitration is paramount for international economic cooperation. Without unswerving means of resolving cross-border differences, many important wealth-creating transactions will either never materialize or come at considerably greater a price. Hence, international arbitration provides significant value in terms of national prosperity and benefits to international business community.
                </p>
                <p className="text-lg sm:text-base leading-relaxed text-left mt-4">
                    A further growth of international arbitration is inevitable.  Yet, arbitration practitioners - who are not necessarily lawyers by education or training - often encounter the necessity to deal with differing legal environments as well as various social and cultural dissimilarities, peculiar to various jurisdictions.  In the meantime, arbitration hearings, with very few exceptions, are confidential, making it rather difficult for those who have not been directly involved in the process to acquire the relevant skill.
                </p>
            </div>

            <div className="flex flex-col items-center w-full">
                <div style={styles.statsContainer} className="flex-wrap">
                    {stats.map((item, index) => (
                        <React.Fragment key={index}>
                            {index !== 0 && <div style={styles.divider} className="hidden sm:block"></div>}
                            <div style={styles.statItem}>
                                <span className="text-2xl sm:text-5xl">{item.value}</span>
                                <span className="text-sm sm:text-base text-black mt-1">{item.title}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>


                <button className="mt-10 w-36 sm:w-1/2 bg-[#402d1d] text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Four;
