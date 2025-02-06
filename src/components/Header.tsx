"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, IconButton, Icon, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, home, blog, about, work, gallery } from "@/app/resources/content";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
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
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          {/* <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            horizontal="center"
          > */}
          <Flex gap="4" vertical="center" textVariant="body-default-s">
            <Flex
              fitWidth
              border="brand-alpha-medium"
              className={styles.blockAlign}
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
            >
              <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
              <Flex paddingX="8">Schedule a call</Flex>
              <IconButton
                href={about.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Flex>
          </Flex>
              {/* {routes["/about"] && (
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
              )} */}
              {/* {routes["/meet"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/meet"
                    label={work.label}
                    selected={pathname.startsWith("/meet")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/meet"
                    selected={pathname.startsWith("/meet")}
                  />
                </>
              )} */}
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
            {/* </Flex> */}
          {/* </Flex> */}
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
