import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await api.get("/products");
    setProducts(res.data.products);
  };

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Link to="/add" className="btn">
        ➕ Add Product
      </Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>₹{p.price}</td>
              <td>{p.category}</td>
              <td>
                <Link to={`/product/${p._id}`}>View</Link>{" "}
                <Link to={`/edit/${p._id}`}>Edit</Link>{" "}
                <button onClick={() => deleteProduct(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
