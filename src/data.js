import { 
    MessageSquare, 
    Calendar, 
    Target, 
    Users, 
    Lightbulb, 
    CheckCircle,
    Coffee,
    Wine,
    BadgeAlert,
    Briefcase,
    Settings,
    Shield,
    BookOpen
} from 'lucide-react';

export const aboutData = {
    name: "Ujwal Acharya",
    title: "Food & Beverage Service Expert",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tagline: "Dedicated hospitality professional delivering exceptional guest experiences with a focus on teamwork, leadership, and operational excellence.",
    summary: "I am a customer-focused Food & Beverage professional with proven experience in luxury hospitality. Passionate about delivering memorable guest experiences, I thrive in fast-paced environments where teamwork, persuasive communication, and adaptable leadership are essential. I pride myself on maintaining high standards of service and operational excellence.",
    location: "Dubai, UAE",
    email: "ujwal.acharya@example.com",
    phone: "+971 50 000 0000",
    aboutImage1: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    aboutImage2: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    aboutImage3: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
};

export const experienceData = [
    {
        id: 1,
        role: "Food and Beverage Service Expert",
        company: "St. Regis Dubai, The Palm",
        location: "UAE",
        dates: "10/2023 – Present",
        responsibilities: [
            "Ensure highest standards of guest satisfaction and handle complaints promptly and professionally.",
            "Manage cashiering duties efficiently using Micros POS system.",
            "Maintain immaculate hygiene and service standards in alignment with luxury hotel protocols.",
            "Collaborate with the culinary and service teams to ensure seamless F&B operations."
        ]
    },
    {
        id: 2,
        role: "Food and Beverage Intern",
        company: "Lapita Dubai Park and Resort",
        location: "Dubai, UAE",
        dates: "10/2022 – 10/2023",
        responsibilities: [
            "Executed mise-en-place and assisted in daily F&B preparations.",
            "Supported bartending duties and gained fundamental beverage knowledge.",
            "Assisted in delivering high-quality service across various restaurant outlets within the resort."
        ]
    },
    {
        id: 3,
        role: "Banquet Team Leader",
        company: "Star Banquet",
        location: "Lalitpur, Nepal",
        dates: "12/2021 – 09/2022",
        responsibilities: [
            "Led banquet operations, ensuring smooth execution of large-scale events and functions.",
            "Coordinated with various departments to meet client requirements and expectations.",
            "Trained and supervised junior staff to maintain service excellence."
        ]
    }
];

export const educationData = [
    {
        degree: "Bachelor in Hotel Management",
        institution: "Kantipur International College",
        location: "Kathmandu, Nepal",
        dates: "Oct 2018 – Oct 2023"
    },
    {
        degree: "Master of Hospitality Management",
        institution: "Global School of Hospitality",
        location: "Geneva, Switzerland",
        dates: "2024 - Present"
    },
    {
        degree: "Advanced Culinary Arts Diploma",
        institution: "Le Cordon Bleu",
        location: "Paris, France",
        dates: "2023 - 2024"
    }
];

export const coreSkills = [
    { name: "Communication", icon: "MessageSquare" },
    { name: "Team Leadership", icon: "Users" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Time Management", icon: "Clock" }
];

export const expertiseAreas = [
    { name: "Hygiene management", icon: "Shield" },
    { name: "Food allergens & intolerance", icon: "BadgeAlert" },
    { name: "À la carte restaurant experience", icon: "Briefcase" },
    { name: "Alcoholic/non-alcoholic beverage knowledge", icon: "Wine" },
    { name: "Cashiering & Micros POS", icon: "Settings" },
    { name: "F&B operations knowledge", icon: "Coffee" },
    { name: "Bar & food basics", icon: "Coffee" },
    { name: "Leadership & decision-making", icon: "Users" },
    { name: "Adaptability", icon: "Target" },
    { name: "Team collaboration", icon: "Users" }
];

export const trainingData = [
    { 
        name: "Basic Food Handling Training", 
        year: "2023", 
        icon: "BookOpen", 
        image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", 
        description: "Comprehensive training on safe food preparation, storage, and cross-contamination prevention.",
        details: "This certification course covered all essential aspects of food safety required in a professional kitchen environment. It ensures compliance with local health regulations and promotes a culture of safety.",
        highlights: [
            "Proper handwashing and personal hygiene standards",
            "Safe temperature control for food storage and cooking",
            "Identifying and preventing cross-contamination",
            "Effective cleaning and sanitizing procedures"
        ]
    },
    { 
        name: "HACCP Food & Safety Training", 
        icon: "Shield", 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", 
        description: "Advanced certification covering hazard analysis and critical control points in food safety management.",
        details: "An internationally recognized systematic preventive approach to food safety from biological, chemical, and physical hazards in production processes.",
        highlights: [
            "Conducting thorough hazard analysis",
            "Determining Critical Control Points (CCPs)",
            "Establishing critical limits and monitoring procedures",
            "Implementing corrective actions and verification procedures"
        ]
    },
    { 
        name: "Guest Satisfaction Training", 
        icon: "Users", 
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", 
        description: "Techniques and strategies for anticipating guest needs and delivering exceptional service experiences.",
        details: "Focused on the psychology of hospitality, this training provided practical tools to exceed guest expectations and handle difficult situations gracefully in a luxury setting.",
        highlights: [
            "Active listening and empathetic communication",
            "De-escalation techniques for guest complaints",
            "Anticipating needs before they are articulated",
            "Personalizing the guest experience"
        ]
    },
    { 
        name: "Communication Training", 
        icon: "MessageSquare", 
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", 
        description: "Effective interpersonal communication skills for seamless team collaboration and conflict resolution.",
        details: "A workshop designed to improve internal team dynamics and cross-departmental coordination, ensuring smooth operations during peak service hours.",
        highlights: [
            "Clear and concise verbal communication in high-stress environments",
            "Non-verbal cues and body language awareness",
            "Constructive feedback delivery and reception",
            "Cultural sensitivity in a diverse workplace"
        ]
    }
];

export const projectsData = {
    title: "Coffee Shop & Bakery Project",
    description: "Led the project end-to-end, overseeing sourcing, purchasing, and menu design. Implemented effective cost control measures and ensured smooth operational flow from inception to execution.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    fullDescription: "Spearheaded the conceptualization and launch of a premium coffee shop and bakery. This comprehensive project involved managing all phases of development from initial business planning to daily operations.",
    highlights: [
        "Sourced high-quality coffee beans and baking ingredients from premium local and international suppliers.",
        "Designed an innovative and cost-effective menu that maximized profit margins without compromising quality.",
        "Implemented strict cost control measures, reducing operational wastage by 15% in the first quarter.",
        "Recruited, trained, and managed a team of 10+ baristas and service staff.",
        "Ensured compliance with all health, safety, and hygiene regulations during the build-out and operational phases."
    ]
};

export const languagesData = [
    { name: "Nepali", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" }
];

export const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Facebook", url: "#", icon: "facebook" }
];

export const testimonialsData = [
    {
        quote: "Ujwal brings an unmatched level of professionalism and an incredible eye for detail. His ability to manage complex operations while keeping the team motivated and focused on guest satisfaction is truly remarkable.",
        author: "Sarah Jenkins",
        role: "General Manager, The Grand Hotel",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        quote: "Working with Ujwal during the launch of our flagship restaurant was a masterclass in operational efficiency. He knows how to balance tight budgets with premium luxury standards seamlessly.",
        author: "Chef Michael Roux",
        role: "Executive Chef",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
];
