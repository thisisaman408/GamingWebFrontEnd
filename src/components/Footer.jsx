import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
const links = [
	{
		href: `https://www.github.com`,
		icon: <FaGithub />,
	},
	{
		href: `https://www.instagram.com/nutassa`,
		icon: <FaInstagram />,
	},
];
const Footer = () => {
	return (
		<footer className="w-screen bg-violet-300 py-4 text-black">
			<div className="container mx-auto flex flex-col  justify-between items-center gap-4 px-4 md:flex-row">
				<p className="text-center text-sm md:text-left">
					©Natasha 2025. All Rights Reserved
				</p>
				<div className="flex justify-center gap-4  md:justify-start">
					{links.map((link, index) => (
						<a
							href={link.href}
							key={index}
							target="_blank"
							rel={`noopener noreferrer`}
							className="text-black transition-colors duration-500 ease-in-out hover:text-white">
							{link.icon}
						</a>
					))}
				</div>
				<a
					href="#privacy-policy"
					className="text-center text-sm md:text-right hover:underline">
					Privacy Policy
				</a>
			</div>
		</footer>
	);
};

export default Footer;
