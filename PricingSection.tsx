import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Zap, Globe, Sparkles } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  deliveryTime: string;
  popular?: boolean;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    id: 'brochure',
    name: 'Business Brochure Site',
    price: 1500,
    description: 'Perfect for local service businesses wanting to establish professional global credibility.',
    deliveryTime: '5-7 Business Days',
    features: [
      '3–5 Custom Responsive Pages',
      'Modern Dark/Light Glassmorphic UI',
      'Contact Forms & Lead Capture',
      'Google Maps & Social Integration',
      'Basic On-Page SEO Optimization',
      '1 Month Free Maintenance'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce / Booking Platform',
    price: 3500,
    description: 'Robust platform built for automated scheduling, product sales, and client management.',
    deliveryTime: '10-14 Business Days',
    popular: true,
    features: [
      'Everything in Brochure Site',
      'Stripe & PayPal Payment Gateway Setup',
      'Automated Appointment Booking / Store Inventory',
      'User Accounts & Dashboard Portal',
      'Social Media Starter Pack Setup',
      '2 Months Free Maintenance'
    ]
  },
  {
    id: 'webapp',
    name: 'Custom Mobile App / MVP',
    price: 6500,
    description: 'Full-stack software application tailored to your unique business workflows or SaaS idea ventures.',
    deliveryTime: '3-4 Weeks',
    features: [
      'Custom Database & Auth (Supabase/PostgreSQL)',
      'Advanced API Integrations',
      'Scalable Full-Stack Architecture',
      'Admin Control Panel',
      'Performance Optimization & Security',
      'Priority Support & Dedicated Maintenance'
    ]
  }
];

export default function PricingSection() {
  const [selectedTier, setSelectedTier] = useState<PricingTier>(pricingTiers[1]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate secure handoff to payment gateway (e.g., Stripe Checkout / Wise)
    setTimeout(() => {
      alert(`Thank you, ${clientName}! Redirecting you to securely checkout for the ${selectedTier.name} ($${selectedTier.price} USD)...`);
      setIsSubmitting(false);
      // Integration point: window.location.href = stripeCheckoutUrl;
    }, 1200);
  };

  return (
    <section className="bg-[#07050e] text-white py-20 px-4 sm:px-6 lg:px-8 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Transparent Global Development Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-purple-300 bg-clip-text text-transparent">
            Choose Your Growth Engine
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            World-class engineering, lightning-fast execution, and fixed-price transparency. Select a package to book and launch your project instantly.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <div 
                key={tier.id}
                className={`relative rounded-2xl bg-[#100b1e] p-8 border transition-all duration-300 flex flex-col justify-between ${
                  tier.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-950/40 lg:-translate-y-2' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-semibold tracking-wider uppercase text-white shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                    <span className="text-xs text-purple-400 font-medium bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                      {tier.deliveryTime}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{tier.description}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                    <span className="text-4xl font-extrabold tracking-tight text-white">${tier.price}</span>
                    <span className="text-sm text-slate-400 font-medium">USD / project</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="mt-0.5 rounded-full p-0.5 bg-purple-500/20 text-purple-400 border border-purple-500/30 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTier(tier)}
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/50'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {isSelected ? 'Selected Package' : 'Select This Package'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Instant Booking & Checkout Workflow Form */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-[#100b1e] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="mb-8">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-1">Instant Onboarding</div>
            <h3 className="text-2xl font-bold text-white">Secure Your Project Slot</h3>
            <p className="text-slate-400 text-sm mt-1">
              You selected: <span className="text-white font-semibold">{selectedTier.name}</span> (<span className="text-purple-300 font-bold">${selectedTier.price} USD</span>)
            </p>
          </div>

          <form onSubmit={handleBookingCheckout} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#07050e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">Business Email</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-[#07050e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">Project Brief / Business Details</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your business and what you want built..."
                value={projectNotes}
                onChange={(e) => setProjectNotes(e.target.value)}
                className="w-full bg-[#07050e] border border-white/10 rounded-xl p-4 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-purple-950/50 hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Processing Secure Handshake...</>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-purple-200 fill-purple-200" />
                    Proceed to Secure Payment & Kickoff (${selectedTier.price} USD)
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Secure SSL Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-400" /> Global Currencies Accepted
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
