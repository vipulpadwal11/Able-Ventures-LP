import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1B1D] text-[#F6F4EE] border-t border-[#2A2B2D] py-16 px-6 relative overflow-hidden flex flex-col gap-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 w-full">
        
        {/* Brand Information Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Mark: matching the header exactly */}
            <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(249,58,62,0.15)]">
              <span className="font-sans font-bold text-lg text-[#F6F4EE] leading-none lowercase tracking-tighter">
                able
              </span>
            </div>
            <span className="font-sans font-semibold text-lg tracking-tight text-white">
              Able Ventures
            </span>
          </Link>
          
          <p className="text-[#A1A3A6] text-sm leading-relaxed max-w-sm">
            A Dubai-based venture studio and investment platform focused on enhancing the ageless quality of life and redefining the experience of aging through transformative technology.
          </p>

          <div className="text-xs text-[#7E8083] mt-2">
            <p>Headquarters: Dubai, United Arab Emirates</p>
            <p className="mt-1">Founded in 2023 · Venture Studio</p>
          </div>
        </div>

        {/* Directory Column */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7E8083]">
            Sitemap
          </span>
          <nav className="flex flex-col gap-2.5 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/focus-areas" className="hover:text-primary transition-colors">Focus Areas</Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/venture-studio" className="hover:text-primary transition-colors">Venture Studio Model</Link>
            <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
          </nav>
        </div>

        {/* Strategic Inquiries & Legal Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7E8083]">
              Inquiries
            </span>
            <Link 
              href="/contact" 
              className="text-sm hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
            >
              partner@ableventures.co
            </Link>
          </div>

          <div className="flex flex-col gap-2.5 text-xs text-[#7E8083] mt-auto">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>

      {/* Grid Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#2A2B2D] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7E8083] relative z-10 w-full mt-auto">
        <p>© {currentYear} Able Ventures. All rights reserved.</p>
        <p className="tracking-wide">Building for decades, not quarters.</p>
      </div>

      {/* Giant "able" text just like the reference image Fundely style */}
      <div className="absolute -bottom-16 sm:-bottom-32 md:-bottom-48 lg:-bottom-60 left-0 right-0 text-center select-none pointer-events-none z-0">
        <span className="font-sans font-bold text-[11rem] sm:text-[22rem] md:text-[34rem] lg:text-[42rem] leading-none tracking-tighter text-[#F93A3E] opacity-[0.06] hover:opacity-[0.16] hover:drop-shadow-[0_0_50px_rgba(249,58,62,0.3)] inline-block lowercase transition-all duration-500 pointer-events-auto cursor-default">
          able
        </span>
      </div>
    </footer>
  );
}
