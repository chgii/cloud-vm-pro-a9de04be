import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "רוני משה",
    role: "מנהל מכירות, טכנולוגיות רם",
    content: "הפלטפורמה של ClientFlow שינתה לנו את האופן שבו אנחנו מנהלים לקוחות. הבוט AI חוסך לנו שעות עבודה.",
    rating: 5
  },
  {
    name: "מירב כהן",
    role: "בעלת סוכנות ביטוח",
    content: "ניהול התשלומים הפך להיות פשוט ואוטומטי. הלקוחות שלי מקבלים תזכורות אוטומטיות וזה חוסך לי זמן רב.",
    rating: 5
  },
  {
    name: "אבי דוד",
    role: "יועץ עסקי עצמאי",
    content: "המערכת קלה לשימוש והתמיכה בעברית מעולה. בדיוק מה שחיפשתי לעסק הקטן שלי.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-gray-600">
            המלצות מלקוחות מרוצים ברחבי הארץ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift glass-effect border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}