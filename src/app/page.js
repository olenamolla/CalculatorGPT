export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-300">
      <div className="w-96 h-[450px] p-6 bg-white scale-150 shadow-lg rounded-lg">
        Calculator Box
        
        <input
          id="calculator"
          type="text"
          placeholder="0"
          className="w-full text-right text-3xl p-3 mb-4 border mt-[-40px] rounded-md bg-black focus:outline-none"
          >
        </input>

        <div className="grid grid-cols-4 scale-90 gap-2 mt-4 mt-[-20px]">

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">sin</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">cos</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">tan</button> 
          <button className="p-3 bg-red-400 rounded-md text-xl text-center font-bold hover:bg-red-500">C</button>  

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">log</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">exp</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">^</button> 
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">/</button> 

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">7</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">8</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">9</button>

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">x</button>

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">4</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">5</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">6</button>

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">-</button>

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">3</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">2</button>
          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-gray-600">1</button>

          <button className="p-3 bg-black text-white rounded-md text-xl text-center font-bold hover:bg-blue-600">+</button>

          <button className="col-span-2 p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-gray-600">0</button>
          <button className="p-3 bg-black text-white rounded-md text-xl font-bold hover:bg-blue-600">.</button>
          <button className="p-3 bg-green-500 text-black rounded-md text-xl font-bold hover:bg-green-600">=</button>
        </div>
      </div>

    </div>
  )
}

