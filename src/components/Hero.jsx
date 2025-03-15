import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
//important to register the plugin
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
	//to see which video is playing, and to set a new video to play
	const [currentIndex, setsCurrentIndex] = useState(1);
	//to see if the user has clicked on the mini video player, so that render the function to play the video which is shown in the mini video player
	const [hasClicked, setHasClicked] = useState(false);
	const [isLoading, setisLoading] = useState(true); //simple loading state to to show a loading spinner

	const [loadedVideos, setLoadedVideos] = useState(0);

	const totalVideos = 4;
	const nextVDRef = useRef(null);

	const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
	const handleVideoLoad = () => {
		setLoadedVideos((prev) => prev + 1);
	};
	const handleMiniVDClick = () => {
		setHasClicked(true);
		setsCurrentIndex(upcomingVideoIndex);
	};
	//javascript animation library
	useEffect(() => {
		if (loadedVideos === totalVideos - 1) {
			setisLoading(false);
		}
	}, [loadedVideos]);

	useGSAP(
		() => {
			//means, if we want to enter in the world of a video
			if (hasClicked) {
				gsap.set('#next-video', { visibility: 'visible' });

				gsap.to('#next-video', {
					// this is for 2 dimensions, transformOrigin: x-axis y-axis,
					transformOrigin: 'center center',
					scale: 1,
					duration: 1,
					height: '100%',
					width: '100%',
					ease: 'power1.inOut',
					onStart: () => nextVDRef.current.play(),
				});

				gsap.from('#current-video', {
					transformOrigin: 'center center',
					scale: 0,
					duration: 1.5,
					ease: 'power1.inOut',
				});
			}
		},
		{ dependencies: [currentIndex], revertOnUpdate: true }
	);

	useGSAP(() => {
		gsap.set('#video-frame', {
			clipPath: 'polygon(14% 0, 72% 0, 90% 90%, 0 100%)',
			borderRadius: '0% 0% 40% 10%',
		});
		gsap.from('#video-frame', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			borderRadius: '0% 0% 0% 0%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '#video-frame',
				start: 'center center',
				end: 'bottom center',
				scrub: true,
			},
		});
	}, []);

	const getvideoSrc = (index) => `videos/hero-${index}.mp4`;
	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			{isLoading && (
				<div className="flex-center absolute z-[100] overflow-hidden h-dvh w-screen bg-violet-50">
					<div className="three-body">
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
					</div>
				</div>
			)}
			<div
				id="video-frame"
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
				<div>
					<div className="mask-clip-path absolute-center absolute z-50  size-64 cursor-pointer overflow-hidden rounded-lg">
						{/* why +1? because, whatever the video is playing in the mini video player, that should be the next video which will be playing in the background. */}
						<div
							onClick={handleMiniVDClick}
							className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
							<video
								src={getvideoSrc(upcomingVideoIndex)}
								ref={nextVDRef}
								loop
								muted
								id="current-video"
								className="size-64 origin-center scale-150 object-cover object-center"
								onLoadedData={handleVideoLoad}
							/>
						</div>
					</div>
					<video
						src={getvideoSrc(currentIndex)}
						ref={nextVDRef}
						loop
						muted
						id="next-video"
						className="absolute-center invisible absolute z-20 size-64 origin-center object-cover object-center"
						onLoadedData={handleVideoLoad}
					/>

					<video
						src={getvideoSrc(
							currentIndex === totalVideos - 1 ? 1 : currentIndex
						)}
						loop
						muted
						autoPlay
						className="absolute left-0 top-0 size-full object-cover object-center"
						onLoadedData={handleVideoLoad}
					/>
				</div>
				<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 ">
					G<b>a</b>ming
				</h1>
				<div className="absolute top-0 left-0 size-full z-40">
					<div className="mt-24 px-5 sm-10">
						<h1 className="special-font hero-heading text-blue-100">
							redefi<b>n</b>e
						</h1>
						<p className="mb-5 max-w-64  font-robert-regular text-blue-100">
							Enter the Metagame Layer <br /> Unleash the Play Economy
						</p>
						<Button
							id="watch-trailer"
							title="Watch Trailer"
							leftIcon={<TiLocationArrow />}
							containerClass="bg-yellow-300 flex-center gap-1"
						/>
					</div>
				</div>
			</div>

			<h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
				G<b>a</b>ming
			</h1>
		</div>
	);
};

export default Hero;
