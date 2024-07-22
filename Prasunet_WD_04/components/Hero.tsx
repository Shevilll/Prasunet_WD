import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import { FlipWords } from "./ui/FlipWords";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="pd-20 pt-32">
            {/* <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />{" "}
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div> */}
            <div className="h-screen w-full dark:bg-black-100 bg-white-100  dark:bg-grid-white/[0.03] bg-grid-black/[0.04] flex items-center justify-center absolute top-0 left-0">
                <BackgroundGradientAnimation>
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-[rgb(254,250,242)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </BackgroundGradientAnimation>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-black-100 max-w-80">
                        This is shevil
                    </h2>
                    {/* Change the color of certain word in TextGenerateEffect class */}
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Crafting tomorrow's technology with code and creativity."
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Ahmad Faraz, a
                        <FlipWords
                            words={[
                                "Software-Dev",
                                "AI/ML-Dev",
                                "Web-Dev",
                                "FullStack-Dev",
                                "BackEnd-Dev",
                                "FrontEnd-Dev",
                                "Freelancer",
                            ]}
                        />
                        based in India
                    </p>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/10vUTTOWj1od4-ES1wTKBti4P5NXeTQiv/view"
                    >
                        <MagicButton
                            title="Download Résume"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
