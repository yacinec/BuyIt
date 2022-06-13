import { Article } from "../types";
import OrderArticle from "../types/OrderArticle";

interface ArticleInlineProps {
  index: number;
  article: Article;
}

const ArticleInline: React.FC<ArticleInlineProps> = (props) => {
  return (
    <div className='article-inline'>
      <img src={props.article.img} alt={props.article.name} />
      <div className='article-inline-details'>
        <div>
          <h4 className='article-inline-name'>{props.article.name}</h4>
          <p className='article-inline-brand'>{props.article.brand}</p>
        </div>
        <p className='article-inline-price'>${props.article.price}</p>
      </div>
    </div>
  );
};

export default ArticleInline;
