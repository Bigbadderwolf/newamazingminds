import Link from "next/link";

interface AdminPageHeaderProps {
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
}

export default function AdminPageHeader({ title, subtitle, action }: AdminPageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
      <div>
        <h1 className="text-xl font-black text-white mb-1">{title}</h1>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="bg-terracotta hover:bg-terracotta-light text-white font-bold text-xs px-4 py-2.5 rounded-full transition-all"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
