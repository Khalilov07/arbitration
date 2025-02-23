import { useState } from "react";
import InputField from "./InputField";

const AccountSecurity = () => {
    const [formData, setFormData] = useState({
        email: "asanalievabegaiym@gmail.com",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Form submitted:", formData);

    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='font-semibold text-xl'>Account </h2>
            <p className="pb-5">Here you can change your account settings and password.</p>

            <InputField
                label='Email address:'
                type='email'
                placeholder='Your email address'
                width="100%"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <h2 className="pt-5 pb-2 font-semibold text-lg">Change password</h2>
            <div className='flex flex-col gap-4'>
                <InputField
                    label='New Password'
                    type='password'
                    placeholder='Password'
                    width="100%"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                />
                <InputField
                    label='Confirm New Password'
                    type='password'
                    placeholder='Password'
                    width="100%"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit" className='text-[#FFF] mt-4 py-2 bg-[#402D1D] rounded-2xl font-semibold w-[70%] sm:w-[30%]'>
                    Update Password
                </button>
            </div>
        </form>
    );
};

export default AccountSecurity;
