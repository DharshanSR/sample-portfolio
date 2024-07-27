import React from 'react';
import Image from 'next/image';
import sign from '@/images/SignLogo.png'; // Ensure this path is correct

const FooterDown: React.FC = () => {
    return (
        <footer className="bg-sky-950 text-white text-center py-1">
            <div className="mb-1">
                <Image
                    src={sign}
                    alt="Signature"
                    width={400}
                    height={50}
                    className="mx-auto w-1/2 sm:w-1/2 md:w-1/5 lg:w-1/9"
                />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-white mb-1 sm:mb-4">
                &copy; {new Date().getFullYear()} Designed and Developed by <strong>Ravindran Dharshan</strong>. All rights reserved. <br />
                
                <code className="block text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-green-300 px-2 py-1 rounded md:inline">
                    &lt;TechStack {`{`}
                    &nbsp; security: true, &nbsp;optimization: true
                    {`}`} /&gt;
                </code>
            </p>

        </footer>
    );
};

export default FooterDown;
