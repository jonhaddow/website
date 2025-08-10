import { Card } from ".";
import * as React from "react";

export const RecentPosts: React.FC = () => {
  // For now, we'll use placeholder data
  // This will be replaced with proper Astro content collection data
  const recentPosts = [
    {
      id: '1',
      slug: 'test-post',
      title: 'Test Post',
      abstract: 'This is a test post',
      date: 'January 1, 2024',
      featuredImage: null
    }
  ];

  return (
    <Card className="mx-auto mb-16 max-w-3xl rounded-none px-4 md:w-9/12 md:rounded-lg md:px-8">
      <h2 className="mb-6 text-2xl font-normal">Recent posts</h2>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <a
              className="group items-center md:flex"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full overflow-hidden pb-3 pt-1 md:inline-block md:pl-3">
                <strong className="pr-2 pt-3 text-2xl font-normal text-text group-hover:underline">
                  {post.title}
                </strong>
                <time className="-mt-1 block h-full text-sm text-text-light">
                  {post.date}
                </time>
                <p className="mt-2 truncate italic">
                  {post.abstract}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a className="hover:underline" href="/blog">
        View all posts
      </a>
    </Card>
  );
};
