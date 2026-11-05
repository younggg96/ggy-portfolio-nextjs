import {
  generateProjectMetadata,
  ProjectContent,
  type ProjectParams,
} from "@/components/project/ProjectDetail";
import { getPosts } from "@/app/utils/utils";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "project", "projects"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata(params: ProjectParams) {
  return generateProjectMetadata(params);
}

export default function Project({ params }: ProjectParams) {
  return <ProjectContent params={params} />;
}
