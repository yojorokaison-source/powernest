/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, LayoutDashboard, Zap, Shield, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Next Gen Hosting</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          PowerNest – Where <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Servers Don't Sleep
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-gray-400 leading-relaxed"
        >
          High performance hosting for Minecraft servers, bots, trading tools, development and more. Experience unmatched speed and reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/minecraft-plans"
            className="group flex items-center gap-2 rounded-xl bg-cyan-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all hover:bg-cyan-500 hover:shadow-cyan-500/40 active:scale-95"
          >
            View Plans
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://discord.gg/powernest-tm-where-server-s-doesn-t-sleep-1402641456950149200"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
          >
            <MessageSquare className="h-4 w-4" />
            Join Discord
          </a>
          <Link
            to="/control-panel"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
          >
            <LayoutDashboard className="h-4 w-4" />
            Open Dashboard
          </Link>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { label: 'Uptime', value: '99.9%', icon: Zap },
            { label: 'DDoS Protection', value: '12Tbps+', icon: Shield },
            { label: 'Locations', value: 'Global', icon: Globe },
            { label: 'Hardware', value: 'Ryzen 9', icon: Cpu },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                <stat.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-xl font-bold text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Quick Features */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Instant Setup</h3>
            <p className="text-gray-400 leading-relaxed">
              Your server is deployed automatically as soon as payment is confirmed. No waiting around.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
            <p className="text-gray-400 leading-relaxed">
              Advanced DDoS mitigation and secure isolation for every single instance on our network.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Top-Tier Hardware</h3>
            <p className="text-gray-400 leading-relaxed">
              Powered by the latest AMD Ryzen and EPYC processors with blazing fast NVMe storage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
