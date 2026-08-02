export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item} className="text-text-secondary flex gap-3 text-[15px] leading-relaxed">
          <span className="text-text-muted mt-[0.35em] shrink-0 text-[10px] select-none" aria-hidden="true">
            ▸
          </span>
          <span className="max-w-[620px]">{item}</span>
        </li>
      ))}
    </ul>
  )
}