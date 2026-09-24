import { spawnSync } from "node:child_process";

const [, , command, ...args] = process.argv;

if (!command) {
  console.error("Usage: node scripts/run-vinext.mjs <dev|build|start> [...args]");
  process.exit(1);
}

if (process.env.NEXT_PUBLIC_SITE_RELEASED === "true") {
  const siteUrlValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const approvedHost = process.env.NEXT_PUBLIC_SITE_RELEASE_HOST
    ?.trim()
    .toLowerCase();
  let siteUrl;

  try {
    siteUrl = siteUrlValue ? new URL(siteUrlValue) : undefined;
  } catch {
    console.error("NEXT_PUBLIC_SITE_URL must be a valid HTTPS URL.");
    process.exit(1);
  }

  if (
    !siteUrl ||
    siteUrl.protocol !== "https:" ||
    !approvedHost ||
    siteUrl.hostname.toLowerCase() !== approvedHost ||
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(approvedHost) ||
    /\.(invalid|local|test)$/.test(approvedHost)
  ) {
    console.error(
      "Public release requires an HTTPS NEXT_PUBLIC_SITE_URL and an exact matching NEXT_PUBLIC_SITE_RELEASE_HOST.",
    );
    process.exit(1);
  }
}

const executable = process.platform === "win32" ? "vinext.cmd" : "vinext";
const result = spawnSync(executable, [command, ...args], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    WRANGLER_LOG_PATH:
      process.env.WRANGLER_LOG_PATH || ".wrangler/wrangler.log",
  },
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
