import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {}

export default function PostListPage(props: PostListPageProps) {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {[12345, 4567].map((postId) => (
          <li>
            <article>
              <h2>Post #{postId}</h2>
              <p>
                <Link href={`/posts/${postId}`}>
                  <a>Read More</a>
                </Link>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
