import InputField from "./InputField";

const PersonalData = () => {
    return (
        <div>
            <p className='font-semibold text-xl pb-5'>Account information</p>
            <div className='lg:flex sm:flex gap-10 items-center'>
                <img src="./images/Profile/beg.png" className='w-[50%] sm:w-[12%] m-auto' alt="" />
                <div className='flex gap-2 pt-2 sm:gap-5 text-[#FFF] w-full'>
                    <button className='py-2 rounded-xl sm:rounded-2xl font-semibold text-base w-[50%] sm:w-[30%] bg-[#402D1D]'>Add photo</button>
                    <button className='py-2 rounded-xl  sm:rounded-2xl font-semibold text-base w-[50%] sm:w-[30%] bg-[#C6A982]'>Delete photo</button>
                </div>
            </div>
            <div className='w-full lg-flex sm:flex gap-5 pt-5'>
                <InputField label='Surname' width={"100%"} />
                <InputField label='Name' width={"100%"} />
            </div>
            <h2 className="pt-5 pb-2">Payment</h2>
            <div className='flex gap-2 sm:gap-5 text-[#FFF] w-full'>
                <button className='py-2 rounded-xl sm:rounded-2xl font-semibold text-base w-[50%] sm:w-[30%] bg-[#C6A982]'>VISA</button>
                <button className='py-2 rounded-xl  sm:rounded-2xl font-semibold text-base w-[50%] sm:w-[30%] bg-[#402D1D]'>Add card</button>
            </div>

            {/* <button>Save information</button> */}

        </div>
    );
};

export default PersonalData