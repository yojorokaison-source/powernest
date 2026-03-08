/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HostingPlan {
  id: string;
  name: string;
  ram: string;
  cpu: string;
  disk: string;
  price: string;
  icon: string;
  isPremium?: boolean;
}

export interface VPSPlan {
  id: string;
  ram: string;
  cpu: string;
  storage: string;
  uptime: string;
  rootAccess: boolean;
}

export const BUDGET_PLANS: HostingPlan[] = [
  { id: 'b-dirt', name: 'Dirt Plan', ram: '2 GB', cpu: '0.5 vCore', disk: '10 GB', price: '₹80', icon: '🌱' },
  { id: 'b-wood', name: 'Wood Plan', ram: '4 GB', cpu: '1 vCore', disk: '25 GB', price: '₹200', icon: '🪵' },
  { id: 'b-stone', name: 'Stone Plan', ram: '6 GB', cpu: '2 vCore', disk: '35 GB', price: '₹270', icon: '🪨' },
  { id: 'b-copper', name: 'Copper Plan', ram: '8 GB', cpu: '3 vCore', disk: '50 GB', price: '₹400', icon: '🧱' },
  { id: 'b-iron', name: 'Iron Plan', ram: '10 GB', cpu: '4 vCore', disk: '65 GB', price: '₹580', icon: '⛓️' },
  { id: 'b-gold', name: 'Gold Plan', ram: '12 GB', cpu: '5 vCore', disk: '75 GB', price: '₹799', icon: '🪙' },
  { id: 'b-diamond', name: 'Diamond Plan', ram: '16 GB', cpu: '6 vCore', disk: '90 GB', price: '₹1100', icon: '💎' },
  { id: 'b-netherite', name: 'Netherite Plan', ram: '20 GB', cpu: '8 vCore', disk: '100 GB', price: '₹1350', icon: '🔥' },
];

export const PREMIUM_PLANS: HostingPlan[] = [
  { id: 'p-dirt', name: 'Dirt Plan', ram: '2 GB', cpu: '0.5 vCore', disk: '10 GB', price: '₹100', icon: '🌱', isPremium: true },
  { id: 'p-wood', name: 'Wood Plan', ram: '4 GB', cpu: '1 vCore', disk: '25 GB', price: '₹250', icon: '🪵', isPremium: true },
  { id: 'p-stone', name: 'Stone Plan', ram: '6 GB', cpu: '2 vCore', disk: '35 GB', price: '₹300', icon: '🪨', isPremium: true },
  { id: 'p-copper', name: 'Copper Plan', ram: '8 GB', cpu: '3 vCore', disk: '50 GB', price: '₹500', icon: '🧱', isPremium: true },
  { id: 'p-iron', name: 'Iron Plan', ram: '10 GB', cpu: '4 vCore', disk: '65 GB', price: '₹670', icon: '⛓️', isPremium: true },
  { id: 'p-gold', name: 'Gold Plan', ram: '12 GB', cpu: '5 vCore', disk: '75 GB', price: '₹950', icon: '🪙', isPremium: true },
  { id: 'p-diamond', name: 'Diamond Plan', ram: '16 GB', cpu: '6 vCore', disk: '90 GB', price: '₹1250', icon: '💎', isPremium: true },
  { id: 'p-netherite', name: 'Netherite Plan', ram: '20 GB', cpu: '8 vCore', disk: '100 GB', price: '₹1500', icon: '🔥', isPremium: true },
];

export const VPS_PROCESSORS = [
  'Intel Xeon v4 Series',
  'AMD EPYC 9VXX Series',
  'AMD EPYC 4000 Series',
  'AMD Ryzen 9 9900X3D',
  'AMD Ryzen 7 9900X3D',
];

export const DOMAINS = ['.com', '.net', '.org', '.io', '.gg', '.ai', '.fun'];
