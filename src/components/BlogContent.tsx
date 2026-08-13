import Link from "next/link";
import type { ReactNode } from "react";

type BlogContentProps = {
  markdown: string;
};

/**
 * Lightweight markdown for blog bodies: paragraphs, ## headings, lists, and links.
 * Internal paths use Next Link; external http(s) open in a new tab.
 */
export function BlogContent({ markdown }: BlogContentProps) {
  const blocks = splitBlocks(markdown.trim());

  return (
    <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="pt-4 font-display text-2xl tracking-tight text-navy-deep md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={index}
              className="list-disc space-y-2 pl-5 marker:text-navy"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-left">
            {renderInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

function splitBlocks(markdown: string): Block[] {
  const chunks = markdown.split(/\n\n+/);
  const blocks: Block[] = [];

  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      continue;
    }

    const lines = trimmed.split("\n");
    if (lines.every((line) => /^[-*]\s+/.test(line.trim()))) {
      blocks.push({
        type: "ul",
        items: lines.map((line) => line.trim().replace(/^[-*]\s+/, "")),
      });
      continue;
    }

    blocks.push({ type: "p", text: lines.join(" ").replace(/\s+/g, " ") });
  }

  return blocks;
}

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      nodes.push(
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#2563EB] transition hover:text-navy"
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link
          key={`${href}-${match.index}`}
          href={href}
          className="font-semibold text-[#2563EB] transition hover:text-navy"
        >
          {label}
        </Link>,
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
