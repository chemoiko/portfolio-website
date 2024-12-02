"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center my-12 md:my-12 py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 text-center max-w-md">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="contact-info text-[#ADB7BE] mb-6">
        <p className="mb-2">
            <span className="font-bold">Email: </span>
            <span>elijahmurket</span>
          </p>
          <p className="mb-4">
            <span className="font-bold">Phone: </span>
            <span>+256-778-227264</span>
          </p>

        </div>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://github.com/chemoiko" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/elijah-murket" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
