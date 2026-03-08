/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageSquare, Mail, HelpCircle, ExternalLink, Clock, Users } from 'lucide-react';

export default function Support() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 mb-6 backdrop-blur-md"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Support Center</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl"
        >
          We're Here to Help 🤝
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-400"
        >
          Need assistance? Our dedicated support team and vibrant community are ready to help you.
        </motion.p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Discord Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 backdrop-blur-xl transition-all hover:border-indigo-500/40"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
            <MessageSquare className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Discord Community</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Join our official Discord server for real-time support, community discussions, and the latest updates.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Users className="h-4 w-4" /> 5,000+ Members
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
              <Clock className="h-4 w-4" /> 24/7 Active
            </div>
          </div>
          <a
            href="https://discord.gg/powernest-tm-where-server-s-doesn-t-sleep-1402641456950149200"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 active:scale-95"
          >
            Join Discord Server
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Ticket Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Support Tickets</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Open a formal support ticket via our client portal for billing inquiries or technical issues.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <Clock className="h-4 w-4" /> &lt; 1h Response
            </div>
          </div>
          <a
            href="https://portal.powernest.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-600 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all hover:bg-cyan-500 active:scale-95"
          >
            Open a Ticket
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Knowledge Base Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-purple-500/5 p-8 backdrop-blur-xl transition-all hover:border-purple-500/40"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Knowledge Base</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Browse our extensive documentation and tutorials to find answers to common questions.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
              <Users className="h-4 w-4" /> 200+ Articles
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-600 py-4 text-sm font-bold text-white shadow-lg shadow-purple-600/20 transition-all hover:bg-purple-500 active:scale-95">
            Browse Articles
            <ExternalLink className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
