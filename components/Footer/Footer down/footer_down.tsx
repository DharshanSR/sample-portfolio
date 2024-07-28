import React from 'react';
import Image from 'next/image';
import sign from '@/images/SignLogo.png';

const FooterDown: React.FC = () => {
    return (
        <footer className="bg-sky-950 text-white text-center py-1">

            {/* <hr className="absolute right-0 w-full border-t-2 border-indigo-600 mt-1 animate-thread2" style={{ top: '12em' }} />
            <hr className="absolute left-0 w-full border-t-2 border-emerald-400 mt-1 animate-thread2" style={{ top: '13em' }} /> */}

            <div className="mb-1 mt-2">
                <Image
                    src={sign}
                    alt="Signature"
                    width={400}
                    height={50}
                    className="mx-auto w-1/2 sm:w-1/2 md:w-1/5 lg:w-1/9"
                />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-white mb-1 sm:mb-4">
                &copy; <strong>{new Date().getFullYear()}</strong> Designed and Developed by <strong>Ravindran Dharshan</strong>. All rights reserved. <br />

                <code className="block text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-green-300 px-2 py-1 rounded md:inline animate-fadeIn">
                    &lt;TechStack {`{`}
                    &nbsp;
                    <span className="text-red-400">security: true,</span>
                    &nbsp;
                    <span className="text-blue-400">optimization: true</span>
                    {`}`} /&gt;
                </code>
            </p>
        </footer>
    );
};

export default FooterDown;
