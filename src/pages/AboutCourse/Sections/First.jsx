import React from 'react';
import { Link } from 'react-router-dom';
import { PlayMusic } from '../../../ui/icons';

const First = () => {

    const styles = {
        img: {
            height: "100vh",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('./images/Main/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        wrapper: {
            height: '100%',
            flexDirection: 'column',
        },
        mainText: {
            letterSpacing: '1.2px',
            lineHeight: '110%',
            fontWeight: 600,
        }
    };

    return (
        <section style={styles.img} className='px-6'>
            <div style={styles.wrapper} className=' flex items-center justify-between relative h-full'>
                <div>
                </div>
                <Link
                    to="https://youtube.com"
                    className="cursor-pointer absolute inset-0 flex justify-center items-center z-10"
                    target="_blank"
                />
                <div className="w-full">
                    <h2 className="text-white text-center text-xl sm:text-xl md:text-xl lg:text-3xl pb-10">
                        Welcome to the Online Arbitration Academy (OAA) dedicated <br /> to providing training in the field of international arbitration.
                    </h2>
                </div>
                <button className="bg-[#402d1d] text-white text-sm font-semibold 2xl lg:w-96 w-80 lg:py-4 sm:py-3 py-3  rounded-lg shadow-lg mb-10">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default First;