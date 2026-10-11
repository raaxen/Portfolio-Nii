
const Footer = () => {
  return (
    <footer className="bg-[#151715] border-t border-[#FDFCFD]/20 px-6 py-5 md:px-[5%] md:py-5">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Copyright & signature */}
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
          <span className="text-[#FDFCFD]/50 text-[11px] sm:text-xs">
            © 2026 VELORA. All rights reserved.
          </span>

          <span className="text-[#FDFCFD]/30 text-[11px] sm:text-xs">
            Architecture, envisioned.
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] sm:text-xs text-[#FDFCFD]/50">
          <a
            href="https://www.instagram.com/nyfita.cg/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-[#FDFCFD]"
          >
            Instagram ↗
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-[#FDFCFD]"
          >
            Contact
          </a>

          <a
            href="#privacy"
            className="transition-colors duration-300 hover:text-[#FDFCFD]"
          >
            Privacy
          </a>

          <a
            href="#legal"
            className="transition-colors duration-300 hover:text-[#FDFCFD]"
          >
            Legal
          </a>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
