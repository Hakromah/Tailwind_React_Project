import React from 'react';
import laptop from '../assets/img/image1.jpg';

export const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
				<div className='flex flex-col justify-center'>
					<p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
					<p className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto, minus incidunt. Quas explicabo delectus nisi
						recusandae! Vitae minima obcaecati itaque similique,
						recusandae, deleniti dicta saepe, nihil molestiae libero
						soluta ex?
					</p>
               <button className=' text-[#00df9a] bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Startted</button>
				</div>
			</div>
		</div>
	);
};
