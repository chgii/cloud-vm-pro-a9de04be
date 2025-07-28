import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          עדיין צריכים עזרה?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          הצוות שלנו כאן לעזור לכם בכל שאלה או בעיה
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-effect border-0 text-gray-900">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">צ'אט חי</h3>
              <p className="text-sm text-gray-600 mb-4">זמין 24/7</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">התחל צ'אט</Button>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-0 text-gray-900">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">טלפון</h3>
              <p className="text-sm text-gray-600 mb-4">03-1234567</p>
              <Button className="w-full" variant="outline">התקשר עכשיו</Button>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-0 text-gray-900">
            <CardContent className="p-6 text-center">
              <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">אימייל</h3>
              <p className="text-sm text-gray-600 mb-4">support@cloudvm.co.il</p>
              <Button className="w-full" variant="outline">שלח מייל</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}