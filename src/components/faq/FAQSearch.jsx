import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function FAQSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="חפשו בשאלות נפוצות..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pr-10 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500"
      />
    </div>
  );
}