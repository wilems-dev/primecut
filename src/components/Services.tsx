"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/service";

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white text-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold">Our Services</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Simple, transparent services designed for modern men who value style.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, idx) => {
            const isExpanded = expanded === idx;
            return (
              <motion.div
                key={service.title}
                layout
                onClick={() => setExpanded(isExpanded ? null : idx)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                className={`rounded-2xl p-8 border border-gray-200 bg-gray-50 cursor-pointer
                  ${idx === 1 ? "md:mt-6" : idx === 2 ? "md:mt-12" : ""}`}
              >
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>

                {isExpanded && (
                  <motion.ul
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 space-y-2 text-gray-700 text-sm"
                  >
                    {service.details.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
