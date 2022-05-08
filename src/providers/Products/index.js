import { createContext, useContext, useState } from "react";
import refrigerador from "../../assets/refrigerador.webp";
import tv from "../../assets/tv.webp";
import sofa from "../../assets/sofa.webp";
import microondas from "../../assets/microondas.webp";
import arcondicionado from "../../assets/arcondicionado.webp";
import cafeteira from "../../assets/cafeteira.webp";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Refrigerador Brastemp Frost Free Evox",
      price: 8610.05,
      src: refrigerador,
      id: 1,
    },
    {
      name: "Smart TV Full HD LED 43” Samsung",
      price: 2144.85,
      src: tv,
      id: 2,
    },
    {
      name: "Sofá Jobim 1,70m Velosuede Cinza",
      price: 1053.89,
      src: sofa,
      id: 3,
    },
    {
      name: "Micro-ondas Panasonic 27L Prata",
      price: 759.42,
      src: microondas,
      id: 4,
    },
    {
      name: "Ar-condicionado Split Gree 12.000 BTUs",
      price: 1599.99,
      src: arcondicionado,
      id: 5,
    },
    {
      name: "Cafeteira Elétrica Mondial Pratic 20",
      price: 319.00,
      src: cafeteira,
      id: 6,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
