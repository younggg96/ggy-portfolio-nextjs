import { articles } from "@/app/resources/content";
import { Card, Column, Flex, Grid, Line, Text } from "@/once-ui/components";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: articles.title,
  description: articles.description,
};

type Article = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  tags: string[];
};

export default function Articles() {
  const articlesData: Article[] = articles.data || [];

  return (
    <Column gap="8">
      {articlesData.length > 0 ? (
        <>
          {articlesData.map((article, index) => (
            <Link href={"/articles/" + article.id} key={index}>
              <Flex className="border rounded-sm overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={360}
                  height={240}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Column gap="s" padding="m">
                  <Text
                    variant="body-default-s"
                    className="text-neutral-500 dark:text-neutral-400"
                  >
                    {article.date}
                  </Text>
                  <Text
                    variant="heading-default-s"
                    className="text-neutral-900 dark:text-white line-clamp-2 transition-colors group-hover:text-brand-600"
                  >
                    {article.title}
                  </Text>
                  <Text
                    variant="body-default-s"
                    className="text-neutral-600 dark:text-neutral-300 line-clamp-3"
                  >
                    {article.description}
                  </Text>

                  <Flex gap="2" wrap marginTop="s">
                    {article.tags.map((tag, tagIndex) => (
                      <Text
                        key={tagIndex}
                        variant="body-default-xs"
                        className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 px-2 py-1 rounded"
                      >
                        {tag}
                      </Text>
                    ))}
                  </Flex>
                </Column>
              </Flex>
            </Link>
          ))}
        </>
      ) : (
        <Flex fillWidth horizontal="center" vertical="center" padding="xl">
          <Column gap="m" horizontal="center">
            <Text variant="heading-default-l">Coming Soon</Text>
            <Text variant="body-default-m" className="text-center">
              No articles available at the moment. Check back later for tech
              articles and tutorials.
            </Text>
          </Column>
        </Flex>
      )}
    </Column>
  );
}
