import { FaFacebook, FaLinkedin, FaWhatsapp, FaTwitter, FaSlack, FaYoutube, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white flex flex-col items-center justify-center h-[250px] gap-4 border-t border-gray-500 z-0">
            <p className="font-bold">Mohamed Yousif</p>
            <div className="flex gap-4 text-xl">
                
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook className="hover:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-gray-300" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp className="hover:text-gray-300" />
                </a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
                    <FaGoogle className="hover:text-gray-300" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="hover:text-gray-300" />
                </a>
                <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer" aria-label="Slack">
                    <FaSlack className="hover:text-gray-300" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube className="hover:text-gray-300" />
                </a>
            </div>
            <p>&copy; All rights reserved {currentYear}</p>
        </footer>
    );
};

export default Footer;

