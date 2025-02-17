import React, { useState, useRef, useEffect } from "react";
import ModalForgot from "./ModalForgot";

const ModalFlow = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNextStep = () => setStep(step + 1);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(119);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (isModalOpen && resendTimer > 0) {
            const timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        if (resendTimer === 0) {
            setCanResend(true);
        }
    }, [isModalOpen, resendTimer]);

    const handleCodeChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);

            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        handleNextStep()
    };

    const handleResendCode = () => {
        if (canResend) {
            setResendTimer(119);
            setCanResend(false);
            setVerificationCode(["", "", "", ""]);
            inputRefs.current[0].focus();
        }
    };



    return (
        <ModalForgot isOpen={isOpen} onClose={onClose}>

            {step === 1 && (
                <>
                    <h2>Reset Password</h2>
                    <p>Enter your email address</p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                    />
                    <button className="bg-blue-500 text-white p-2 mt-4 w-full" onClick={handleNextStep}>
                        Send Code
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="flex flex-col">
                        <h2 className="text-3xl">Identity verification</h2>
                        <p className="text-sm pt-4 pb-6 text-[#1E1E1E] opacity-80">
                            A code has been sent to your email. It is needed to <br />
                            confirm your identity.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {verificationCode.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-1/4  h-20 sm:h-24 text-4xl text-center rounded-lg"
                                value={digit}
                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                style={{
                                    boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.2)",
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-4">
                            <span className="opacity-50">Request again in</span>{" "}
                            {Math.floor(resendTimer / 60)}:{(resendTimer % 60).toString().padStart(2, "0")}
                        </p>
                        <button disabled={!canResend} onClick={handleResendCode} className="py-2 opacity-50">
                            Request again
                        </button>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="py-4 bg-[#402D1D] text-[#FFF] rounded-xl mt-5"
                        >
                            Recover password
                        </button>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <h2>Set a New Password</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full"
                    />
                    <button className="bg-blue-500 text-white p-2 mt-4 w-full" onClick={onClose}>
                        Change Password
                    </button>
                </>
            )}
        </ModalForgot>
    );
};

export default ModalFlow;
