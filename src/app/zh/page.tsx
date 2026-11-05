import type { Metadata } from "next";
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  RevealFx,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { homeZh, newsletterZh } from "@/app/resources/content.zh";
import { Mailchimp } from "@/components";

export const metadata: Metadata = {
  title: homeZh.title,
  description: homeZh.description,
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: homeZh.title,
    description: homeZh.description,
    url: `${baseURL}/zh`,
    locale: "zh_CN",
  },
};

export default function ChineseHome() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
          <Heading wrap="balance" variant="display-strong-l">
            {homeZh.headline}
          </Heading>
        </RevealFx>
        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="start"
          paddingBottom="m"
        >
          <Text onBackground="neutral-weak" variant="heading-default-xl">
            {homeZh.subline}
          </Text>
        </RevealFx>
        <RevealFx translateY="12" delay={0.4} horizontal="start">
          <Button
            id="about"
            data-border="rounded"
            href="/zh/about"
            variant="secondary"
            size="m"
            arrowIcon
          >
            <Flex gap="8" vertical="center">
              <Avatar
                style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                src={person.avatar}
                size="m"
              />
              关于我
            </Flex>
          </Button>
        </RevealFx>
      </Column>
      <RevealFx translateY="8" delay={0.8} fillWidth horizontal="start">
        <Mailchimp newsletter={newsletterZh} locale="zh" />
      </RevealFx>
    </Column>
  );
}
