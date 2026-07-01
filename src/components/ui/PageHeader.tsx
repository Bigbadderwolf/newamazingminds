interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, highlight, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-midnight py-16 px-6 text-center border-b border-white/6">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h1 className="text-3xl md:text-4xl font-black mb-3">
        {title}{" "}
        {highlight && <span className="text-terracotta-light">{highlight}</span>}
      </h1>
      {subtitle && (
        <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
