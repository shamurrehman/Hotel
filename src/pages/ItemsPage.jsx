import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Items from "../components/Items";

const ItemsPage = ({ items }) => {
  const [category, setCategory] = useState("burgers");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items?.filter((item) => item.category === category));
  }, [category]);

  return (
    <div className="" style={{ maxWidth: "1340px", margin: "6em auto" }}>
      <div className="flex justify-between" style={{ padding: "10px" }}>
        <h2 className="lg:text-lg">All Items</h2>
        <select
          className="border-2 rounded-sm"
          name="foodItems"
          id="items"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="burgers">Burger</option>
          <option value="fries">Fries</option>
          <option value="pizza">Pizza</option>
        </select>
      </div>
      <Items items={filteredItems || items} hide={false} />
    </div>
  );
};

export default ItemsPage;
