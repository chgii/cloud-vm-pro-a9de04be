import React from "react";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "כ - 400 ",
    label: "לקוחות פעילים",
    description: "ברחבי העולם",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Globe,
    number: "15",
    label: "מרכזי נתונים",
    description: "ב-5 יבשות",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Award,
    number: "99.9%",
    label: "זמינות שירות",
    description: "SLA מובטח",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: TrendingUp,
    number: "2021",
    label: "שנת הקמה",
    description: "4 שנות ניסיון",
    color: "from-orange-500 to-orange-600"
  }
];

export default function CompanyStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            החברה במספרים
          </h2>
          <p className="text-xl text-slate-300">
            הנתונים שמראים את הצמיחה וההצלחה שלנו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}