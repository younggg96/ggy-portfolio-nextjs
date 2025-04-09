"use client";

import { mailchimp } from "@/app/resources";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Background,
  Column,
} from "@/once-ui/components";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

interface MailchimpProps {
  newsletter: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
}

export const Mailchimp = ({ newsletter }: MailchimpProps) => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("mailto:yangguanggeng960123@gmail.com", "_blank");
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Add resume download logic
    // https://drive.google.com/file/d/12ZCxWFK9ZlPVvr2YyOzAFCquCFDaVmfw/view?usp=sharing
    window.open(
      "https://drive.google.com/file/d/12ZCxWFK9ZlPVvr2YyOzAFCquCFDaVmfw/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />
      <Heading
        style={{ position: "relative", fontSize: "36px" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
          fontSize: "14px",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <Flex fillWidth maxWidth={24} gap="8">
        <Button onClick={handleEmailClick} size="m" prefixIcon="email">
          Send Message
        </Button>
        <Button
          onClick={handleResumeClick}
          className="flex-1"
          size="m"
          prefixIcon="IoDownloadOutline"
        >
          Download Resume
        </Button>
      </Flex>
    </Column>
  );
};
