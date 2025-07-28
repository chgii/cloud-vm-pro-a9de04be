import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  CheckCircle,
  Database,
  Bot,
  CreditCard
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import FeaturesGrid from "../components/home/FeaturesGrid";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              למה לבחור ב-<span className="gradient-text">ClientFlow AI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              הפתרון המושלם עבור עסקים המחפשים לנהל לקוחות בצורה חכמה ויעילה
            </p>
          </div>
          
          <FeaturesGrid />
        </div>
      </section>

      <StatsSection />
      
      {/* Quick Features */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              יכולות מתקדמות
            </h2>
            <p className="text-xl text-gray-600">
              הכלים שאתם צריכים כדי לנהל את העסק ביעילות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift glass-effect border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">ניהול מתקדם</h3>
                <p className="text-gray-600 mb-4">מעקב אחר עד 5,000 לקוחות עם תיוג וקטגוריות</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• חיפוש מתקדם וסינון</li>
                  <li>• היסטורית פעילות מלאה</li>
                  <li>• אינטגרציה עם Excel</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift glass-effect border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">בוט AI חכם</h3>
                <p className="text-gray-600 mb-4">מענה אוטומטי ב-WhatsApp, מייל וטלפון</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• תשובות מותאמות אישית</li>
                  <li>• למידה מפעילות קודמת</li>
                  <li>• העברה לנציג אנושי</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift glass-effect border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">תשלומים חכמים</h3>
                <p className="text-gray-600 mb-4">אוטומציה מלאה של תהליכי התשלום</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• תזכורות אוטומטיות</li>
                  <li>• אינטגרציה עם בנקים</li>
                  <li>• דוחות מפורטים</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              הצטרפו למאות עסקים שכבר משתמשים בפלטפורמה שלנו לניהול לקוחות חכם ויעיל
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={createPageUrl("Pricing")}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  צפה במחירים
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl border-2"
                onClick={() => window.open('https://calendar.google.com', '_blank')}
              >
                הזמן פגישה
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 space-x-reverse text-blue-100">
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-5 h-5" />
                <span>התקנה תוך שעה</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-5 h-5" />
                <span>ללא התחייבות</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="w-5 h-5" />
                <span>תמיכה בעברית</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}