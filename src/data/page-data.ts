export const experienceData = [
  {
    icon: "images/experience/cadence.png",
    role: "Product Validation Engineer II — Cadence",
    location: "Noida, India",
    startYear: "Sept 2025",
    endYear: "Present",
    bulletPoints: [
      "Validated mixed-signal and EM workflows across Virtuoso and Sigrity platforms to ensure production-ready tapeout flows.",
      "Analyzed simulation logs, crash dumps, and runtime traces to identify root causes in large-scale EDA software stacks.",
      "Developed automated validation scripts (Python, Bash, Make) to improve regression robustness and product coverage.",
      "Collaborated with cross-functional engineering teams to resolve integration issues impacting customer design flows.",
    ],
  },
  {
    icon: "images/experience/cadence.png",
    role: "Product Engineering Intern — Cadence",
    location: "Noida, India",
    startYear: "June 2025",
    endYear: "Sept 2025",
    bulletPoints: [
      "Contributed to documentation of end-to-end RF and EM flow spanning schematic, layout, packaging, and PCB levels.",
      "Assisted in system-level integration verification across EMX, Clarity, Voltus-XFi, Microwave Office and Virtuoso.",
      "Worked with senior engineering teams to improve reliability of simulation workflows used in production design environments.",
    ],
  },
  {
    icon: "images/experience/hashlogo.png",
    role: "Contract Programmer & Game Development Intern — Hashstash",
    location: "Noida, India",
    startYear: "Apr 2021",
    endYear: "Sept 2022",
    bulletPoints: [
      "Developed gameplay systems, integration pipeline, and prototypes for Android and HTML5 games.",
      "Collaborated with game designers and testers to ensure tight and bug-free gameplay mechanics.",
      "Supported performance profiling and iterative feature development under rapid delivery timelines.",
    ],
  },
];

export const educationData = [
  {
    date: "May 2023 – May 2025",
    title: "M.Tech. in VLSI Design",
    subtitle:
      "Indian Institute of Technology & Jawaharlal Nehru University — New Delhi, India",
  },
  {
    date: "Oct 2020 – May 2025",
    title: "B.Tech. in Electronics and Communications Engineering",
    subtitle: "Jawaharlal Nehru University — New Delhi, India",
  },
  {
    date: "Online — Coursera",
    title: "Robotics Specialization",
    subtitle: "University of Pennsylvania",
  },
  {
    date: "Online — Coursera",
    title: "Nand2Tetris",
    subtitle: "Hebrew University of Jerusalem",
  },
  {
    date: "Online — Coursera",
    title: "Introduction to Self-Driving Cars",
    subtitle: "University of Toronto",
  },
];

export const projectOverview = {
  digitalDesign: [
    {
      name: "8-Core General Purpose Graphics Processing Unit",
      url: "#",
      category: "Verilog / Digital Design",
      context: "Indian Institute of Technology, Delhi",
      description:
        "Designed and implemented an 8-core synthesizable GPGPU capable of FP16 and integer arithmetic. Integrated deeply pipelined FP units along with an SFU using Newton–Raphson and Goldschmidt methods. Synthesized using FreePDK45 and OpenROAD, optimized to clock at 500 MHz at 45 nm node.",
      bulletPoints: [
        "Designed and implemented an 8-core synthesizable GPGPU capable of FP16 and integer arithmetic.",
        "Integrated deeply pipelined FP units along with a SFU using Newton–Raphson and Goldschmidt methods.",
        "Created LUT-based exponential/logarithmic hardware modules; verified functionality using OSS tools.",
        "Synthesized the design using FreePDK45 and OpenROAD for architectural evaluation and optimized the system to clock at 500 MHz at 45 nm node.",
      ],
      roles: [
        "Verilog",
        "VLSI",
        "Digital Design",
        "OpenROAD",
        "Cadence Innovus",
        "Cadence Genus",
      ],
      image: "images/feature-work/gpgpu.jpg",
      gradient: "linear-gradient(135deg, #4a3fbf 0%, #5c2d91 100%)",
      icon: "🔲",
    },
    {
      name: "High-Throughput FP16 Matrix Multiplication Engine",
      url: "#",
      category: "Verilog / Digital Design",
      context: "Indian Institute of Technology, Delhi",
      description:
        "Designed and implemented a matrix multiplier using Verilog, capable of FP16 and integer arithmetic for GPU and AI/ML applications. Pipelined for high throughput and low latency, clocking at 333 MHz at a 65 nm node with less than 10 mW power consumption.",
      bulletPoints: [
        "Architected a 4×4 × 4×1 matrix multiplication pipeline achieving 330 MOPS under a 10 mW power budget on TSMC 65 nm PDK.",
        "Designed custom FP16 floating-point multiplier and adder units in Verilog for low-latency arithmetic.",
        "Implemented a four-stage pipelined architecture to meet timing and throughput requirements.",
        "Verified functionality using Icarus Verilog and GTKWave with a custom LuaJIT-based build system (VBuild).",
      ],
      roles: [
        "Verilog",
        "Digital Design",
        "Cadence Innovus",
        "Cadence Genus",
        "TSMC 65 PDK",
      ],
      image: "images/feature-work/ic_vertex.jpg",
      gradient: "linear-gradient(135deg, #a83279 0%, #c0392b 100%)",
      icon: "⚡",
    },
    {
      name: "Resource-Efficient CORDIC-Based Arithmetic Accelerator",
      url: "#",
      category: "Verilog / Digital Design",
      context: "Indian Institute of Technology, Delhi",
      description:
        "Designed and implemented a CORDIC-based multiplier architecture to perform iterative shift-add arithmetic optimized for hardware efficiency and reduced resource utilization. Achieved 100 MHz clock speed on UMC 65 nm node. ",
      bulletPoints: [
        "Implemented an iterative CORDIC datapath in Verilog using shift-add operations to eliminate dedicated hardware multipliers.",
        "Designed a parameterizable architecture supporting configurable iteration depth for precision–latency trade-offs.",
        "Optimized pipeline stages to improve throughput while maintaining low area overhead.",
        "Verified numerical accuracy against software reference models and analyzed convergence behavior.",
        "Synthesized and optimized design for timing, area, and power efficiency.",
      ],
      roles: [
        "Verilog",
        "Digital Design",
        "Cadence Innovus",
        "Cadence Genus",
        "UMC65 PDK",
      ],
      image: "images/feature-work/ic_memory.jpg",
      gradient: "linear-gradient(135deg, #b8255f 0%, #d4820e 100%)",
      icon: "∡",
    },
  ],

  imageProcessing: [
    {
      name: "Real-Time Radiation Dosimetry Using RAW Camera Sensor",
      url: "#",
      category: "Image Processing",
      context: "M.Tech. Dissertation",
      description:
        "Designed a radiation sensing system using a RAW CMOS camera sensor interfaced to Raspberry Pi via CSI. Built a custom image processing pipeline in Python with OpenCV for demosaicing, denoising, adaptive thresholding, and pixel clustering. Implemented near real-time dose computation on embedded Linux hardware.",
      bulletPoints: [
        "Designed a radiation sensing system using a RAW CMOS camera sensor interfaced to Raspberry Pi via CSI.",
        "Captured Bayer RAW frames by bypassing the Cadenceault ISP to enable direct pixel-level signal analysis.",
        "Developed a custom image processing pipeline in Python (OpenCV) including: demosaicing and denoising, event detection via adaptive thresholding and pixel clustering for radiation hit localization.",
        "Modeled sensor noise characteristics and calibrated intensity-to-dose mapping for radiation estimation.",
        "Implemented near real-time dose computation on embedded Linux hardware.",
      ],
      image: "images/feature-work/radiation.jpg",
      roles: ["Image Processing", "Embedded Linux", "Python", "OpenCV"],
      gradient: "linear-gradient(135deg, #3949ab 0%, #6a1b9a 100%)",
      icon: "📡",
    },
    {
      name: "3D Point Cloud Reconstruction from Multi-Angle Image Data",
      url: "#",
      category: "Image Processing",
      context: "Robotics (Perception) Course",
      description:
        "Developed a MATLAB-based multi-view image processing pipeline to reconstruct 3D point clouds from images captured at multiple viewing angles.",
      bulletPoints: [
        "Developed a MATLAB-based multi-view image processing pipeline to reconstruct 3D point clouds from images captured at multiple viewing angles.",
        "Implemented feature detection and correspondence matching across views.",
        "Applied camera projection geometry and triangulation to estimate spatial coordinates of scene points.",
        "Constructed 3D point maps and validated reconstruction accuracy using geometric error metrics.",
      ],
      roles: ["MATLAB", "Computer Vision", "3D Reconstruction"],
      image: "images/feature-work/point-cloud.jpg",
      gradient: "linear-gradient(135deg, #6a3093 0%, #a044a0 100%)",
      icon: "🗺️",
    },
  ],

  embeddedSystems: [
    {
      name: "Custom Bluetooth Speaker with Dual-Core FreeRTOS Firmware",
      url: "#",
      category: "Embedded Systems",
      context: "Freelance Project",
      description:
        "Designed multithreaded firmware across both ESP32 cores using FreeRTOS task scheduling, mutexes, and semaphores. Integrated A2DP Bluetooth audio streaming with external codec over I2S/I2C. Optimized power consumption using ESP32 ULP coprocessor and dynamic task management.",
      bulletPoints: [
        "Designed and implemented multithreaded firmware architecture across both ESP32 cores using FreeRTOS task scheduling, mutexes, and semaphores.",
        "Integrated A2DP Bluetooth audio streaming with external codec over I2S/I2C.",
        "Managed SPI-based LCD driver and SD card interface with concurrent access protection.",
        "Optimized power consumption using ESP32 ULP coprocessor and dynamic task management.",
      ],
      image: "images/feature-work/speaker.jpg",
      roles: ["Embedded Systems", "FreeRTOS", "ESP32", "C"],
      gradient: "linear-gradient(135deg, #1565c0 0%, #00838f 100%)",
      icon: "🔊",
    },
    {
      name: "ROS-Integrated Real-Time Robot Control Dashboard",
      url: "#",
      category: "Embedded Systems",
      context: "Indian Institute of Technology, Delhi",
      description:
        "Designed and developed a full-stack remote dashboard for RoboMuse5 to enable real-time monitoring, command execution, and bidirectional communication between the operator and robot, focusing on ow-latency control, modular architecture, and reliable message-based synchronization with ROS.",
      bulletPoints: [
        "Developed a dynamic React-based UI to visualize resource usage, robot state, and live telemetry data.",
        "Implemented a Dart backend server to handle command routing, state updates, and client communication.",
        "Designed a multithreaded architecture where one thread managed the server and another interfaced with ROS via Dart bindings.",
        "Enabled real-time bidirectional communication using structured message passing between threads.",
        "Ensured scalable and modular design to support future feature expansion and additional sensor integrations.",
      ],
      image: "images/feature-work/robot.jpg",
      roles: ["Dart", "Flutter", "Intel NUC", "ROS"],
      gradient: "linear-gradient(135deg, #c0392b 0%, #8e24aa 100%)",
      icon: "🤖",
    },
  ],

  controlSystems: [
    {
      name: "Quadcopter Dynamics and Path Tracking",
      url: "#",
      category: "Control Systems & Robotics",
      context: "Robotics Specialization",
      description:
        "Modeled full 6-DOF quadcopter dynamics using Newton–Euler formalism. Designed nested PID control architecture for roll, pitch, yaw stabilization and outer-loop position tracking. Built a piece-wise quadratic spline trajectory generator for smooth 3D paths with feedforward + feedback integration.",
      bulletPoints: [
        "Modeled full 6-DOF quadcopter dynamics using Newton–Euler formalism, capturing translational and rotational coupling effects under near-hover conditions.",
        "Designed a nested control architecture with inner-loop PID controllers for roll, pitch, and yaw stabilization and outer-loop position controller for altitude and planar motion tracking.",
        "Developed piece-wise quadratic spline trajectory generator to produce smooth, differentiable 3D paths.",
        "Implemented feedforward + feedback control integration to reduce steady-state tracking error.",
      ],
      image: "images/feature-work/quadcopter.jpg",
      roles: ["Control Systems", "Robotics", "MATLAB", "PID"],
      gradient: "linear-gradient(135deg, #1b7a3d 0%, #00695c 100%)",
      icon: "🚁",
    },
    {
      name: "Mobile Inverted Pendulum Modeling & Real-Time Control",
      url: "#",
      category: "Control Systems & Robotics",
      context: "Robotics Specialization Capstone",
      description:
        "Modeled nonlinear dynamics and implemented Extended Kalman Filter (EKF) for state estimation. Designed real-time feedback control loop deployed on Arduino hardware platform.",
      bulletPoints: [
        "Modeled nonlinear dynamics and implemented Extended Kalman Filter (EKF) for state estimation.",
        "Designed real-time feedback control loop deployed on Arduino hardware platform.",
        "Integrated MPU6050 IMU and motor drivers with closed-loop stabilization.",
        "Achieved stable self-balancing operation under dynamic disturbances.",
      ],
      image: "images/feature-work/mip.jpg",
      roles: ["Arduino", "EKF", "Control Systems", "C++"],
      gradient: "linear-gradient(135deg, #bf360c 0%, #ad1457 100%)",
      icon: "⚖️",
    },
  ],

  layoutDesign: [
    {
      name: "Full Custom Design of FP16 Floating-Point Multiplier",
      url: "#",
      category: "VLSI Layout Design",
      context: "Indian Institute of Technology, Delhi",
      description:
        "Designed and implemented a custom half-precision (FP16) floating-point multiplier at the transistor level, leveraging novel full-swing GDI-based logic gates to optimize speed and area. Achieved a critical path latency of 2.2 ns through careful datapath optimization and carry-propagation balancing.",
      bulletPoints: [
        "Designed IEEE 754-compliant FP16 multiplication pipeline including exponent handling, mantissa multiplication, normalization, and rounding.",
        "Developed novel full-swing GDI-based logic gates to reduce transistor count while maintaining signal integrity.",
        "Optimized critical datapath to achieve 2.2 ns worst-case propagation delay.",
        "Performed schematic-level simulations to verify functionality, timing, and corner-case behavior.",
        "Evaluated trade-offs between speed, area, and power at the custom design level.",
      ],
      image: "images/feature-work/ic_fpu.jpg",
      roles: ["Cadence Virtuoso", "Cadence Spectre", "Mentor Calibre"],
      gradient: "linear-gradient(135deg, #00695c 0%, #4527a0 100%)",
      icon: "🔬",
    },
    {
      name: "Custom SRAM Memory Layout & Physical Design Optimization",
      url: "#",
      category: "VLSI Layout Design",
      context: "Indian Institute of Technology, Delhi",
      description:
        "Designed and optimized the physical layout of a custom SRAM memory block, focusing on density, matching, and signal integrity at the layout level. Emphasized robust bit-cell design and peripheral integration while meeting timing and design-rule constraints.",
      bulletPoints: [
        "Designed and laid out SRAM bit-cells and peripheral circuits including sense amplifiers, row decoders, and write drivers.",
        "Optimized memory array floorplan for area efficiency, routing regularity, and minimized parasitics.",
        "Ensured DRC/LVS clean layout while maintaining symmetry and matching for improved read stability.",
        "Analyzed post-layout parasitics to evaluate access time and read/write margins.",
        "Balanced trade-offs between cell density, stability (SNM), and performance.",
      ],
      image: "images/feature-work/ic_electron.jpg",
      roles: ["Cadence Virtuoso", "Cadence Spectre", "Mentor Calibre"],
      gradient: "linear-gradient(135deg, #2e7d32 0%, #1a5276 100%)",
      icon: "💾",
    },
  ],

  softwareEngineering: [
    {
      name: "West's Law – Pixelated Top-Down Action Game",
      url: "#",
      category: "Game Development",
      context: "Indie Game Project",
      description:
        "Designed and developed a stylized top-down 2D action game centered around fast-paced combat and escalating boss encounters, emphasizing tight controls and replayability. Focused on gameplay feel, combat balancing, and modular system design to support scalable enemy and level mechanics.",
      bulletPoints: [
        "Architected core gameplay systems including player movement, combat mechanics, and enemy AI behaviors.",
        "Designed boss-rush progression with escalating difficulty and distinct encounter patterns.",
        "Implemented collision systems, health/damage models, and state-driven animation logic.",
        "Tuned combat feedback (visual, timing, and responsiveness) for engaging player experience.",
        "Structured codebase for modularity to enable rapid iteration and feature expansion.",
      ],
      roles: ["C", "LuaJIT", "Defold", "Android", "Web"],
      image: "images/feature-work/west_law.jpg",
      gradient: "linear-gradient(135deg, #c46210 0%, #b71c1c 100%)",
      icon: "🎮",
    },
    {
      name: "VBuild – Incremental HDL Build & Simulation Framework",
      url: "#",
      category: "Build Automation",
      context: "Personal Project",
      description:
        "Designed and developed VBuild, a LuaJIT + C FFI–based incremental build system for Verilog projects to streamline compilation, simulation, and testing workflows. Focused on dependency tracking, extensibility, and automation to improve hardware development productivity.",
      bulletPoints: [
        "Implemented incremental compilation by tracking file dependencies and selectively rebuilding modified modules.",
        "Integrated open-source simulators (Icarus Verilog and GTKWave) for automated simulation and execution pipelines.",
        "Designed a modular plugin architecture supporting custom commands, hooks, and workflow extensions.",
        "Built a command-line interface for configurable builds, test execution, and project management.",
        "Optimized execution flow to reduce turnaround time during iterative hardware debugging.",
      ],
      image: "images/feature-work/hacker.jpg",
      roles: ["LuaJIT", "C", "Open Source", "Verilog"],
      gradient: "linear-gradient(135deg, #1565c0 0%, #283593 100%)",
      icon: "🛠️",
    },
  ],
};
