
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Database, Bot, CreditCard, Users, HelpCircle, FileText, Menu, X, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "בית", url: createPageUrl("Home"), icon: Database },
  { title: "פיצ'רים", url: createPageUrl("Features"), icon: Bot },
  { title: "מחירון", url: createPageUrl("Pricing"), icon: CreditCard },
  { title: "אודותינו", url: createPageUrl("About"), icon: Users },
  { title: "שאלות נפוצות", url: createPageUrl("FAQ"), icon: HelpCircle },
  { title: "תקנון", url: createPageUrl("Terms"), icon: FileText },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActivePage = (url) => location.pathname === url;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      <style>
        {`
          :root {
            --primary-gradient: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
            --secondary-gradient: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            --accent-color: #6366f1;
            --text-primary: #0f172a;
            --text-secondary: #64748b;
          }
          
          .gradient-text {
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">ClientFlow AI</h1>
                <p className="text-xs text-gray-500">ניהול לקוחות חכם</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActivePage(item.url)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActivePage(item.url)
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">ClientFlow AI</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                פלטפורמת ניהול לקוחות מתקדמת עם בינת מלאכותית. ניהול מאגרי לקוחות, תשלומים ותמיכה אוטומטית.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                {navigationItems.slice(0, 3).map((item) => (
                  <li key={item.title}>
                    <Link to={item.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">צור קשר</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>אימייל: dam.72133@gmail.com</p>
                <p>כתובת: הנביא עובדיה, בית שמש</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ClientFlow AI. כל הזכויות שמורות. | מופעל על Google Cloud</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
