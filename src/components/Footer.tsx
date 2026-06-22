export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0A0A0A]">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71717A]">
            &copy; {new Date().getFullYear()} Sanket Talaviya
          </p>
          <div className="flex items-center gap-4 text-sm text-[#A1A1AA]">
            <span>Full Stack Engineer</span>
            <span className="text-[#262626]">|</span>
            <span>SaaS &middot; AI &middot; Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}