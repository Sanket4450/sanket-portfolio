export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Sanket Talaviya
          </p>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span>Full Stack Engineer</span>
            <span className="text-border">|</span>
            <span>SaaS &middot; AI &middot; Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}