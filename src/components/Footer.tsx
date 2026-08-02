import { footer, personal } from '@/utils/data'

export default function Footer() {
  return (
    <footer className="bg-primary-surface border-border border-t">
      <div className="section-container py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} {personal.name}
          </p>
          <div className="text-text-secondary flex items-center text-sm">
            {footer.tagline.map((item, index) => (
              <span key={item} className="flex items-center">
                {index > 0 && <span className="text-text-muted mx-2">•</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
