import React from 'react';
import Single from '../assets/img/single.png';
import Double from '../assets/img/double.png';
import Triple from '../assets/img/triple.png';

export const Cards = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-white"
						src={Single}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">
						Single User
					</h2>
					<p className="text-center text-4xl font-bold">$160</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">600 GB Storage</p>
						<p className="py-2 border-b mx-8">2 Granted User</p>
						<p className="py-2 border-b mx-8">Send up to 3 GB</p>
					</div>
					<button className=" text-[#000] bg-[#00df9a]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
						Star Trail
					</button>
				</div>


				<div className="w-full items-center shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-transparent"
						src={Double}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">
						Single User
					</h2>
					<p className="text-center text-4xl font-bold">$160</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">600 GB Storage</p>
						<p className="py-2 border-b mx-8">2 Granted User</p>
						<p className="py-2 border-b mx-8">Send up to 3 GB</p>
					</div>
					<button className=" text-[#00df9a] bg-[#000]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
						Star Trail
					</button>
				</div>

				<div className="w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-white"
						src={Triple}
						alt=""
					/>
					<h2 className="text-2xl font-bold text-center py-8">
						Single User
					</h2>
					<p className="text-center text-4xl font-bold">$160</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">600 GB Storage</p>
						<p className="py-2 border-b mx-8">2 Granted User</p>
						<p className="py-2 border-b mx-8">Send up to 3 GB</p>
					</div>
					<button className=" text-[#000] bg-[#00df9a]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
						Star Trail
					</button>
				</div>
			</div>
		</div>
	);
};
