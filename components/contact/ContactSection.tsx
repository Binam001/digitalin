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
                <option value="">Select Service</option>
                <option value="ads">Performance Marketing</option>
                <option value="content">Content Strategy</option>
                <option value="creative">Creative Design</option>
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
              className="bg-[#1a1a1e] border border-white/5 rounded-[2rem] p-8 group transition-colors hover:border-primary/30"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <MapPin
                  className="text-primary group-hover:text-white"
                  size={24}
                />
              </div>
              <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">
                Base Camp
              </h3>
              <p className="text-xl font-medium">
                Jhamsikhel, Lalitpur
                <br />
                Nepal
              </p>
            </motion.div>

            {/* Social Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#1a1a1e] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-6 font-bold">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-transparent transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">
                  Email
                </p>
                <a
                  href="mailto:hello@agency.np"
                  className="text-xl hover:text-primary transition-colors"
                >
                  hello@agency.np
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
