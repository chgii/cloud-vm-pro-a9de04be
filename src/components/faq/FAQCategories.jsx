import React from "react";
import { Button } from "@/components/ui/button";

export default function FAQCategories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <section className="py-10 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}