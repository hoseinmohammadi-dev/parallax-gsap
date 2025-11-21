'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {


        gsap.to(".hero-img", {
            y: -2000,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
                markers: true,
            }
        });

        gsap.to(".hero-text", {
            x: 700,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
                markers: true,
            }
        });

        gsap.to(".hero-text2", {
            x: -500,
            duration: 0.2,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
                markers: true,
            }
        });

        gsap.to(".hero-text3", {
            x: -300,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
                markers: true,
            }
        });

        gsap.to(".hero-text4", {
            x: 100,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: true,
                markers: true,
            }
        });


    }, []);

    return (
        <div className="wrapper relative w-full h-[1000vh] bg-black text-white overflow-hidden">
            <div className='fixed top-0 left-0 w-full h-full *:w-full *:h-1/4 bg-white *:text-[190px] *:text-black'>

                <div className='flex-center font-[ivyOra]'>
                    <div className='absolute left-90 flex-center gap-7'>
                        <img className='hero-img w-[210px]' src="/img/03.jpg " alt="" />
                        <p className='hero-text'>High</p>
                    </div>
                </div>
                <div className='flex-center font-[ivyOra]'>
                    <div className='absolute left-65 flex-center gap-7'>
                        <p className='hero-text2'>END</p>
                        <img className='hero-img w-[210px]' src="/img/02.jpg " alt="" />
                    </div>
                </div>
                <div className='flex-center gap-7 text-[200px]!'>
                    <img className='hero-img w-[210px]' src="/img/04.jpg" alt="" />
                    <p className='hero-text3'>DIGITAL</p>
                    <img className='hero-img w-[210px]' src="/img/05.jpg" alt="" />
                </div>
                <div className='flex-center gap-7 text-[200px]!'>
                    <p className='hero-text4'>EXPERIENCES</p>
                    <img className='hero-img w-[100px] text-black invert-[0] brightness-0' src="/img/01.svg" alt="" />
                </div>
            </div>

        </div>
    );
}
