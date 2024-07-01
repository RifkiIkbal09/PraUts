import { useState } from "react";

export default function ListProduct({
  product,
  handleEditProduct,
  handleDeleteProduct,
  handleDetailProduct
}) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(product.name);
  const [color,setColor] = useState(product.color);
  const [img, setImage] = useState(product.img);
  const [harga, setHarga] = useState(product.harga);

  const handleSave = () => {
    handleEditProduct(product.id, name, color, img, harga);
    setEdit(false);
  };
  return (
    <div className="border border-gray p-3 border-radius-5">
      {!edit ? (
        <>
          <img src={product.img} alt="Gambar" className="w-24 h-24 rounded-full mx-auto"/>
          <h1 className="text-lg font-medium">{product.name}</h1>
          <p>{product.harga}</p>
          <div className=" flex justify-around gap-4">
            <button onClick={() => setEdit(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              edit
            </button>
            <button onClick={handleDeleteProduct} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              delete
            </button>
            <button onClick={handleDetailProduct} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Detail
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            placeholder="Input Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Input Color"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            placeholder="Input link Image"
            type="text"
            value={img}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            placeholder="Input Hagra"
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
          <button onClick={handleSave}>save</button>
        </>
      )}
    </div>
  );
}
