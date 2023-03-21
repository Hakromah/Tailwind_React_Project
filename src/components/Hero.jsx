import React from 'react';
import Typed from 'react-typed'; //auto typing

export const Hero = () => {
	return (
		<div className="text-white">
			<div className=" max-w-[900px] mt-[96px] w-full h-screen mx-auto text-center flex-col justify-center">
				<p className="text-[#00df9a] font-bold p-2">
					GROWING WITH DATA ANALYTICS
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Grow With Data.
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold">
						Fast, flexible financing for
					</p>
					<Typed
						className="md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2"
						strings={['BTB', 'BTC', 'SASS', 'HASSAN']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				{/* https://www.npmjs.com/package/react-typed for auto typing on the dom*/}
				<p className="md:text-2xl text-xl font-bold text-gray-500">
					Monitor your data analytics to increase revenue for BTB, BTC &
					SASS
				</p>
				<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 text-black py-4 text-2xl'>Get started</button>
			</div>
		</div>
	);
};
