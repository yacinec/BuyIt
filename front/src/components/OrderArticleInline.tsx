import { Article } from "../types";
import OrderArticle from "../types/OrderArticle";

interface ArticleInlineProps {
  index: number;
  article: OrderArticle;
}

const ArticleInline: React.FC<ArticleInlineProps> = (props) => {
  return (
    <div className='article-inline'>
      <img
        src={props.article.articleRef.img}
        alt={props.article.articleRef.name}
      />
      <div className='article-inline-details'>
        <div>
          <h4 className='article-inline-name'>
            {props.article.articleRef.name}
          </h4>
          <p className='article-inline-brand'>
            {props.article.articleRef.brand}
          </p>
        </div>
        <p className='article-inline-price'>
          ${props.article.articleRef.price}
        </p>
        <p className='article-inline-quantity'>x{props.article.quantity}</p>
      </div>
    </div>
  );
};

export default ArticleInline;
