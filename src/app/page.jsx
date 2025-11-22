'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {

        // all text animation start
        gsap.utils.toArray(".animText").forEach((el) => {
            gsap.fromTo(el,
                {
                    y: 50,
                    opacity: 0,
                    rotationX: 50,
                    rotationY: 50,
                    rotationZ: 10,
                    scale: 0.7,
                    z: 100,
                    transformOrigin: "50% 50%",
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scale: 1,
                    z: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        gsap.fromTo(".animText2",
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".animText2",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // all text animation end



        // hero start
        gsap.fromTo(
            ".hero-text, .hero-text2, .hero-text3, .hero-text4",
            {
                y: 50,
                opacity: 0,
                rotationX: 50,
                rotationY: 50,
                rotationZ: 10,
                scale: 0.7,
                z: 100,
                transformOrigin: "50% 50%",
            },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scale: 1,
                z: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out",
            }
        );


        gsap.to(".hero-img", {
            y: -1000,
            scale: 2.3,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: 2,
            }
        });

        gsap.to(".hero-img2", {
            y: 1000,
            scale: 2.3,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                scrub: 2,
            }
        });

        gsap.to(".hero-text", {
            x: 700,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top -50%",
                scrub: true,
            }
        });

        gsap.to(".hero-text2", {
            x: -500,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top -50%",
                scrub: true,
            }
        });

        gsap.to(".hero-text3", {
            x: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top -50%",
                scrub: true,
            }
        });

        gsap.to(".hero-text4", {
            x: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top -50%",
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
                scrub: 1.5,
            },
        });

        gsap.to(".sec2Text1", {
            x: -100,
            scrollTrigger: {
                trigger: ".sec2Text1",
                start: "top 20%",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        gsap.to(".sec2Text2", {
            x: 75,
            scrollTrigger: {
                trigger: ".sec2Text2",
                start: "top 35%",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        gsap.to(".sec2Text3", {
            x: -50,
            scrollTrigger: {
                trigger: ".sec2Text3",
                start: "top 120%",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        gsap.to(".sec2Shape", {
            x: -1000,
            scrollTrigger: {
                trigger: ".sec2Text3",
                start: "top 50%",
                end: "bottom top",
                scrub: 4,
            }
        });

        gsap.to(".sec2Text4", {
            x: 200,
            scrollTrigger: {
                trigger: ".sec2Text3",
                start: "top 80%",
                scrub: 1.5,
            }
        });

        gsap.to(".sec2Text5", {
            x: -60,
            scrollTrigger: {
                trigger: ".sec2Text4",
                start: "top top",
                scrub: 1.5,
            }
        });
        // sec2 end

        //sec3 start
        const slides = gsap.utils.toArray(".sec3-slide");

        slides.forEach((slide, i) => {
            const overlay = document.createElement("div");
            overlay.style.position = "absolute";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
            slide.appendChild(overlay);


            gsap.to(overlay, {
                opacity: 1,
                scrollTrigger: {
                    trigger: slide,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });


            ScrollTrigger.create({
                trigger: slide,
                start: "top top",
                end: "100%",
                pin: true,
                pinSpacing: true,
                scrub: 2,
            });
        });

        gsap.to(".sec3Img", {
            scale: 1.1,
            scrollTrigger: {
                trigger: ".sec3Img",
                duration: 2,
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })
        gsap.to(".sec3Img2", {
            scale: 1.1,
            scrollTrigger: {
                trigger: ".sec3Img2",
                duration: 2,
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })
        gsap.to(".sec3Img3", {
            scale: 1.1,
            scrollTrigger: {
                trigger: ".sec3Img3",
                duration: 2,
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })
        gsap.to(".sec3Img4", {
            scale: 1.1,
            scrollTrigger: {
                trigger: ".sec3Img4",
                duration: 2,
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })


        gsap.to(".sec3Text", {
            scale: 1.5,
            color: "#f08003",
            scrollTrigger: {
                trigger: ".sec3Text",
                duration: 1.2,
                start: "top top",
                end: "bottom top",
                toggleActions: "play none none reverse",
                scrub: 5,
            }
        })

        gsap.to(".sec3Text2", {
            scale: 1.5,
            color: "#8596ad",
            scrollTrigger: {
                trigger: ".sec3Text",
                duration: 1.2,
                start: "bottom top",
                end: "bottom top",
                toggleActions: "play none none reverse",
                scrub: 5,
            }
        })

        //sec3 end

        //sec4 start
        gsap.to(".sec4about", {
            x: -1000,
            scrollTrigger: {
                trigger: ".sec4about",
                start: "top bottom",
                end: "bottom top",
                scrub: 4,
            }
        });

        gsap.to(".sec4about2", {
            x: 300,
            scrollTrigger: {
                trigger: ".sec4about2",
                start: "top bottom",
                end: "bottom top",
                scrub: 4,
            }
        });
        //sec4 end
    }, []);


    return (
        <div className='h-[400vh]'>

            {/* hero start */}
            <section className='fixed top-0 left-0 w-full h-screen *:w-full *:h-1/4 *:text-[190px] *:text-black leading-none'>

                <div className='flex-center font-[ivyOra]'>
                    <div className='absolute left-90 flex-center gap-7'>
                        <img className='hero-img w-[210px]' src="/img/03.jpg " alt="" />
                        <p className='hero-text relative z-10 mix-blend-overlay brightness-125 saturate-150'>High</p>
                    </div>
                </div>
                <div className='flex-center font-[ivyOra]'>
                    <div className='absolute left-65 flex-center gap-7'>
                        <p className='hero-text2 mix-blend-overlay brightness-125 saturate-150'>END</p>
                        <img className='hero-img w-[210px]' src="/img/02.jpg " alt="" />
                    </div>
                </div>
                <div className='flex-center gap-7 text-[200px]!'>
                    <div className='absolute left-40 flex-center gap-7'>
                        <img className='hero-img2 w-[210px]' src="/img/04.jpg" alt="" />
                        <p className='hero-text3 mix-blend-overlay brightness-125 saturate-150'>DIGITAL</p>
                        <img className='hero-img2 w-[210px]' src="/img/05.jpg" alt="" />
                    </div>
                </div>
                <div className='flex-center gap-7 text-[200px]!'>
                    <div className='absolute left-24 flex-center gap-7'>
                        <p className='hero-text4 mix-blend-overlay brightness-125 saturate-150'>EXPERIENCES</p>
                        <img className='hero-img w-[100px] text-black invert-[0] brightness-0' src="/img/01.svg" alt="" />
                    </div>
                </div>
            </section>
            {/* hero end */}


            {/* sec1 start */}
            <section id='sec1' className='absolute -bottom-[120%] left-1/2 -translate-x-1/2 z-20 w-[70%] h-[80vh] rounded-full overflow-hidden'>
                <video className='w-full h-full object-cover' src="/video/01.mp4" autoPlay loop playsInline muted />
                <div className="absolute z-20 inset-0 pointer-events-none rounded-full shadow-[inset_0_0_60px_#00000085]"></div>
            </section>
            {/* sec1 end */}

            {/* sec2 start */}
            <section className='relative top-[55%] z-10 w-full'>

                <div id='sec2' className='relative top-50 w-full h-[60vh] bg-black rounded-t-[80%]' />

                <section className='relative top-50 w-full h-[450vh] bg-black text-white overflow-hidden leading-none'>
                    {/* part1 start */}
                    <div className='*:relative *:text-[200px] uppercase mb-9'>
                        <p className='animText sec2Text1 left-50 font-[ivyOra]'>We’ll</p>
                        <p className='animText sec2Text2 left-120 font-[ivyOra]'>help you</p>
                        <p className='animText sec2Text3 left-20 '>Stand out</p>
                    </div>
                    {/* part1 end */}


                    {/* part2 start */}
                    <div className='sec2Shape h-[200px] flex gap-2.5 *:w-[195px] *:h-[195px] *:bg-white/10 *:rounded-[100%] *:shrink-0'>
                        <div></div>
                        <div></div>
                        <div className='w-[280px]! bg-white/90! rounded-[50%]!'></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* part2 end */}



                    {/* part3 start */}
                    <div className='*:relative *:text-[160px] uppercase'>
                        <p className='animText sec2Text4 left-40 font-[ivyOra]'>& make all</p>
                        <p className='animText left-15'>your dreams</p>
                        <div className='flex items-start gap-2 animText sec2Text5  left-130'>
                            <p className=' font-[ivyOra]'>Stand out</p>
                            <img className='w-[55px] mt-6' src="/img/07.svg" alt="" />
                        </div>
                    </div>

                    <div className='flex gap-2.5 items-start ml-20 my-20'>
                        <img className='w-[15px]' src="/img/07.svg" alt="" />
                        <p>As long as your dreams revolve around <br /> something like; being the proud owner <br /> of a spectacular website.</p>
                    </div>
                    {/* part3 end */}


                    {/* part4 start */}
                    <p className='animText2 text-[40px] relative -right-170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jomor Design is a design practice <br /> focused on digital experiences. With every <br /> single one of our clients, we bring forth a <br /> deep passion for creative problem solving <br /> — which is what we deliver in the form of <br /> custom and memorable experiences.</p>
                    {/* part4 end */}



                    {/* part4 end */}
                    <div className='*:ml-15 *:text-[180px] uppercase mt-50 mb-5'>
                        <p className='animText font-[ivyOra]'>featured</p>
                        <p className='animText'>work</p>
                    </div>
                    {/* part4 end */}
                </section>
            </section>
            {/* sec2 end */}



            {/* sec3 start */}
            <section className='wraperAnimFix w-full bg-black relative -bottom-[150vh] z-30'>
                <div className="sec3-slide w-full h-screen overflow-hidden flex-center">
                    <p className='animText absolute z-40 text-white text-9xl font-[ivyOra]'>METRICA</p>
                    <img className='sec3Img w-full h-full object-cover' src="/img/08.jpg" alt="Slide 1" />
                </div>
                <div className="sec3-slide w-full h-screen overflow-hidden flex-center">
                    <p className='sec3Text absolute z-40 text-white text-9xl font-[ivyOra]'>STELAR</p>
                    <img className='sec3Img2 w-full h-full object-cover' src="/img/09.jpg" alt="Slide 2" />
                </div>
                <div className="sec3-slide w-full h-screen overflow-hidden flex-center">
                    <p className='sec3Text2 absolute z-40 text-white text-9xl font-[ivyOra]'>LOVEN MORCEL</p>
                    <img className='sec3Img3 w-full h-full object-cover' src="/img/10.jpg" alt="Slide 3" />
                </div>
                <div className="sec3-slide w-full h-screen overflow-hidden flex-center">
                    <p className='absolute z-40 text-white text-9xl font-[ivyOra]'>PRIESTESS</p>
                    <img className='sec3Img4 w-full h-full object-cover' src="/img/11.jpg" alt="Slide 4" />
                </div>
            </section>
            {/* sec3 end */}


            {/* footer start */}
            <section className=' relative top-[15%] z-50 w-full h-[130vh] bg-gray-200 text-black rounded-t-[20%] overflow-hidden'>
                <div className='sec4about flex gap-15 text-8xl mt-80 uppercase'>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                </div>
                <div className='sec4about2 flex gap-15 *:font-[ivyOra] text-8xl mt-5 uppercase -translate-x-full'>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                    <p>about-</p>
                </div>

                <div className='absolute bottom-0 flex items-center gap-8  text-[50px] ml-10'>
                    <a href='https://www.hoseinmdev.ir' className='cursor-pointer hover:text-green-950 transition-all'>HOSEINMDEV.IR</a>
                    <p className='text-[300px]! font-[ivyOra]'>&</p>
                    <p>FRONTEND DEVELOPER</p>
                </div>

            </section>
            {/* footer end */}

        </div>
    );
}
