import { urlFor } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);


export async function POST(request) {
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);
  try {
    const {Items} = await request.json();
    console.log(Items)

     const extractingItems = await Items.map((item)=> ({
        quantity: item.quantity,
        price_data:{
            currency: "usd",
            unit_amount: item.price,
            product_data:{
                name: item.name,
                description: item.details,
                images: [urlFor(item.image[0]).url()]
            }
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: extractingItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/checkout",
    })
   return NextResponse.json({ id: session.id},{message: "OK"},{status: 201});
  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
