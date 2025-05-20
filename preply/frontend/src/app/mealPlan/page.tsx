'use client';
import { useState } from 'react';
import Navbar from "../components/navbar";
import recipesData from '../data/recipes.json';

export default function MealPlan() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const filteredRecipes = (day: string, type: string) => {
    return recipesData.filter(
      (recipe) =>
        recipe.day === day &&
        typeof recipe.type === 'string' &&
        recipe.type.toLowerCase() === type.toLowerCase()
    );
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Navbar />

      <main
        className="
          flex-1 
          p-4 
          lg:ml-[30vw] 
          overflow-x-visible
          flex flex-col
        "
      >
        <h1 className="text-[#DC9500] text-3xl font-medium mb-4">THIS WEEK</h1>

        <div className="md:hidden mb-4">
          <select
            className="border border-gray-300 rounded font-medium text-xl p-2 w-full"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div className="md:hidden space-y-4">
          {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => (
            <div key={mealType}>
              <h2
                className={`text-lg font-semibold mb-2 border-t-4 pt-2 w-[20vw] ${
                  mealType === 'Breakfast'
                    ? 'border-[#CE3333]'
                    : mealType === 'Lunch'
                    ? 'border-[#FFD52D]'
                    : 'border-[#5D96FF]'
                }`}
              >
                {mealType}
              </h2>
              {filteredRecipes(selectedDay, mealType).map((recipe) => (
                <div
                  key={recipe.name}
                  className="bg-gray-100 rounded-lg shadow p-3 mb-2 flex items-center"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-16 h-16 rounded mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium">{recipe.name}</p>
                    <p className="text-sm text-gray-500">{recipe.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className="
            hidden md:flex 
            overflow-x-auto 
            space-x-6 
            pb-4
            scrollbar-thin scrollbar-thumb-[#FAA900]/80 scrollbar-track-gray-100
          "
          style={{ minWidth: '100%' }}
        >
          {days.map((day) => (
            <div
              key={day}
              className="min-w-[300px] flex-shrink-0 bg-white shadow-lg rounded-xl p-4"
            >
              <h2 className="text-xl font-semibold text-[#DC9500] mb-3">{day}</h2>
              {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => (
                <div key={mealType} className="mb-4">
                  <h3
                    className={`font-semibold mb-2 border-t-4 pt-2 ${
                      mealType === 'Breakfast'
                        ? 'border-[#CE3333]'
                        : mealType === 'Lunch'
                        ? 'border-[#FFD52D]'
                        : 'border-[#5D96FF]'
                    }`}
                  >
                    {mealType}
                  </h3>
                  {filteredRecipes(day, mealType).map((recipe) => (
                    <div
                      key={recipe.name}
                      className="bg-gray-100 rounded-lg shadow p-3 mb-2 flex items-center"
                    >
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-16 h-16 rounded mr-3 object-cover"
                      />
                      <div>
                        <p className="font-medium">{recipe.name}</p>
                        <p className="text-sm text-gray-500">{recipe.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
