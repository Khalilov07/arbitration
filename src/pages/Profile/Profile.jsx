import React from 'react';
import { Account, BigLetter, Delete, Logout, SmallLetter } from '../../ui/icons';

const Profile = () => {

    const styles = {
        img: {
            height: "100vh",
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0.61)), url('./images/Profile/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
    }

    return (
        <section style={styles.img} className='px-8'>
            <div className='flex pt-20 gap-6' >
                <div className='flex flex-col bg-[#FFFFFF] px-5 py-6 w-1/4 text-center items-center rounded-xl'>
                    <p className='pb-5 text-xl'>Personal details</p>
                    <img src="./images/Profile/beg.png" className='w-1/3' alt="" />
                    <h2 className='font-semibold text-xl'>Asanalieva Begayim</h2>
                    <p className='flex text-[13px] gap-1 items-center'><SmallLetter /> asanalievabegaiym@gmail.com</p>
                    <div className='flex flex-col w-full gap-2 pt-4'>
                        <button style={{ border: '1px solid #90775a' }} className='flex items-center w-full gap-2 py-2 px-4 rounded-2xl bg-[#C6A982] border-gray-50'><Account /> Personal data</button>
                        <button style={{ border: '1px solid #e9e9e9' }} className='flex items-center w-full gap-2 py-2 px-4 rounded-2xl bg-[#ffffff] border-gray-50'><BigLetter /> Account Security</button>
                        <button style={{ border: '1px solid #e9e9e9' }} className='flex items-center w-full gap-2 py-2 px-4 rounded-2xl bg-[#ffffff] border-gray-50'><Logout /> Log out</button>
                        <button style={{ border: '1px solid #D40000' }} className='flex items-center w-full gap-2 py-2 px-4 rounded-2xl bg-[#ffffff] text-[#D40000]'><Delete /> Delete account</button>
                    </div>
                </div>

                <div className='flex flex-col bg-[#FFFFFF] px-5 py-6 w-2/3 rounded-xl'>
                    <div className=''>
                        <p className='font-semibold text-xl pb-5'>Account information</p>
                        <div className='flex gap-10 items-center'>
                            <img src="./images/Profile/beg.png" className='w-[12%]' alt="" />
                            <div className='flex gap-5 text-[#FFF] w-full'>
                                <button className='py-2 rounded-2xl font-semibold text-base w-[30%] bg-[#402D1D]'>Add photo</button>
                                <button className='py-2 rounded-2xl font-semibold text-base w-[30%] bg-[#C6A982]'>Delete photo</button>
                            </div>
                        </div>
                        <div className='w-full flex gap-5'>
                            <div className='flex flex-col w-[45%] pt-5'>
                                <label htmlFor="">Surname</label>
                                <input
                                    type="text"
                                    style={{ border: '1px solid #e9e9e9' }}
                                    className='w-full rounded-xl py-[8px] px-4 font-semibold'
                                />
                            </div>
                            <div className='flex flex-col w-[45%]'>
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    style={{ border: '1px solid  #e9e9e9' }}
                                    className='w-full'
                                />
                            </div>
                        </div>
                        <h2>payment</h2>
                        <div className='flex gap-5 text-[#FFF] w-full'>
                                <button className='py-2 rounded-2xl font-semibold text-base w-[30%] bg-[#402D1D]'>****    8766</button>
                                <button className='py-2 rounded-2xl font-semibold text-base w-[30%] bg-[#C6A982]'>Add card</button>
                            </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;