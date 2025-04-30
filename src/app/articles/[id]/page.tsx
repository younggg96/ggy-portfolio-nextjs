import { articles } from "@/app/resources/content";
import { Column, Flex, Line, Text } from "@/once-ui/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs/promises";
import path from "path";
import styles from "./article.module.css";

interface Params {
  id: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return articles.data.map((article) => ({ id: article.id.toString() }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = articles.data.find((a) => a.id.toString() === params.id);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticleDetail({ params }: { params: Params }) {
  const article = articles.data.find((a) => a.id.toString() === params.id);
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
          width={320}
          height={240}
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
      <Line />
      <div className={styles.articleContent}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </Column>
  );
}
