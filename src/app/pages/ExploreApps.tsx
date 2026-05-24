import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Search,
  Filter,
  ArrowLeft,
  Terminal,
  Database,
  Globe,
  Zap,
  Layout,
  Server,
  Download,
  Star,
  Activity,
  Box,
  Code
} from "lucide-react";

// Mock Data for the Apps
const apps = [
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
      "The premier open-source alternative to Firebase, offering a dedicated PostgreSQL database, real-time subscriptions, and out-of-the-box authentication for modern web applications.",
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
      "Features an extensive notification system that integrates directly with Slack, Discord, Telegram, and more. Maintain high availability with real-time status pages and incident tracking."
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
    id: 8, name: "Nginx Proxy Manager", category: "Tools", 
    description: [
      "The ultimate tool for easily exposing your web services securely. It provides a clean, web-based interface for managing reverse proxies and handling SSL certificates seamlessly.",
      "Automates Let's Encrypt certificate renewal and simplifies advanced routing, access lists, and custom Nginx configurations for self-hosted homelabs and production environments."
    ],
    version: "2.10.4", installs: "31k", icon: Server, color: "#00ff88", status: "Essential" 
  },
  { 
    id: 9, name: "Appwrite", category: "Backend", 
    description: [
      "A secure, end-to-end backend server for web, mobile, and Flutter developers. It eliminates the complexity of building backend infrastructure from scratch.",
      "Features built-in user authentication, multiple database integrations, storage management, and localized Edge Functions. Accelerate your product delivery while retaining full self-hosting control."
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

const categories = ["All", "Content", "Analytics", "Backend", "Automation", "Tools"];

export default function ExploreApps() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = apps.filter(app => {
    const matchesCategory = activeCategory === "All" || app.category === activeCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.join(" ").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, #00d9ff 1px, transparent 1px),
          linear-gradient(to bottom, #00d9ff 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.03
      }} />
      <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#00d9ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00ff88] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00d9ff]" />
            App Catalog
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#00d9ff] transition-colors" />
            <input 
              type="text" 
              placeholder="Search deployable apps..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/50 border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-sm w-64 focus:outline-none focus:border-[#00d9ff]/50 focus:ring-1 focus:ring-[#00d9ff]/50 transition-all placeholder:text-white/30"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 border-r border-white/10 bg-black/20 p-4 flex flex-col gap-6 overflow-y-auto">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-3">Categories</h3>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                    activeCategory === cat 
                      ? "bg-gradient-to-r from-[#00d9ff]/20 to-transparent border-l-2 border-[#00d9ff] text-white font-semibold" 
                      : "text-white/60 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-3">Environment</h3>
            <div className="flex flex-col gap-2">
              {['Docker', 'Kubernetes', 'Bare Metal'].map((env) => (
                <label key={env} className="flex items-center gap-2 text-sm text-white/60 hover:text-white cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-white/20 group-hover:border-[#00ff88] flex items-center justify-center transition-colors">
                    {env === 'Docker' && <div className="w-2 h-2 bg-[#00ff88] rounded-sm" />}
                  </div>
                  {env}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Catalog Grid */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Available to Deploy</h2>
              <p className="text-sm text-white/50">Showing {filteredApps.length} deployable applications</p>
            </div>
            <div className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-white/60">
              Sorted by: <span className="text-white">Popularity</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {filteredApps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
                className="group relative"
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  style={{ background: `radial-gradient(circle at center, ${app.color}30, transparent 70%)` }}
                />
                <div 
                  className="relative h-full bg-black/60 border border-white/10 rounded-xl p-2 backdrop-blur-md flex flex-col hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-1.5">
                      <div 
                        className="p-1 rounded-lg"
                        style={{ backgroundColor: `${app.color}20`, boxShadow: `0 0 15px ${app.color}20` }}
                      >
                        <app.icon className="w-3.5 h-3.5" style={{ color: app.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white leading-none text-xs">{app.name}</h3>
                        <span className="text-[9px] text-white/50 block leading-none mt-0.5">{app.category}</span>
                      </div>
                    </div>
                    <span 
                      className="text-[8px] font-bold px-1.5 py-0.5 rounded-full border leading-none"
                      style={{ 
                        backgroundColor: `${app.color}10`, 
                        borderColor: `${app.color}40`,
                        color: app.color 
                      }}
                    >
                      {app.status}
                    </span>
                  </div>
                  
                  <div className="text-[10px] text-white/70 mb-1 flex-1 space-y-0.5">
                    {app.description.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-tight">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-1 border-t border-white/10">
                    <div className="flex gap-1.5 text-[8px] text-white/40 font-semibold">
                      <span className="flex items-center gap-0.5">
                        <Download className="w-2.5 h-2.5" /> {app.installs}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 text-[#facc15]" /> {app.version}
                      </span>
                    </div>
                    
                    <button 
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded transition-all flex items-center gap-1 hover:scale-105 active:scale-95"
                      style={{ 
                        backgroundColor: `${app.color}20`,
                        color: app.color,
                        boxShadow: `0 0 10px ${app.color}00`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px ${app.color}40`;
                        e.currentTarget.style.backgroundColor = `${app.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 10px ${app.color}00`;
                        e.currentTarget.style.backgroundColor = `${app.color}20`;
                      }}
                    >
                      <Box className="w-2.5 h-2.5" />
                      Deploy
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredApps.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-white/40">
              <Search className="w-12 h-12 mb-4 opacity-20" />
              <p>No applications found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
