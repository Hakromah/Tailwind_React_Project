import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="flex justify-between items-center h-24 w-[100%] mx-auto bg-green-300 px-4 text-white">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
			<ul className="hidden md:flex">
				<li className="p-4 hover:border-b cursor-pointer">Home</li>
				<li className="p-4 hover:border-b cursor-pointer">Company</li>
				<li className="p-4 hover:border-b cursor-pointer">Resources</li>
				<li className="p-4 hover:border-b cursor-pointer">Contact</li>
			</ul>

			{/* Display Menu on Tablet Mode */}
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<ul
				className={
					nav
						? 'fixed left-0 top-24 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'fixed left-[-100%]'
				}
			>
				<li className="p-4 border-b border-gray-600 hover:border-b cursor-pointer">
					Home
				</li>
				<li className="p-4 border-b border-gray-600 hover:border-b cursor-pointer">
					Company
				</li>
				<li className="p-4 border-b border-gray-600 hover:border-b cursor-pointer">
					Resources
				</li>
				<li className="p-4 border-b border-gray-600 hover:border-b cursor-pointer">
					Contact
				</li>
			</ul>
		</div>
	);
};
