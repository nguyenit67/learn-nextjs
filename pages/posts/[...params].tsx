import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostsAllSubPageProps {}

export default function PostsAllSubPage(props: PostsAllSubPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Posts All Sub Page with params Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
