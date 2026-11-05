import { ArticleList } from "@/components/articles/ArticleList";
import { articles } from "@/app/resources/content";

export const metadata = {
  title: articles.title,
  description: articles.description,
  alternates: {
    canonical: "/articles",
    languages: {
      en: "/articles",
      "zh-CN": "/zh/articles",
    },
  },
};

export default function Articles() {
  return <ArticleList items={articles.data} />;
}
