import { getBySlug, getAllSlugs } from "@/lib/gallery";
import { GalleryRoom } from "@/components/GalleryRoom";
import { WhisperLine } from "@/components/WhisperLine";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function SonicturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBySlug(slug);
  if (!item) notFound();

  return (
    <main>
      <nav className="deeplink-nav">
        <Link href="/#gallery" className="deeplink-back">
          &larr; Gallery
        </Link>
      </nav>
      <WhisperLine />
      <section className="section-viewport">
        <GalleryRoom item={item} index={0} />
      </section>
    </main>
  );
}
