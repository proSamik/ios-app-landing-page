import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "feature1 [title]",
        description: "feature1 [description text]",
        bullets: [
            {
                title: "feature1 [bullet1 title]",
                description: "feature1 [bullet1 description]",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "feature1 [bullet2 title]",
                description: "feature1 [bullet2 description]",
                icon: <FiTarget size={26} />
            },
            {
                title: "feature1 [bullet3 title]",
                description: "feature1 [bullet3 description]",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "feature2 [title]",
        description: "feature2 [description text]",
        bullets: [
            {
                title: "feature2 [bullet1 title]",
                description: "feature2 [bullet1 description]",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "feature2 [bullet2 title]",
                description: "feature2 [bullet2 description]",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "feature2 [bullet3 title]",
                description: "feature2 [bullet3 description]",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "feature3 [title]",
        description: "feature3 [description text]",
        bullets: [
            {
                title: "feature3 [bullet1 title]",
                description: "feature3 [bullet1 description]",
                icon: <FiLock size={26} />
            },
            {
                title: "feature3 [bullet2 title]",
                description: "feature3 [bullet2 description]",
                icon: <FiUser size={26} />
            },
            {
                title: "feature3 [bullet3 title]",
                description: "feature3 [bullet3 description]",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]