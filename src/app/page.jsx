'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {

        // hero start
        gsap.to(".hero-img", {
            y: -1000,
            scale:2.3,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });

        gsap.to(".hero-img2", {
            y: 1000,
            scale:2.3,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });

        gsap.to(".hero-text", {
            x: 700,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });

        gsap.to(".hero-text2", {
            x: -500,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });

        gsap.to(".hero-text3", {
            x: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });

        gsap.to(".hero-text4", {
            x: 100,
            y:200,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });
        // hero end


        // sec1 start
        gsap.to("#sec1", {
            y: 280,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
            }
        });
        // sec1 end


        // sec2 start
        gsap.to("#sec2", {
            borderRadius: "0%",
            scrollTrigger: {
                trigger: "#sec2",
                start: "top 120%",
                scrub: true,
            },
        });
        // sec2 end



    }, []);

    return (
        <div className='h-[400vh]'>

            {/* hero start */}
            <section className='fixed top-0 left-0 w-full h-screen *:w-full *:h-1/4 *:text-[190px] *:text-black'>

                <div className='flex-center font-[ivyOra]'>
                    <div className='absolute left-90 flex-center gap-7'>
                        <img className='hero-img w-[210px]' src="/img/03.jpg " alt="" />
                        <p className='hero-text relative z-10'>High</p>
                    </div>
                </div>
                <div className='flex-center font-[ivyOra]'>
                    <div className='absolute left-65 flex-center gap-7'>
                        <p className='hero-text2'>END</p>
                        <img className='hero-img w-[210px]' src="/img/02.jpg " alt="" />
                    </div>
                </div>
                <div className='flex-center gap-7 text-[200px]!'>
                    <img className='hero-img2 w-[210px]' src="/img/04.jpg" alt="" />
                    <p className='hero-text3'>DIGITAL</p>
                    <img className='hero-img2 w-[210px]' src="/img/05.jpg" alt="" />
                </div>
                <div className='flex-center gap-7 text-[200px]!'>
                    <p className='hero-text4'>EXPERIENCES</p>
                    <img className='hero-text4 w-[100px] text-black invert-[0] brightness-0' src="/img/01.svg" alt="" />
                </div>
            </section>
            {/* hero end */}


            <section className='relative top-[60%] z-10 w-full'>

                {/* sec1 start */}
                <div id='sec1' className='absolute bottom-[105%] left-1/2 -translate-x-1/2 w-[70%] h-[80vh] rounded-full overflow-hidden'>
                    <video className='w-full h-full object-cover' src="/video/01.mp4" autoPlay loop playsInline muted />
                    <div className="absolute z-20 inset-0 pointer-events-none rounded-full shadow-[inset_0_0_60px_#00000085]"></div>
                </div>
                {/* sec1 end */}

                {/* sec2 start */}
                <div id='sec2' className='relative top-50 w-full h-[70vh] bg-black rounded-t-[80%]'>

                </div>
                <div id='sec2' className='relative top-50 w-full h-[70vh] bg-black'>

                </div>
                {/* sec2 end */}



            </section>

        </div>
    );
}
