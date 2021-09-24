import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import DataContext from "../context/DataContext";
import { categoriesData } from "../data/categories";
import { productsData } from "../data/products";
import useLocalStorage from "../hooks/useLocalStorage";

function MyApp({ Component, pageProps }) {
  const [categories, setCategories] = useLocalStorage(
    "categories",
    categoriesData
  );
  const [products, setProducts] = useLocalStorage("products", productsData);
  return (
    <Layout>
      <DataContext.Provider
        value={{ categories, setCategories, products, setProducts }}
      >
        <Component {...pageProps} />
      </DataContext.Provider>
    </Layout>
  );
}

export default MyApp;
