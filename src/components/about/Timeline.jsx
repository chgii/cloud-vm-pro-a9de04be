import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
  {
    year: "2021",
    title: "הקמת החברה",
    description: "הקמת CloudVM Pro עם חזון לספק פתרונות ענן מתקדמים לעסקים בישראל",
    badge: "התחלה"
  },
  {
    year: "2022", 
    title: "השקת הפלטפורמה",
    description: "פיתוח והשקת הפלטפורמה הראשונה עם מרכז נתונים בתל אביב",
    badge: "השקה"
  },
  
  {
    year: "2023",
    title: "פיתוח טכנולוגיות חדשות",
    description: "השקת פיצ'רים מתקדמים כמו AI-powered monitoring ואוטומציה חכמה",
    badge: "חדשנות"
  },
  {
    year: "2024",
    title: "העתיד כאן",
    description: " המשך פיתוח יכולות AI והוספת AGENT-BASED solutions",
  }
];

const badgeColors = {
  "התחלה": "bg-blue-100 text-blue-800",
  "השקה": "bg-green-100 text-green-800", 
  "צמיחה": "bg-purple-100 text-purple-800",
  "חדשנות": "bg-yellow-100 text-yellow-800",
  "אבטחה": "bg-red-100 text-red-800",
  "הישג": "bg-indigo-100 text-indigo-800",
  "עתיד": "bg-pink-100 text-pink-800"
};

export default function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            המסע שלנו
          </h2>
          <p className="text-xl text-gray-600">
            אבני הדרך החשובות בפיתוח החברה
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute right-1/2 transform translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className={`hover-lift glass-effect border-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={badgeColors[milestone.badge]}>
                          {milestone.badge}
                        </Badge>
                        <span className="text-2xl font-bold text-blue-600">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block relative">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}