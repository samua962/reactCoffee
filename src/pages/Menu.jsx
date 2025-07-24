import React, { useState } from "react";
import { Plus } from "lucide-react";

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuItems = [
    {
      id: 1,
      name: "Ethiopian Espresso",
      description: "Rich, full-bodied espresso from the highlands of Ethiopia",
      price: 3.5,
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 2,
      name: "Yirgacheffe Pour Over",
      description: "Bright, floral notes with citrus undertones",
      price: 4.25,
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 3,
      name: "Sidamo Cold Brew",
      description: "Smooth, chocolatey cold brew perfect for hot days",
      price: 3.75,
      image:
        "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 4,
      name: "Harar Cappuccino",
      description: "Traditional cappuccino with wine-like Ethiopian beans",
      price: 4.0,
      image:
        "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 5,
      name: "Injera with Doro Wat",
      description: "Traditional Ethiopian flatbread with spicy chicken stew",
      price: 16.99,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 6,
      name: "Vegetarian Combo",
      description: "Assortment of lentils, vegetables, and Ethiopian spices",
      price: 14.99,
      image:
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 7,
      name: "Kitfo",
      description: "Ethiopian steak tartare with mitmita spice and ayib cheese",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 8,
      name: "Shiro",
      description: "Ground chickpea stew with berbere spices",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 9,
      name: "Honey Baklava",
      description: "Flaky pastry with honey and mixed nuts",
      price: 4.5,
      image:
        "https://images.pexels.com/photos/6086/food-essen-pastry-bakery.jpg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
    {
      id: 10,
      name: "Ethiopian Cookies",
      description: "Traditional spiced cookies with cardamom and cinnamon",
      price: 3.25,
      image:
        "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
    {
      id: 11,
      name: "Coffee Cake",
      description: "Moist cake infused with Ethiopian coffee",
      price: 5.99,
      image:
        "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
    {
      id: 12,
      name: "Chocolate Croissant",
      description: "Buttery croissant filled with rich Ethiopian chocolate",
      price: 3.75,
      image:
        "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
  ];

  const categories = [
    { id: "coffee", name: "Coffee", icon: "☕" },
    { id: "food", name: "Ethiopian Food", icon: "🍽️" },
    { id: "pastries", name: "Pastries", icon: "🥐" },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Ethiopian flavors and premium coffee experiences
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-amber-800 text-white shadow-md"
                    : "text-gray-700 hover:bg-amber-50"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-800">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
