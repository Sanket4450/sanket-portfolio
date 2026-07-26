import { footer, personal } from '@/utils/data'

export default function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="section-container py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} {personal.name}
          </p>
          <div className="text-text-secondary flex items-center gap-4 text-sm">
            <span>{personal.designation}</span>
            <span className="text-border">|</span>
            <span> {footer.tagline.join(' · ')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
