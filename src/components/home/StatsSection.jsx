import React from "react";

const stats = [
  { number: "324+", label: "לקוחות פעילים" },
  { number: "99.8%", label: "זמינות מערכת" },
  { number: "24/7", label: "בוט AI פעיל" },
  { number: "3", label: "שנות פיתוח" }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            הפלטפורמה במספרים
          </h2>
          <p className="text-xl text-slate-300">
            נתונים עדכניים על הצמיחה והביצועים שלנו
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}