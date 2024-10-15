"use client";

import { GiscusInformation, MetaInformation } from "@/app/constants";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <section className="mt-8">
      <Giscus
        id="comments"
        repo={GiscusInformation.dataRepo}
        repoId={GiscusInformation.dataRepoId}
        category={GiscusInformation.category}
        categoryId={GiscusInformation.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark"
        lang={MetaInformation.language}
        loading="lazy"
      />
    </section>
  );
}
