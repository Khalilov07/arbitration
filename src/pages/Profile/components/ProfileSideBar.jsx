import SidebarButton from "./SidebarButton";

import { Logout, Account ,SmallLetter, Delete, BigLetter } from '../../../ui/icons'

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
    return (
        <div className='flex flex-col bg-[#FFFFFF] px-5 py-6 md:w-1/4 text-center items-center rounded-xl'>
            <p className='pb-5 text-xl'>Personal details</p>
            <img src="./images/Profile/beg.png" className='w-1/3' alt="Profile" />
            <h2 className='font-semibold text-xl'>Asanalieva Begayim</h2>
            <p className='flex text-[13px] gap-1 items-center'><SmallLetter /> asanalievabegaiym@gmail.com</p>
            <div className='flex flex-col w-full gap-2 pt-4'>
                <SidebarButton active={activeTab === 'personalData'} onClick={() => setActiveTab('personalData')} icon={<Account />} text='Personal data' />
                <SidebarButton active={activeTab === 'accountSecurity'} onClick={() => setActiveTab('accountSecurity')} icon={<BigLetter />} text='Account Security' />
                <SidebarButton icon={<Logout />} text='Log out' />
                <SidebarButton icon={<Delete />} text='Delete account' textColor='#D40000' borderColor='#D40000' />
            </div>
        </div>
    );
};


export default ProfileSidebar