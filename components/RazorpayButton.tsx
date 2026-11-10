'use client';

import React, { useEffect, useRef } from 'react';

const RazorpayButton = () => {
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_TyTCVNq8WijDYf'); // Replace with your real ID
    script.async = true;

    if (buttonContainerRef.current) {
      buttonContainerRef.current.innerHTML = ''; // Clear previous if rerendered
      buttonContainerRef.current.appendChild(script);
    }
  }, []);

  return <div ref={buttonContainerRef}></div>;
};

export default RazorpayButton;
