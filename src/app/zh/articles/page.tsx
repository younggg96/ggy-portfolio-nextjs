import type { Metadata } from "next";
import { ArticleList } from "@/components/articles/ArticleList";
import { articlesZh } from "@/app/resources/content.zh";

export const metadata: Metadata = {
  title: articlesZh.title,
  description: articlesZh.description,
  alternates: {
    canonical: "/zh/articles",
    languages: {
      en: "/articles",
      "zh-CN": "/zh/articles",
    },
  },
};

export default function ChineseArticles() {
  return (
    <ArticleList
      items={articlesZh.data}
      emptyTitle="暂无文章"
      emptyDescription="目前还没有可阅读的文章，欢迎稍后再来查看。"
    />
  );
}
