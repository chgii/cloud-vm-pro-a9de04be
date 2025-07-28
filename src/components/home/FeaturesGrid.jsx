import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Bot, CreditCard, BarChart3, Cloud, Headphones } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "ניהול מאגר לקוחות",
    description: "מעקב אחר כל הלקוחות שלכם במקום אחד עם כלי חיפוש מתקדמים ותיוג חכם",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Bot,
    title: "בוט AI חכם",
    description: "מענה אוטומטי ללקוחות 24/7 עם יכולות למידה ותשובות מותאמות אישית",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CreditCard,
    title: "ניהול תשלומים",
    description: "עיבוד תשלומים אוטומטי, מעקב אחר חובות ושליחת תזכורות חכמות",
    color: "from-green-500 to-green-600"
  },
  {
    icon: BarChart3,
    title: "דוחות ואנליטיקה",
    description: "ניתוח נתונים מעמיק עם גרפים ודוחות שמסייעים בקבלת החלטות",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Cloud,
    title: "Google Cloud",
    description: "אחסון מאובטח ומהיר על תשתית Google Cloud עם גיבויים אוטומטיים",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Headphones,
    title: "תמיכה בעברית",
    description: "תמיכה מלאה בעברית עם צוות ישראלי שמבין את הצרכים המקומיים",
    color: "from-teal-500 to-teal-600"
  }
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="hover-lift glass-effect border-0 group">
          <CardContent className="p-8 text-center">
            <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}