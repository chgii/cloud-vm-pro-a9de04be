import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₪299",
    color: "from-blue-500 to-blue-600",
    features: {
      cpu: "4 ליבות",
      ram: "8GB",
      storage: "100GB SSD",
      bandwidth: "1TB",
      support: "עסקים",
      backup: true,
      monitoring: false,
      cdn: false
    }
  },
  {
    name: "Pro",
    price: "₪599",
    popular: true,
    color: "from-purple-500 to-purple-600",
    features: {
      cpu: "8 ליבות",
      ram: "16GB",
      storage: "250GB SSD",
      bandwidth: "5TB",
      support: "24/7",
      backup: true,
      monitoring: true,
      cdn: true
    }
  },
  {
    name: "Enterprise",
    price: "₪999",
    color: "from-green-500 to-green-600",
    features: {
      cpu: "16 ליבות",
      ram: "32GB",
      storage: "500GB SSD",
      bandwidth: "בלתי מוגבל",
      support: "ייעודי",
      backup: true,
      monitoring: true,
      cdn: true
    }
  }
];

const featureLabels = {
  cpu: "ליבות מעבד",
  ram: "זיכרון RAM",
  storage: "אחסון",
  bandwidth: "רוחב פס חודשי",
  support: "תמיכה טכנית",
  backup: "גיבויים אוטומטיים",
  monitoring: "ניטור מתקדם",
  cdn: "רשת CDN"
};

export default function ComparisonTable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <Card key={index} className={`hover-lift glass-effect border-0 overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ' ring-2 ring-purple-50 scale-95'}`}>
          <CardContent className="p-0">
            <div className={`bg-gradient-to-r ${plan.color} p-6 text-white text-center`}>
              {plan.popular && (
                <Badge className="bg-white text-purple-600 mb-4">הכי פופולרי</Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-1">{plan.price}</div>
              <div className="text-sm opacity-90">לחודש</div>
            </div>
            
            <div className="p-6 space-y-4">
              {Object.entries(plan.features).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-700">{featureLabels[key]}</span>
                  <div className="flex items-center">
                    {typeof value === 'boolean' ? (
                      value ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )
                    ) : (
                      <span className="font-semibold text-gray-900">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}