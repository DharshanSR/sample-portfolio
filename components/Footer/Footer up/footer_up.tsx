'use client';

import React from 'react';
import Image from 'next/image';
import GithubIcon from "@/images/icons/GithubIcon.svg";
import LinkedInIcon from "@/images/icons/LinkedInIcon.svg";
import InstagramIcon from "@/images/icons/InstagramIcon.svg";
import WhatsappIcon from "@/images/icons/WhatsappIcon.svg";
import MediumIcon from "@/images/icons/MediumIcon.svg";
import { HoverBorderGradient } from '@/components/Effect/hover-border-gradient';
import backgroundImage from "@/images/Footer.jpg";

const Footer: React.FC = () => {
    return (
        <footer className="relative py-8 text-white">
            <div className="absolute inset-0 bg-sky-950"></div>
            <div className="container relative mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <div className="mb-4 md:mb-0">
                            <p className="mt-2 text-base text-justify">
                                Quick learner of new technologies, adept at applying them to real-world solutions. Eager to join a team creating innovative, user-friendly applications.
                            </p>


                            <div className="mt-4">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black dark:text-white flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/50"
                                    onClick={() => window.open('mailto:your-email@example.com')}
                                >
                                    <span>Email Me</span>
                                </HoverBorderGradient>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>

                    <div>
                        <ul>
                            <h2 className="text-lg font-semibold mt-2">Ravindran Dharshan</h2>
                            <p className="text-sm">Passionate Developer | Always Learning</p>
                            <div className="mb-4 mt-4 md:mb-0">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black dark:text-white flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/50"
                                >
                                    <span>Download CV</span>
                                </HoverBorderGradient>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-lg mb-4 mt-2">Company</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Expertise</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Skills</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Portfolio</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact Me</a></li>
                        </ul>
                    </div>


                    <ul>
                        <div className="mt-2">
                            <div className="flex flex-col space-y-2">
                                <h3 className="text-lg font-semibold text-gray-300">
                                    <span className="text-green-400">{'const '}</span>
                                    <span className="text-blue-400">followMe</span>
                                    <span className="text-pink-400"> = </span>
                                    <span className="text-yellow-400">{'{'}</span>
                                    <span className="text-red-400">{'"Follow Me"'}:</span>
                                    <span className="text-blue-400">{' {'}</span>
                                </h3>

                                <div className="flex space-x-4">
                                    <a href="https://github.com/DharshanSR" className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                        <Image src={GithubIcon} alt="GitHub" width={24} height={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/your-linkedin-id/" className="text-gray-400 hover:text-white p-2 rounded-full border border-blue-600 hover:shadow-[0_0_10px_rgba(40,103,178,0.8)]">
                                        <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
                                    </a>
                                    <a href="https://instagram.com/your-instagram-id" className="text-gray-400 hover:text-white p-2 rounded-full border border-pink-600 hover:shadow-[0_0_10px_rgba(225,48,108,0.8)]">
                                        <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
                                    </a>
                                    <a href="https://wa.me/your-whatsapp-number" className="text-gray-400 hover:text-white p-2 rounded-full border border-green-500 hover:shadow-[0_0_10px_rgba(37,211,102,0.8)]">
                                        <Image src={WhatsappIcon} alt="WhatsApp" width={24} height={24} />
                                    </a>
                                    <a href="https://medium.com/@your-medium-id" className="text-gray-400 hover:text-white p-2 rounded-full border border-black hover:shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                                        <Image src={MediumIcon} alt="Medium" width={24} height={24} />
                                    </a>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-300">
                                    <span className="text-pink-400">{' }'}</span>
                                    <span className="text-yellow-400">{'};'}</span>
                                </h3>

                            </div>
                        </div>
                    </ul>

                </div>


            </div>
        </footer>
    );
};

export default Footer;
