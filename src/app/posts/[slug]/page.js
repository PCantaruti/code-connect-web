import { Logger } from "winston";
import { remark } from "remark";
import html from "remark-html";
import { Card } from "@/app/components/CardPost/Card";
import { CardCode } from "@/app/components/CardCode";

async function getPost(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;

  const response = await fetch(url).catch((error) => {
    Logger.error("Erro de rede: " + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error("Problema ao obter o post");
    return [];
  }

  const data = await response.json();
  if (data.length === 0) {
    return null;
  }

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}
//card
//titulo do post com descrição abaixo
//"Codigo"
// descrição do codigo
const PagePost = async ({ params }) => {
  const post = await getPost(params.slug);
  return (
    <>
      <div>
        <Card key={post.id} post={post} />
        <CardCode key={post.id} post={post} />
      </div>
    </>
  );
};

export default PagePost;
