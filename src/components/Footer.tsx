/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Server, MessageSquare, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/40 backdrop-blur-xl py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                <Server className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Power<span className="text-cyan-400">Nest</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              High performance hosting for Minecraft servers, bots, trading tools, development and more. Where servers don't sleep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Hosting</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/minecraft-plans" className="hover:text-cyan-400 transition-colors">Minecraft Budget</Link></li>
              <li><Link to="/premium-plans" className="hover:text-cyan-400 transition-colors">Minecraft Premium</Link></li>
              <li><Link to="/vps-hosting" className="hover:text-cyan-400 transition-colors">VPS Hosting</Link></li>
              <li><Link to="/domains" className="hover:text-cyan-400 transition-colors">Domain Services</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/support" className="hover:text-cyan-400 transition-colors">Discord Community</Link></li>
              <li><Link to="/control-panel" className="hover:text-cyan-400 transition-colors">Client Portal</Link></li>
              <li><Link to="/control-panel" className="hover:text-cyan-400 transition-colors">Server Panel</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Status */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Status</h4>
            <div className="flex items-center gap-3 rounded-xl bg-green-500/10 p-4 border border-green-500/20">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-400">All Systems Operational</span>
            </div>
            <p className="text-xs text-gray-500">
              99.9% Uptime Guarantee across all nodes.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PowerNest Hosting. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
