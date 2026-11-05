import { Column, Flex, Text } from "@/once-ui/components";
import Image from "next/image";
import Link from "next/link";

export type Article = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  tags: string[];
};

export function ArticleList({
  items,
  emptyTitle = "Coming Soon",
  emptyDescription = "No articles available at the moment. Check back later for tech articles and tutorials.",
}: {
  items: Article[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  return (
    <Column gap="8">
      {items.length > 0 ? (
        <>
          {items.map((article, index) => (
            <Link href={article.link} key={index}>
              <Flex direction="row" mobileDirection="column">
                <div className="s-flex-hide">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={360}
                    height={240}
                    className="object-cover w-full h-[240px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="s-flex-show">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={360}
                    height={240}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Column gap="s" padding="m" fillWidth>
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
            <Text variant="heading-default-l">{emptyTitle}</Text>
            <Text variant="body-default-m" className="text-center">
              {emptyDescription}
            </Text>
          </Column>
        </Flex>
      )}
    </Column>
  );
}
