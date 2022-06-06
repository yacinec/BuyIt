import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Article, Brand } from "../types";

export default function ArticleDetails() {
  const { id } = useParams();
  const article = useSelector((state: any) =>
    state.articles.articles.find((article: Article) => article._id === id)
  );
  return (
    <div className='article-details'>
      <div className='single-article'>
        <div className='single-article-img'>
          <img src={article.img} alt={article.name} />
        </div>
        <div className='single-article-content'>
          <h3>{article.name}</h3>
          <p className='single-article-brand'>{article.brand}</p>
          <p>{article.description}</p>
        </div>
        <div className='single-article-price'>${article.price}</div>
      </div>
    </div>
  );
}
