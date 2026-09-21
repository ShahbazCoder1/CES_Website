import Image from "next/image";
import Link from "next/link";

type PhotoLinkCardProps = {
  href: string;
  image: string;
  title: string;
  subtitle?: string;
  sizes?: string;
  className?: string;
};

export default function PhotoLinkCard({
  href,
  image,
  title,
  subtitle,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
}: PhotoLinkCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border border-white/[0.05] transition-all duration-300 hover:border-white/20 active:scale-[0.992] ${className}`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={sizes}
        className="scale-105 object-cover blur-[6px] transition-all duration-700 group-hover:scale-110 group-hover:blur-[3px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/80" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_70%)] opacity-0 transition-opacity duration-500 group-active:opacity-100 group-active:duration-75" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center transition-transform duration-300 group-hover:-translate-y-0.5">
        <span className="text-xl font-medium text-white sm:text-2xl">{title}</span>

        {subtitle && (
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/80 sm:text-xs">
            {subtitle}
          </span>
        )}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1 h-5 w-5 translate-y-1.5 text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}