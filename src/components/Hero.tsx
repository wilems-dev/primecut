"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-40 min-h-[calc(100vh-5rem)] flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Premium cuts.
            <br />
            Timeless style.
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-md">
            Professional grooming services designed for men who value quality
            and precision.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-black text-white
              text-sm font-medium hover:opacity-90 transition"
            >
              Book appointment
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-xl border border-black/20
              text-sm font-medium text-black hover:border-black/40 transition"
            >
              View services
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          // className="relative h-[420px] rounded-3xl overflow-hidden"
          className="relative h-105 rounded-3xl overflow-hidden"
        >
          <Image
            src="/hero.jpg"
            alt="Barber shop"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
