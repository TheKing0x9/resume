"use client";

import { Badge } from "@/components/ui/badge";
import { useTheme } from "../../theme-provider";
import { useEffect, useState, useRef } from "react";

const AboutMe = () => {
  const { theme } = useTheme();
  const [showBg, setShowBg] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (theme === "light") {
      // Delay showing bg until after the theme transition completes (400ms in theme provider + buffer)
      timeoutRef.current = setTimeout(() => {
        setShowBg(true);
      }, 500);
    } else {
      // Hide bg immediately when switching to dark
      setShowBg(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [theme, mounted]);

  const languages = [
    "C",
    "C++",
    "C#",
    "Lua",
    "TypeScript",
    "Python",
    "Verilog",
    "Makefile",
    "MATLAB",
    "Bash",
  ];

  const technologies = [
    "FPGAs (Zynq UltraScale+)",
    "RISC-V",
    "I2C / SPI / UART",
    "TensorFlow",
    "OpenCV",
    "Git & GitHub",
    "ROS",
    "FreeRTOS",
    "Linux Kernel",
    "Raspberry Pi",
    "ESP32",
    "ESP-ADF / ESP-IDF",
    "Alpine Linux",
    "Ubuntu",
  ];

  const tools = [
    "PlatformIO",
    "Virtuoso",
    "Innovus",
    "Genus",
    "EMX",
    "Clarity",
    "Quartus Prime",
    "ModelSim",
    "Vivado",
    "iVerilog",
    "GHDL",
    "XSchem",
    "ngspice",
    "GTKWave",
    "YoSYS",
    "OpenROAD",
  ];

  const skillCategories = [
    { label: "Languages", items: languages },
    { label: "Technologies", items: technologies },
    { label: "Tools", items: tools },
  ];

  return (
    <section>
      <div className="container">
        <div className="relative border-x border-primary/10">
          {/* Background image overlay — delayed show on light, instant hide on dark */}
          <div
            className="absolute inset-0 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-300 ease-in-out"
            style={{ opacity: showBg ? 1 : 0 }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-9 sm:gap-12 max-w-5xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                About Me
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Hey there — I&apos;m a VLSI Design engineer and a programmer
                with a passion for{" "}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  digital design, robotics and embedded systems
                </span>
                . Currently working as a Product Validation Engineer II at{" "}
                <span className="border-b-2">Cadence</span>, validating
                mixed-signal and EM workflows across Virtuoso Suite.
              </h2>
              <h5 className="text-secondary font-normal">
                Previously interned at Cadence on RF/EM flow integration, and
                built gameplay systems at Hashstash. M.Tech. in VLSI Design,
                B.Tech. in Electronics &amp; Communications Engineering.
              </h5>
            </div>

            {skillCategories.map((category) => (
              <div key={category.label} className="flex flex-col gap-4">
                <p className="text-sm text-primary uppercase font-medium tracking-[1px]">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.items.map((value, index) => (
                    <Badge
                      variant={"outline"}
                      key={index}
                      className="py-1.5 px-3 rounded-lg"
                    >
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {value}
                      </p>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
