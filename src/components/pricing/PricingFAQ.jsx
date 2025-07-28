import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "איך עובד המחיר החודשי?",
    answer: "המחיר נגבה בתחילת כל חודש על בסיס החבילה שבחרתם. אין עלויות נסתרות או הפתעות - מה שאתם רואים זה מה שאתם משלמים."
  },
  {
    question: "מה כלול בתקופת הניסיון החינמית?",
    answer: "תקופת הניסיון של 14 יום כוללת גישה מלאה לכל התכונות של החבילה שבחרתם, כולל תמיכה טכנית מלאה. אין צורך בכרטיס אשראי."
  },
  {
    question: "האם אפשר לשדרג או להוריד חבילה?",
    answer: "כן! אתם יכולים לשנות חבילה בכל עת. שדרוג נכנס לתוקף מיידית, והורדת חבילה תכנס לתוקף במחזור החיוב הבא."
  },
  {
    question: "מה קורה אם אני עובר על מכסת העברת הנתונים?",
    answer: "במידה ועברתם על המכסה, תקבלו התראה מראש. תוכלו לשדרג חבילה או לרכוש נפח נוסף במחיר של ₪50 לכל TB."
  },
  {
    question: "איך מתבצעים הגיבויים?",
    answer: "הגיבויים מתבצעים באופן אוטומטי לפי התדירות שנקבעה בחבילה שלכם. הנתונים נשמרים במרכזי נתונים נפרדים להגנה מקסימלית."
  },
  {
    question: "מה כלול בתמיכה הטכנית?",
    answer: "התמיכה כוללת סיוע בהקמה, תחזוקה שוטפת, פתרון תקלות וייעוץ טכני. זמני התגובה: עסקים - עד 4 שעות, 24/7 - עד שעה אחת."
  }
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            שאלות נפוצות על התמחור
          </h2>
          <p className="text-xl text-gray-600">
            תשובות לשאלות הנפוצות ביותר על התמחור והחבילות
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-effect border-0 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-right hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}