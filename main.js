// Projects Data
const projects = [
    // Hardware Projects
    {
        title: "Hardware-Integrated Antivirus System",
        description: "Developed a PC-based hardware antivirus prototype where the laptop functioned as the microprocessor. Implemented in C/C++ and Python, the system leveraged OS-level APIs for comprehensive endpoint monitoring and anomaly detection.",
        tech: "C/C++, Python, OS-Level APIs, Anomaly Detection, Cybersecurity",
        outcome: "Successfully demonstrated how standard laptops can be repurposed as host processors for advanced, hardware-integrated cybersecurity solutions with 90% threat detection accuracy."
    },
    {
        title: "IoT-Based Industrial Water Monitoring System",
        description: "Developed a real-time water quality monitoring system using ESP32 with cloud integration for industrial applications.",
        tech: "ESP32, Cloud Platform, MQTT, Sensors",
        outcome: "Enabled remote monitoring of water quality parameters with 95% accuracy."
    },
    {
        title: "Wi-Fi Threat Detection System",
        description: "Implemented a system to detect and prevent unauthorized Wi-Fi access using ESP32/ESP8266.",
        tech: "ESP32/ESP8266, Embedded C, Wi-Fi Security",
        outcome: "Detected 98% of intrusion attempts with real-time notifications."
    },
    {
        title: "End Point Detection System",
        description: "Developed a system for detecting and monitoring endpoints in a network.",
        tech: "Embedded C, Python, Network Protocols",
        outcome: "Achieved comprehensive network visibility with 99% accuracy."
    },
    {
        title: "IoT Bootcamp Project",
        description: "Developed a Wi-Fi monitoring system using Raspberry Pi Pico W for network analysis.",
        tech: "Raspberry Pi Pico W, MicroPython, Wi-Fi",
        outcome: "Successfully implemented network packet analysis with real-time alerts."
    },
    {
        title: "Circuit Design & Simulation",
        description: "Designed and simulated various electronic circuits using NI Multisim for academic and personal projects.",
        tech: "NI Multisim, Circuit Design, Simulation",
        outcome: "Created 20+ circuit designs with detailed analysis and documentation."
    },
    
    
    // Tech/Software Projects
    {
        title: "Deepfake & Morphing Detector",
        description: "Created an advanced detection system to identify deepfake videos and image morphing attacks using deep learning. Implemented frame-level analysis and temporal consistency checks for video authentication.",
        tech: "Python, TensorFlow, OpenCV, CNN, LSTM",
        outcome: "Developed a robust model with 94% accuracy in detecting manipulated media, contributing to digital media forensics."
    },
    {
        title: "Dog Eye Image Segmentation",
        description: "Developed a deep learning model for precise segmentation of dog eyes in images using U-Net architecture. Implemented data augmentation techniques to handle variations in lighting and angles.",
        tech: "Python, TensorFlow, OpenCV, U-Net, Data Augmentation",
        outcome: "Achieved 92% accuracy in segmenting dog eyes, enabling applications in veterinary diagnostics and pet health monitoring."
    },
    {
        title: "Skill Swap - Skill Exchange Platform",
        description: "Built a web platform that enables users to exchange skills and knowledge. Implemented user authentication, skill matching algorithms, and real-time chat functionality.",
        tech: "React.js, Node.js, Express, MongoDB, Socket.io",
        outcome: "Created a community-driven platform for users, facilitating knowledge sharing and skill development."
    },
    {
        title: "Web Interfaces for IoT Dashboards",
        description: "Built responsive web interfaces for IoT device management and data visualization.",
        tech: "HTML, CSS, Bootstrap, JavaScript",
        outcome: "Improved user experience with intuitive dashboards and real-time data visualization."
    },
];

// Certifications Data
const certifications = [
    {
        title: "Arduino Fundamentals",
        issuer: "GUVI HCL",
        year: "2024"
    },
    {
        title: "IoT Bootcamp Recognition",
        issuer: "KCG College of Technology",
        year: "2025"
    },
    {
        title: "Prompt Engineering Basics",
        issuer: "GUVI HCL",
        year: "2024"
    },
    {
        title: "Introduction to IoT",
        issuer: "NPTEL",
        year: "2025"
    },
    {
        title: "Linguistic Skills (CFER Level B1)",
        issuer: "Cambridge English",
        year: "2024"
    }
];

// Achievements Data
const achievements = [
    "Participated in Sakthi Hackathon 2025 - Developed innovative IoT solution for Smart Industries",
    "Participated in Innothon 2025 - Created embedded system prototype for environmental monitoring",
    "Participated in Smart City Challange 2025 - Devoloped a IoT based Smart Traffic System",
    "Grade 7 Certified Sketch Artist - Recognized for artistic skills and creativity",
    "Certified at CFER Level B1 in Linguistic Skills by Cambridge English",
    "Got Elite Achievement on NPTEL - 'Introduction to IoT' Course"
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6 col-lg-4 mb-4 project-card';
        projectCard.innerHTML = `
            <div class="card h-100 animate-fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <p class="text-muted"><strong>Tech Stack:</strong> ${project.tech}</p>
                    <p class="text-muted"><strong>Outcome:</strong> ${project.outcome}</p>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Load certifications
    const certsContainer = document.getElementById('certifications-container');
    certifications.forEach((cert, index) => {
        const certCol = document.createElement('div');
        certCol.className = 'col-md-4 mb-4';
        certCol.innerHTML = `
            <div class="card h-100 animate-fade-in" style="animation-delay: ${index * 0.2}s">
                <div class="card-body">
                    <h5 class="card-title">${cert.title}</h5>
                    <p class="card-text">${cert.issuer}</p>
                    <span class="badge bg-secondary">${cert.year}</span>
                </div>
            </div>
        `;
        certsContainer.appendChild(certCol);
    });

    // Load achievements
    const achievementsContainer = document.getElementById('achievements-container');
    achievements.forEach((achievement, index) => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'col-12 mb-3';
        achievementItem.innerHTML = `
            <div class="d-flex align-items-start animate-fade-in" style="animation-delay: ${index * 0.15}s">
                <i class="fas fa-arrow-circle-right text-warning me-3 mt-1"></i>
                <p class="mb-0">${achievement}</p>
            </div>
        `;
        achievementsContainer.appendChild(achievementItem);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-fade-in');
                element.style.opacity = '1';
            }
        });
    };

    // Initial check for elements in viewport
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

// Add loading animation
function showLoadingAnimation() {
    const loading = document.createElement('div');
    loading.className = 'loading-overlay';
    loading.innerHTML = `
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;
    document.body.appendChild(loading);
}

// Remove loading animation when page is fully loaded
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading-overlay');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 500);
    }
});

// Add loading styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .spinner-border {
        width: 3rem;
        height: 3rem;
    }
`;
document.head.appendChild(loadingStyles);

// Show loading animation when page starts loading
showLoadingAnimation();
