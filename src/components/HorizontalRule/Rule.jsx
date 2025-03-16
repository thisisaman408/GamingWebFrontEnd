import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Rule = () => {
	const finalPath = `M 10 40 Q 350 40 690 40`;
	const svgRef = useRef(null);
	const pathRef = useRef(null);

	useEffect(() => {
		const path = pathRef.current;
		if (path) {
			path.setAttribute('stroke', 'url(#gradient)');
		}
	}, []);

	const handleMouseMove = (event) => {
		if (!svgRef.current || !pathRef.current) return;

		let rect = svgRef.current.getBoundingClientRect();
		let xPos = event.clientX - rect.left;
		let yPos = event.clientY - rect.top;

		let waveOffset = Math.sin(xPos / 30) * 10;
		let path = `M 10 40 Q ${xPos} ${yPos + waveOffset} 690 40`;

		gsap.to(pathRef.current, {
			attr: { d: path },
			duration: 0.15,
			ease: 'power3.out',
		});
	};

	const handleMouseLeave = () => {
		gsap.to(pathRef.current, {
			attr: { d: finalPath },
			duration: 1.2,
			ease: 'elastic.out(1.2, 0.3)',
		});
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div
				id="string"
				className="h-[0px] md:h-[130px] w-full bg-black flex justify-center items-center px-2 -mb-16 pt-10"
				ref={svgRef}>
				<svg
					width="700"
					height="130"
					xmlns="http://www.w3.org/2000/svg"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
							<stop offset="0%" stopColor="#aaa" />
							<stop offset="50%" stopColor="#fff" />
							<stop offset="100%" stopColor="#aaa" />
						</linearGradient>
					</defs>
					<path
						d={finalPath}
						ref={pathRef}
						strokeWidth={2.5}
						fill="transparent"
						strokeLinecap="round"
					/>
				</svg>
			</div>
			<p className="hidden md:font-robert-regular md:bg-transparent md:text-yellow-500 md:mt-8 md:block">
				Hover on me..!
			</p>
		</div>
	);
};

export default Rule;
