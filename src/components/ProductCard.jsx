import React from 'react';
import styles from './ProductCard.module.css';
import tractorBg from '../images/img1.jpg';
import fertilizerBag from '../images/img2.png';

const ProductCard = () => {
  return (
    <div className={styles.productCard3}>
      <div className={styles.cardImageContainer}>
        <img src={tractorBg} alt="Background field" className={styles.bgImg} />
        <img src={fertilizerBag} alt="Tobacco Bag" className={styles.overlayImg} />
      </div>
      <h3 className={styles.cardTitle}>Tobacco Fertilizer</h3>
      <p className={styles.cardText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.
      </p>
      <button className={styles.moreInfoBtn1}>
        More Info <span className={styles.arrow}>→</span>
      </button>
    </div>
  );
};

export default ProductCard;
