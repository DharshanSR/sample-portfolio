import React from 'react';
import Image from 'next/image';
import sign from '@/images/sign.png'; // Ensure this path is correct

const FooterDown: React.FC = () => {
    return (
        <footer className="bg-sky-950 text-white text-center py-4">
            <p className="text-lg font-bold text-gray-300 mb-2">
                Ravindran Dharshan
            </p>
            <p className="text-sm text-gray-400 mb-4">
                Copyright &copy; {new Date().getFullYear()} developed by <strong>Dharshan</strong>. All rights reserved.
            </p>
            <code className="block bg-gray-800 text-green-300 px-2 py-1 rounded md:inline">
                &lt;Secured and optimized with cutting-edge technology /&gt;
            </code>
        </footer>
    );
};

export default FooterDown;
