import Card from "../Card";
import { Ul } from "./style";
import { useProducts } from "../../providers/Products";

const Display = () => {
  const { products } = useProducts();

  return (
    <Ul>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Ul>
  );
};

export default Display;
