import { useState } from "react";
import ListProduct from "../components/ListProduct";
import { useEffect } from "react";

const saveProduct = localStorage.getItem("mydata");

const initialProduct = [     {
  id: 1,
  name: "Semangka",
  color: "Hijau",
  img: "https://1.bp.blogspot.com/-U9ERR0s-Eec/X2HYeY5-5bI/AAAAAAAABrM/PXe1NEzE7EseK7dmzbN69Lm30TyTjAZ8ACLcBGAsYHQ/s1024/manfaat-semangka-doktersehat-1.jpg",
  harga: 40000,
}
]
export default function Products() {
  const [products, setProducts] = useState(
    saveProduct ? JSON.parse(saveProduct) : initialProduct
  );
  const [productName, setProductName] = useState("");
  const [productColor,setProductColor] = useState("");
  const [productImage,setProductImage] = useState("");
  const [productHarga, setProductHarga] = useState("");
  const handleAddProduct = () => {
    if (!productName || !productHarga || !productColor || !productImage) return;
    const newProduct = {
      id: products.length + 1,
      name: productName,
      color: productColor,
      img : productImage,
      harga: productHarga,
    };
    setProducts([...products, newProduct]);
    productName("");
    productColor("");
    productImage("");
    productHarga("");
  };

  const handleEditProduct = (id, newName, newColor, newImage,newHarga ) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, name: newName,color :newColor , img:newImage, harga: newHarga }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (id) => {
    const deleteProduct = products.filter((product) => product.id !== id);
    setProducts(deleteProduct);
  };

  const handleDetailProduct = (id) => {
    const detailProduct = products.map((product) =>
    product.id === id ? product : NULL
    );
  };

  useEffect(()=>{
    localStorage.setItem("mydata", JSON.stringify(products))
  },[products]);
  
  return (
    <div>
      <div className="flex gap-4 p-7 ">
        {products.map((p) => (
          <ListProduct
            key={p.id}
            product={p}
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={() => handleDeleteProduct(p.id)}
          />
        ))}
      </div>

      <input
        type="text"
        placeholder="product name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="product Color"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={productColor}
        onChange={(e) => setProductColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link Product Image"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
      />
      <input
        type="number"
        placeholder="product harga"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={productHarga}
        onChange={(e) => setProductHarga(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleAddProduct}>Tambah</button>
    </div>
  );
}
