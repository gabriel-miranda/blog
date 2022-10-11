import client from 'lib/contentful-client';
import { getPlaiceholder } from 'plaiceholder';
import Post from 'components/Post';

export default function Home({ post }) {
  return (
    <main>
      <Post post={post} />
    </main>
  );
}

export async function getStaticPaths() {
  try {
    const { items } = await client.getEntries({
      content_type: 'blogPost',
    });

    return {
      paths: items.map((i) => ({
        params: { slug: i.fields.slug },
      })),
      fallback: false,
    };
  } catch (e) {
    console.error(e);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const {
      items: [post],
    } = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug,
    });

    let blurDataURL = '';

    if (post.fields.image) {
      ({ base64: blurDataURL } = await getPlaiceholder(
        `https:${post.fields.image.fields.file.url}`
      ));
    }

    return {
      props: {
        post: {
          id: post.sys.id,
          createdAt: post.sys.createdAt,
          blurDataURL,
          ...post.fields,
        },
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
}
