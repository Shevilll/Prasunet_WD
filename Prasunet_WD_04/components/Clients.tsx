import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { HoverBorderGradient } from "./ui/HoverBorder";

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Kind words from{" "}
                <span className="dark:text-purple text-red-500">
                    satisfied clients
                </span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    className=" text-black dark:text-white flex items-center space-x-2 cursor-default"
                >
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-5 mb-5 mt-8 px-5">
                        {companies.map(({ id, img, name, nameImg }) => (
                            <div
                                key={id}
                                className="flex md:max-w-50 max-w-32 gap-2"
                            >
                                <img
                                    src={img}
                                    alt={name}
                                    className="md:w-10 w-5"
                                />
                                <img
                                    src={nameImg}
                                    alt={name}
                                    className="md:w-24 w-20"
                                />
                            </div>
                        ))}
                    </div>
                </HoverBorderGradient>
            </div>
        </div>
    );
};

export default Clients;
