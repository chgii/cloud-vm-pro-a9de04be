import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle 
} from "lucide-react";

import FAQSearch from "../components/faq/FAQSearch.jsx";
import FAQCategories from "../components/faq/FAQCategories.jsx";
import ContactSupport from "../components/faq/ContactSupport.jsx";

const faqData = [
  {
    category: "כללי",
    questions: [
      {
        question: "מה זה מכונה וירטואלית?",
        answer: "מכונה וירטואלית (VM) היא סימולציה של מחשב פיזי הפועלת על שרת פיזי. היא מאפשרת לכם להריץ מערכת הפעלה ויישומים כאילו הייתם עובדים על מחשב נפרד, אך בפועל אתם חולקים משאבי חומרה עם משתמשים אחרים.",
        tags: ["בסיסי", "הגדרה"]
      },
      {
        question: "איך אני יכול להתחיל להשתמש בשירות?",
        answer: "תוכלו להתחיל תוך דקות ספורות: בחרו חבילה, הירשמו לאתר, בצעו תשלום ותקבלו פרטי גישה למכונה הוירטואלית שלכם. אנחנו נדאג להכל - הקמה, קונפיגורציה ותמיכה מלאה.",
        tags: ["התחלה", "הרשמה"]
      },
      {
        question: "האם יש תקופת ניסיון חינמית?",
        answer: "כן! אנחנו מציעים תקופת ניסיון חינמית של 14 יום עם גישה מלאה לכל התכונות. לא נדרש כרטיס אשראי להתחלה, ותוכלו לבטל בכל עת ללא עלות.",
        tags: ["ניסיון", "חינם"]
      }
    ]
  },
  {
    category: "טכני",
    questions: [
      {
        question: "איזה מערכות הפעלה נתמכות?",
        answer: "אנחנו תומכים במגוון רחב של מערכות הפעלה: Windows Server 2019/2022, Ubuntu 20.04/22.04, CentOS 7/8, Debian 10/11, Red Hat Enterprise Linux, SUSE Linux Enterprise Server ועוד. ניתן גם להעלות תמונות מותאמות אישית.",
        tags: ["מערכות הפעלה", "תמיכה"]
      },
      {
        question: "איך מתבצע הגיבוי של הנתונים?",
        answer: "הגיבויים מתבצעים באופן אוטומטי על בסיס יומי (Basic), כל 6 שעות (Pro) או בזמן אמת (Enterprise). הגיבויים נשמרים במרכזי נתונים נפרדים עם הצפנה מלאה. ניתן גם לבצע גיבויים ידניים בכל עת.",
        tags: ["גיבוי", "אבטחה"]
      },
      {
        question: "מה זמן התגובה הצפוי לתמיכה טכנית?",
        answer: "זמני התגובה שלנו: Basic - עד 4 שעות בזמן עסקים, Pro - עד שעה אחת 24/7, Enterprise - עד 15 דקות עם מנהל חשבון ייעודי. במקרי חירום, אנחנו זמינים תמיד.",
        tags: ["תמיכה", "זמן תגובה"]
      }
    ]
  },
  {
    category: "חיוב ותשלום",
    questions: [
      {
        question: "איך עובד המודל התמחור?",
        answer: "התמחור שלנו פשוט ושקוף: תשלום חודשי או שנתי קבוע לפי החבילה שבחרתם. אין עלויות נסתרות, עמלות הקמה או הפתעות. בחיוב שנתי תקבלו הנחה של 20%.",
        tags: ["מחיר", "חיוב"]
      },
      {
        question: "אילו אמצעי תשלום מקבלים?",
        answer: "אנחנו מקבלים כרטיסי אשראי (ויזה, מאסטרקארד, אמריקן אקספרס), העברה בנקאית, PayPal וביט. עבור לקוחות עסקיים, ניתן לעבוד עם חשבוניות נפרדות.",
        tags: ["תשלום", "כרטיס אשראי"]
      },
      {
        question: "האם אפשר לשנות חבילה באמצע החודש?",
        answer: "בהחלט! שינוי חבילה אפשרי בכל עת. שדרוג נכנס לתוקף מיידית ותחויבו רק על ההפרש יחסית. הורדת חבילה תיכנס לתוקף במחזור החיוב הבא.",
        tags: ["שינוי חבילה", "גמישות"]
      }
    ]
  },
  {
    category: "אבטחה",
    questions: [
      {
        question: "איך מוגנים הנתונים שלי?",
        answer: "הנתונים שלכם מוגנים במספר שכבות: הצפנת AES-256 ברמת חומרה, חומת אש מתקדמת, ניטור 24/7, גיבויים מוצפנים ובקרת גישה מתקדמת. אנחנו מוסמכים ISO 27001 ו-SOC 2 Type II.",
        tags: ["אבטחה", "הצפנה"]
      },
      {
        question: "האם הנתונים נשארים בישראל?",
        answer: "כן, לבחירתכם. יש לנו מרכזי נתונים בישראל ובחו\"ל. תוכלו לבחור היכן הנתונים שלכם יישמרו בהתאם לדרישות הרגולציה או העדפות החברה שלכם.",
        tags: ["מיקום נתונים", "רגולציה"]
      }
    ]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("הכל");
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const categories = ["הכל", ...faqData.map(section => section.category)];

  const filteredFAQs = faqData.filter(section => 
    selectedCategory === "הכל" || section.category === selectedCategory
  ).map(section => ({
    ...section,
    questions: section.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(section => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
            <HelpCircle className="w-4 h-4 ml-2" />
            מרכז עזרה
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            שאלות נפוצות
            <br />
            <span className="gradient-text">ומרכז עזרה</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            מצאו תשובות מהירות לשאלות הנפוצות ביותר. 
            לא מוצאים מה שאתם מחפשים? צרו קשר עם צוות התמיכה
          </p>

          <FAQSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </section>

      <FAQCategories 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-8">
              {filteredFAQs.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center ml-3">
                      <span className="text-white font-bold text-sm">{section.category[0]}</span>
                    </div>
                    {section.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.questions.map((faq, questionIndex) => {
                      const questionId = `${sectionIndex}-${questionIndex}`;
                      const isOpen = openQuestions[questionId];
                      
                      return (
                        <Card key={questionIndex} className="glass-effect border-0 overflow-hidden">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full p-6 text-right hover:bg-gray-50 transition-colors flex items-center justify-between"
                            >
                              <div className="flex-1 text-right">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                                  {faq.question}
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-end">
                                  {faq.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="mr-4">
                                {isOpen ? (
                                  <ChevronUp className="w-6 h-6 text-gray-500" />
                                ) : (
                                  <ChevronDown className="w-6 h-6 text-gray-500" />
                                )}
                              </div>
                            </button>
                            
                            {isOpen && (
                              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                <div className="bg-blue-50 rounded-lg p-4 border-r-4 border-blue-500">
                                  {faq.answer}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">לא נמצאו תוצאות</h3>
              <p className="text-gray-600">נסו לשנות את החיפוש או בחרו קטגוריה אחרת</p>
            </div>
          )}
        </div>
      </section>

      <ContactSupport />
    </div>
  );
}