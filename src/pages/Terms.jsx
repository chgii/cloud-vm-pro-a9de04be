import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Shield, Scale } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
            <FileText className="w-4 h-4 ml-2" />
            מסמכים משפטיים
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            תקנון השירות
            <br />
            <span className="gradient-text">ותנאי השימוש</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            התנאים וההתחייבויות שחלים על השימוש בשירותי CloudVM Pro
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>עדכון אחרון: 15 בדצמבר 2024</span>
            </div>
            <Badge variant="secondary">גרסה 2.1</Badge>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Section 1 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  הגדרות ומונחים
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  <strong>"החברה"</strong> - CloudVM Pro בע"מ, ח.פ. 123456789, כתובת: רחוב הטכנולוגיה 1, תל אביב.
                </p>
                <p>
                  <strong>"השירות"</strong> - שירותי מכונות וירטואליות, אחסון בענן ושירותים נלווים המוצעים על ידי החברה.
                </p>
                <p>
                  <strong>"הלקוח"</strong> - כל אדם או ישות משפטית הרוכשת או המשתמשת בשירותי החברה.
                </p>
                <p>
                  <strong>"הפלטפורמה"</strong> - המערכת הטכנולוגית של החברה לניהול ומתן שירותי הענן.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  קבלת התנאים והסכמה
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  השימוש בשירותי החברה מהווה הסכמה מלאה לתנאי השימוש המפורטים במסמך זה. 
                  במידה ואינכם מסכימים לתנאים אלה, אנא הימנעו משימוש בשירות.
                </p>
                <p>
                  החברה שומרת לעצמה את הזכות לעדכן את התנאים מעת לעת. הודעה על שינויים 
                  תישלח ללקוחות מראש ותיכנס לתוקף לאחר 30 יום מהמשלוח.
                </p>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  תיאור השירותים
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>החברה מספקת שירותי ענן הכוללים:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>מכונות וירטואליות (VM) עם מפרטים משתנים</li>
                  <li>שירותי אחסון מתקדמים עם גיבויים אוטומטיים</li>
                  <li>חיבור לאינטרנט במהירות גבוהה</li>
                  <li>שירותי אבטחה וניטור 24/7</li>
                  <li>תמיכה טכנית מקצועית</li>
                  <li>ממשקי API לאינטגרציה</li>
                </ul>
                <p>
                  החברה שומרת לעצמה את הזכות לשנות, להוסיף או להסיר שירותים בהתראה מוקדמת של 30 יום.
                </p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  זכויות וחובות הלקוח
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <h4 className="font-semibold text-gray-900 mb-3">זכויות הלקוח:</h4>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>קבלת השירות בהתאם למפרטים שנרכשו</li>
                  <li>תמיכה טכנית לפי רמת השירות שנבחרה</li>
                  <li>גיבוי ושחזור נתונים</li>
                  <li>עדכונים ושדרוגי אבטחה</li>
                  <li>ביטול השירות בהתראה מוקדמת</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-3">חובות הלקוח:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>תשלום במועד לפי התעריפים שנקבעו</li>
                  <li>שימוש בשירות בהתאם לחוק ולתנאי השימוש</li>
                  <li>שמירה על פרטי הגישה וסודיותם</li>
                  <li>הימנעות מפעילויות בלתי חוקיות או מזיקות</li>
                  <li>שיתוף פעולה עם צוות התמיכה הטכנית</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  תשלומים ותמחור
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  התמחור נקבע לפי החבילה שנבחרה ומתבצע על בסיס חודשי או שנתי. 
                  תשלום יתבצע מראש בתחילת כל תקופת חיוב.
                </p>
                <p>
                  באיחור בתשלום מעל 15 יום, החברה רשאית להשעות את השירות עד לסילוק החוב. 
                  לאחר 30 יום של איחור, החברה רשאית לבטל את השירות ולמחוק את הנתונים.
                </p>
                <p>
                  החברה תודיע מראש על כל שינוי במחירים בהתראה של 60 יום. 
                  שינויי מחירים יחולו על מחזורי החיוב החדשים בלבד.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  אבטחה ופרטיות
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  החברה מתחייבת לשמור על רמת אבטחה גבוהה ולהגן על נתוני הלקוחות בהתאם 
                  לתקנים הבינלאומיים וחוקי הגנת הפרטיות.
                </p>
                <p>
                  הנתונים מוצפנים במהלך השידור והאחסון, ונשמרים במרכזי נתונים מאובטחים. 
                  הגישה לנתונים מוגבלת לצוות מורשה בלבד.
                </p>
                <p>
                  החברה לא תשתף נתוני לקוחות עם צדדים שלישיים ללא הסכמה מפורשת, 
                  למעט במקרים הנדרשים על פי חוק.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  אחריות והגבלות
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  החברה מתחייבת לזמינות שירות של 99.9% בחודש (למעט תחזוקה מתוכננת). 
                  במקרה של אי עמידה ביעד הזמינות, הלקוח יהיה זכאי לפיצוי כספי.
                </p>
                <p>
                  החברה לא תישא באחריות לנזקים עקיפים, אובדן רווחים או נזקים נלווים 
                  הנובעים משימוש או אי-שימוש בשירות.
                </p>
                <p>
                  הלקוח אחראי לביצוע גיבויים עצמאיים של הנתונים החשובים לו, 
                  למרות שירותי הגיבוי האוטומטיים שמספקת החברה.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">8</span>
                  </div>
                  ביטול והפסקת שירות
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  הלקוח רשאי לבטל את השירות בכל עת בהודעה של 30 יום מראש. 
                  הביטול ייכנס לתוקף בסוף תקופת החיוב הנוכחית.
                </p>
                <p>
                  החברה רשאית להפסיק את השירות במקרים של הפרת התנאים, 
                  אי-תשלום או שימוש בלתי חוקי בשירות.
                </p>
                <p>
                  לאחר ביטול השירות, הנתונים יישמרו למשך 30 יום נוספים לצורך שחזור, 
                  ולאחר מכן יימחקו לצמיתות.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-effect border-0 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">
                  יש לכם שאלות לגבי התקנון?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  נשמח לענות על כל שאלה או להבהיר כל נושא הקשור לתנאי השימוש
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>אימייל:</strong> dam.72133@gmail.com </p>
                  <p><strong>כתובת:</strong>הנביא עובדיה בית שמש</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}