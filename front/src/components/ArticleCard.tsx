import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add_article_cart } from "../redux/action-creators";
import Article from "../types/Article";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

const ArticleCard: React.FC<Article> = (props) => {
  const dispatch = useDispatch();
  const notify = () => toast.success("Article added in your cart!");

  const handleClickAddToCart = (article: Article): void => {
    dispatch(add_article_cart(article));
    notify();
  };
  return (
    <article className='article-card'>
      <div>
        <Toaster />
      </div>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>
      <div className='btn-group'>
        <Button>
          <Link className='article-card-btn' to={`/article/${props._id}`}>
            Details
          </Link>
        </Button>
        <Button
          handleClick={() => {
            handleClickAddToCart(props);
          }}
          color='#0D9488'
        >
          Add to cart
        </Button>
      </div>
    </article>
  );
};
export default ArticleCard;
