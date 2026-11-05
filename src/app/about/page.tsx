import { AboutContent } from "@/components/about/AboutContent";
import { baseURL } from "@/app/resources";
import { about } from "@/app/resources/content";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: "/about",
      languages: {
        en: "/about",
        "zh-CN": "/zh/about",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  return <AboutContent />;
}
