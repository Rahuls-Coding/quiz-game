import React from 'react';

function Card() {
  return (
  <div className="bg-[#131828] text-center grid justify-items-center items-center h-screen">
	  <div class=" max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-[#30374E]"></div>
		<div class=" max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-[#30374E]">
				<div class="px-6 pt-8 py-3">
					<h1 class=" w-335 h-101 text-xl font-semibold text-gray-800 dark:text-white">When was the industrial revolution born?</h1>
					<div className = "flex justify-center p-6 ">
						<input type="text" id="small-input" className="block p-2 h-11 w-70  rounded-lg border  sm:text-md  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your answer..."/>
					</div>
					
				</div>
		</div>
  </div>
	
  );
}

export default Card;
