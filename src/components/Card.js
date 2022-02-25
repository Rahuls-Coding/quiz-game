import React from 'react';

function Card() {
  return (
  <div>
		<div className="flex justify-center mt-10">
			<div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-lg">
				<h1 className="text-center dark:text-white mb-4">Write Todo List</h1>
				<div className="flex space-x-2 p-2 rounded-md bg-slate-400">
					<input type="text" placeholder="Write here..." className="w-full dark:text-white bg-slate-400 outline-none" />
					<button className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold">send</button>
				</div>
			</div>
		</div>
  </div>
  );
}

export default Card;
