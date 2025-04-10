import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Build emotional resilience, one step at a time, with Decibl",
    quickLinks: [
        {
            text: "About Us",
            url: "#features"
        },
        {
            text: "Team",
            url: "#pricing"
        },
        {
            text: "Sign Up",
            url: "#testimonials"
        }
    ],
    email: 'reachdecibl@gmail.com',
    telephone: '+1 (412) 954-7872',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}