import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const specs = {
  compute: {
    title: "עוצמת עיבוד",
    items: [
      { label: "מעבדים", value: "Intel Xeon E5-2680 v4 / AMD EPYC 7742" },
      { label: "ליבות עיבוד", value: "עד 64 ליבות פיזיות" },
      { label: "זיכרון RAM", value: "עד 1TB DDR4-3200" },
      { label: "זיכרון מטמון", value: "עד 256MB L3 Cache" }
    ]
  },
  storage: {
    title: "אחסון",
    items: [
      { label: "סוג אחסון", value: "NVMe SSD במהירות גבוהה" },
      { label: "מהירות קריאה", value: "עד 6,000 MB/s" },
      { label: "מהירות כתיבה", value: "עד 4,400 MB/s" },
      { label: "קיבולת", value: "עד 10TB לכל VM" }
    ]
  },
  network: {
    title: "רשת",
    items: [
      { label: "רוחב פס", value: "עד 10 Gbps" },
      { label: "זמן תגובה", value: "< 5ms לשרתים מקומיים" },
      { label: "מרכזי נתונים", value: "15 מיקומים עולמיים" },
      { label: "IPv6", value: "תמיכה מלאה" }
    ]
  },
  security: {
    title: "אבטחה",
    items: [
      { label: "הצפנה", value: "AES-256 ברמת Hardware" },
      { label: "חומת אש", value: "DPI עם בלוקים דינמיים" },
      { label: "ניטור", value: "24/7 SOC מקצועי" },
      { label: "תאימויות", value: "ISO 27001, SOC 2 Type II" }
    ]
  }
};

export default function TechnicalSpecs() {
  return (
    <Tabs defaultValue="compute" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="compute">עוצמת עיבוד</TabsTrigger>
        <TabsTrigger value="storage">אחסון</TabsTrigger>
        <TabsTrigger value="network">רשת</TabsTrigger>
        <TabsTrigger value="security">אבטחה</TabsTrigger>
      </TabsList>
      
      {Object.entries(specs).map(([key, spec]) => (
        <TabsContent key={key} value={key}>
          <Card className="glass-effect border-0">
            <CardHeader>
              <CardTitle className="text-2xl">{spec.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {spec.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/50 rounded-lg">
                    <span className="font-medium text-gray-700">{item.label}</span>
                    <span className="text-gray-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}