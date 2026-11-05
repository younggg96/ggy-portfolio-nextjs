import type { Metadata } from "next";
import {
  generateProjectMetadata,
  ProjectContent,
  type ProjectParams,
} from "@/components/project/ProjectDetail";
import { getPosts } from "@/app/utils/utils";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "project", "projects", "zh"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata(params: ProjectParams): Metadata {
  return generateProjectMetadata(params, "zh");
}

export default function ChineseProjectDetail({ params }: ProjectParams) {
  return <ProjectContent params={params} locale="zh" />;
}
