export const projects = [
  {
    id: "importwave",
    title: "ImportWave",
    image: "/projects/importwave.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    description: "A comprehensive import/export management platform that helps businesses streamline their international trade operations. Features include order tracking, document management, payment processing, and real-time notifications.",
    fullDescription: "ImportWave is a full-stack web application designed to simplify the complex process of international trade. The platform enables businesses to manage their import/export operations from a single dashboard, reducing paperwork and improving efficiency. Built with modern web technologies, it provides real-time tracking, automated notifications, and seamless payment integration.",
    live: "https://importwave-demo.vercel.app",
    repo: "https://github.com/yourusername/importwave",
    challenges: [
      "Implementing real-time order tracking with WebSocket connections",
      "Integrating multiple payment gateways including Stripe and PayPal",
      "Building a robust document management system with file uploads",
      "Optimizing database queries for large-scale order processing",
      "Implementing role-based access control for different user types"
    ],
    future: [
      "Add AI-powered customs duty calculator",
      "Implement blockchain-based document verification",
      "Build mobile applications for iOS and Android",
      "Add multi-language support for global users",
      "Create analytics dashboard with business intelligence"
    ],
  },
  {
    id: "taskify-pro",
    title: "Taskify Pro",
    image: "/projects/taskify.png",
    tech: ["React", "TypeScript", "Redux", "Firebase", "Tailwind CSS"],
    description: "A feature-rich task management application with team collaboration, drag-and-drop kanban boards, time tracking, and advanced filtering. Perfect for teams and individuals who want to stay organized.",
    fullDescription: "Taskify Pro is a modern productivity application that combines the simplicity of a todo app with powerful project management features. The application supports multiple workspaces, team collaboration, file attachments, comments, and deadline tracking. With a beautiful, intuitive interface, it makes task management enjoyable and efficient.",
    live: "https://taskify-pro.vercel.app",
    repo: "https://github.com/yourusername/taskify-pro",
    challenges: [
      "Building a real-time collaboration system using Firebase",
      "Implementing drag-and-drop functionality across different boards",
      "Managing complex state with Redux for multiple workspaces",
      "Creating an efficient notification system for team updates",
      "Optimizing performance for large datasets with virtualization"
    ],
    future: [
      "Add calendar view and timeline visualization",
      "Implement AI-powered task prioritization",
      "Build native mobile apps with React Native",
      "Add integrations with Slack, Google Calendar, and Jira",
      "Create custom automation workflows"
    ],
  },
  {
    id: "foodie-delight",
    title: "Foodie Delight",
    image: "/projects/foodie.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS S3"],
    description: "An online food delivery platform with restaurant listings, menu management, cart functionality, order tracking, and payment integration. Built with performance and user experience in mind.",
    fullDescription: "Foodie Delight is a complete food delivery ecosystem that connects customers with local restaurants. The platform features an intuitive search system, detailed restaurant pages, customizable menu items, secure checkout process, and real-time order tracking. Restaurant owners can manage their menus, track orders, and view analytics through a dedicated dashboard.",
    live: "https://foodie-delight.vercel.app",
    repo: "https://github.com/yourusername/foodie-delight",
    challenges: [
      "Implementing real-time order tracking with location updates",
      "Building a robust image upload system with AWS S3",
      "Creating a secure payment flow with Stripe integration",
      "Optimizing database queries for fast search and filtering",
      "Implementing geolocation-based restaurant recommendations"
    ],
    future: [
      "Add loyalty program with points and rewards",
      "Implement chatbot for customer support",
      "Build driver app for delivery personnel",
      "Add social features like reviews and ratings",
      "Create meal planning and subscription features"
    ],
  },
];
