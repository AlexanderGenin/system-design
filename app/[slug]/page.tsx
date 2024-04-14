import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { readFile, readdir } from "node:fs/promises";
import {
  Anchor,
  Heading,
  Logo,
  Illustration,
  IllustrationProps,
  Callout,
  CalloutProps,
  Background,
  Social,
} from "@components";
import Link from "next/link";
import { plusJakartaSans } from "@ui/fonts";
import rehypePrettyCode from "rehype-pretty-code";
import oneDarkPro from "../oneDarkPro.json";
import path from "node:path";

export async function generateStaticParams() {
  const articles = await readdir(
    path.join(process.cwd(), "public", "articles")
  );
  return articles.map((slug) => ({ slug }));
}

async function getArticle(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "articles",
    slug,
    "index.md"
  );

  try {
    const file = await readFile(filePath, "utf8");
    return file;
  } catch (e) {
    return null;
  }
}

const Article = async ({ params }: { params: { slug: string } }) => {
  const file = await getArticle(params.slug);
  if (!file)
    return (
      <div>
        <Background>
          <div className="flex flex-col min-h-screen">
            <header className="content-container py-10 text-3xl relative z-10">
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

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: file,
    components: {
      h2: (props) => <Heading size={2}>{props.children}</Heading>,
      h3: (props) => <Heading size={3}>{props.children}</Heading>,
      h4: (props) => <Heading size={4}>{props.children}</Heading>,
      a: (props) => <Anchor href={props.href!}>{props.children}</Anchor>,
      Illustration: (props: IllustrationProps) => <Illustration {...props} />,
      Callout: (props: CalloutProps) => <Callout {...props} />,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode as any,
            {
              theme: oneDarkPro,
              defaultLang: {
                block: "plaintext",
                inline: "plaintext",
              },
            },
          ],
        ],
      },
    },
  });

  return (
    <article className="flex flex-col min-h-screen">
      <Background>
        <header className="min-h-[256px] relative z-10">
          <div className="content-container py-10 text-3xl">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <Heading size={1}>{frontmatter.title}</Heading>
        </header>
      </Background>
      <div className="grow mdx text-lg mt-6 leading-relaxed">{content}</div>
      <footer className="content-container">
        <Social />
      </footer>
    </article>
  );
};

export default Article;
