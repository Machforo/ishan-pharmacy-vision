import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About Ishan Pharmacy", href: "/about" },
  { label: "Programs Overview", href: "/programs-overview" },
  { label: "Admissions", href: "/admissions" },
  { label: "Our Labs", href: "/pharmaceutics" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "B.Pharm (Bachelor of Pharmacy)", href: "/courses/b-pharm" },
  { label: "D.Pharm (Diploma in Pharmacy)", href: "/courses/d-pharm" },
  { label: "Certificate Programmes", href: "/certificate-programs" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/ishanpharmacy", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/ishanpharmacy", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@ishanpharmacy", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/ishan-pharmacy", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/ishan_pharmacy", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground border-t border-white/5">
      <div className="container-wide py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 shrink-0 overflow-hidden flex items-center bg-white rounded-lg px-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBPP1F_Pp9ioq_SfiDL6mn5No4JbZSE9X9A&s"
                  alt="Ishan Institute of Pharmacy"
                  className="h-full w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="font-bold text-base leading-tight text-white">ISHAN</p>
                <p className="text-xs uppercase tracking-[0.12em] text-primary-foreground/50 leading-tight">Institute of Pharmacy</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              PCI Approved | Affiliated to AKTU &amp; BTE UP | Excellence in pharmaceutical education and healthcare training.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-primary-foreground/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gold">Programs</h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link to={p.href} className="text-sm text-primary-foreground/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-gold mt-0.5" />
                <span className="text-sm text-primary-foreground/50 leading-relaxed">Knowledge Park-III, Greater Noida, UP 201308</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-gold" />
                <a href="tel:+918448797700" className="text-sm text-primary-foreground/50 hover:text-white transition-colors">8448797700</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-gold" />
                <a href="mailto:info@ishan.ac" className="text-sm text-primary-foreground/50 hover:text-white transition-colors">info@ishan.ac</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/5 py-6 bg-black/20">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Ishan Institute of Pharmacy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Anti-Ragging", href: "/anti-ragging" },
              { label: "Grievance", href: "/grievance-redressal" },
              { label: "Disclosures", href: "/mandatory-disclosure" },
            ].map((l) => (
              <Link key={l.label} to={l.href} className="text-xs text-primary-foreground/30 hover:text-gold transition-colors uppercase tracking-widest font-medium">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
