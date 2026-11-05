import { articles } from "@/app/resources/content";
import { articlesZh } from "@/app/resources/content.zh";
import { Column, Flex, Line, Text } from "@/once-ui/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs/promises";
import path from "path";
import styles from "@/app/articles/[id]/article.module.css";

export interface ArticleParams {
  id: string;
}

export function generateArticleMetadata(
  { params }: { params: ArticleParams },
  locale: "en" | "zh" = "en",
): Metadata {
  const articleList = locale === "zh" ? articlesZh.data : articles.data;
  const article = articleList.find((a) => a.id.toString() === params.id);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/${locale === "zh" ? "zh/" : ""}articles/${article.id}`,
      languages: {
        en: `/articles/${article.id}`,
        "zh-CN": `/zh/articles/${article.id}`,
      },
    },
  };
}

export async function ArticleDetailContent({
  params,
  locale = "en",
}: {
  params: ArticleParams;
  locale?: "en" | "zh";
}) {
  const articleList = locale === "zh" ? articlesZh.data : articles.data;
  const article = articleList.find((a) => a.id.toString() === params.id);
  if (!article) {
    notFound();
  }

  const mdDir = path.join(process.cwd(), "public/articles");
  const filePath = path.join(mdDir, `${params.id}.md`);
  let content = "";
  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch (e) {
    content = "File cannot be used";
  }

  return (
    <Column gap="m" padding="l">
      <div className={styles.articleImageContainer}>
        <Image
          src={article.image}
          alt={article.title}
          width={1920}
          height={1080}
          className={styles.articleImage}
          priority
        />
      </div>
      <Text
        variant="heading-default-xl"
        className={styles.articleTitle}
      >
        {article.title}
      </Text>
      <Text variant="body-default-s" className="text-neutral-500">
        {article.date}
      </Text>
      {locale === "zh" && (
        <Text variant="body-default-s" onBackground="neutral-weak">
          本文中文译稿正在整理中，以下暂为英文原文。
        </Text>
      )}
      <Line />
      <div className={styles.articleContent}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </Column>
  );
}
