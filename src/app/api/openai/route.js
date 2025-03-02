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
            messages: [{ role: "user", content: `evaluate this mathematical expression: ${expression}. Only return the numeric result, use double precision.`}],
            max_tokens: 10,
        });
        
        console.log("OpenAI Response:", response);
        
        return NextResponse.json({ result: response.choices[0].message.content.trim() });
    } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        return NextResponse.json({error: "Failed to fetch OpenAi repsonse" }, {status: 500 });
    }
}