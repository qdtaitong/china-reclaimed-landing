
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>China Reclaimed Red Brick Supplier</title>
        <meta
          name="description"
          content="Handmade, Recycled, and Heritage Bricks Sourced from China’s Historic Buildings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <section className="py-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            China Reclaimed Red Brick Supplier
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Handmade, Recycled, and Heritage Bricks Sourced from China’s Historic Buildings.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-5xl mx-auto">
          <div>
            <Image
              src="/images/1.jpg"
              alt="Hand holding China-sourced reclaimed red brick with visible surface texture"
              width={800}
              height={600}
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <Image
              src="/images/2.jpg"
              alt="Top view of reclaimed Chinese red bricks with white surface patina"
              width={800}
              height={600}
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <Image
              src="/images/3.jpg"
              alt="Side-stacked reclaimed red bricks with green straps for export"
              width={800}
              height={600}
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <Image
              src="/images/4.jpg"
              alt="Front-facing reclaimed red bricks stacked for packaging"
              width={800}
              height={600}
              className="rounded-lg shadow"
            />
          </div>
        </section>

        <section className="py-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: <a href="mailto:taitone@chinaclaybrick.com" className="text-blue-600 hover:underline">taitone@chinaclaybrick.com</a></p>
        </section>

        <footer className="bg-gray-100 py-6 mt-10 text-center text-sm text-gray-500">
          <div className="flex justify-center gap-4 mb-2">
            <a href="https://www.instagram.com/taitoneoldbrick/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/taitone-brick-46390871/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.pinterest.com/qdtaitong/" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="https://x.com/qdtaitong" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          </div>
          <p>© 2025 All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
