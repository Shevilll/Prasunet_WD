import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                My{" "}
                <span className="dark:text-purple text-red-500">
                    Work Experience
                </span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        borderRadius="1.75rem"
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-default"
                        duration={Math.floor(Math.random() * 10000) + 10000}
                    >
                        <div className="h-full lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 dark:bg-inherit bg-[#F5EAE5]">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold dark:text-white text-black">
                                    {card.title}
                                </h1>
                                <p className="text-start dark:text-white-100 text-black-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
