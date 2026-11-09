"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import styles from "@/components/GitHubCalendar.module.scss";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface CalendarYear {
  year: number;
  total: number;
  weeks: Contribution[][];
}

type CalendarState =
  | { status: "loading" }
  | { status: "loaded"; contributions: Contribution[] }
  | { status: "error"; message: string };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});
const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const levelClasses = [
  styles.level0,
  styles.level1,
  styles.level2,
  styles.level3,
  styles.level4,
];

function isContribution(value: unknown): value is Contribution {
  if (typeof value !== "object" || value === null) return false;

  const contribution = value as Record<string, unknown>;
  if (
    typeof contribution.date !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(contribution.date) ||
    typeof contribution.count !== "number" ||
    !Number.isInteger(contribution.count) ||
    contribution.count < 0 ||
    typeof contribution.level !== "number" ||
    !Number.isInteger(contribution.level) ||
    contribution.level < 0 ||
    contribution.level > 4
  ) {
    return false;
  }

  const date = new Date(`${contribution.date}T00:00:00Z`);
  return (
    Number.isFinite(date.getTime()) &&
    date.toISOString().slice(0, 10) === contribution.date
  );
}

function getCalendarYears(contributions: Contribution[]): CalendarYear[] {
  const contributionsByDate = new Map(
    contributions.map((contribution) => [contribution.date, contribution]),
  );
  const years = [...new Set(contributions.map(({ date }) => Number(date.slice(0, 4))))]
    .sort((a, b) => a - b);

  return years.map((year) => {
    const firstDay = new Date(Date.UTC(year, 0, 1));
    const start = new Date(firstDay);
    start.setUTCDate(start.getUTCDate() - start.getUTCDay());

    const lastDay = new Date(Date.UTC(year, 11, 31));
    const end = new Date(lastDay);
    end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));

    const weeks: Contribution[][] = [];
    for (const day = new Date(start); day <= end; day.setUTCDate(day.getUTCDate() + 1)) {
      const weekIndex = Math.floor(
        (day.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000),
      );
      if (!weeks[weekIndex]) weeks[weekIndex] = [];

      const date = day.toISOString().slice(0, 10);
      weeks[weekIndex].push(
        contributionsByDate.get(date) ?? { date, count: 0, level: 0 },
      );
    }

    const total = contributions.reduce(
      (sum, contribution) =>
        contribution.date.startsWith(`${year}-`)
          ? sum + contribution.count
          : sum,
      0,
    );

    return { year, total, weeks };
  });
}

function getContributionLabel(contribution: Contribution) {
  const date = dateFormatter.format(
    new Date(`${contribution.date}T00:00:00Z`),
  );
  const noun = contribution.count === 1 ? "contribution" : "contributions";
  return `${contribution.count} ${noun} on ${date}`;
}

export function GitHubCalendar({ username }: { username: string }) {
  const [state, setState] = useState<CalendarState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=all`,
      { signal: controller.signal },
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Contribution service returned ${response.status}`);
        }

        const data: unknown = await response.json();
        if (
          typeof data !== "object" ||
          data === null ||
          !("contributions" in data) ||
          !Array.isArray(data.contributions) ||
          !data.contributions.every(isContribution)
        ) {
          throw new Error("Contribution service returned invalid data");
        }

        setState({ status: "loaded", contributions: data.contributions });
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setState({
          status: "error",
          message:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        });
      });

    return () => controller.abort();
  }, [username]);

  const years = useMemo(
    () =>
      state.status === "loaded"
        ? getCalendarYears(state.contributions)
        : [],
    [state],
  );

  return (
    <section className={styles.calendar} aria-labelledby="github-calendar-title">
      <header className={styles.header}>
        <div>
          <h2 className={styles.title} id="github-calendar-title">
            GitHub contributions
          </h2>
          <p className={styles.description}>Complete contribution history</p>
        </div>
        <a
          className={styles.profileLink}
          href={`https://github.com/${encodeURIComponent(username)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub profile
        </a>
      </header>

      {state.status === "loading" && (
        <p className={styles.status} role="status">
          Loading GitHub contributions…
        </p>
      )}
      {state.status === "error" && (
        <p className={styles.status} role="alert">
          GitHub contributions could not be loaded: {state.message}
        </p>
      )}
      {state.status === "loaded" && years.length === 0 && (
        <p className={styles.status} role="status">
          No contribution history is available.
        </p>
      )}
      {state.status === "loaded" && years.length > 0 && (
        <>
          <div className={styles.years}>
            {years.map(({ year, total, weeks }) => {
              const calendarStyle: CSSProperties & { "--week-count": number } = {
                "--week-count": weeks.length,
              };

              return (
                <section key={year} aria-labelledby={`github-year-${year}`}>
                  <div className={styles.yearHeader}>
                    <h3
                      className={styles.yearTitle}
                      id={`github-year-${year}`}
                    >
                      {year}
                    </h3>
                    <span className={styles.yearTotal}>
                      {total.toLocaleString()} contributions
                    </span>
                  </div>
                  <div className={styles.graphScroll}>
                    <div className={styles.graph}>
                      <div className={styles.weekdayLabels} aria-hidden="true">
                        <span />
                        {weekdays.map((day) => (
                          <span key={day}>{day}</span>
                        ))}
                      </div>
                      <div className={styles.chart} style={calendarStyle}>
                        <div className={styles.months} aria-hidden="true">
                          {weeks.map((week, weekIndex) => {
                            const firstOfMonth = week.find(
                              ({ date }) =>
                                date.startsWith(`${year}-`) &&
                                date.endsWith("-01"),
                            );
                            if (!firstOfMonth) return null;

                            return (
                              <span
                                key={firstOfMonth.date}
                                style={{ gridColumn: weekIndex + 1 }}
                              >
                                {monthFormatter.format(
                                  new Date(`${firstOfMonth.date}T00:00:00Z`),
                                )}
                              </span>
                            );
                          })}
                        </div>
                        <div
                          className={styles.weeks}
                          role="list"
                          aria-label={`${year} daily contributions`}
                        >
                          {weeks.flatMap((week) =>
                            week.map((contribution) => {
                              const label = getContributionLabel(contribution);
                              return (
                                <span
                                  key={contribution.date}
                                  className={`${styles.cell} ${levelClasses[contribution.level]}`}
                                  role="listitem"
                                  aria-label={label}
                                  title={label}
                                />
                              );
                            }),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <div className={styles.legend} aria-label="Contribution levels">
            <span>Less</span>
            {levelClasses.map((levelClass, index) => (
              <span
                key={index}
                className={`${styles.cell} ${levelClass}`}
                aria-hidden="true"
              />
            ))}
            <span>More</span>
          </div>
        </>
      )}
    </section>
  );
}
