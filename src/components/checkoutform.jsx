import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { token } = await stripe.createToken(elements.getElement(CardElement));

        const response = await fetch(`${import.meta.env.VITE_API_GATEWAY_URL}/payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token.id }),
        });

        const result = await response.json();
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Pay</button>
        </form>
    );
};

export default CheckoutForm;
