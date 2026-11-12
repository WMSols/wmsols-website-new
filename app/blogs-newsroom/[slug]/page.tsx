import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { blogPosts } from '@/data/blogs-newsroom';
import { fetchBlogBySlug, getExcerpt, getImageUrl } from '@/lib/strapi';
import { clipText, pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { blogPosting, breadcrumbList } from '@/lib/structured-data';

function PublishedOn({ value }: { value: string }) {
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return value;
  return <time dateTime={new Date(parsed).toISOString().slice(0, 10)}>{value}</time>;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const liveBlog = await fetchBlogBySlug(slug).catch(() => null);

    if (liveBlog) {
      const description = clipText(getExcerpt(liveBlog.description) || liveBlog.title);
      const image = getImageUrl(liveBlog.image);
      return pageMetadata({
        title: liveBlog.title,
        description,
        path: `/blogs-newsroom/${liveBlog.slug}`,
        image,
        type: 'article',
      });
    }

    const localPost = blogPosts.find((post) => post.slug === slug);
    if (localPost) {
      return pageMetadata({
        title: localPost.title,
        description: clipText(localPost.excerpt || localPost.title),
        path: `/blogs-newsroom/${localPost.slug}`,
        image: localPost.imageUrl,
        type: 'article',
      });
    }
  } catch {
    // Fall through to a stable title. Do not throw from metadata.
  }

  return { title: 'Article | WMsols' };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const liveBlog = await fetchBlogBySlug(slug).catch(() => null);

  if (liveBlog) {
    const imageUrl = getImageUrl(liveBlog.image);

    return (
      <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/blogs-newsroom' },
          { name: liveBlog.title, path: `/blogs-newsroom/${liveBlog.slug}` },
        ])}
      />
      <JsonLd
        data={blogPosting({
          title: liveBlog.title,
          description: getExcerpt(liveBlog.description) || liveBlog.title,
          path: `/blogs-newsroom/${liveBlog.slug}`,
          date: liveBlog.date,
          author: liveBlog.author,
          image: imageUrl,
        })}
      />
      <article className="min-h-screen bg-white text-gray-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blogs-newsroom"
            className="text-sm text-gray-500 hover:text-gray-900 hover:underline mb-8 inline-flex items-center gap-1.5 transition-colors"
          >
            &larr; Back to posts
          </Link>

          <div className="relative w-full h-65 sm:h-100 rounded-2xl overflow-hidden mb-10 bg-gray-50">
            <Image src={imageUrl} alt={liveBlog.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
          </div>

          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md">
              {liveBlog.category?.name ?? 'News'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              {liveBlog.title}
            </h1>

            <div className="border-b border-gray-100 pb-6">
              <p className="text-sm font-semibold text-gray-900">{liveBlog.author}</p>
              <p className="text-xs text-gray-400"><PublishedOn value={liveBlog.date} /> · {liveBlog.readTime}</p>
            </div>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600 text-base leading-relaxed space-y-6">
            <BlocksRenderer content={liveBlog.description as any} />
          </div>
        </div>
      </article>
      </>
    );
  }

  // ── Local fallback ──────────────────────────────────────────────────────────
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
    <JsonLd
      data={breadcrumbList([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/blogs-newsroom' },
        { name: post.title, path: `/blogs-newsroom/${post.slug}` },
      ])}
    />
    <JsonLd
      data={blogPosting({
        title: post.title,
        description: post.excerpt || post.title,
        path: `/blogs-newsroom/${post.slug}`,
        date: post.date,
        author: post.author.name,
        image: post.imageUrl,
      })}
    />
    <article className="min-h-screen bg-white text-gray-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs-newsroom"
          className="text-sm text-gray-500 hover:text-gray-900 hover:underline mb-8 inline-flex items-center gap-1.5 transition-colors"
        >
          &larr; Back to posts
        </Link>

        <div className="relative w-full h-65 sm:h-100 rounded-2xl overflow-hidden mb-10 bg-gray-50">
          <Image src={post.imageUrl} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="border-b border-gray-100 pb-6">
            <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
            <p className="text-xs text-gray-400"><PublishedOn value={post.date} /> · {post.readTime}</p>
          </div>
        </div>

        <div
          className="prose prose-blue max-w-none text-gray-600 text-base leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
    </>
  );
}