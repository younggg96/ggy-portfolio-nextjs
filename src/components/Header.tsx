"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import { routes, display } from "@/app/resources";
import { person, home, about, blog, work, gallery, articles } from "@/app/resources/content";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
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

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}>
        <div className="absolute inset-0 bg-gradient-to-b from-page-background to-transparent backdrop-blur-sm pointer-events-none" />
      </Fade>
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9}>
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
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {/* {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
              {routes["/blog"] && (
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
              )}
              {routes["/gallery"] && (
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
                    href="/articles"
                    label={articles.label}
                    selected={pathname.startsWith("/articles")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="document"
                    href="/articles"
                    selected={pathname.startsWith("/articles")}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
