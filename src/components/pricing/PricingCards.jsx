import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: { monthly: 299, yearly: 2390 },
    originalPrice: { yearly: 3588 },
    description: "מושלם לפרויקטים קטנים וסטארטאפים",
    color: "from-blue-500 to-blue-600",
    features: [
      "4 ליבות מעבד",
      "8GB זיכרון RAM", 
      "100GB אחסון SSD",
      "1TB העברת נתונים",
      "תמיכה בזמן עסקים",
      "גיבוי יומי",
      "חומת אש בסיסית",
      "ניטור זמינות"
    ]
  },
  {
    name: "Pro",
    price: { monthly: 599, yearly: 4792 },
    originalPrice: { yearly: 7188 },
    description: "הבחירה הטובה ביותר לעסקים בינוניים",
    color: "from-purple-500 to-purple-600",
    popular: true,
    features: [
      "8 ליבות מעבד",
      "16GB זיכרון RAM",
      "250GB אחסון SSD", 
      "5TB העברת נתונים",
      "תמיכה 24/7",
      "גיבוי כל 6 שעות",
      "חומת אש מתקדמת",
      "ניטור מתקדם",
      "רשת CDN",
      "Load Balancer"
    ]
  },
  {
    name: "Enterprise",
    price: { monthly: 999, yearly: 7992 },
    originalPrice: { yearly: 11988 },
    description: "פתרון מושלם לחברות גדולות",
    color: "from-green-500 to-green-600",
    features: [
      "16 ליבות מעבד",
      "32GB זיכרון RAM",
      "500GB אחסון SSD",
      "העברת נתונים בלתי מוגבלת",
      "מנהל חשבון ייעודי",
      "גיבוי בזמן אמת",
      "אבטחה ברמה צבאית",
      "ניטור וניתוח מלא",
      "רשת CDN פרימיום",
      "API מלא",
      "SLA 99.99%",
      "תמיכה ייעודית"
    ]
  }
];

export default function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('he-IL').format(price);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                !isYearly 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              חיוב חודשי
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                isYearly 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              חיוב שנתי
              <Badge className="mr-2 bg-green-100 text-green-800">חסכו 33%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-lift glass-effect border-0 overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  הכי פופולרי
                </div>
              )}
              
              <CardHeader className={`${plan.popular ? 'pt-8' : 'pt-6'}`}>
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        ₪{formatPrice(isYearly ? plan.price.yearly : plan.price.monthly)}
                      </span>
                      <span className="text-gray-600 mr-2">
                        /{isYearly ? 'שנה' : 'חודש'}
                      </span>
                    </div>
                    
                    {isYearly && plan.originalPrice.yearly && (
                      <div className="mt-2">
                        <span className="text-gray-400 line-through text-lg">
                          ₪{formatPrice(plan.originalPrice.yearly)}
                        </span>
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          חיסכון של ₪{formatPrice(plan.originalPrice.yearly - plan.price.yearly)}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                  >
                    התחל עכשיו
                    <ArrowLeft className="mr-2 w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center text-sm text-gray-500">
                    ✨ תקופת ניסיון חינמית של 14 יום
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            צריכים פתרון מותאם אישית? 
            <button className="text-blue-600 hover:underline mr-1">צרו קשר עם צוות המכירות</button>
          </p>
        </div>
      </div>
    </section>
  );
}