"use client";

import { GithubInformation } from "@/app/constants";
import GitHubCalendar from "react-github-calendar";

export default function GithubGrass() {
  return (
    <div className="mx-auto mt-4 grid grid-cols-1">
      <GitHubCalendar
        username={GithubInformation.userName}
        colorScheme="dark"
        showWeekdayLabels
        labels={{
          weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          totalCount: `Contributions in the last year`,
        }}
      />
    </div>
  );
}
