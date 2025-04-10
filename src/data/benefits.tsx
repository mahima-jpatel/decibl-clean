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
                title: "Intelligent Categorization",
                description: "Listen to a short daily podcast",
                icon: <SlEarphones size={24} color="#000" />
            },
            {
                title: "Customizable Goals",
                description: "Reflect with a mood or word",
                icon: <BiCommentDetail size={24} color="#000" />
            },
            {
                title: "Predictive Analysis",
                description: "Watch your tree grow with your journey",
                icon: <PiPottedPlant size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Growth you can see. Progress you can feel.",
        description: "",
        bullets: [
            {
                title: "Day 1",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <GiPlantSeed size={26} />
            },
            {
                title: "Day 14",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <PiPlant size={26} />
            },
            {
                title: "Day 21",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <GiPlantRoots size={26} />
            },
            {
                title: "Day 30",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <GiFruitTree size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Why this works",
        description: "",
        bullets: [
            {
                title: "Visual Growth",
                description: "Visual Growth",
                icon: <PiPottedPlantDuotone size={26} />
            },
            {
                title: "Progressive Journey",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FaRegCompass size={26} />
            },
            {
                title: "Scientifically Proven",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <GiMicroscope size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
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