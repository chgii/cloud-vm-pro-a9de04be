import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Zap, Shield, Star } from "lucide-react";

import PricingCards from "../components/pricing/PricingCards";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingCalculator from "../components/pricing/PricingCalculator";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-6">
            <Star className="w-4 h-4 ml-2" />
            מחירים שקופים וללא הפתעות
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            בחרו את החבילה
            <br />
            <span className="gradient-text">המושלמת עבורכם</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            מחירים הוגנים ושקופים עם כל מה שאתם צריכים להצלחה. 
            התחילו עם תקופת ניסיון חינמית של 14 יום
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 space-x-reverse text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>ביטול בכל עת</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>תמיכה מלאה</span>
            </div>
          </div>
        </div>
      </section>

      <PricingCards />

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-blue-100">
              קבלו הכי הרבה תמורה לכסף שלכם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ביצועים מעולים</h3>
              <p className="text-blue-100">
                השוו את הביצועים שלנו מול המתחרים - אנחנו תמיד מובילים
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">אבטחה מתקדמת</h3>
              <p className="text-blue-100">
                הגנה מרובת שכבות עם הטכנולוגיות החדישות בתחום
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">שירות מעולה</h3>
              <p className="text-blue-100">
                תמיכה מקצועית 24/7 עם זמני תגובה מהירים
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingCalculator />
      <PricingFAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            התחילו עם תקופת ניסיון חינמית של 14 יום - ללא כרטיס אשראי
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
              התחל ניסיון חינם
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
            
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline" className="border-2 px-8 py-4 text-lg font-semibold rounded-xl">
                צור קשר לייעוץ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}