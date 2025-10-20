import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "project", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`project/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((member, idx) => ({
              src: member.avatar,
              key: `${post.slug}-${idx}`,
            })) || []
          }
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
