import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Rocket,
  Terminal,
  TrendingUp,
  Zap,
  Code,
  Layers,
  Target,
  Users,
  ArrowRight,
  Database,
  Cloud,
  Shield,
  BarChart3,
  GitBranch,
  Box,
  Activity,
  Briefcase,
  DollarSign,
  GraduationCap,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Circle
} from "lucide-react";
import { RouterProvider, createBrowserRouter } from "react-router";
import ExploreApps from "./pages/ExploreApps";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "explore", Component: ExploreApps },
    ],
  },
]);

export function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, #00d9ff 1px, transparent 1px),
            linear-gradient(to bottom, #00d9ff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />

        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00d9ff] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#a855f7] rounded-full blur-[150px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="h-[2px] mb-8 bg-gradient-to-r from-[#00d9ff] via-[#00ff88] to-transparent" />

          <div className="grid lg:grid-cols-[1fr_minmax(280px,420px)] gap-8 lg:gap-12 items-center mb-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl mb-5 leading-[1.05]"
                style={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 50%, #00ff88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 80px rgba(0, 217, 255, 0.3)'
                }}
              >
                The job market is chaos.<br />Build your way out.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/70 mb-8 leading-relaxed"
              >
                DeployDeliver helps you launch real open-source apps, follow guided learning paths, and turn practical tech skills into career momentum, freelance services, and side-hustle opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  disabled
                  className="px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-black rounded-xl flex items-center gap-2 cursor-default"
                  style={{ fontWeight: 700, fontSize: '1.125rem' }}
                >
                  Launching Q4 2026
                </button>
                <Link
                  to="/explore"
                  className="px-6 py-3 bg-white/5 border-2 border-[#00d9ff]/50 text-white rounded-xl hover:bg-white/10 hover:border-[#00d9ff] transition-all duration-300 backdrop-blur-sm"
                  style={{ fontWeight: 600, fontSize: '1.125rem', display: 'inline-block' }}
                >
                  Learning Paths
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div
                className="absolute inset-0 max-w-sm mx-auto lg:max-w-none lg:mx-0 rounded-full blur-[80px] opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)' }}
              />
              <div
                className="relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl border-2 border-[#00d9ff]/40 bg-[#0a0a0f]/80 backdrop-blur-md drop-shadow-[0_0_60px_rgba(0,217,255,0.35)]"
                aria-label="DeployDeliver"
              >
                <span
                  className="text-[#00d9ff] select-none"
                  style={{ fontSize: "clamp(5rem, 12vw, 8rem)", fontWeight: 800, lineHeight: 1 }}
                >
                  D
                </span>
              </div>
            </motion.div>
          </div>

          {/* Stats Strip with neon borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
          >
            {[
              { label: "AI is changing the work", icon: Sparkles, color: "#a855f7" },
              { label: "Practical skills beat passive learning", icon: Target, color: "#00ff88" },
              { label: "Side hustles need real tools", icon: Briefcase, color: "#ff6b00" },
              { label: "Deployment knowledge creates leverage", icon: TrendingUp, color: "#00d9ff" }
            ].map((stat, i) => (
              <div
                key={i}
                className="relative bg-black/40 backdrop-blur-md border rounded-xl p-3 hover:scale-105 transition-transform duration-300"
                style={{ borderColor: stat.color + '40' }}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 30px ${stat.color}40` }}
                />
                <stat.icon className="w-6 h-6 mb-2" style={{ color: stat.color }} />
                <p className="text-sm text-white/90 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Dashboard Preview with glowing effects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            <DashboardCard label="Apps deployed" value="47" trend="+12" color="#00d9ff" />
            <DashboardCard label="Skills unlocked" value="23" trend="+5" color="#00ff88" />
            <DashboardCard label="Active paths" value="3" trend="→" color="#3b82f6" />
            <DashboardCard label="Launch ready" value="8" trend="↑" color="#ff6b00" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a0a]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff6b00] rounded-full blur-[120px] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-5xl md:text-7xl mb-5 max-w-4xl leading-tight"
              style={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ff6b00, #ff0000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              The old career ladder is broken.
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mb-10 leading-relaxed">
              People are being told to learn AI, automation, cloud tools, data platforms, websites, dashboards, and apps — but most learning platforms stop at theory. DeployDeliver gives users real software, live environments, and guided learning so they can actually build, test, deploy, and understand what modern tools do.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: Terminal, label: "Tutorials without execution" },
                { icon: Code, label: "Skills without portfolio proof" },
                { icon: Shield, label: "Tools locked behind developer gatekeeping" },
                { icon: DollarSign, label: "Side hustle ideas with no technical foundation" },
                { icon: TrendingUp, label: "Job market pressure with no clear starting point" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] to-transparent opacity-20 rounded-xl blur-xl group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-black/60 border-l-4 border-[#ff6b00] p-4 rounded-xl backdrop-blur-sm hover:bg-black/80 transition-all">
                    <item.icon className="w-7 h-7 mb-3 text-[#ff6b00]" />
                    <p className="text-white leading-snug" style={{ fontWeight: 500 }}>{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00d9ff 1px, transparent 1px),
            linear-gradient(to bottom, #00d9ff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.05
        }} />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00ff88] rounded-full blur-[140px] opacity-15" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-20 text-center leading-tight"
            style={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff, #00d9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            DeployDeliver turns learning<br />into launchable skill.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Deploy",
                description: "Launch real open-source software in minutes.",
                icon: Rocket,
                color: "#00d9ff",
                features: ["One-click app deployment", "Docker containers", "Live environments", "GitHub integration"]
              },
              {
                title: "Learn",
                description: "Follow guided tutorials beside the live tool.",
                icon: GraduationCap,
                color: "#00ff88",
                features: ["Split-screen learning", "Skill tracks", "Hands-on practice", "Real-world scenarios"]
              },
              {
                title: "Deliver",
                description: "Use the skill for your job, portfolio, client work, or side hustle.",
                icon: Target,
                color: "#ff6b00",
                features: ["Service catalog", "Portfolio projects", "Client-ready tools", "Revenue opportunities"]
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                  style={{ background: `radial-gradient(circle, ${solution.color}40, transparent)` }}
                />
                <div
                  className="relative bg-black/60 border-2 rounded-2xl p-5 backdrop-blur-md hover:bg-black/80 transition-all duration-300"
                  style={{ borderColor: solution.color + '40' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: solution.color + '20',
                        boxShadow: `0 0 30px ${solution.color}30`
                      }}
                    >
                      <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                    </div>
                    <h3 className="text-3xl text-white" style={{ fontWeight: 800 }}>{solution.title}</h3>
                  </div>
                  <p className="text-white/70 mb-5 text-lg">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5" style={{ color: solution.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Hustle Pathways Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f]" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#a855f7] rounded-full blur-[150px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-4 leading-tight"
            style={{
              fontWeight: 800,
              color: '#ffffff'
            }}
          >
            Pick a tool. Learn the workflow.<br />
            <span style={{
              background: 'linear-gradient(135deg, #00ff88, #00d9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Package the service.
            </span>
          </motion.h2>
          <p className="text-xl text-white/70 max-w-3xl mb-10">
            Example side hustle paths you could build toward
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { tool: "Ghost CMS", skill: "Content management", service: "Website deployment services", difficulty: "Beginner", icon: Code, color: "#00d9ff" },
              { tool: "n8n Automation", skill: "Workflow automation", service: "AI chatbot setup", difficulty: "Intermediate", icon: Zap, color: "#ff6b00" },
              { tool: "Metabase", skill: "Data analytics", service: "Analytics dashboards", difficulty: "Intermediate", icon: BarChart3, color: "#a855f7" },
              { tool: "Supabase", skill: "Backend services", service: "CRM/client portal setup", difficulty: "Advanced", icon: Database, color: "#00ff88" },
              { tool: "Nginx Proxy", skill: "Reverse proxy", service: "Local business tech stacks", difficulty: "Beginner", icon: Cloud, color: "#3b82f6" },
              { tool: "Directus", skill: "Headless CMS", service: "Knowledge base portals", difficulty: "Intermediate", icon: Layers, color: "#ff6b00" }
            ].map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `radial-gradient(circle, ${path.color}60, transparent)` }}
                />
                <div className="relative bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md hover:border-white/30 hover:bg-black/80 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: path.color + '20' }}
                    >
                      <path.icon className="w-6 h-6" style={{ color: path.color }} />
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full border"
                      style={{
                        borderColor: path.color + '40',
                        backgroundColor: path.color + '10',
                        color: path.color
                      }}
                    >
                      {path.difficulty}
                    </span>
                  </div>
                  <h4 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>{path.tool}</h4>
                  <p className="text-sm text-white/60 mb-3">{path.skill}</p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-sm flex items-center gap-2" style={{ color: path.color, fontWeight: 600 }}>
                      <ArrowRight className="w-4 h-4" />
                      {path.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #00d9ff 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.08
        }} />

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-12 text-center leading-tight"
            style={{
              fontWeight: 800,
              color: '#ffffff'
            }}
          >
            A launchpad for real-world<br />technical confidence.
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { icon: Box, label: "One-click Docker deployments", color: "#00d9ff" },
              { icon: GraduationCap, label: "Guided learning experiences", color: "#00ff88" },
              { icon: Layers, label: "Open-source app catalog", color: "#3b82f6" },
              { icon: Code, label: "Side-by-side tutorials", color: "#a855f7" },
              { icon: Target, label: "Skill tracks", color: "#ff6b00" },
              { icon: GitBranch, label: "GitHub-connected deployments", color: "#00d9ff" },
              { icon: Sparkles, label: "Local AI and model tools", color: "#a855f7" },
              { icon: Activity, label: "Deployment monitoring", color: "#00ff88" },
              { icon: Briefcase, label: "Portfolio-ready project history", color: "#ff6b00" },
              { icon: Terminal, label: "Project templates", color: "#3b82f6" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                  style={{ background: `radial-gradient(circle, ${feature.color}40, transparent)` }}
                />
                <div className="relative bg-black/60 border border-white/10 rounded-xl p-3 backdrop-blur-sm text-center hover:border-white/30 hover:bg-black/80 transition-all">
                  <feature.icon className="w-7 h-7 mx-auto mb-2" style={{ color: feature.color }} />
                  <p className="text-xs text-white/90 leading-snug">{feature.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0a1a0f]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00ff88] rounded-full blur-[140px] opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-12 text-center leading-tight"
            style={{
              fontWeight: 800,
              color: '#ffffff'
            }}
          >
            Built for the people who<br />need leverage now.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Career Switchers", description: "Learn practical tools without wandering through tutorial hell.", icon: TrendingUp, color: "#00d9ff" },
              { title: "Side Hustlers", description: "Turn deployable software into real service offerings.", icon: DollarSign, color: "#00ff88" },
              { title: "PMs and Operators", description: "Understand the tech well enough to lead, scope, and ship smarter.", icon: Users, color: "#3b82f6" },
              { title: "Freelancers", description: "Package modern open-source tools into client-ready solutions.", icon: Briefcase, color: "#ff6b00" },
              { title: "Builders", description: "Experiment faster with real apps, real stacks, and real workflows.", icon: Rocket, color: "#a855f7" }
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"
                  style={{ background: `radial-gradient(circle, ${audience.color}40, transparent)` }}
                />
                <div
                  className="relative bg-black/60 border-2 rounded-2xl p-5 backdrop-blur-md hover:bg-black/80 transition-all"
                  style={{ borderColor: audience.color + '30' }}
                >
                  <audience.icon className="w-10 h-10 mb-3" style={{ color: audience.color }} />
                  <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>{audience.title}</h3>
                  <p className="text-white/70 leading-relaxed">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Punch Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 via-transparent to-[#00ff88]/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00d9ff 2px, transparent 2px),
            linear-gradient(to bottom, #00d9ff 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.1
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00d9ff] via-[#00ff88] to-[#a855f7] rounded-full blur-[200px] opacity-20" />

        <div className="relative max-w-6xl mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-6xl md:text-8xl mb-6 leading-[1.05]"
              style={{
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 30%, #00ff88 70%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 100px rgba(0, 217, 255, 0.5)'
              }}
            >
              You do not need permission to become technical.
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              DeployDeliver gives you the tools, structure, and live environments to build confidence by doing. Not someday. Not after another 40-hour course. <span className="text-[#00ff88]" style={{ fontWeight: 700 }}>Now.</span>
            </p>
            <button
              disabled
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black rounded-xl cursor-default"
              style={{ fontWeight: 800, fontSize: '1.25rem' }}
            >
              Launching Q4 2026
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0f1a] to-[#0a0a0f]" />

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-5"
            style={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff, #00d9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Your command center
          </motion.h2>
          <p className="text-xl text-white/70 max-w-3xl mb-10">
            A dense, dashboard-style interface built for rapid deployment and skill building
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <PreviewPanel
              title="Service Catalog"
              items={[
                { label: "Ghost CMS", status: "Ready", color: "#00ff88" },
                { label: "Metabase", status: "Popular", color: "#ff6b00" },
                { label: "n8n", status: "New", color: "#00d9ff" }
              ]}
            />
            <PreviewPanel
              title="Active Deployments"
              items={[
                { label: "Portfolio Site", status: "Running", color: "#00ff88" },
                { label: "Analytics DB", status: "Building", color: "#ff6b00" },
                { label: "API Gateway", status: "Ready", color: "#00d9ff" }
              ]}
            />
            <PreviewPanel
              title="Learning Track Progress"
              items={[
                { label: "Docker Basics", status: "75%", color: "#00ff88" },
                { label: "Reverse Proxy", status: "45%", color: "#ff6b00" },
                { label: "Database Admin", status: "12%", color: "#ffffff" }
              ]}
            />
            <PreviewPanel
              title="Side Hustle Builder"
              items={[
                { label: "Website Hosting", status: "Active", color: "#00ff88" },
                { label: "CMS Setup", status: "Planning", color: "#3b82f6" },
                { label: "Analytics Service", status: "Idea", color: "#ffffff" }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <InfoCard icon={Target} label="Next recommended skill" value="Reverse Proxy Basics" color="#00d9ff" />
            <InfoCard icon={Rocket} label="Deployable service" value="Ghost CMS" color="#00ff88" />
            <InfoCard icon={Briefcase} label="Portfolio proof" value="4 projects deployed" color="#ff6b00" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 via-transparent to-[#ff6b00]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#3b82f6] via-[#00d9ff] to-[#ff6b00] rounded-full blur-[200px] opacity-20" />

        <div className="relative max-w-6xl mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl mb-5 text-white leading-tight" style={{ fontWeight: 800 }}>
              The best way to learn the stack<br />is to launch the stack.
            </h2>
            <p className="text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              DeployDeliver helps you move from curiosity to capability — one real deployment at a time.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <button
                disabled
                className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#3b82f6] text-white rounded-xl flex items-center gap-2 cursor-default"
                style={{ fontWeight: 800, fontSize: '1.25rem' }}
              >
                Launching Q4 2026
              </button>
              <Link
                to="/explore"
                className="px-8 py-4 bg-white/5 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm inline-block"
                style={{ fontWeight: 700, fontSize: '1.25rem' }}
              >
                Learning Paths
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-white/70">
              {[
                { label: "125+ deployable apps", color: "#00d9ff" },
                { label: "Guided learning paths", color: "#00ff88" },
                { label: "Real open-source stacks", color: "#3b82f6" },
                { label: "Side-hustle-ready workflows", color: "#ff6b00" },
                { label: "Portfolio-friendly projects", color: "#a855f7" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.color}`
                    }}
                  />
                  <span className="text-sm" style={{ fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function DashboardCard({ label, value, trend, color }: { label: string; value: string; trend: string; color: string }) {
  return (
    <div
      className="relative group bg-black/60 backdrop-blur-md border-2 rounded-xl p-3 hover:scale-105 transition-all duration-300"
      style={{ borderColor: color + '40' }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
        style={{ boxShadow: `0 0 40px ${color}60` }}
      />
      <div className="relative flex items-center justify-between mb-2">
        <span className="text-xs text-white/60 uppercase tracking-wider" style={{ fontWeight: 600 }}>{label}</span>
        <span className="text-sm" style={{ color: color, fontWeight: 700 }}>{trend}</span>
      </div>
      <div className="relative text-4xl text-white" style={{ fontWeight: 800, color: color }}>{value}</div>
    </div>
  );
}

function PreviewPanel({ title, items }: { title: string; items: Array<{ label: string; status: string; color: string }> }) {
  return (
    <div className="bg-black/60 border border-white/10 rounded-xl p-3 backdrop-blur-md hover:border-white/20 transition-all">
      <h4 className="text-xs text-white/50 uppercase tracking-wider mb-3" style={{ fontWeight: 700 }}>{title}</h4>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-white/90">{item.label}</span>
            <span
              className="text-xs px-2.5 py-1 rounded-full border"
              style={{
                backgroundColor: item.color + '20',
                borderColor: item.color + '40',
                color: item.color,
                fontWeight: 600
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) {
  return (
    <div className="bg-black/60 border border-white/10 rounded-xl p-4 flex items-center gap-3 backdrop-blur-md hover:border-white/20 transition-all">
      <Icon className="w-10 h-10" style={{ color: color }} />
      <div>
        <p className="text-xs text-white/50 mb-1 uppercase tracking-wide" style={{ fontWeight: 600 }}>{label}</p>
        <p className="text-white" style={{ fontWeight: 700 }}>{value}</p>
      </div>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
