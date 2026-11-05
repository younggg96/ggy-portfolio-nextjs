import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { baseURL } from "@/app/resources";
import { aboutZh, personZh } from "@/app/resources/content.zh";

export function generateMetadata(): Metadata {
  return {
    title: aboutZh.title,
    description: aboutZh.description,
    alternates: {
      canonical: "/zh/about",
      languages: {
        en: "/about",
        "zh-CN": "/zh/about",
      },
    },
    openGraph: {
      title: aboutZh.title,
      description: aboutZh.description,
      url: `${baseURL}/zh/about`,
      locale: "zh_CN",
    },
  };
}

export default function ChineseAbout() {
  return <AboutContent content={aboutZh} personData={personZh} locale="zh" />;
}
