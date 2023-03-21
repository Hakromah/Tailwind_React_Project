import React from 'react';
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGitSquare,
	FaInstagram,
	FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
			<div>
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
					ab at iure ad nulla, minima architecto voluptates dolores atque
					dolor, eveniet excepturi quia vel! Earum autem vitae doloremque
					eligendi consectetur.
				</p>
				<div className="flex justify-between md:w-[75%] my-6">
					<FaFacebookSquare size={30} className="cursor-pointer" />
					<FaInstagram size={30} className="cursor-pointer" />
					<FaTwitterSquare size={30} className="cursor-pointer" />
					<FaGitSquare size={30} className="cursor-pointer" />
					<FaDribbbleSquare size={30} className="cursor-pointer" />
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between mt-6">
				<div>
					<h6 className="font-medium text-gray-400">Solutions</h6>
					<lu>
						<li className='py-2 text-sm list-none'>Analytics</li>
						<li className='py-2 text-sm list-none'>Marketing</li>
						<li className='py-2 text-sm list-none'>Commerce</li>
						<li className='py-2 text-sm list-none'>Insights</li>
					</lu>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Support</h6>
					<lu>
						<li className='py-2 text-sm list-none'>Pricing</li>
						<li className='py-2 text-sm list-none'>Dcomentationg</li>
						<li className='py-2 text-sm list-none'>Guides</li>
						<li className='py-2 text-sm list-none'>API Students</li>
					</lu>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Company</h6>
					<lu>
						<li className='py-2 text-sm list-none'>About</li>
						<li className='py-2 text-sm list-none'>Blog</li>
						<li className='py-2 text-sm list-none'>Jobs</li>
						<li className='py-2 text-sm list-none'>Press</li>
						<li className='py-2 text-sm list-none'>Careers</li>
					</lu>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Ligal</h6>
					<lu>
						<li className='py-2 text-sm list-none'>Claim</li>
						<li className='py-2 text-sm list-none'>Policy</li>
						<li className='py-2 text-sm list-none'>Termse</li>
					</lu>
				</div>
			</div>
		</div>
	);
};
