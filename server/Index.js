import express from "express";

const app = express();
const port = 8081; //add your port here
const PUBLISHABLE_KEY = "pk_test_51N039nSCZ6AmyhC6k28I3v8t6hyeLrhAr039bb97W5R5GzoAbrKkHFSv1RcZsRAj8xr0hVsJ3K5RAwID0jakwzS200sOw1pjtQ";
const SECRET_KEY = "sk_test_51N039nSCZ6AmyhC6DYJkdpHCFJ8nZX2xxwmNhx5WIgubzv88WDK8mbF94ZYfDbnkMlk1Qz9erdViR8lSaTSE9oFZ00egy6aPzq";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});