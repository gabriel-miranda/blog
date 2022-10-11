import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import getCoffees from 'lib/coffees';
import styles from './styles.module.css';

export default function Post({ post }) {
  return (
    <main>
      <h1 className={styles.title}>{post.title}</h1>
      <header className={styles.header}>
        <time dateTime={post.createdAt}>
          {new Date(post.createdAt).toDateString()}
        </time>
        <small> {getCoffees(post.body)}</small>
      </header>
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
