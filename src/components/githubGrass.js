"use client";

import { GithubInformation } from "@/app/constants";
import GitHubCalendar from "react-github-calendar";

export default function GithubGrass() {
  return (
    <GitHubCalendar
      username={GithubInformation.userName}
      colorScheme="dark"
      hideTotalCount={true}
    />
  );
}
