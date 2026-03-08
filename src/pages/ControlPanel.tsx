/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LayoutDashboard, Terminal, ExternalLink, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function ControlPanel() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 mb-6 backdrop-blur-md"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Dashboard Access</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl"
        >
          Manage Your Empire 🕹️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-400"
        >
          Access your client portal and server control panel from one centralized location.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Client Portal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl transition-all hover:border-cyan-500/40"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <LayoutDashboard className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Client Portal</h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            Manage your billing, invoices, support tickets, and account settings. Everything related to your PowerNest account.
          </p>
          <a
            href="https://portal.powernest.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-600 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all hover:bg-cyan-500 active:scale-95"
          >
            Open Client Portal
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Server Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl transition-all hover:border-blue-500/40"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <Terminal className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Server Panel</h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            Access the Pterodactyl-powered control panel to manage your servers, files, databases, and real-time console.
          </p>
          <a
            href="https://terminal.powernest.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 active:scale-95"
          >
            Open Server Panel
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Security Features */}
      <div className="mt-24 grid gap-8 md:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
          <ShieldCheck className="h-10 w-10 text-cyan-400" />
          <div>
            <div className="text-lg font-bold text-white">2FA Security</div>
            <div className="text-sm text-gray-500">Protect your account with two-factor authentication.</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
          <Zap className="h-10 w-10 text-blue-400" />
          <div>
            <div className="text-lg font-bold text-white">Real-time Stats</div>
            <div className="text-sm text-gray-500">Monitor resource usage and performance in real-time.</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
          <Globe className="h-10 w-10 text-purple-400" />
          <div>
            <div className="text-lg font-bold text-white">Global Access</div>
            <div className="text-sm text-gray-500">Manage your servers from anywhere in the world.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
