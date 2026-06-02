import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blogs-newsroom';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="mb-16 flex flex-col items-center sm:px-12 px-4 py-12 gap-8">
      <div className="flex flex-col gap-4 max-w-5xl">
        <h2 className="text-3xl self-start font-bold text-gray-900 mb-4">Featured Post</h2>
      <Link href={`/blogs-newsroom/${post.slug}`} className="group grid grid-cols-1 border p-4 rounded-2xl shadow shadow-black/20  gap-8 items-center">
        {/* Image side */}
        <div className="lg:col-span-7 relative w-full h-80 md:h-110 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover group-hover:scale-101 transition-transform duration-500"
          />
        </div>

        {/* Text side */}
        <div className="lg:col-span-5 flex flex-col justify-center ">
          <div className="flex items-center text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="text-blue-500">{post.category}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-400">{post.date}</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              <Image src={post.author.avatarUrl} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-400">{post.readTime}</p>
            </div>
          </div>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;