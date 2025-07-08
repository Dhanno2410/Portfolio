
import type { Project, SkillCategory, NavLink, Achievement, AcademicProject, Experience, Education } from './types';

export const PERSONAL_DATA = {
    name: 'Dhanashree Bhandari',
    title: 'IT Analyst/ ERP Consultant',
    bio: "I'm a passionate and detail-oriented professional with a strong background in Computer Science and Management. I specialize in developing impactful solutions that blend technical precision with creative thinking. Driven by continuous learning and collaboration, I bring a unique combination of analytical skills and human-centered approach to every project I undertake.",
    profilePicture: 'https://ui-avatars.com/api/?name=Dhanashree+Bhandari&background=9333ea&color=fff&size=256&font-size=0.33&bold=true',
    email: 'dhanashreeb2410@gmail.com',
    experience: '2.5+',
    social: {
        linkedin: 'https://linkedin.com/in/dhanashree-bhandari',
    }
};

export const NAV_LINKS: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education'},
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Academic Work', href: '#academic-projects'},
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

export const EDUCATION: Education[] = [
    {
        degree: 'Master of Science in Information System Management',
        institution: 'National University of Ireland, Galway',
        duration: 'Sep 2024 - Present',
        location: 'Galway, Ireland'
    },
    {
        degree: 'Bachelor of Engineering, Computer Engineering',
        institution: 'University of Pune, India',
        duration: 'Aug 2019 – May 2022',
        location: 'Pune, India'
    }
];

export const EXPERIENCES: Experience[] = [
    {
        role: 'IT Analyst / ERP Consultant',
        company: 'Johnson Controls',
        duration: 'Jul 2022 - Aug 2024',
        location: 'India',
        responsibilities: [
            'Acted as a functional consultant for Oracle Fusion ERP modules, analyzing business processes and identifying opportunities for system improvements.',
            'Served as a key liaison between business stakeholders and technical teams to gather requirements, define project scope, and translate needs into functional specifications.',
            'Managed and executed User Acceptance Testing (UAT) cycles for quarterly system upgrades, coordinating with users and resolving defects to ensure seamless transitions.',
            'Coordinated project activities and communicated status updates to stakeholders, ensuring alignment with project timelines and objectives.'
        ]
    },
    {
        role: 'IT Intern',
        company: 'Johnson Controls',
        duration: 'Jan 2022 - Jun 2022',
        location: 'India',
        responsibilities: [
            'Supported project teams in documenting business requirements and creating test scripts for Oracle ERP system enhancements.',
            'Assisted in the analysis of business processes within Procure-to-Pay (P2P) and Order-to-Cash (O2C) cycles.',
            'Contributed to system maintenance tasks and provided support for incident management in a corporate IT environment.'
        ]
    }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: 'Technical & Programming',
        skills: [
            { name: 'Python' },
            { name: 'SQL' },
            { name: 'Machine Learning' },
            { name: 'REST APIs' },
            { name: 'Shell Scripting' },
            { name: 'Linux' },
        ]
    },
    {
        name: 'ERP & Business Intelligence',
        skills: [
            { name: 'Oracle Fusion ERP (P2P, O2C)' },
            { name: 'Power BI' },
            { name: 'Microsoft Excel' },
            { name: 'Microsoft Office 365' },
            { name: 'SharePoint' },
            { name: 'Oracle Digital Assistant' },
        ]
    },
    {
        name: 'Methodologies & Tools',
        skills: [
            { name: 'Agile (Scrum)' },
            { name: 'Waterfall' },
            { name: 'Jira' },
            { name: 'Confluence' },
            { name: 'Figma' },
            { name: 'Git' },
            { name: 'UAT' },
        ]
    },
    {
        name: 'Cloud',
        skills: [
             { name: 'Azure (Basic)' },
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'Oracle Fusion Quarterly Upgrade',
        description: "Ensured seamless adoption of Oracle Fusion Cloud's quarterly release updates by validating new features, testing system behaviour, and minimizing business disruption across Finance, Procurement, and HCM modules.",
        tags: ['Oracle Fusion', 'UAT', 'Regression Testing', 'Finance', 'Procurement', 'HCM'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Oracle Digital Assistant Implementation',
        description: 'Enhanced user experience and operational efficiency by deploying Oracle Digital Assistant (ODA) to automate routine business processes across Procure-to-Pay (P2P), Order-to-Cash (O2C), and Human Capital Management (HCM).',
        tags: ['Oracle Digital Assistant', 'Chatbots', 'P2P', 'O2C', 'HCM', 'Automation'],
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Oracle Fusion ERP Implementation',
        description: 'Led the implementation and customization of Oracle Fusion ERP Cloud for a multinational client, focusing on Procure-to-Pay (P2P) and Order-to-Cash (O2C) modules. Automated key business processes, designed custom reports, and provided user training, resulting in a 20% increase in operational efficiency.',
        tags: ['Oracle Fusion ERP', 'P2P', 'O2C', 'SQL', 'Agile', 'Business Process Automation'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    }
];

export const ACADEMIC_PROJECTS: AcademicProject[] = [
    {
        title: 'SmartValuation: Predicting Irish House Prices with ML',
        objective: 'To develop a machine learning model to predict house prices in Ireland using publicly available datasets. The goal was to analyze key real estate features, build accurate predictive models, and provide insights into market trends and price drivers.',
        roleAndContribution: [
            'Collected and pre-processed housing data from Irish property datasets.',
            'Applied regression algorithms (Linear, Ridge, Random Forest) to model housing price trends.',
            'Achieved an R² score of 0.87 with Random Forest, indicating strong model accuracy.',
            'Visualized prediction results and feature importance to interpret model performance.'
        ],
        technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Visualization']
    },
    {
        title: 'Retail Shrinkage Analytics Dashboard',
        objective: 'To build a Power BI dashboard that visualizes inventory shrinkage across multiple retail stores, identify trends, and support targeted loss prevention strategies.',
        roleAndContribution: [
            'Integrated data from inventory logs, POS systems, and shrinkage reports using Power Query and SQL.',
            'Developed DAX measures to calculate shrinkage by product category, time, and location.',
            'Created dynamic visuals like heat maps, trend lines, and slicers for deep-dive analysis.',
            'Collaborated with stakeholders to interpret insights and propose actionable loss prevention strategies.'
        ],
        technologies: ['Power BI', 'SQL', 'DAX', 'Power Query', 'Data Analysis']
    },
    {
        title: 'Empowering Maritime Connectivity',
        objective: 'To enhance maritime communication by implementing robust, real-time connectivity solutions for vessels and offshore operations, ensuring reliable data transmission and improved operational efficiency.',
        roleAndContribution: [
            'Gathered system requirements and conducted gap analysis of existing infrastructure.',
            'Collaborated in an Agile environment to design and prototype satellite-based and hybrid connectivity solutions.',
            'Assisted in sprint planning, documentation, and stakeholder presentations.',
            'Supported connectivity performance testing and validated solution resilience in simulated maritime conditions.'
        ],
        technologies: ['Agile', 'System Analysis', 'Prototyping', 'Requirement Gathering']
    }
];


export const ACHIEVEMENTS: Achievement[] = [
    {
        title: 'Enterprise Challenge Winner',
        description: 'Developed innovative solutions to real-world business challenges in a competitive setting.',
    },
    {
        title: 'President Award, University of Galway',
        description: 'Honoured for leadership and innovation during the Enterprise Challenge.',
    },
    {
        title: 'Employability Award, University of Galway',
        description: 'Recognized for exceptional teamwork, critical thinking, and leadership performance.',
    },
    {
        title: 'Business Postgraduate Merit Scholarship, University of Galway',
        description: 'Awarded a merit-based scholarship for academic excellence.',
    }
];

// This context is fed to the Gemini API to provide information about you.
export const PORTFOLIO_CONTEXT = `
You are Dhanashree Bhandari's personal AI assistant integrated into her portfolio website. Your purpose is to answer questions about Dhanashree based ONLY on the information provided below. Be friendly, professional, and helpful. If a question is outside the scope of this information, politely state that you can only answer questions about Dhanashree's professional background as presented here.

**Personal Information:**
- Name: ${PERSONAL_DATA.name}
- Title: ${PERSONAL_DATA.title}
- Experience: ${PERSONAL_DATA.experience} Years
- Bio: ${PERSONAL_DATA.bio}
- Contact Email: ${PERSONAL_DATA.email}
- LinkedIn: ${PERSONAL_DATA.social.linkedin}

**Education:**
${EDUCATION.map(edu => `
- **Degree:** ${edu.degree}
  - **Institution:** ${edu.institution}
  - **Duration:** ${edu.duration}`
).join('\n')}

**Work Experience:**
${EXPERIENCES.map(exp => `
- **Role:** ${exp.role} at ${exp.company}
  - **Duration:** ${exp.duration}
  - **Key Responsibilities:** ${exp.responsibilities.join('. ')}.`
).join('\n')}

**Skills:**
Dhanashree has a diverse skill set, which can be broken down into the following categories:
${SKILL_CATEGORIES.map(category => `
- **${category.name}:** ${category.skills.map(skill => skill.name).join(', ')}`
).join('')}

**Professional Projects:**
Here are some of Dhanashree's featured professional projects:
${PROJECTS.map(p => `
- **Project Title:** ${p.title}
  - **Description:** ${p.description}
  - **Technologies Used:** ${p.tags.join(', ')}
`).join('\n')}

**Academic & Capstone Projects:**
Here are some of Dhanashree's key academic projects:
${ACADEMIC_PROJECTS.map(p => `
- **Project Title:** ${p.title}
  - **Objective:** ${p.objective}
  - **Role & Contributions:** ${p.roleAndContribution.join('. ')}.
  - **Technologies Used:** ${p.technologies.join(', ')}
`).join('\n')}


**Achievements:**
Dhanashree has been recognized with the following awards:
${ACHIEVEMENTS.map(a => `
- **${a.title}:** ${a.description}`).join('\n')}
`;
