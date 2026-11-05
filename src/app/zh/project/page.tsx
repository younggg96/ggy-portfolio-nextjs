import type { Metadata } from "next";
import { Column } from "@/once-ui/components";
import { Projects } from "@/components/project/Projects";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { projectZh } from "@/app/resources/content.zh";
import { getProject } from "@/components/project/ProjectDetail";

export const metadata: Metadata = {
  title: projectZh.title,
  description: projectZh.description,
  alternates: {
    canonical: "/zh/project",
    languages: {
      en: "/project",
      "zh-CN": "/zh/project",
    },
  },
  openGraph: {
    title: projectZh.title,
    description: projectZh.description,
    url: `${baseURL}/zh/project`,
    locale: "zh_CN",
  },
};

export default function ChineseProjects() {
  const allProjects = [
    "avant-regard",
    "kolvex",
    "topify-ai",
  ].map((slug) => getProject(slug, "zh"));

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: projectZh.title,
            description: projectZh.description,
            url: `${baseURL}/zh/project`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project?.metadata.title,
              description: project?.metadata.summary,
              url: `${baseURL}/zh/project/${project?.slug}`,
              image: `${baseURL}${project?.metadata.image}`,
            })),
          }),
        }}
      />
      <Projects locale="zh" />
    </Column>
  );
}
