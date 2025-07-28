import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

export default function PricingCalculator() {
  const [cpu, setCpu] = useState([4]);
  const [ram, setRam] = useState([8]);
  const [storage, setStorage] = useState([100]);
  const [bandwidth, setBandwidth] = useState([1]);

  const calculatePrice = () => {
    const baseCost = 150;
    const cpuCost = cpu[0] * 25;
    const ramCost = ram[0] * 15;
    const storageCost = storage[0] * 2;
    const bandwidthCost = bandwidth[0] * 20;
    
    return baseCost + cpuCost + ramCost + storageCost + bandwidthCost;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('he-IL').format(price);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מחשבון מחירים אינטראקטיבי
          </h2>
          <p className="text-xl text-gray-600">
            התאימו את המפרטים לצרכים שלכם וראו את המחיר בזמן אמת
          </p>
        </div>

        <Card className="glass-effect border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">בנו את המכונה הוירטואלית שלכם</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CPU */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-900">ליבות מעבד</label>
                  <Badge variant="outline">{cpu[0]} ליבות</Badge>
                </div>
                <Slider
                  value={cpu}
                  onValueChange={setCpu}
                  max={32}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1</span>
                  <span>32</span>
                </div>
              </div>

              {/* RAM */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-900">זיכרון RAM</label>
                  <Badge variant="outline">{ram[0]}GB</Badge>
                </div>
                <Slider
                  value={ram}
                  onValueChange={setRam}
                  max={128}
                  min={2}
                  step={2}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2GB</span>
                  <span>128GB</span>
                </div>
              </div>

              {/* Storage */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-900">אחסון SSD</label>
                  <Badge variant="outline">{storage[0]}GB</Badge>
                </div>
                <Slider
                  value={storage}
                  onValueChange={setStorage}
                  max={2000}
                  min={50}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>50GB</span>
                  <span>2TB</span>
                </div>
              </div>

              {/* Bandwidth */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-900">רוחב פס חודשי</label>
                  <Badge variant="outline">{bandwidth[0]}TB</Badge>
                </div>
                <Slider
                  value={bandwidth}
                  onValueChange={setBandwidth}
                  max={20}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1TB</span>
                  <span>20TB</span>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="text-sm text-gray-600 mb-2">מחיר חודשי מוערך</div>
              <div className="text-4xl font-bold gradient-text mb-4">
                ₪{formatPrice(calculatePrice())}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                מחיר שנתי: ₪{formatPrice(calculatePrice() * 12 * 0.8)} (חיסכון של 20%)
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-600">
                <span>• הגדרה מיידית</span>
                <span>• ללא עלויות הקמה</span>
                <span>• תמיכה מלאה</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}