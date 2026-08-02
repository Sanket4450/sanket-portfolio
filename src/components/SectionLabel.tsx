export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-text-muted mb-4 text-[11px] font-medium tracking-widest uppercase">
      {children}
    </p>
  )
}