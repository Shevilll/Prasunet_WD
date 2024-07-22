import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
    return (
        <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[90vw]">
                    Let&apos;s bring your vision to life. Get in touch to start
                    our{" "}
                    <span className="dark:text-purple text-red-500">
                        collaboration
                    </span>{" "}
                    today!
                </h1>
                <p className="dark:text-white-200 text-black-200 md:mt-10 my-5 text-center">
                    Looking forward to discussing how we can achieve your goals
                    together.
                </p>
                <a href="mailto:ahmadfaraz00710@gmail.com">
                    <MagicButton
                        title="Let's Get In Touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-small md:font-normal font-light">
                    Copyright © 2024 AhmadFaraz
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a href={profile.link} target="_blank" key={profile.id}>
                            <div>
                                <img
                                    className={`w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border dark:border-black-300 bg-[#7C70CB] border-white-100`}
                                    src={profile.img}
                                    alt={profile.img}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
