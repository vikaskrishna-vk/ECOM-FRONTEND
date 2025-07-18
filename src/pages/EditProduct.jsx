import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

function EditProduct() {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setFormData(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/products/${id}`, formData);
    navigate("/");
  };

  return formData ? (
    <ProductForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  ) : (
    <p>Loading...</p>
  );
}

export default EditProduct;
