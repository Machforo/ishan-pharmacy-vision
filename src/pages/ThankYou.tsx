import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

export default function ThankYouPage() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-background">
        <div className="max-w-3xl w-full bg-card rounded-3xl border shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-5/12 bg-navy p-10 flex items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg" 
                alt="Campus background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
            </div>
            
            <div className="relative z-10 text-white text-center md:text-left">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg shadow-gold/20">
                <CheckCircle2 className="w-8 h-8 text-navy" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Your journey towards a distinguished pharmacy career begins here. We look forward to connecting with you.
              </p>
            </div>
          </div>

          <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Enquiry Received Successfully</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-sm leading-relaxed">
                Thank you! Your enquiry about programs at Ishan Pharmacy has been successfully received. Our admissions counsellor will call you within 2 working hours — or by 10 AM on the next working day if you have reached out after hours.
              </p>
              <p className="text-sm leading-relaxed">
                An email confirmation containing the programme brochure is on its way to your inbox. For immediate assistance, you can always WhatsApp us directly at <a href="https://wa.me/918448797700" className="text-navy font-bold hover:underline">8448797700</a>.
              </p>
            </div>

            <div className="pt-6 border-t">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">Explore More</h4>
              <div className="flex flex-col gap-3">
                <Link to="/courses/ba-llb" className="group flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-gold-light/30 transition-colors">
                  <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors">BA LLB (Hons) Programme</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors" />
                </Link>
                <Link to="/moot-court" className="group flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-gold-light/30 transition-colors">
                  <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors">Discover Moot Court Training</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors" />
                </Link>
                <Link to="/news-events" className="group flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-gold-light/30 transition-colors">
                  <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors">Upcoming Campus Events</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors" />
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center md:text-left">
              <Link to="/" className="text-xs font-bold text-muted-foreground hover:text-navy hover:underline transition-colors">
                ← Return to Homepage
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
