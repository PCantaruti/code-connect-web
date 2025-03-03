import logger from "@/logger";
import { CardPost } from "./components/CardPost";
import styles from "./page.module.css";

async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  ).catch((error) => {
    logger.error("Erro de rede: " + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error("Problema ao obter os posts");
    return [];
  }
  return response.json();
}
export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main>
      <div className={styles.postcontainer}>
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
        {prev && <a href={`/?page=${prev}`}>Página Anterior</a>}
        {next && <a href={`/?page=${next}`}>Próxima Página</a>}
      </div>
    </main>
  );
}
