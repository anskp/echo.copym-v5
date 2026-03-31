import React from 'react';
import PostCard from './PostCard';

/**
 * RelatedPosts Component
 * Shows related articles at end of post
 */
export default function RelatedPosts({ posts = [], title = "Read More" }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-black/10">
      <h3 
        className="text-2xl font-bold text-black mb-6"
        style={{ fontFamily: 'Palanquin, sans-serif' }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post, index) => (
          <PostCard key={post.id || index} post={post} variant="standard" />
        ))}
      </div>
    </section>
  );
}
