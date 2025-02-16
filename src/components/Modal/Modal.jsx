import React, { useState, useEffect, useRef } from "react";

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
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

            // Переключаем фокус на следующий input
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

    const handleResendCode = () => {
        if (canResend) {
            setResendTimer(119);
            setCanResend(false);
            setVerificationCode(["", "", "", ""]); // Сброс кода
            inputRefs.current[0].focus(); // Фокус на первый input
        }
    };

    return (
        <section
            className="px-6 absolute w-full h-full py-10 flex flex-col items-center justify-center text-[#FFF] text-center"
            style={{ background: "rgba(0,0,0,0.5)" }}
        >
            {isModalOpen && (
                <div className="modal bg-white p-6 rounded-xl text-black">
                    <h3>Enter the 4-digit code</h3>
                    <div className="flex gap-2 justify-center mt-4">
                        {verificationCode.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-16 h-16 text-3xl text-center"
                                value={digit}
                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))}
                    </div>
                    <p className="mt-4">
                        Resend code in: {Math.floor(resendTimer / 60)}:
                        {(resendTimer % 60).toString().padStart(2, "0")}
                    </p>
                    <button
                        disabled={!canResend}
                        onClick={handleResendCode}
                        className="mt-2 py-2 px-4 bg-gray-300 rounded"
                    >
                        Resend Code
                    </button>
                </div>
            )}
        </section>
    );
};

export default Modal;
