import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const Top = () => {
        document.documentElement.scrollTop = 0;
    };
    const [backTop, setbackTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > 400) {
                setbackTop(true);
            } else {
                setbackTop(false);
            }
        });
    });
    return (
        <>
            <div >
                <button
                    className={
                        backTop
                            ? "w_5  d-flex justify-content-center align-items-center position-fixed bottom-0 end-0 me-3 me-sm-5 mb-3 mb-sm-5 p-4 rounded-5 resume_btn"
                            : "d-none"
                    }
                    onClick={() => Top()}
                >
                    <FaArrowUp className="top-btn--icon uparrow" />

                </button>
             
            </div>
        </>
    );
};

export default BackToTop;
