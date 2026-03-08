/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, MemoryStick as Memory, HardDrive, ShieldCheck, Zap, Terminal } from 'lucide-react';
import { VPS_PROCESSORS } from '@/src/constants';

export default function VPSHosting() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 mb-6 backdrop-blur-md"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Enterprise VPS</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl"
        >
          Premium VPS Hosting ⚡
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-400"
        >
          Scalable virtual private servers with full root access and extreme performance.
        </motion.p>
      </div>

      {/* Main VPS Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Unmatched Specifications</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
                <Memory className="h-8 w-8 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">RAM</div>
                  <div className="text-xl font-bold text-white">16GB – 256GB</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
                <Cpu className="h-8 w-8 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">CPU</div>
                  <div className="text-xl font-bold text-white">4 – 64 vCores</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
                <HardDrive className="h-8 w-8 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Storage</div>
                  <div className="text-xl font-bold text-white">SSD / NVMe</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/5">
                <ShieldCheck className="h-8 w-8 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Uptime</div>
                  <div className="text-xl font-bold text-white">99.9% SLA</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500/20">
                <Terminal className="h-4 w-4" /> Full Root Access
              </div>
              <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/20">
                <Zap className="h-4 w-4" /> Instant Deployment
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-black/40 p-8 border border-white/5 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6">Processor Options</h3>
            <div className="space-y-4">
              {VPS_PROCESSORS.map((cpu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between rounded-xl bg-white/5 p-4 border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">{cpu}</span>
                  <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </motion.div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 active:scale-95">
              Configure Your VPS
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
