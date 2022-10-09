import client from 'lib/contentful-client';
import { getPlaiceholder } from 'plaiceholder';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function Home({ post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <Image
        src={`https:${post.image.fields.file.url}`}
        alt={post.image.fields.description}
        width={post.image.fields.file.details.image.width}
        height={post.image.fields.file.details.image.height}
        blurDataURL={post.blurDataURL}
        placeholder="blur"
      />
      <ReactMarkdown>{post.body}</ReactMarkdown>
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

    const { base64 } = await getPlaiceholder(
      `https:${post.fields.image.fields.file.url}`
    );

    return {
      props: {
        post: {
          id: post.sys.id,
          createdAt: post.sys.createdAt,
          blurDataURL: base64,
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
