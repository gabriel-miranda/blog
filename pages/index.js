import client from 'lib/contentful-client';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <header>
            <h2>
              <Link href={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toDateString()}
            </time>
          </header>
          <p>{post.description}</p>
          <div align="right">
            <Link href={`/${post.slug}`}>
              <a> Read More →</a>
            </Link>
          </div>
        </article>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  try {
    const { items } = await client.getEntries({
      content_type: 'blogPost',
    });

    return {
      props: {
        posts: items.map((i) => ({
          id: i.sys.id,
          createdAt: i.sys.createdAt,
          ...i.fields,
        })),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
}
