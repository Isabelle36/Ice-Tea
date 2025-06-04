import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, BracesIcon, Mail } from "lucide-react";

// Chnage this with your own data
const defaultNavigationLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const defaultSocialLinks = [
  { href: "https://x.com/iceteaThemes", icon: <Twitter size={24} />, hoverColor: "text-white" },
  { href: "https://www.linkedin.com/in/alfi-n-56985a30a/", icon: <Linkedin size={24} />, hoverColor: "text-white" },
  { href: "https://github.com/Isabelle36/Ice-Tea", icon: <Github size={24} />, hoverColor: "text-white" },
  { href: "mailto:icetea.contancto@gmail.com", icon: <Mail size={24} />, hoverColor: "text-white" },
];

const FooterThird = ({
  brandName = "IceTea",
  navigationLinks = defaultNavigationLinks,
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <footer className="bg-transparent mt-7 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo */}
          <div className="text-xl font-bold">
            <p className="text-white/70 ">
              {brandName}
            </p>
          </div>
         
          <div className="flex flex-row justify-center items-center gap-4 text-gray-700">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-5 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
        
        
      </div>
    </footer>
  );
};

export default FooterThird;