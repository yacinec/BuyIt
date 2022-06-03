import React from "react";
import Article from "../types/Article";
import Button from "./Button";

const ArticleCard: React.FC<Article> = (props) => {
  return (
    <article className='article-card'>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>
      <div className='btn-group'>
        <Button>Details</Button>
        <Button color='#0D9488'>Add to cart</Button>
      </div>
    </article>
  );
};
export default ArticleCard;
