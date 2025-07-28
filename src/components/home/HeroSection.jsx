import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft, CheckCircle, Bot, Database, CreditCard } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
              מופעל על Google Cloud Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              ניהול לקוחות חכם
              <br />
              <span className="gradient-text">עם בינה מלאכותית</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              פלטפורמה מתקדמת לניהול מאגר לקוחות, תשלומים ובוט AI לשירות לקוחות. 
              הכל במקום אחד, פשוט ויעיל.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to={createPageUrl("Pricing")}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  התחל עכשיו
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                onClick={() => window.open('https://calendar.google.com', '_blank')}
              >
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                הזמן הדגמה
              </Button>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-2 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">התקנה תוך שעה</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">תמיכה בעברית</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Google Cloud</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto">
              {/* Main dashboard illustration */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                
                <div className="relative glass-effect rounded-3xl p-8 border-2 border-white/20">
                  <div className="space-y-6">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-700">מאגר לקוחות</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">324</div>
                    </div>
                    
                    {/* Progress bars */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Bot className="w-5 h-5 text-purple-500" />
                        <div className="flex-1 h-2 bg-purple-200 rounded-full">
                          <div className="h-full w-4/5 bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">80%</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <CreditCard className="w-5 h-5 text-green-500" />
                        <div className="flex-1 h-2 bg-green-200 rounded-full">
                          <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">75%</span>
                      </div>
                    </div>
                    
                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">142</div>
                        <div className="text-xs text-blue-600">הודעות היום</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">₪89K</div>
                        <div className="text-xs text-green-600">תשלומים</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-xl shadow-lg animate-pulse">
                    <Database className="w-4 h-4 text-white m-2" />
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}