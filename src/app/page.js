'use client'

import { useState } from 'react';



export default function Page() {

const [expression, setExpression] = useState(""); // To store the user input

  console.log("Re-rendered! Expression:", expression);

  //Updates expression when button is clicked
  const handleClick = async (value) => {
    console.log("Clicked:", value); // Debugging log
    
    if (value === "=") {

      try {
        const response = await fetch("/api/openai/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( {expression} ), // send user input
        });
        const data = await response.json();  // get the evaluated result
        setExpression(data.result || "Error"); //Update input field with result
      } catch (error) {
        console.error("API error:", error);
        setExpression("Error");
      }

    } else if (value === "C"){
      setExpression(""); 
    } else if (["sin", "cos", "tan", "log", "exp"].includes(value)){
      setExpression((prev) => prev + value + "("); 

    } else {
      setExpression((prev) => prev + value); // Append clicked value to expression
    }
};

  const clearInput = () => {
    setExpression("");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-300">
      <div className="w-96 h-[500px] p-6 bg-white scale-150 shadow-lg rounded-lg">
        Calculator Box
        
        <input
          id="calculator"
          type="text"
          value = {expression}
          readOnly
          placeholder="0"
          className="w-full text-right text-3xl text-white p-3 mb-4 border mt-[-40px] rounded-md bg-black focus:outline-none"
          >
        </input>

        <div className="grid grid-cols-4 scale-90 gap-2 mt-4 mt-[-20px]">

          <button onClick={() => handleClick("sin")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">sin</button>
          <button onClick={() => handleClick("cos")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">cos</button>
          <button onClick={() => handleClick("tan")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">tan</button>
          <button onClick={clearInput} className="p-3 bg-red-400 text-black rounded-md text-xl font-bold hover:bg-red-500">C</button>

          <button onClick={() => handleClick("log")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">log</button>
          <button onClick={() => handleClick("exp")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">exp</button>
          <button onClick={() => handleClick("^")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">^</button>

          <div className="flex col-span-1 gap-1">
          <button onClick={() => handleClick("(")} className="w-1/2 p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">(</button>
          <button onClick={() => handleClick(")")} className="w-1/2 p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">)</button>
          </div>

          <button onClick={() => handleClick("7")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">7</button>
          <button onClick={() => handleClick("8")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">8</button>
          <button onClick={() => handleClick("9")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">9</button>
          <button onClick={() => handleClick("/")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">/</button>
          
          <button onClick={() => handleClick("4")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">4</button>
          <button onClick={() => handleClick("5")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">5</button>
          <button onClick={() => handleClick("6")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">6</button>
          <button onClick={() => handleClick("*")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">*</button>

  
          <button onClick={() => handleClick("1")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">1</button>
          <button onClick={() => handleClick("2")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">2</button>
          <button onClick={() => handleClick("3")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">3</button>
          <button onClick={() => handleClick("-")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">-</button>

  
          <button onClick={() => handleClick("0")} className="col-span-2 p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">0</button>
          <button onClick={() => handleClick(".")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">.</button>
          <button onClick={() => handleClick("+")} className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">+</button>

  
          <button onClick={() => handleClick("=")} className="col-span-4 p-3 bg-green-500 text-black rounded-md text-xl font-bold hover:bg-green-600">=</button>
        </div>
      </div>

    </div>
  )
}

