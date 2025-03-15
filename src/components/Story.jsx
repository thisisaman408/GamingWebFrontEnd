// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import RoundedCorners from './RoundedCorners';
gsap.registerPlugin(ScrollTrigger);
const Story = () => {
	const frameRef = useRef('null');
	const handleMouseLeave = () => {
		const element = frameRef.current;
		gsap.to(element, {
			duration: 0.3,
			rotateX: 0,
			rotateY: 0,
			ease: 'power1.inOut',
		});
	};

	// useGSAP(() => {
	// 	const clipAnimation = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: `.story-img-container`,
	// 			start: 'top-=100 top',
	// 			end: 'bottom center',
	// 			scrub: 1,
	// 			pin: true,
	// 			pinSpacing: true,
	// 			markers: true,
	// 		},
	// 	});
	// 	clipAnimation.to(`.story-img-mask`, {
	// 		transform: 'scale(-1)',
	// 		ease: 'power1.inOut',
	// 		duration: 0.31,
	// 	});
	// });
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const element = frameRef.current;
		if (!element) return;
		const rect = element.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * 10;
		const rotateY = ((x - centerX) / centerX) * -10;

		gsap.to(element, {
			duration: 0.3,
			rotateX,
			rotateY,
			transformPerspective: 500,
			ease: 'power1.inOut',
		});
	};
	return (
		<section className="min-h-dvh w-screen bg-black text-blue-50">
			<div className="flex size-full flex-col items-center py-10 pb-24 ">
				<p className="font-general text-sm uppercase  md:text-[10px] ">
					the multiversal ip world
				</p>
				<div className="relative size-full">
					<AnimatedTitle
						title={`The Story of<br/>a Hidden Realm`}
						sectionId="#story"
						containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
					/>
					<div className="story-img-container">
						<div className="story-img-mask">
							<div className="story-img-content">
								<img
									onMouseLeave={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseEnter={handleMouseLeave}
									onMouseMove={handleMouseMove}
									ref={frameRef}
									src="/img/entrance.webp"
									alt="entrance"
									className="object-contain"
								/>
							</div>
						</div>
						<RoundedCorners />
					</div>
				</div>

				<div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
					<div className="h-full flex w-fit flex-col items-center md:items-start">
						<p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start ">
							I don't know what to say. I'm just a placeholder text. Fuck
							yourself before bitching about me, okay? I hope you got it, and
							you will never even try to mess with me. FUCK YOU!
						</p>
						<Button
							id={`realm-buttom`}
							title={`discover prologue`}
							containerClass="mt-5"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
