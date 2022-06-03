import ArticleCard from "../components/ArticleCard";
import Article from "../types/Article";
import Brand from "../types/Brand";

const articles = [
  new Article(
    "Asus laptop",
    500,
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "A beautiful computer",
    Brand.ASUS
  ),
  new Article(
    "Macbook Air",
    1000,
    "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "A beautiful computer",
    Brand.APPLE
  ),
  new Article(
    "Lenovo laptop",
    900,
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    "A beautiful computer",
    Brand.LENOVO
  ),
  new Article(
    "HP laptop",
    250,
    "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80",
    "A beautiful computer",
    Brand.HP
  ),
];
export default function Articles() {
  return (
    <div className='articles'>
      {articles.map((article: Article, index: number) => {
        return <ArticleCard key={index} {...article} />;
      })}
    </div>
  );
}
