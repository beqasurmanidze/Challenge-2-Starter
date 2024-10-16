import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 sm:py-16">
      <div className="mb-8 flex w-full items-start justify-center md:flex-row">
        <div className="mr-10 flex flex-[1] flex-col justify-start">
          <img
            className="h-[72.14px] w-[266px] object-contain"
            src={logo}
            alt="bankLogo"
          />
          <p className="mt-4 max-w-[312px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="min-w-{150px} my-4 flex flex-col ss:my-0"
            >
              <h4 className="font-poppins text-[18px] font-medium leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 flex list-none flex-col gap-4">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer font-poppins text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondary"
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
        <p className="text-center font-poppins text-[18px] font-normal leading-[27px] text-white">
          Copyright 2021 HooBank. All Rights Reserved.
        </p>
        <div className="mt-6 flex flex-row gap-[30px] md:mt-0">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="h-[21px] w-[21px] cursor-pointer object-contain"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
