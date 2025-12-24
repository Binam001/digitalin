"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { contactLists, socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white selection:bg-primary selection:text-white px-6 py-20 lg:px-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-4 flex items-center gap-4"
          >
            <HoverText text="LET'S" />
            <span className="text-primary">
              <HoverText text="CONNECT." />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl"
          >
            From the streets of Kathmandu to the global stage, we help brands
            scale mountains. Reach out to our base camp.
          </motion.p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form Card (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 bg-[#1a1a1e] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors peer"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <select className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors text-gray-400">
                <option value="" disabled>
                  Select Service
                </option>
                <option value="facebook-advertising">
                  Facebook Advertising
                </option>
                <option value="digital-advertising">Digital Advertising</option>
                <option value="search-engine-optimization">
                  Search Engine Optimization
                </option>
                <option value="search-engine-marketing">
                  Search Engine Marketing
                </option>
              </select>

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary outline-none transition-colors resize-none"
              />
              <InteractiveHoverButton
                text="Contact Us"
                icon={<Send />}
                className="px-12"
                iconClassName="group-hover:-translate-x-10"
              />
            </form>

            {/* Subtle Abstract Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </motion.div>

          {/* Info Column (Small Cards) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#1a1a1e] border border-white/5 rounded-4xl group transition-colors hover:border-primary/30 grayscale"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226139.88597223538!2d85.301999!3d27.672925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b6c0ed815b%3A0x339d33c792d1a3!2sDigitalin%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Nepal!5e0!3m2!1sen!2snp!4v1766563989686!5m2!1sen!2snp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-4xl"
              ></iframe>
            </motion.div>

            {/* Social Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#1a1a1e] border border-white/5 rounded-4xl p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-primary text-sm uppercase tracking-widest mb-6 font-bold">
                  Follow Us
                </h3>
                <div className="flex gap-2">
                  {socialLinkLists.map((socialLinkItem) => (
                    <Link
                      key={socialLinkItem.id}
                      href={socialLinkItem.href}
                      className="size-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-primary hover:border-transparent transition-all"
                    >
                      <Icon icon={socialLinkItem.icon} className="size-6" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-primary text-sm uppercase tracking-widest mb-2 font-bold">
                  contact
                </p>
                <div className="flex gap-2">
                  {contactLists.map((contactItem) => (
                    <Link
                      key={contactItem.id}
                      href={contactItem.link}
                      className="size-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-primary hover:border-transparent transition-all"
                    >
                      <Icon icon={contactItem.icon} className="size-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
