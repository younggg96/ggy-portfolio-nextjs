import type { Metadata } from "next";
import {
  ArticleDetailContent,
  generateArticleMetadata,
  type ArticleParams,
} from "@/components/articles/ArticleDetail";
import { articlesZh } from "@/app/resources/content.zh";

export async function generateStaticParams(): Promise<ArticleParams[]> {
  return articlesZh.data.map((article) => ({ id: article.id.toString() }));
}

export function generateMetadata({
  params,
}: {
  params: ArticleParams;
}): Metadata {
  return generateArticleMetadata({ params }, "zh");
}

export default function ChineseArticleDetail({
  params,
}: {
  params: ArticleParams;
}) {
  return <ArticleDetailContent params={params} locale="zh" />;
}
