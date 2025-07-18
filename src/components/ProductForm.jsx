import React from "react";

function ProductForm({ formData, setFormData, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("rating.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [key]: key === "rate" || key === "count" ? Number(value) : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "price" ? Number(value) : value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        name="rating.rate"
        value={formData.rating.rate}
        onChange={handleChange}
        placeholder="Rating"
        type="number"
      />
      <input
        name="rating.count"
        value={formData.rating.count}
        onChange={handleChange}
        placeholder="Rating Count"
        type="number"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
