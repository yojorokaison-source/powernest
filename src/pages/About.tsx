/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Zap, Heart, Users, Globe, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 mb-6 backdrop-blur-md"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Story</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl"
        >
          About PowerNest 🦅
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-400"
        >
          We're not just a hosting company. We're a team of developers and gamers dedicated to providing the best possible infrastructure for your projects.
        </motion.p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Founded in 2024, PowerNest was born out of a frustration with overpriced and underperforming hosting providers. Our mission is to democratize high-performance hosting, making enterprise-grade hardware accessible to everyone from hobbyist developers to large-scale gaming communities.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We believe that your servers should be as reliable as your ideas. That's why we invest heavily in the latest hardware, network infrastructure, and security measures to ensure that your projects stay online, no matter what.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-white">10k+ Clients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-white">15+ Locations</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img
            src="https://picsum.photos/seed/datacenter/800/600"
            alt="Data Center"
            className="h-full w-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              <Shield className="h-4 w-4" /> Secure Infrastructure
            </div>
            <div className="text-xl font-bold text-white">Tier 4 Data Centers</div>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Performance First</h3>
          <p className="text-gray-400 leading-relaxed">
            We never oversell our nodes. Every client gets the resources they pay for, guaranteed by our strict isolation policies.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
          <p className="text-gray-400 leading-relaxed">
            Our roadmap is shaped by our users. We listen to feedback and constantly evolve our services to meet your needs.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
          <p className="text-gray-400 leading-relaxed">
            We're always testing new hardware and software to stay ahead of the curve and provide the best hosting experience.
          </p>
        </div>
      </div>
    </div>
  );
}
