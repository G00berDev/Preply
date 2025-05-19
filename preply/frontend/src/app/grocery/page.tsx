'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from "../components/navbar";
import { AiTwotoneShop } from "react-icons/ai";
import groceryListData from "../data/grocery-list.json";

type GroceryItem = {
  id: number;
  name: string;
  category: string;
  quantity: string;
  checked: boolean;
};

const groupByCategory = (list: GroceryItem[]): Record<string, GroceryItem[]> => {
  return list.reduce((groups: Record<string, GroceryItem[]>, item) => {
    const category = item.category.toUpperCase();
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});
};

export default function Landing() {
  const [items, setItems] = useState<GroceryItem[]>(groceryListData);

  const toggleChecked = (id: number) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const groupedItems = groupByCategory(items);

  return (
    <div className="w-screen h-screen bg-[#F3CB78] overflow-x-hidden">
      <Navbar />
      <div className="flex">
        <p className="text-[#DC9500] text-[3rem] font-semibold w-[50%] ml-[1rem] lg:text-[7rem]">Grocery List</p>
        <AiTwotoneShop className="text-[#DC9500] text-[10rem] place-self-end ml-[5rem] lg:ml-[38rem]" />
      </div>

      <div className="bg-white w-full h-[65.5vh] lg:h-[71.25vh] rounded-t-3xl p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h2
                className={`font-medium mb-2 ${
                  category === "PRODUCE"
                    ? "text-[#3F8F2D]"
                    : category === "DAIRY"
                    ? "text-[#2C7DB0]"
                    : category === "MEAT"
                    ? "text-[#D93639]"
                    : ""
                }`}
              >
                {category}
              </h2>

              <ul className="space-y-2">
                {items.map(({ id, name, quantity, checked }) => (
                  <li
                    key={id}
                    className="flex items-center justify-between bg-[#f9f9f9] px-4 py-2 rounded-lg shadow-sm"
                  >
                    <div className={`flex flex-col ${checked ? "line-through text-gray-400" : ""}`}>
                      <span className="font-medium">{name}</span>
                      <span className="text-sm text-gray-600">{quantity}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleChecked(id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
