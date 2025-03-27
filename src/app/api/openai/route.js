import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

export async function POST(req) {
    try {
        const { expression } = await req.json(); //get user input from request
        console.log("Received expression:", expression);

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: `evaluate this mathematical expression: ${expression}. Only return the numeric result, use double precision. If the expression contains different expressions in brackets, you need to evaluate that as math expression too`}],
            max_tokens: 10,
        });
        
        console.log("OpenAI Response:", response);
        
        // Extract the result returned from OpenAI, and trim leading/trailing whitespace

        let result = response.choices[0].message.content.trim();

        // Check if the result is a valid number
        if (!isNaN(result)) {
            // convert the result string to a floating point number
            const num = parseFloat(result);

            // if the number is actually an int, convert it to a plain string
            // otherwise, leave it as is
            result = Number.isInteger(num) ? num.toString() : num.toString();

        }
        
        
        return NextResponse.json({ result});

    } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        return NextResponse.json({error: "Failed to fetch OpenAi repsonse" }, {status: 500 });
    }
}