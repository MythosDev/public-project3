import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    try {
      const res = await fetch('/create-intent', {
        method: 'POST',
      });

      const { client_secret: clientSecret } = await res.json();

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      setErrorMessage('Payment failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>Pay</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const PaymentPage = () => {
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;
