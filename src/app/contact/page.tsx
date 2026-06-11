"use client";

import { useState } from "react";
import { Mail, MapPin, Building, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("founder");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate server action
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
      {/* Header */}
      <section className="max-w-3xl flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Connect
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-medium text-foreground leading-[1.1]">
          Initiate Contact
        </h1>
        <p className="text-lg md:text-xl text-muted-text leading-relaxed">
          Whether you want to build a venture, invest, or form a strategic partnership, our Dubai team is ready to collaborate.
        </p>
      </section>

      {/* Grid: Form & Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border-accent pt-12">
        
        {/* Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-text">
              Dubai Headquarters
            </h3>
            <div className="flex gap-3 text-sm text-foreground/90">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Able Ventures Studio</p>
                <p className="text-xs text-muted-text mt-1">
                  DIFC Gate District,<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-text">
              Direct Inquiries
            </h3>
            <div className="flex gap-3 text-sm text-foreground/90">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">General & Media</p>
                <p className="text-xs text-muted-text mt-1 hover:text-primary transition-colors cursor-pointer">
                  partner@ableventures.co
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="lg:col-span-8 bg-card-bg border border-border-accent p-8 md:p-10 rounded-[10px] shadow-sm">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                  Inquiry Category
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="bg-background border border-border-accent text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-primary w-full"
                >
                  <option value="founder">Co-Found a Startup (Operator)</option>
                  <option value="partner">Corporate / Clinical Partnership</option>
                  <option value="investor">Investment (LPs & Co-Investors)</option>
                  <option value="general">General Inquiries</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-background border border-border-accent text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-primary w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="bg-background border border-border-accent text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-primary w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                  Organization / Affiliation
                </label>
                <input
                  type="text"
                  className="bg-background border border-border-accent text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-primary w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                  Message / Context
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about what you are building or exploring..."
                  className="bg-background border border-border-accent text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-primary w-full resize-none"
                />
              </div>

              <button
                type="submit"
                className="text-xs font-semibold uppercase tracking-widest bg-foreground text-background py-4 rounded-sm hover:bg-primary hover:text-white transition-all-custom cursor-pointer text-center"
              >
                Send Message
              </button>

            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-sans">Message Transmitted</h3>
              <p className="text-xs text-muted-text max-w-sm leading-relaxed">
                Thank you for connecting with Able Ventures. Our partner team will review your context and reach out within two business days.
              </p>
            </div>
          )}
        </div>

      </section>

      {/* Newsletter Signup Card (Requested on Insights and Contact pages only) */}
      <section className="bg-card-bg border border-border-accent p-8 md:p-12 rounded-[12px] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2 text-primary">
            <Mail className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Stay Informed</span>
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground">
            Sign up for the Longevity Briefing.
          </h3>
          <p className="text-xs text-muted-text leading-relaxed">
            A monthly newsletter delivering verified database insights, venture building opportunities, and market research on healthy aging technologies directly to your inbox.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your professional email"
            className="w-full text-sm bg-background border border-border-accent px-4 py-3 rounded-sm focus:outline-none focus:border-primary"
            required
          />
          <button
            type="submit"
            className="text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
