import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get_all_articles } from "../redux/action-creators";
import { getArticles } from "../services/article.service";
import Article from "../types/Article";

import { ArticleCard } from "../components";
import { Tokens } from "../types";

export default function Articles() {
  const articles = useSelector((state: any) => state.articles.articles);
  const { accessToken, refreshToken, expiresIn } = useSelector((state: any) => {
    return { ...state.auth };
  });
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    try {
      const articles = await getArticles(
        new Tokens(accessToken, refreshToken, expiresIn)
      );
      dispatch(get_all_articles(articles));
    } catch (err) {
      console.log(err);
    }
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
