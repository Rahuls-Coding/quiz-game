import React from 'react';

const Card = ({searchField}) => {
  return (

		<div className=" max-w-sm mx-auto overflow-hidden rounded-xl drop-shadow-4xl bg-[#30374E] border-2 border-black">
				<div class="px-6 pt-8 py-3">
					<h1 class=" w-335 h-101 text-xl font-semibold text-gray-800 dark:text-white">When was the industrial revolution born?</h1>
					<div className = "flex justify-center p-6 ">
						<input 
							type="search" 
							id="small-input" 
							className="block p-2 h-12 w-70  rounded-lg sm:text-md  bg-[#4D5264] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " 
							placeholder="Enter your answer..."
							onChange = {searchField}	
						/>
					</div>
					
				</div>
		</div>

	
  );
}

export default Card;
