"use client";

// components/payments/RazorpayButton.tsx
//
// React version of the Razorpay embed:
//   <form><script src="https://checkout.razorpay.com/v1/payment-button.js"
//          data-payment_button_id="pl_XXXX" async></script></form>
//
// A plain <script> tag inside JSX is NOT executed by React, so the script is
// created and appended in an effect. Razorpay's script finds the <form> it sits
// in and replaces itself with the pay button.

import { useEffect, useRef } from "react";

const RAZORPAY_SRC = "https://checkout.razorpay.com/v1/payment-button.js";

type Props = {
  /** The Payment Button ID from the Razorpay dashboard, e.g. "pl_TyTCVNq8WijDYf". */
  paymentButtonId: string;
  /** Optional classes for the <form> wrapper (layout / spacing). */
  className?: string;
};

export default function RazorpayButton({ paymentButtonId, className }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form || !paymentButtonId) return;

    // Start clean (React Strict Mode runs effects twice in development).
    form.innerHTML = "";

    const script = document.createElement("script");
    script.src = RAZORPAY_SRC;
    script.async = true;
    script.setAttribute("data-payment_button_id", paymentButtonId);
    form.appendChild(script);

    return () => {
      form.innerHTML = "";
    };
  }, [paymentButtonId]);

  return (
    <div className={className}>
      {/* Razorpay renders its button inside this form. */}
      <form ref={formRef} aria-label="Pay securely with Razorpay" />
      <noscript>
        <p className="text-sm text-slate-600">
          Please enable JavaScript to pay online, or contact us at info@anutattvafoundation.in.
        </p>
      </noscript>
    </div>
  );
}
