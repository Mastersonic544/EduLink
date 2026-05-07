export const TEACHERS = [
    { id: 1, name: "Dr. Robert Chen", institution: "Stanford", avatar: "https://i.pravatar.cc/150?u=1", verified: true, subject: "Computer Science", xp: 1250, followers: 840 },
    { id: 2, name: "Prof. Elena Rodriguez", institution: "MIT", avatar: "https://i.pravatar.cc/150?u=2", verified: true, subject: "Physics", xp: 980, followers: 1200 },
    { id: 3, name: "Dr. Sarah Ahmed", institution: "Cairo", avatar: "https://i.pravatar.cc/150?u=3", verified: true, subject: "Math", xp: 750, followers: 430 },
    { id: 4, name: "Prof. James Wilson", institution: "Oxford", avatar: "https://i.pravatar.cc/150?u=4", verified: true, subject: "History", xp: 1100, followers: 920 },
    { id: 5, name: "Dr. Michael Scott", institution: "Scranton", avatar: "https://i.pravatar.cc/150?u=5", verified: false, subject: "Business", xp: 420, followers: 120 },
    { id: 6, name: "Prof. Ada Lovelace", institution: "Turing Inst.", avatar: "https://i.pravatar.cc/150?u=6", verified: true, subject: "CS", xp: 5000, followers: 9999 },
];

export const POSTS = [
    {
        id: 1, teacherId: 1, type: "Course Material", tags: ["Algorithms", "Complexity"],
        title: "Advanced Algorithm Design - Week 4",
        description: "Lecture slides covering graph algorithms and dynamic programming. Includes sample problems and solutions.",
        likes: 124, comments: [], shares: 42, downloads: 856, createdAt: "2h ago", fileName: "Algorithms_W4.pdf", fileSize: "4.2 MB"
    },
    {
        id: 2, teacherId: 2, type: "Teaching Methodology", tags: ["Active Learning", "Physics"],
        title: "Interactive Physics: A New Approach",
        description: "My experience implementing peer instruction in large lecture halls. Significant improvement in student engagement observed.",
        likes: 89, comments: [], shares: 12, downloads: 145, createdAt: "5h ago"
    },
    {
        id: 3, teacherId: 3, type: "Course Material", tags: ["Calculus", "Online Tools"],
        title: "Calculus Visualizer Collection",
        description: "A collection of interactive graphs I've built to help students visualize integration by parts and triple integrals.",
        likes: 56, comments: [], shares: 8, downloads: 320, createdAt: "1d ago"
    },
    {
        id: 4, teacherId: 4, type: "Experience & Reflection", tags: ["Assessment", "History"],
        title: "Redesigning History Exams for the AI Era",
        description: "Moving from take-home essays to oral exams and in-class primary source analysis. It's tough but worth it.",
        likes: 210, comments: [], shares: 67, downloads: 0, createdAt: "2d ago"
    },
    {
        id: 5, teacherId: 6, type: "Teaching Methodology", tags: ["Logic", "Computing"],
        title: "Logic Gates: A Mechanical Approach",
        description: "Using physical marbles to explain Boolean logic. Surprisingly effective for younger students.",
        likes: 450, comments: [], shares: 120, downloads: 55, createdAt: "1h ago"
    },
    {
        id: 6, teacherId: 1, type: "Course Material", tags: ["Data Science", "Python"],
        title: "Pandas for Biologists",
        description: "A crash course in data manipulation specifically tailored for biological datasets.",
        likes: 112, comments: [], shares: 33, downloads: 445, createdAt: "3h ago"
    },
    {
        id: 7, teacherId: 2, type: "Experience & Reflection", tags: ["Astronomy", "Mental Health"],
        title: "The Overview Effect in the Classroom",
        description: "How teaching astronomy helps students manage existential anxiety. A personal reflection.",
        likes: 67, comments: [], shares: 15, downloads: 12, createdAt: "6h ago"
    },
    {
        id: 8, teacherId: 3, type: "Course Material", tags: ["Linear Algebra"],
        title: "Eigenvalues with Ease",
        description: "A new visualization tool for understanding linear transformations.",
        likes: 95, comments: [], shares: 20, downloads: 156, createdAt: "9h ago"
    },
    {
        id: 9, teacherId: 4, type: "Course Material", tags: ["Medieval History"],
        title: "The Magna Carta: Interactive Timeline",
        description: "Digital resource for exploring the clauses and consequences of the 1215 charter.",
        likes: 134, comments: [], shares: 56, downloads: 432, createdAt: "10h ago"
    },
    {
        id: 10, teacherId: 5, type: "Teaching Methodology", tags: ["Sales", "Business"],
        title: "The Ledger of Lessons",
        description: "Why emotional intelligence matters more than spreadsheets in business school.",
        likes: 42, comments: [], shares: 5, downloads: 2, createdAt: "12h ago"
    },
    {
        id: 11, teacherId: 6, type: "Course Material", tags: ["Hardware"],
        title: "Analytical Engine Simulator",
        description: "Java-based simulator for the world's first theoretical computer.",
        likes: 890, comments: [], shares: 340, downloads: 120, createdAt: "15h ago"
    },
    {
        id: 12, teacherId: 1, type: "Experience & Reflection", tags: ["Academic Life"],
        title: "Why Mentorship is Exhausting",
        description: "Honest thoughts on the emotional labor of PhD supervision.",
        likes: 1023, comments: [], shares: 88, downloads: 0, createdAt: "18h ago"
    },
    {
        id: 13, teacherId: 2, type: "Course Material", tags: ["Physics Lab"],
        title: "Remote Physics Labs: A Guide",
        description: "How to conduct high-fidelity physics experiments using only household items.",
        likes: 245, comments: [], shares: 90, downloads: 1200, createdAt: "21h ago"
    },
    {
        id: 14, teacherId: 3, type: "Teaching Methodology", tags: ["Inclusive Education"],
        title: "Universal Design for Algebra",
        description: "Making abstract mathematics accessible to neurodivergent learners.",
        likes: 189, comments: [], shares: 76, downloads: 340, createdAt: "1d ago"
    },
    {
        id: 15, teacherId: 4, type: "Course Material", tags: ["Art History"],
        title: "Renaissance Perspectives",
        description: "A digital gallery of 15th-century architecture and its geometric foundations.",
        likes: 120, comments: [], shares: 45, downloads: 210, createdAt: "1d ago"
    },
    {
        id: 16, teacherId: 1, type: "Course Material", tags: ["Security"],
        title: "Introduction to Cryptography",
        description: "Slides and lab notes for the first three weeks of undergrad info-sec.",
        likes: 312, comments: [], shares: 110, downloads: 990, createdAt: "2d ago"
    },
    {
        id: 17, teacherId: 6, type: "Experience & Reflection", tags: ["Future of Ed"],
        title: "Calculations vs Creativity",
        description: "Why the next generation of coders will be philosophers as much as engineers.",
        likes: 5600, comments: [], shares: 1200, downloads: 0, createdAt: "2d ago"
    },
    {
        id: 18, teacherId: 2, type: "Course Material", tags: ["Thermodynamics"],
        title: "Entropy for Poets",
        description: "Explaining the second law of thermodynamics through literary metaphors.",
        likes: 432, comments: [], shares: 67, downloads: 890, createdAt: "3d ago"
    },
    {
        id: 19, teacherId: 5, type: "Teaching Methodology", tags: ["Company Culture"],
        title: "Business 101: The Paper Company Case",
        description: "A case study on regional management and supply chain dynamics.",
        likes: 15, comments: [], shares: 1, downloads: 5, createdAt: "3d ago"
    },
    {
        id: 20, teacherId: 1, type: "Course Material", tags: ["Machine Learning"],
        title: "Neural Networks from Scratch",
        description: "Step-by-step guide to building a backpropagation algorithm in pure JS.",
        likes: 789, comments: [], shares: 231, downloads: 1500, createdAt: "4d ago"
    }
];
