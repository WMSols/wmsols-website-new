import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs-newsroom';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white text-gray-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/blogs-newsroom"
                    className="text-sm text-gray-500 hover:text-gray-900 hover:underline mb-8 inline-flex items-center gap-1.5 transition-colors"
                >
                    &larr; Back to posts
                </Link>

                {/* Feature Hero Image */}
                <div className="relative w-full h-65 sm:h-100 rounded-2xl overflow-hidden mb-10 bg-gray-50">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Article Meta */}
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md">
                        {post.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 border-b border-gray-100 pb-6">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-50">
                            <Image src={post.author.avatarUrl} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                            <p className="text-xs text-gray-400">{post.date} · {post.readTime}</p>
                        </div>
                    </div>
                </div>



                {/* Content Body */}
                <div
                    className="prose prose-blue max-w-none text-gray-600 text-base leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    );
}