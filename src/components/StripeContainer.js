import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51J4SXkITN81vldseY9lCFXnfPtH3ljLEsShrOtyChkjhpk4shTKzmsxt5Lf8E0UQ5pgGPoHdKR0sF1IL5uIvLDnM00fvAtF5xZ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm
        successPayment={() => props.successPayment()}
        total={props.total}
      />
    </Elements>
  );
}
