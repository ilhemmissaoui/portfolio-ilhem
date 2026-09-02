import { redirect } from "next/navigation";

import { siteConfig } from "@/config/site";

// Keeps /resume as a shareable URL: it opens the PDF that the hero button downloads.
export default function ResumePage() {
  redirect(siteConfig.resumeFile);
}
