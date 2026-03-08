/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Globe, Search, ShieldCheck, Zap, Cloud } from 'lucide-react';
import { DOMAINS } from '@/src/constants';

export default function Domains() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 mb-6 backdrop-blur-md"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Domain Services</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl"
        >
          Secure Your Identity 🌐
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-400"
        >
          Register and manage your domains with ease. All domains are managed via Cloudflare for maximum performance and security.
        </motion.p>
      </div>

      {/* Domain Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto max-w-3xl mb-24"
      >
        <div className="relative flex items-center rounded-2xl bg-white/5 p-2 border border-white/10 backdrop-blur-md group focus-within:border-emerald-500/40 transition-all">
          <Search className="absolute left-6 h-6 w-6 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
          <input
            type="text"
            placeholder="Search for your perfect domain..."
            className="w-full bg-transparent py-4 pl-14 pr-4 text-lg text-white outline-none placeholder:text-gray-600"
          />
          <button className="rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-95">
            Search
          </button>
        </div>
      </motion.div>

      {/* Domain TLDs */}
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-7 mb-24">
        {DOMAINS.map((tld, i) => (
          <motion.div
            key={tld}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-6 border border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer"
          >
            <span className="text-2xl font-black text-gray-400 group-hover:text-emerald-400 transition-colors">{tld}</span>
            <span className="mt-2 text-xs font-bold text-emerald-500/60 uppercase tracking-widest">Available</span>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Cloud className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Cloudflare Integration</h3>
          <p className="text-gray-400 leading-relaxed">
            Every domain registered with us is automatically configured with Cloudflare DNS for lightning-fast resolution.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Privacy Protection</h3>
          <p className="text-gray-400 leading-relaxed">
            Keep your personal information safe with our free WHOIS privacy protection on all eligible domain extensions.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Instant Activation</h3>
          <p className="text-gray-400 leading-relaxed">
            Your domain is registered and active within minutes. No complex configuration required to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
