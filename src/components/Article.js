import "./Article.scss";

const Article = ({ title, price, condition, img }) => {
  return (
    <div>
      <p>{title}</p>
      <p>${price}</p>
      <p>{condition}</p>
      <img alt="product" src={img} />
    </div>
  );
};

export default Article;
