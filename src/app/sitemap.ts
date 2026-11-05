import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { articles } from "@/app/resources/content";
import { articlesZh } from "@/app/resources/content.zh";

export default async function sitemap() {
  const siteURL = baseURL.startsWith("http") ? baseURL : `https://${baseURL}`;
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${siteURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "project", "projects"]).map((post) => ({
    url: `${siteURL}/project/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const chineseWorks = getPosts([
    "src",
    "app",
    "project",
    "projects",
    "zh",
  ]).map((post) => ({
    url: `${siteURL}/zh/project/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route]
  );

  const routes = [...activeRoutes, "/zh", "/zh/about", "/zh/project", "/zh/articles"].map((route) => ({
    url: `${siteURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const englishArticles = articles.data.map((article) => ({
    url: `${siteURL}/articles/${article.id}`,
    lastModified: new Date(article.date).toISOString().split("T")[0],
  }));
  const chineseArticles = articlesZh.data.map((article) => {
    const sourceArticle = articles.data.find(
      (source) => source.id === article.id,
    );
    if (!sourceArticle) {
      throw new Error(`Missing English source article ${article.id}`);
    }

    return {
      url: `${siteURL}/zh/articles/${article.id}`,
      lastModified: new Date(sourceArticle.date).toISOString().split("T")[0],
    };
  });

  return [
    ...routes,
    ...blogs,
    ...works,
    ...chineseWorks,
    ...englishArticles,
    ...chineseArticles,
  ];
}
