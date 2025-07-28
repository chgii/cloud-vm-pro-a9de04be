import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Zap, 
  Shield, 
  Monitor, 
  Database, 
  Network, 
  Clock, 
  Headphones,
  CheckCircle,
  Cpu,
  HardDrive,
  Globe,
  Lock,
  BarChart3,
  Settings
} from "lucide-react";

import FeatureShowcase from "../components/features/FeatureShowcase";
import TechnicalSpecs from "../components/features/TechnicalSpecs";
import ComparisonTable from "../components/features/ComparisonTable";

const mainFeatures = [
  {
    icon: Cpu,
    title: "עוצמת עיבוד מתקדמת",
    description: "מעבדי Intel Xeon ו-AMD EPYC האחרונים עם עד 64 ליבות עיבוד",
    features: [
      "מעבדים דור אחרון עם טכנולוגיית 7nm",
      "זיכרון מטמון L3 גדול לביצועים מעולים",
      "תמיכה בווירטואליזציה מתקדמת",
      "Turbo Boost אוטומטי בעומסי שיא"
    ],
    badge: "פופולרי",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: HardDrive,
    title: "אחסון מהיר ואמין",
    description: "כונני SSD NVMe מהירים עם גיבויים אוטומטיים",
    features: [
      "מהירות קריאה עד 6,000 MB/s",
      "מהירות כתיבה עד 4,400 MB/s",
      "גיבויים אוטומטיים כל 6 שעות",
      "RAID 10 להגנה מקסימלית"
    ],
    badge: "מומלץ",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "אבטחה מתקדמת",
    description: "הגנה מרובת שכבות עם טכנולוגיות אבטחה חדישות",
    features: [
      "חומת אש מתקדמת עם DPI",
      "הצפנת נתונים ברמת hardware",
      "ניטור אבטחה 24/7",
      "בקרת גישה מבוססת תפקידים"
    ],
    badge: "חיוני",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Network,
    title: "רשת גלובלית מהירה",
    description: "חיבור מהיר לאינטרנט עם רשת CDN עולמית",
    features: [
      "רוחב פס עד 10 Gbps",
      "זמן תגובה נמוך מ-5ms",
      "15 מרכזי נתונים עולמיים",
      "Load balancing אוטומטי"
    ],
    badge: "גלובלי",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "ניטור וניהול",
    description: "כלי ניטור מתקדמים עם דשבורד מקצועי",
    features: [
      "ניטור ביצועים בזמן אמת",
      "התראות אוטומטיות",
      "דוחות מפורטים וגרפים",
      "API מלא לאינטגרציות"
    ],
    badge: "חדש",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Settings,
    title: "גמישות מלאה",
    description: "התאמה אישית מלאה לפי הצרכים הספציפיים שלכם",
    features: [
      "שדרוג משאבים בזמן אמת",
      "תבניות מערכות הפעלה רבות",
      "קונפיגורציות מותאמות אישית",
      "סקריפטים אוטומטיים"
    ],
    badge: "גמיש",
    color: "from-teal-500 to-teal-600"
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
            <Zap className="w-4 h-4 ml-2" />
            פיצ'רים מתקדמים
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            טכנולוגיה מתקדמת
            <br />
            <span className="gradient-text">לביצועים מעולים</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            גלו את כל היכולות המתקדמות שהמכונות הוירטואליות שלנו מציעות - 
            מביצועים חזקים ועד אבטחה מתקדמת
          </p>
        </div>
      </section>

      <FeatureShowcase features={mainFeatures} />

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מפרטים טכניים מפורטים
            </h2>
            <p className="text-xl text-gray-600">
              כל הפרטים הטכניים שאתם צריכים לדעת
            </p>
          </div>
          
          <TechnicalSpecs />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              השוואת חבילות
            </h2>
            <p className="text-xl text-gray-600">
              מצאו את החבילה המתאימה לכם
            </p>
          </div>
          
          <ComparisonTable />
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              יתרונות נוספים
            </h2>
            <p className="text-xl text-blue-100">
              מה עוד מקבלים עם כל חבילה
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "זמינות 99.9%", desc: "שירות יציב ורציף" },
              { icon: Headphones, title: "תמיכה 24/7", desc: "סיוע מקצועי תמיד" },
              { icon: Globe, title: "גישה עולמית", desc: "שרתים ברחבי העולם" },
              { icon: Lock, title: "אבטחה מלאה", desc: "הגנה מתקדמת" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}