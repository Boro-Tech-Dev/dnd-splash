import type { LucideIcon } from "lucide-react";
import {
  Globe, Zap, Activity, Database, Layout, Server, Code, Box, Download, Star,
} from "lucide-react";

export type AppEntry = {
  id: number;
  name: string;
  category: string;
  description: string[];
  version: string;
  installs: string;
  icon: LucideIcon;
  color: string;
  status: string;
};

export const apps = [
  { 
    id: 1, name: "Ghost CMS", category: "Content", 
    description: [
      "A powerful, professional publishing platform built for modern creators and media businesses. It features a rich editor, membership tiers, and seamless newsletter delivery out of the box.",
      "Deploying Ghost provides a highly performant Node.js architecture with built-in SEO optimization. Ideal for turning an audience into a sustainable recurring revenue stream."
    ],
    version: "5.71.0", installs: "12k", icon: Globe, color: "#00d9ff", status: "Ready" 
  },
  { 
    id: 2, name: "n8n", category: "Automation", 
    description: [
      "An extendable workflow automation tool that enables you to connect anything to everything via its open, node-based architecture. Build complex logic without hitting API rate limits.",
      "Perfect for integrating disparate SaaS applications, managing ETL pipelines, and automating routine operational tasks. It features both a visual builder and deep code-level customization."
    ],
    version: "1.15.2", installs: "8.5k", icon: Zap, color: "#ff6b00", status: "Ready" 
  },
  { 
    id: 3, name: "Metabase", category: "Analytics", 
    description: [
      "The simplest, fastest way to share data and analytics inside your organization. It connects to your databases and brings them to life in beautiful, interactive dashboards.",
      "Empower non-technical teams to ask questions of their data without writing SQL. Includes automated report generation, granular access controls, and deep drill-down capabilities."
    ],
    version: "0.47.2", installs: "15k", icon: Activity, color: "#a855f7", status: "Popular" 
  },
  { 
    id: 4, name: "Supabase", category: "Backend", 
    description: [
      "The premier open-source alternative to Firebase, offering a dedicated PostgreSQL database, real-time subscriptions, and built-in user accounts for modern web applications.",
      "Instantly spin up REST and GraphQL APIs, manage row-level security, and utilize Edge Functions. Built for scalability and total data ownership without vendor lock-in."
    ],
    version: "1.110.1", installs: "22k", icon: Database, color: "#00ff88", status: "Popular" 
  },
  { 
    id: 5, name: "Directus", category: "Content", 
    description: [
      "A real-time API and App dashboard for managing SQL database content. It acts as a dynamic wrapper that instantly provides a beautiful headless CMS for any SQL database.",
      "Completely unopinionated and incredibly extensible, allowing developers to maintain full schema control while giving editors a polished, no-code data management interface."
    ],
    version: "10.7.1", installs: "6.2k", icon: Layout, color: "#ff6b00", status: "Ready" 
  },
  { 
    id: 6, name: "Uptime Kuma", category: "Tools", 
    description: [
      "A brilliant, self-hosted monitoring tool offering a fast, reactive dashboard. Keep a close eye on your infrastructure with support for HTTP(s), Ping, DNS, and database monitoring.",
      "Features an extensive notification system that integrates with Slack, Discord, and other chat tools. Maintain high availability with real-time status pages and incident tracking."
    ],
    version: "1.23.6", installs: "19k", icon: Activity, color: "#00d9ff", status: "Ready" 
  },
  { 
    id: 7, name: "Plausible", category: "Analytics", 
    description: [
      "A lightweight and open-source web analytics tool. It serves as a privacy-friendly alternative to Google Analytics, requiring no cookie banners or GDPR consent dialogs.",
      "All the essential traffic insights are presented on a single, easy-to-read dashboard. Scripts are exceptionally small, keeping your website blazing fast and respectful of user data."
    ],
    version: "2.0.0", installs: "9.1k", icon: Globe, color: "#3b82f6", status: "Ready" 
  },
  { 
    id: 8, name: "Proxy Manager", category: "Tools", 
    description: [
      "A web-based tool for exposing your web services securely. It provides a clean interface for managing routing and HTTPS setup.",
      "Automates certificate renewal and simplifies advanced routing, access lists, and custom rules for self-hosted homelabs and production environments."
    ],
    version: "2.10.4", installs: "31k", icon: Server, color: "#00ff88", status: "Essential" 
  },
  { 
    id: 9, name: "Appwrite", category: "Backend", 
    description: [
      "A secure, end-to-end backend server for web, mobile, and Flutter developers. It eliminates the complexity of building backend infrastructure from scratch.",
      "Features built-in user accounts, multiple database integrations, storage management, and localized Edge Functions. Accelerate your product delivery while retaining full self-hosting control."
    ],
    version: "1.4.3", installs: "11k", icon: Database, color: "#ff1493", status: "Ready" 
  },
  { 
    id: 10, name: "Strapi", category: "Content", 
    description: [
      "The leading open-source headless CMS that gives developers the freedom to choose their favorite tools and frameworks, while allowing editors to manage and distribute content easily.",
      "Construct powerful, customizable APIs via a visually intuitive interface. It supports deep plugin integrations and extensive webhook architectures to fit any bespoke content model."
    ],
    version: "4.15.0", installs: "25k", icon: Code, color: "#8a2be2", status: "Ready" 
  },
  { 
    id: 11, name: "Portainer", category: "Tools", 
    description: [
      "A lightweight, powerful container management UI that simplifies the complexities of Docker and Kubernetes environments. It provides a comprehensive overview of your cluster health.",
      "Deploy applications, manage images, and inspect container logs through an intuitive dashboard. It heavily reduces the DevOps learning curve while securing your infrastructure."
    ],
    version: "2.19.3", installs: "45k", icon: Box, color: "#00d9ff", status: "Essential" 
  },
  { 
    id: 12, name: "Matomo", category: "Analytics", 
    description: [
      "A comprehensive, ethical web analytics platform that guarantees 100% data ownership. It is the leading open-source alternative to Google Analytics for privacy-conscious organizations.",
      "Dive deep into user behavior, heatmaps, and A/B testing without compromising on compliance. Highly extensible, allowing for custom reporting and complete historical data retention."
    ],
    version: "4.15.1", installs: "14k", icon: Activity, color: "#ff6b00", status: "Ready" 
  }
];

export const categories = ["All", "Content", "Analytics", "Backend", "Automation", "Tools"];
