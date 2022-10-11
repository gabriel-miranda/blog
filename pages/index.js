import client from 'lib/contentful-client';
import Summary from 'components/Summary';

export default function Home({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Summary key={post.id} post={post} />
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
