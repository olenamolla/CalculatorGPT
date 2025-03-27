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
            messages: [
                {
                    role: "system",
                    content: `You are a calculator. Your job is to evaluate mathematical expressions exactly as written. 
        - Follow strict mathematical rules, including operator precedence and parentheses.
        - Do not infer or guess intent — use the expression as-is.
        - Return only the final numeric result with no units, explanation, or formatting.
        - Do not simplify or re-write the expression.`
                },
                {
                    role: "user",
                    content: `Evaluate this expression: ${expression}
        
        Examples:
        (6 * 6) - 6 + (3 * 3) = 39
        (9 * 2) + 2 - (30 / 2) = 5
        (4 + 5) * (6 - 3) = 27
        10 + 3 * 4 = 22
        2^3 = 8
        (2^3)^2 = 64
        5 + 7 * (3 + 1) = 33
        
        Now, return only the numeric result for this one: ${expression}`
                }
            ],
            max_tokens: 100,
        });
        
        console.log("OpenAI Response:", response);
        
        // Extract the result returned from OpenAI, and trim leading/trailing whitespace

        let result = response.choices[0].message.content.trim();
        console.log("Raw GPT result:", result);

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