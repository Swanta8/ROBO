import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Network Scanner Suite',
    category: 'Network Security',
    description: 'Advanced network monitoring and analysis tools built with Python and Nmap for comprehensive network security.',
    technologies: ['Python', 'Nmap', 'Scapy', 'SQLite', 'PyQt5'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1280',
    githubUrl: 'https://github.com/example/network-scanner',
    liveUrl: 'https://demo.network-scanner.com',
    details: {
      overview: 'A comprehensive network security suite that combines multiple scanning techniques for thorough network analysis and vulnerability detection.',
      features: [
        'Real-time network traffic analysis',
        'Port scanning with service detection',
        'Vulnerability assessment',
        'Network mapping visualization',
        'Automated reporting system'
      ],
      implementation: 'Built using Python with Nmap integration for scanning capabilities. Features a PyQt5-based GUI for real-time visualization and SQLite for data persistence.',
      testimonial: 'This tool has become an essential part of our security infrastructure, helping us identify and address vulnerabilities proactively.'
    }
  },
  {
    id: '2',
    title: 'Local LLM Web Scraper',
    category: 'AI & Automation',
    description: 'Privacy-focused web scraping solution powered by locally hosted language models for intelligent data extraction.',
    technologies: ['Python', 'LangChain', 'Llama2', 'FastAPI', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1280',
    githubUrl: 'https://github.com/example/llm-scraper',
    liveUrl: 'https://llm-scraper-demo.com',
    details: {
      overview: 'An innovative web scraping solution that leverages locally hosted language models for intelligent data extraction while maintaining privacy.',
      features: [
        'Local LLM integration',
        'Intelligent data extraction',
        'Custom scraping rules',
        'Data cleaning and structuring',
        'API endpoint generation'
      ],
      implementation: 'Developed using Python with LangChain for LLM integration. Uses FastAPI for the backend and includes a comprehensive dashboard for monitoring and control.',
    }
  },
  {
    id: '3',
    title: 'Cross-Platform GUI Suite',
    category: 'Desktop Applications',
    description: 'Collection of cross-platform desktop applications built with modern frameworks for enhanced user experience.',
    technologies: ['Electron.js', 'React', 'TypeScript', 'PyQt', 'Tkinter'],
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1280',
    githubUrl: 'https://github.com/example/gui-suite',
    liveUrl: 'https://gui-suite.demo.com',
    details: {
      overview: 'A comprehensive collection of desktop applications showcasing various GUI frameworks and their capabilities.',
      features: [
        'Cross-platform compatibility',
        'Modern UI/UX design',
        'Native system integration',
        'Real-time data processing',
        'Customizable themes'
      ],
      implementation: 'Built using multiple frameworks including Electron.js with React for web-based applications and PyQt/Tkinter for Python-based solutions.',
      testimonial: 'The applications have significantly improved our workflow efficiency and user satisfaction.'
    }
  },
  {
    id: '4',
    title: 'MacOS Automation Tools',
    category: 'System Automation',
    description: 'Custom automation workflows for macOS using AppleScript and shell scripting for enhanced productivity.',
    technologies: ['AppleScript', 'Shell', 'Python', 'Swift', 'Automator'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1280',
    githubUrl: 'https://github.com/example/mac-automation',
    liveUrl: 'https://mac-tools.demo.com',
    details: {
      overview: 'A suite of automation tools designed specifically for macOS, enhancing productivity through custom workflows and scripts.',
      features: [
        'Custom workflow automation',
        'System task scheduling',
        'File management automation',
        'Application integration',
        'Event-based triggers'
      ],
      implementation: 'Developed using AppleScript and shell scripting, with additional Python scripts for extended functionality. Includes a Swift-based GUI for easy configuration.',
    }
  },
  {
    id: '5',
    title: 'Digital Solutions Suite',
    category: 'Web Development',
    description: 'Comprehensive collection of web applications and automation solutions for various business needs.',
    technologies: ['React', 'Node.js', 'Python', 'Docker', 'AWS'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1280',
    githubUrl: 'https://github.com/example/digital-solutions',
    liveUrl: 'https://digital-solutions.demo.com',
    details: {
      overview: 'A versatile collection of digital solutions including dashboards, automation scripts, and API integrations.',
      features: [
        'Custom dashboard creation',
        'API integration services',
        'Automated reporting',
        'Data visualization',
        'Cloud deployment'
      ],
      implementation: 'Built using React for frontends, Node.js for backend services, and Python for automation scripts. Deployed using Docker containers on AWS infrastructure.',
      testimonial: 'These solutions have transformed our digital presence and operational efficiency.'
    }
  }
];