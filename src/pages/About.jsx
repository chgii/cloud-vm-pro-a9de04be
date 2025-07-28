import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Globe, 
  TrendingUp,
  Heart,
  Shield,
  Linkedin,
  Mail
} from "lucide-react";

import TeamSection from "../components/about/TeamSection";
import CompanyStats from "../components/about/CompanyStats";
import Timeline from "../components/about/Timeline";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
              <Heart className="w-4 h-4 ml-2" />
              הסיפור שלנו
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              מי אנחנו ומה
              <br />
              <span className="gradient-text">המשימה שלנו</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              אנחנו צוות של מומחי טכנולוגיה הנלהבים מלספק פתרונות ענן מתקדמים 
              שמאפשרים לעסקים לצמוח ולהצליח בעידן הדיגיטלי
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">החזון שלנו</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                להפוך את הטכנולוגיה המתקדמת לזמינה ונגישה לכל עסק, ללא קשר לגודלו. 
                אנחנו מאמינים שכל חברה צריכה להיות מסוגלת למנף את כוח הענן 
                כדי להגיע להישגים מרשימים.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">15+ מדינות</div>
                  <div className="text-sm text-gray-600">שרתים ברחבי העולם</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">99.9%</div>
                  <div className="text-sm text-gray-600">זמינות מובטחת</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="צוות העבודה שלנו"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyStats />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              הערכים שמנחים אותנו
            </h2>
            <p className="text-xl text-gray-600">
              העקרונות הבסיסיים שעליהם אנחנו בונים את החברה
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "מצוינות",
                description: "אנחנו שואפים למצוינות בכל מה שאנחנו עושים",
                color: "from-red-500 to-red-600"
              },
              {
                icon: Lightbulb,
                title: "חדשנות",
                description: "תמיד מחפשים דרכים חדשות ויצירתיות לפתור בעיות",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: Shield,
                title: "אמינות",
                description: "בונים אמון על בסיס שקיפות ואחריות",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Users,
                title: "לקוח במרכז",
                description: "הלקוח תמיד במרכז כל החלטה שאנחנו מקבלים",
                color: "from-blue-500 to-blue-600"
              }
            ].map((value, index) => (
              <Card key={index} className="hover-lift glass-effect border-0 text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <TeamSection />

      

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            רוצים לדעת עוד?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            נשמח לספר לכם עוד על החברה, הטכנולוגיה שלנו והצוות המדהים
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@cloudvm.co.il"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5 ml-2" />
              שלחו לנו מייל
            </a>
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5 ml-2" />
              עקבו אחרינו בלינקדאין
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}