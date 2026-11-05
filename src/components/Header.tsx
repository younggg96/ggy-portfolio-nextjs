"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import { routes, display } from "@/app/resources";
import {
  person,
  home,
  about,
  blog,
  project,
  gallery,
  articles,
} from "@/app/resources/content";
import Link from "next/link";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const isChinese = pathname === "/zh" || pathname.startsWith("/zh/");
  const pathPrefix = isChinese ? "/zh" : "";
  const languagePath = isChinese
    ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/"
    : `/zh${pathname === "/" ? "" : pathname}`;
  const navigation = isChinese
    ? {
        about: "关于",
        project: "项目",
        articles: "文章",
      }
    : {
        about: about.label,
        project: project.label,
        articles: articles.label,
      };

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}>
        <div className="absolute inset-0 bg-gradient-to-b from-page-background to-transparent backdrop-blur-sm pointer-events-none" />
      </Fade>
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-page-background to-transparent backdrop-blur-sm pointer-events-none" />
      </Fade>
      <Flex
        as="header"
        className="sticky top-0 sm:fixed sm:bottom-6 sm:top-auto"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex fillWidth horizontal="start" marginLeft="12">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href={`${pathPrefix}/`}
                  selected={pathname === "/" || pathname === "/zh"}
                />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href={`${pathPrefix}/about`}
                    label={navigation.about}
                    selected={pathname === "/about" || pathname === "/zh/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href={`${pathPrefix}/about`}
                    selected={pathname === "/about" || pathname === "/zh/about"}
                  />
                </>
              )}
              {routes["/project"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href={`${pathPrefix}/project`}
                    label={navigation.project}
                    selected={
                      pathname.startsWith("/project") ||
                      pathname.startsWith("/zh/project")
                    }
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href={`${pathPrefix}/project`}
                    selected={
                      pathname.startsWith("/project") ||
                      pathname.startsWith("/zh/project")
                    }
                  />
                </>
              )}
              {/* {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )} */}
              {/* {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                  />
                </>
              )} */}
              {routes["/articles"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="document"
                    href={`${pathPrefix}/articles`}
                    label={navigation.articles}
                    selected={
                      pathname.startsWith("/articles") ||
                      pathname.startsWith("/zh/articles")
                    }
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="document"
                    href={`${pathPrefix}/articles`}
                    selected={
                      pathname.startsWith("/articles") ||
                      pathname.startsWith("/zh/articles")
                    }
                  />
                </>
              )}
              <Line vert maxHeight="24" />
              <Link
                href={languagePath}
                hrefLang={isChinese ? "en" : "zh-CN"}
                className="px-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                aria-label={isChinese ? "Switch to English" : "切换到中文版"}
              >
                {isChinese ? "EN" : "中文"}
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
