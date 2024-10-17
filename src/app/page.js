import PersonalCard from "@/components/personalCard";
import {
  PersonalInformation,
  PostInformation,
  GithubInformation,
} from "./constants";
import Main from "@/layouts/globalMain";
import StatCard from "@/components/statCard";
import { applyPostFilter, pagenation } from "@/lib/postsParser";
import PostList from "@/components/postList";
import GithubGrass from "@/components/githubGrass";
import LinkButton from "@/components/linkButton";

export default function Home() {
  let totalPosts = applyPostFilter();
  let posts = pagenation(totalPosts, PostInformation.viewCount);
  return (
    <Main className="mx-auto my-8 max-w-screen-lg">
      <section className="mx-auto grid grid-cols-1 gap-8 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <PersonalCard
          name={PersonalInformation.name}
          occupation={PersonalInformation.occupation}
          responsibility={PersonalInformation.responsibility}
          company={PersonalInformation.company}
          description={PersonalInformation.description}
          personalImage={PersonalInformation.personalImage}
          lineClamp={true}
        >
          <p>Children component 1</p>
          <p>Children component 1</p>
        </PersonalCard>
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="10+" title="Projects" />
            <StatCard value="5+" title="Nuget Packages" />
          </div>
          <GithubGrass />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <iframe
              className="size-full"
              src={`https://github-readme-stats.vercel.app/api?username=${GithubInformation.userName}&show_icons=true&theme=transparent&hide_border=true&hide_rank=true&title_color=38bdf8&text_color=94a3b8`}
            ></iframe>
            <iframe
              className="size-full"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GithubInformation.userName}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8`}
            ></iframe>
          </div>
          <LinkButton className="self-center" href="/about" text="Read More" />
        </section>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <span className="text-2xl font-bold text-slate-200/90">
          Recent Posts
        </span>
        <PostList className="mt-4" posts={posts}></PostList>
        <LinkButton
          className="mx-auto mt-4"
          href="/posts?category=all"
          text="Read More"
        />
      </section>
    </Main>
  );
}
