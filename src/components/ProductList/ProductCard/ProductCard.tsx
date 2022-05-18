import { ProductDetails } from "../../../types/ProductDetails";
import styles from './ProductCard.module.scss';

interface Props {
  product: ProductDetails;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.product_card} >
      <div className={styles.image_wrapper} >
        <img src={product.image} alt={product.title}/>
      </div>
      {product.title}
      {product.category}
      {product.price}
    </div>
  );
};

export default ProductCard;