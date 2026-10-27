import Link from "next/link";
import { company } from "@/lib/content";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allCrumbs: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="container-x py-3">
      <ol
        className="flex flex-wrap items-center gap-1.5 text-sm text-muted"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allCrumbs.map((crumb, i) => {
          const isLast = i === allCrumbs.length - 1;
          return (
            <li
              key={i}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i > 0 && (
                <span className="text-line" aria-hidden="true">/</span>
              )}
              {isLast || !crumb.href ? (
                <span itemProp="name" className="text-navy-ink font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  itemProp="item"
                  className="hover:text-green-deep transition-colors"
                >
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allCrumbs.map((crumb, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: crumb.label,
              ...(crumb.href ? { item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zentristraining.com"}${crumb.href}` } : {}),
            })),
          }),
        }}
      />
    </nav>
  );
}
