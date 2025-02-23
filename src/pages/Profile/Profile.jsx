import React, { useState, useEffect } from 'react'
import ProfileSidebar from './components/ProfileSideBar';
import PersonalData from './components/PersonalData';
import AccountSecurity from './components/AccountSecurity';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personalData');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='px-8' style={{ height: '100vh', backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0.61)), url('./images/Profile/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-col md:flex-row pt-20 gap-6'>
                {(!isMobile || activeTab === null) && <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />}
                {activeTab && isMobile && (
                    <button className='mb-4 py-2 px-4 bg-gray-300 rounded-xl' onClick={() => setActiveTab(null)}>⬅ Back</button>
                )}
                {(!isMobile || activeTab) && (
                    <div className='flex flex-col bg-[#FFFFFF] px-5 py-6 md:w-2/3 rounded-xl w-full'>
                        {activeTab === 'personalData' && <PersonalData />}
                        {activeTab === 'accountSecurity' && <AccountSecurity />}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Profile