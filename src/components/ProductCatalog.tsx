import React, { useState } from "react";
import { Product } from "../types/Product";
import styles from "./ProductCatalog.module.css";

const ProductCatalog: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      title: "Smartphone",
      price: 699,
      category: "Electronics",
      image:
        "https://www.stonegroup.co.uk/media/catalog/product/cache/2fa910946d31dd7ab8a5af6d2923c685/4/7/47453401-FF25-455D-82CB-8ED782D10335.jpg",
    },
    {
      id: 2,
      title: "Novel",
      price: 15,
      category: "Books",
      image:
        "https://images-platform.99static.com//s7Ji7R7kzTssXRormmlrewsCA-U=/410x142:1340x1073/fit-in/500x500/99designs-contests-attachments/122/122531/attachment_122531218",
    },
    {
      id: 3,
      title: "Jacket",
      price: 89,
      category: "Clothing",
      image:
        "https://static.vecteezy.com/system/resources/previews/050/511/812/non_2x/army-green-mens-denim-jacket-button-up-collar-and-long-sleeves-for-a-trendy-slim-fit-look-png.png",
    },
    {
      id: 4,
      title: "Wireless Headphones",
      price: 199,
      category: "Electronics",
      image:
        "https://www.gamemaster.pk/wp-content/uploads/2024/04/p47-wireless-bluetooth-stereo-headphones-1.png",
    },
    {
      id: 5,
      title: "Cooking Pan",
      price: 29,
      category: "Home Appliances",
      image:
        "https://img.freepik.com/free-vector/metal-black-nonstick-frying-pans-top-view_107791-1623.jpg",
    },
    {
      id: 6,
      title: "Gaming Laptop",
      price: 1200,
      category: "Electronics",
      image:
        "https://globaliraq.net/cdn/shop/files/6_f59d1df1-630d-40c5-9322-e0b07c59f39d_2048x.png?v=1725532422",
    },
    {
      id: 7,
      title: "Fiction Book",
      price: 20,
      category: "Books",
      image:
        "https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome.jpg",
    },
    {
      id: 8,
      title: "Winter Coat",
      price: 150,
      category: "Clothing",
      image:
        "https://i5.walmartimages.com/seo/Levmjia-Men-s-Puffer-Jacket-Hooded-Winter-Coat-Clearance-Men-s-Stand-up-Collar-Winter-Casual-Padded-Cotton-Jacket_194c47ab-549b-424d-bcd5-94de3010485d.d7bb5f861507c4ddd9ec8fb975c1080c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
    {
      id: 9,
      title: "Vacuum Cleaner",
      price: 99,
      category: "Home Appliances",
      image: "https://cleaningproductstore.com/images/products/mc520.jpg",
    },
    {
      id: 10,
      title: "Bluetooth Speaker",
      price: 49,
      category: "Electronics",
      image:
        "https://www.shutterstock.com/image-photo/black-wireless-portable-bluetooth-speaker-600nw-1545279014.jpg",
    },
    {
      id: 11,
      title: "Coffee Maker",
      price: 79,
      category: "Home Appliances",
      image:
        "https://media.istockphoto.com/id/120874807/photo/modern-coffee-machine-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=_X3cdr1N5Cb8VjN_44v1i6ylbgUyjiiyR1Eqa7GDkjA=",
    },
    {
      id: 12,
      title: "Sports Shoes",
      price: 59,
      category: "Clothing",
      image:
        "https://i5.walmartimages.com/asr/e4898cf3-731e-44aa-a69c-f09f65510708.f98397f328ea1dcbff50f7bb75017b36.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterProducts(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    filterProducts(searchTerm, event.target.value);
  };

  const filterProducts = (search: string, category: string) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || product.category === category)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Product Catalog</h1>
      <div className={styles.filters}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className={styles.categorySelect}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price}</p>
            </div>
          ))
        ) : (
          <p className={styles.noProductsFound}>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
