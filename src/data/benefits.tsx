import { FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"
import { SlEarphones } from 'react-icons/sl';
import { BiCommentDetail } from "react-icons/bi";
import { PiPottedPlant, PiPlant, PiPottedPlantDuotone } from "react-icons/pi";
import { RiPsychotherapyLine } from "react-icons/ri";
import { GiPlantSeed, GiPlantRoots, GiFruitTree, GiMicroscope } from "react-icons/gi";
import { FaRegCompass } from "react-icons/fa6";

export const benefits: IBenefit[] = [
    {
        title: "About Us",
        description: "A 30-day audio journey to help people feel better and stay better.",
        bullets: [
            {
                title: "Daily Audio Moments",
                description: "Short, science-backed reflections to ground your day.",
                icon: <SlEarphones size={26} />
            },
            {
                title: "Mood & Word Check-ins",
                description: "Reflect with a single word or emoji, whatever feels right.",
                icon: <BiCommentDetail size={26} />
            },
            {
                title: "Growth You Can See",
                description: "Watch your personal tree grow as you build emotional habits.",
                icon: <PiPottedPlant size={26} />
            }
        ],
        imageSrc: "/images/Screen4.png"
    },
    {
        title: "Growth you can see. Progress you can feel.",
        description: "",
        bullets: [
            {
                title: "Day 1",
                description: "Watch your personal tree grow as you build emotional habits.",
                icon: <GiPlantSeed size={26} />
            },
            {
                title: "Day 14",
                description: "Notice emotional patterns emerging. Stay grounded with daily reflections.",
                icon: <PiPlant size={26} />
            },
            {
                title: "Day 21",
                description: "Feel the difference. Reflect with more ease and confidence.",
                icon: <GiPlantRoots size={26} />
            },
            {
                title: "Day 30",
                description: "Your tree is thriving and so are you.",
                icon: <GiFruitTree size={26} />
            }
        ],
        imageSrc: "/images/Screen3.png"
    },
    {
        title: "Why this works",
        description: "",
        bullets: [
            {
                title: "Visual Growth",
                description: "Each day, your tree evolves, making your progress tangible.",
                icon: <PiPottedPlantDuotone size={26} />
            },
            {
                title: "Progressive Journey",
                description: "Reflections build on one another to deepen awareness over time.",
                icon: <FaRegCompass size={26} />
            },
            {
                title: "Scientifically Proven",
                description: "Designed with leading research in psychology and habit formation.",
                icon: <GiMicroscope size={26} />
            }
        ],
        imageSrc: "/images/Screen2.png"
    },
    {
        title: "We don't replace therapy. We help people show up for themselves between sessions every day.",
        description: "",
        bullets: [
            {
                title: "",
                description: "",
                icon: <RiPsychotherapyLine size={26} />
            }
        ],
        imageSrc: "/images/decibl.png"
    },
]