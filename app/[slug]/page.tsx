import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import {
  List,
  Anchor,
  Paragraph,
  Heading,
  Logo,
  Illustration,
  IllustrationProps,
  Background,
} from "@components";
import Link from "next/link";
import { plusJakartaSans } from "@ui/fonts";

const Article = async ({ params }: { params: { slug: string } }) => {
  const filename = `./public/articles/${params.slug}/index.md`;
  let file;
  try {
    file = await readFile(filename, "utf8");
  } catch (e) {
    return (
      <div>
        <Background>
          <div className="flex flex-col min-h-screen">
            <header className="content-container py-10 text-3xl">
              <Link href={"/"}>
                <Logo />
              </Link>
            </header>
            <div
              className={`${plusJakartaSans.className} grow text-5xl text-center font-extrabold flex justify-center items-center`}
            >
              <div className="-translate-y-[58px]">Not found... 🤔</div>
            </div>
          </div>
        </Background>
      </div>
    );
  }

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: file,
    components: {
      h2: (props) => <Heading size={2}>{props.children}</Heading>,
      h3: (props) => <Heading size={3}>{props.children}</Heading>,
      p: (props) => <Paragraph>{props.children}</Paragraph>,
      a: (props) => <Anchor href={props.href!}>{props.children}</Anchor>,
      ul: (props) => <List type="unordered">{props.children}</List>,
      ol: (props) => <List type="ordered">{props.children}</List>,
      Illustration: (props: IllustrationProps) => <Illustration {...props} />,
    },
    options: { parseFrontmatter: true },
  });

  return (
    <article className="flex flex-col min-h-screen">
      <header className="h-[256px]">
        <Background>
          <div className="content-container py-10 text-3xl">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <Heading size={1}>{frontmatter.title}</Heading>
        </Background>
      </header>
      <div className="grow mdx text-lg">{content}</div>
    </article>
  );
};

export default Article;
