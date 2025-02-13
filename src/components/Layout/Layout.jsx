import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Burger } from '../../ui/icons';
import { FaWhatsapp, FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Layout = () => {

    const [active, setActive] = useState("/");
    const [menuOpen, setMenuOpen] = useState(false)
    const links = ["Main", "About course", "Certification", "About OAA", "Community"];

    return (
        <>
            <header className="">
                <nav className="flex justify-between items-center px-6 py-1 relative  bg-white">
                    <div className='flex items-center'>
                        <div className="flex items-center ">
                            <img width="100px" src="./images/Header/logo.png" alt="Logo" className='absolute left-0 ml-3' style={{ top: "-6px" }} />
                        </div>

                        <ul className={`absolute top-16 left-0 w-full ml-28 bg-white p-6 shadow-md transform ${menuOpen ? "block" : "hidden"} md:flex md:static md:p-0 md:shadow-none md:space-x-6 md:w-auto md:bg-transparent ml-30`}>
                            {links.map((link) => (
                                <li key={link} className="md:inline-block block py-2">
                                    <Link
                                        to={`/${link.toLowerCase()}`}
                                        className={`text-black text-lg relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${active === link ? "after:scale-x-100" : ""}`}
                                        onClick={() => {
                                            setActive(link);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link to="/login" className="text-black text-lg hover:underline">Login</Link>
                        <span className="mx-3">|</span>
                        <Link to="/signin" className="text-black text-lg hover:underline">Sign in</Link>
                        <button className="ml-4 text-black text-xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <Burger />
                        </button>
                    </div>
                </nav>
            </header>

            <Outlet />

            <footer className="bg-[#402d1d] text-white py-12 px-6 sm:px-12">
                <div className="max-w-5xl  grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Pages</h3>
                        <ul className="space-y-2">
                            {["Home", "About", "Courses", "Blog", "Contact"].map((page, index) => (
                                <li key={index} className="hover:text-[#c6a982] transition">
                                    <a href="#">{page}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contacts</h3>
                        <div className="text-[#c6c0bb] text-sm">
                            <p className="mb-1">Phone number</p>
                            <p className="text-white text-lg font-medium">+ (2) 578-345-789</p>
                        </div>
                        <div className="text-[#c6c0bb] text-sm mt-4">
                            <p className="mb-1">E-mail</p>
                            <p className="text-white text-lg font-medium">info@academy.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                        <div className="space-y-2 flex flex-wrap items-end gap-5">
                            {[
                                { icon: <FaWhatsapp />, name: "WhatsApp" },
                                { icon: <FaTelegram />, name: "Telegram" },
                                { icon: <FaInstagram />, name: "Instagram" },
                                { icon: <FaFacebook />, name: "Facebook" },
                                { icon: <FaYoutube />, name: "YouTube" }
                            ].map((social, index) => (
                                <div key={index} className="flex items-start justify-center gap-2 text-sm  hover:text-[#c6a982] transition cursor-pointer">
                                    <span className="text-2xl">{social.icon}</span>
                                    <span>{social.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Layout;