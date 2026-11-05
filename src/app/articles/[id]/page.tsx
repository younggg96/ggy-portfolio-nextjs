import {
  ArticleDetailContent,
  generateArticleMetadata,
  type ArticleParams,
} from "@/components/articles/ArticleDetail";
import { articles } from "@/app/resources/content";

export async function generateStaticParams(): Promise<ArticleParams[]> {
  return articles.data.map((article) => ({ id: article.id.toString() }));
}

export function generateMetadata({
  params,
}: {
  params: ArticleParams;
}) {
  return generateArticleMetadata({ params });
}

export default function ArticleDetail({ params }: { params: ArticleParams }) {
  return <ArticleDetailContent params={params} />;
}
