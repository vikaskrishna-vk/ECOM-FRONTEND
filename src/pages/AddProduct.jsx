import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import api from "../api";

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/products", formData);
    navigate("/");
  };

  return (
    <ProductForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
}

export default AddProduct;
