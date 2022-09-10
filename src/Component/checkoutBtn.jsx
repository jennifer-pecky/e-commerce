import React from "react";

const CheckoutBtn = ({ text, btnStyle }) => {
    return (
        <>
            <button id="checkout-btn" className={btnStyle}>
                {text}
            </button>
        </>
    );
};

export default CheckoutBtn;

