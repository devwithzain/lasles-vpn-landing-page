// import { globe, servers, user } from "@public";

import { airbnb, binance, checkbox, coinbase, dropbox, facebook, free, globe, instagram, lightcheck, people1, people2, people3, premium, servers, standard, twitter, user } from "@public";

export const homeIcons = [
    {
        id: 1,
        img: user,
        title: "90+",
        para: "Users",
    },
    {
        id: 2,
        img: globe,
        title: "50+",
        para: "Locations",
    },
    {
        id: 3,
        img: servers,
        title: "30+",
        para: "Servers",
    },
];
export const navLinks = [
    {
        id: 1,
        title: "Features",
        link: "features"
    },
    {
        id: 2,
        title: "Pricing",
        link: "pricing"
    },
    {
        id: 3,
        title: "Testimonials",
        link: "testimonials"
    },
    {
        id: 4,
        title: "Help",
        link: "help"
    },
];

export const featuresItem = [
    {
        id: 1,
        img: checkbox,
        title: "Powerfull online protection."
    },
    {
        id: 2,
        img: checkbox,
        title: "Internet without borders."
    },
    {
        id: 3,
        img: checkbox,
        title: "Supercharged VPN"
    },
    {
        id: 4,
        img: checkbox,
        title: "No specific time limits."
    },
];

export const pricingItem = [
    {
        id: 1,
        img: free,
        title: "Free",
        price: "Free",
        class: "text-[#F53838] text-[1rem] font-bold leading-6 py-3 px-16 border-[#F53855] border-[1px] rounded-[3rem]",
        titles: [
            {
                img: lightcheck,
                para: "Unlimited Bandwitch",
            },
            {
                img: lightcheck,
                para: "Encrypted Connection",
            },
            {
                img: lightcheck,
                para: "No Traffic Logs",
            },
            {
                img: lightcheck,
                para: "Works on All Devices",
            },
        ],
    },
    {
        id: 2,
        img: standard,
        title: "Standard",
        price: "9$ / ",
        class: "text-[#F53838] text-[1rem] font-bold leading-6 py-3 px-16 border-[#F53855] border-[1px] rounded-[3rem]",
        month: "mo",
        titles: [
            {
                img: lightcheck,
                para: "Unlimited Bandwitch",
            },
            {
                img: lightcheck,
                para: "Encrypted Connection",
            },
            // {
            //     img: lightcheck,
            //     para: "No Traffic Logs",
            // },
            {
                img: lightcheck,
                para: "Works on All Devices",
            },
            {
                img: lightcheck,
                para: "Connect Anywere",
            },
        ],
    },
    {
        id: 3,
        img: premium,
        title: "Premium",
        price: "12$ / ",
        month: "mo",
        class: "text-[#fff] text-[1rem] font-bold leading-6 bg-[#F53838] py-3 px-12 rounded-[3rem]",
        titles: [
            {
                img: lightcheck,
                para: "Unlimited Bandwitch",
            },
            {
                img: lightcheck,
                para: "Encrypted Connection",
            },
            {
                img: lightcheck,
                para: "No Traffic Logs",
            },
            // {
            //     img: lightcheck,
            //     para: "Works on All Devices",
            // },
            // {
            //     img: lightcheck,
            //     para: "Connect Anywere",
            // },
            {
                img: lightcheck,
                para: "Get New Features",
            },
        ],
    },
];


export const globeItem = [
    {
        id: 1,
        img: airbnb
    },
    {
        id: 2,
        img: binance
    },
    {
        id: 3,
        img: coinbase
    },
    {
        id: 4,
        img: dropbox
    },
];

export const testimonialsItem = [
    {
        id: 1,
        img: people1,
        name: "Viezh Robert",
        title: "Warsaw, Poland",
        rating: 4.5,
        para: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
        id: 2,
        img: people2,
        name: "Yessica Christy",
        title: "Shanxi, China",
        rating: 4.5,
        para: "“I like it because I like to travel far and still can connect with high speed.”.",
    },
    {
        id: 3,
        img: people3,
        name: "Kim Young Jou",
        title: "Seoul, South Korea",
        rating: 4.5,
        para: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
];



export const footerLogo = [
    {
        id: 1,
        img: facebook,
        link: "www.facebook.com"
    },
    {
        id: 2,
        img: instagram,
        link: "www.instagram.com"
    },
    {
        id: 3,
        img: twitter,
        link: "www.twitter.com"
    },
];


export const footerItem = [
    {
        id: 1,
        title: "Product",
        links: [
            {
                link: "Download",
            },
            {
                link: "ricing",
            },
            {
                link: "Locations",
            },
            {
                link: "Servers",
            },
            {
                link: "Countries",
            },
            {
                link: "Blog",
            },
        ],
    },
    {
        id: 2,
        title: "Engage",
        links: [
            {
                link: "LaslesVPN ?",
            },
            {
                link: "Tutorials",
            },
            {
                link: "Faq",
            },
            {
                link: "About Us",
            },
            {
                link: "Privacy Policy",
            },
            {
                link: "Term & Service",
            },
        ],
    },
    {
        id: 3,
        title: "Earn Money",
        links: [
            {
                link: "Affiliate",
            },
            {
                link: "Become A Partner",
            },
        ],
    },
];