export const featureWork = [
  {
    title: "Real-Time Radiation Dosimetry Using RAW Camera Sensor",
    description:
      "Designed a radiation sensing system using a RAW CMOS camera sensor interfaced to Raspberry Pi via CSI. Built a custom image processing pipeline in Python with OpenCV for demosaicing, denoising, adaptive thresholding, and pixel clustering. Implemented near real-time dose computation on embedded Linux hardware.",
    roles: ["Image Processing", "Embedded Linux", "Python", "OpenCV"],
    image: "images/feature-work/radiation.jpg",
    gradient: "linear-gradient(135deg, #3949ab 0%, #6a1b9a 100%)",
    icon: "📡",
    category: "Image Processing",
    context: "M.Tech. Dissertation",
    bulletPoints: [
      "Designed a radiation sensing system using a RAW CMOS camera sensor interfaced to Raspberry Pi via CSI.",
      "Captured Bayer RAW frames by bypassing the default ISP to enable direct pixel-level signal analysis.",
      "Developed a custom image processing pipeline in Python (OpenCV) including: demosaicing and denoising, event detection via adaptive thresholding and pixel clustering for radiation hit localization.",
      "Modeled sensor noise characteristics and calibrated intensity-to-dose mapping for radiation estimation.",
      "Implemented near real-time dose computation on embedded Linux hardware.",
    ],
  },
  {
    title: "8-Core General Purpose Graphics Processing Unit",
    description:
      "Designed and implemented an 8-core synthesizable GPGPU capable of FP16 and integer arithmetic. Integrated deeply pipelined FP units along with an SFU using Newton–Raphson and Goldschmidt methods. Synthesized using FreePDK45 and OpenROAD, optimized to clock at 500 MHz at 45 nm node.",
    roles: ["Verilog", "VLSI", "Digital Design", "OpenROAD"],
    image: "images/feature-work/gpgpu.jpg",
    gradient: "linear-gradient(135deg, #4a3fbf 0%, #5c2d91 100%)",
    icon: "🔲",
    category: "Verilog / Digital Design",
    context: "Indian Institute of Technology, Delhi",
    bulletPoints: [
      "Designed and implemented an 8-core synthesizable GPGPU capable of FP16 and integer arithmetic.",
      "Integrated deeply pipelined FP units along with a SFU using Newton–Raphson and Goldschmidt methods.",
      "Created LUT-based exponential/logarithmic hardware modules; verified functionality using OSS tools.",
      "Synthesized the design using FreePDK45 and OpenROAD for architectural evaluation and optimized the system to clock at 500 MHz at 45 nm node.",
    ],
  },
  {
    title: "Custom Bluetooth Speaker with Dual-Core FreeRTOS firmware",
    description:
      "Designed multithreaded firmware across both ESP32 cores using FreeRTOS task scheduling, mutexes, and semaphores. Integrated A2DP Bluetooth audio streaming with external codec over I2S/I2C. Optimized power consumption using ESP32 ULP coprocessor and dynamic task management.",
    roles: ["Embedded Systems", "FreeRTOS", "ESP32", "C"],
    image: "images/feature-work/speaker.jpg",
    gradient: "linear-gradient(135deg, #1565c0 0%, #00838f 100%)",
    icon: "🔊",
    category: "Embedded Systems",
    context: "Freelance Project",
    bulletPoints: [
      "Designed and implemented multithreaded firmware architecture across both ESP32 cores using FreeRTOS task scheduling, mutexes, and semaphores.",
      "Integrated A2DP Bluetooth audio streaming with external codec over I2S/I2C.",
      "Managed SPI-based LCD driver and SD card interface with concurrent access protection.",
      "Optimized power consumption using ESP32 ULP coprocessor and dynamic task management.",
    ],
  },
  {
    title: "Quadcopter Dynamics and Path Tracking",
    description:
      "Modeled full 6-DOF quadcopter dynamics using Newton–Euler formalism. Designed nested PID control architecture for roll, pitch, yaw stabilization and outer-loop position tracking. Built a piece-wise quadratic spline trajectory generator for smooth 3D paths with feedforward + feedback integration.",
    roles: ["Control Systems", "Robotics", "MATLAB", "PID"],
    image: "images/feature-work/quadcopter.jpg",
    gradient: "linear-gradient(135deg, #1b7a3d 0%, #00695c 100%)",
    icon: "🚁",
    category: "Control Systems & Robotics",
    context: "Robotics Specialization",
    bulletPoints: [
      "Modeled full 6-DOF quadcopter dynamics using Newton–Euler formalism, capturing translational and rotational coupling effects under near-hover conditions.",
      "Designed a nested control architecture with inner-loop PID controllers for roll, pitch, and yaw stabilization and outer-loop position controller for altitude and planar motion tracking.",
      "Developed piece-wise quadratic spline trajectory generator to produce smooth, differentiable 3D paths.",
      "Implemented feedforward + feedback control integration to reduce steady-state tracking error.",
    ],
  },
];
