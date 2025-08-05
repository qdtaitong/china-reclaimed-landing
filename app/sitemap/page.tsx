import { redirect } from "next/navigation"

export default function SitemapRedirect() {
  // 这个页面会重定向到 sitemap.xml
  redirect("/sitemap.xml")
}
