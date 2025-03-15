import React, { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
	const [transformStyle, setTransformStyle] = useState('');
	const itemRef = useRef(null);

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();
		const relx = (e.clientX - left) / width;
		const rely = (e.clientY - top) / height;

		const tiltX = (rely - 0.5) * 10;
		const tiltY = (relx - 0.5) * -10;

		const newTransformStyle = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
		setTransformStyle(newTransformStyle);
	};
	const handleMouseLeave = () => {
		setTransformStyle('');
	};

	return (
		<div
			className={`bento-tilt ${className}`}
			ref={itemRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform: transformStyle }}>
			{children}
		</div>
	);
};

const BentoCard = ({ src, title, description }) => {
	return (
		<div className="relative size-full">
			<video
				src={src}
				loop
				muted
				autoPlay
				className="absolute left-0 top-0 size-full object-cover object-center"
			/>

			<div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
				<div>
					<h1 className="bento-title special-font">{title}</h1>

					{description && (
						<p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
					)}
				</div>
			</div>
		</div>
	);
};

const Feature = () => {
	return (
		<section className="bg-black pb-52">
			<div className="container mx-auto px-3 md:px-10">
				<div className="px-10 py-32">
					<p className="font-circular-web text-lg text-blue-50">
						Into the Metagame Layer
					</p>

					<p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
						I am the best developer in the entire multiverse,
						<br /> Either suck it or trust it you bitch mother fucker. <br />I
						am going to be a billioniore one day, for sure. My dreams are too
						big for my neighbourhood to handle. I might be late for many things,
						but I will not lose hope. I am going to be so I SHALL become a
						billioniore.
					</p>
				</div>

				<BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
					<BentoCard
						src="videos/feature-1.mp4"
						title={
							<>
								radia<b>n</b>
								<b>t</b>
							</>
						}
						description="A wow website which uses a lot of things for example react-use for getting current y scrollypoint of user, gsap for cool animations(free ones ofcourse). I am gonna add some svg's too here, to make it look amazing, oh yes I should."
					/>
				</BentoTilt>
				<div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
					<BentoTilt className="bento-tilt_1 row-span-1  md:!col-span-1 md:!row-span-2">
						<BentoCard
							src="videos/feature-2.mp4"
							title={
								<>
									zig<b>m</b>a
								</>
							}
							description={`I'm a sigma boy, in the sigma world, life fantastic, it's amazing ,i can make money, i can make well fortune`}
						/>
					</BentoTilt>
					<BentoTilt className="bento-tilt_1 row-span-1 ms-20 md:!col-span-1 md:!ms-0">
						<BentoCard
							src={`videos/feature-3.mp4`}
							title={
								<>
									n<b>e</b>xus
								</>
							}
							description={`
                            I am the best developer in the entire multiverse,
                            Either suck it or trust`}
						/>
					</BentoTilt>
					<BentoTilt className="bento-tilt_1 me-20  md:!col-span-1 md:!me-0">
						<BentoCard
							src={`videos/feature-4.mp4`}
							title={
								<>
									a<b>z</b>ul
								</>
							}
							description={`
                            This is the best website in the entire multiverse,
                            Either suck it or trust it`}
						/>
					</BentoTilt>
					<BentoTilt className="bento-tilt_2 col-span-2 md:!col-span-1">
						<div className="flex size-full flex-col justify-between p-5 bg-violet-300">
							<h1 className="bento-title special-font max-w-64 text-black">
								M<b>o</b>re C<b>u</b>ming S<b>o</b>
								<b>o</b>n!
							</h1>
							<TiLocationArrow className="m-5 scale-[5] self-end" />
						</div>
					</BentoTilt>

					<BentoTilt className="bento-tilt_2">
						<video
							src="videos/feature-5.mp4"
							loop
							muted
							autoPlay
							className="size-full object-cover object-center"></video>
					</BentoTilt>
				</div>
			</div>
		</section>
	);
};

export default Feature;
