import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function FeatureShowcase({ features }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift glass-effect border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}