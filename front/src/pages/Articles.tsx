import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../services/article.service";
import Article from "../types/Article";
import { get_all_articles } from "../redux/action-creators";

export default function Articles() {
  const articles = useSelector((state: any) => state.articles.articles);
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    const articles = await getArticles(accessToken);
    dispatch(get_all_articles(articles));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className='articles'>
      {articles.map((article: Article, index: number) => {
        return <ArticleCard key={index} {...article} />;
      })}
    </div>
  );
}
