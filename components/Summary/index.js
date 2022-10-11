import Link from 'next/link';
import styles from './styles.module.css';
import getCoffees from 'lib/coffees';

function Summary({ post }) {
  return (
    <article key={post.id}>
      <header>
        <h2 className={styles.title}>
          <Link href={`/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h2>
        <time dateTime={post.createdAt}>
          {new Date(post.createdAt).toDateString()}
        </time>
        <small> {getCoffees(post.body)}</small>
      </header>
      <p>{post.description}</p>
      <div align="right">
        <Link href={`/${post.slug}`}>
          <a> Read More →</a>
        </Link>
      </div>
    </article>
  );
}

export default Summary;
