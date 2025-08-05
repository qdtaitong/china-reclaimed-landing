export default function SitemapPage() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.chinareclaimedbrick.com</loc>
    <lastmod>2024-01-08T10:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.chinareclaimedbrick.com/#products</loc>
    <lastmod>2024-01-08T10:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.chinareclaimedbrick.com/#applications</loc>
    <lastmod>2024-01-08T10:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.chinareclaimedbrick.com/#about</loc>
    <lastmod>2024-01-08T10:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.chinareclaimedbrick.com/#contact</loc>
    <lastmod>2024-01-08T10:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Website Sitemap</h1>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">XML Sitemap Content:</h2>
          <pre className="text-sm overflow-x-auto whitespace-pre-wrap bg-white p-4 rounded border">{sitemapXml}</pre>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Site Pages:</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/#products" className="text-blue-600 hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/#applications" className="text-blue-600 hover:underline">
                Applications
              </a>
            </li>
            <li>
              <a href="/#about" className="text-blue-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-blue-600 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
