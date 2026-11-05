import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";

export interface ProjectParams {
  params: {
    slug: string;
  };
}

const siteURL = baseURL.startsWith("http") ? baseURL : `https://${baseURL}`;

export function getProject(slug: string, locale: "en" | "zh" = "en") {
  const projectPath =
    locale === "zh"
      ? ["src", "app", "project", "projects", "zh"]
      : ["src", "app", "project", "projects"];
  return getPosts(projectPath).find((post) => post.slug === slug);
}

export function generateProjectMetadata(
  { params: { slug } }: ProjectParams,
  locale: "en" | "zh" = "en",
) {
  const post = getProject(slug, locale);

  if (!post) {
    return {};
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image
    ? `${siteURL}${image}`
    : `${siteURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteURL}/${locale === "zh" ? "zh/" : ""}project/${post.slug}`,
      alternates: {
        canonical: `/${locale === "zh" ? "zh/" : ""}project/${post.slug}`,
        languages: {
          en: `/project/${post.slug}`,
          "zh-CN": `/zh/project/${post.slug}`,
        },
      },
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function ProjectContent({
  params,
  locale = "en",
}: ProjectParams & { locale?: "en" | "zh" }) {
  const post = getProject(params.slug, locale);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteURL}${post.metadata.image}`
              : `${siteURL}/og?title=${post.metadata.title}`,
            url: `${siteURL}/${locale === "zh" ? "zh/" : ""}project/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button
          href={`/${locale === "zh" ? "zh/" : ""}project`}
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          {locale === "zh" ? "返回项目列表" : "Projects"}
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && (
            <AvatarGroup reverse avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
