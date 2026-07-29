import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  const tokenPattern = /(\[[^\]]+\]\(https?:\/\/[^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(tokenPattern).filter(Boolean);

  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export function RichText({ markdown }: { markdown: string }) {
  const blocks = markdown.split(/\n\s*\n/).filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        const lines = block.split("\n");
        if (lines.every((line) => /^-\s+/.test(line))) {
          return <ul key={index}>{lines.map((line) => <li key={line}>{inline(line.replace(/^-\s+/, ""))}</li>)}</ul>;
        }
        if (lines.every((line) => /^\d+\.\s+/.test(line))) {
          return <ol key={index}>{lines.map((line) => <li key={line}>{inline(line.replace(/^\d+\.\s+/, ""))}</li>)}</ol>;
        }
        return <p key={index}>{inline(lines.join(" "))}</p>;
      })}
    </>
  );
}
