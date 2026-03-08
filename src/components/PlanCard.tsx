/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, HardDrive, MemoryStick as Memory, ShoppingCart } from 'lucide-react';
import { HostingPlan } from '@/src/constants';
import { cn } from '@/src/lib/utils';

interface PlanCardProps {
  plan: HostingPlan;
  index: number;
  key?: string | number;
}

export default function PlanCard({ plan, index }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        plan.isPremium 
          ? "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40" 
          : "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40",
        "backdrop-blur-md"
      )}
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40",
        plan.isPremium ? "bg-purple-500" : "bg-cyan-500"
      )} />

      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl">{plan.icon}</div>
        {plan.isPremium && (
          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-400 border border-purple-500/30">
            Premium
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-6">{plan.name}</h3>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-gray-400">
          <Memory className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-mono">{plan.ram} RAM</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-mono">{plan.cpu} CPU</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <HardDrive className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-mono">{plan.disk} NVMe SSD</span>
        </div>
      </div>

      <div className="flex items-end gap-1 mb-6">
        <span className="text-3xl font-bold text-white">{plan.price}</span>
        <span className="text-gray-500 text-sm mb-1">/month</span>
      </div>

      <button className={cn(
        "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all active:scale-95",
        plan.isPremium
          ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-600/20"
          : "bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-600/20"
      )}>
        <ShoppingCart className="h-4 w-4" />
        Buy Now
      </button>
    </motion.div>
  );
}
