import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {

    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false)
    const links = ["Main", "About course", "Certification", "About OAA", "Community"];

    return (
        <>
            <header className="">
                <nav className="flex justify-between items-center px-6 py-1 relative  bg-white">
                    <div className='flex items-center'>
                        <div className="flex items-center ">
                            <img width="100px" src="./images/header/logo.png" alt="Logo" className='absolute left-0 ml-3' style={{ top: "-6px" }} />
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
                            ☰
                        </button>
                    </div>
                </nav>
            </header>

            <Outlet />

            <footer>
                Footer
            </footer>
        </>
    );
};

export default Layout;