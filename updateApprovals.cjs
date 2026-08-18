const fs = require('fs');
let content = fs.readFileSync('src/pages/Approvals.tsx', 'utf8');

content = content.replace(
  /<p className="text-sm font-semibold uppercase tracking-\[0.2em\] text-gold">Regulatory Compliance<\/p>\r?\n\s*<h2 className="font-bold text-foreground">A Fully Accredited Institution<\/h2>/,
  `<p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {data?.approvalsPage?.badge || "Regulatory Compliance"}
            </p>
            <h2 className="font-bold text-foreground">
              {data?.approvalsPage?.heading || "A Fully Accredited Institution"}
            </h2>`
);

content = content.replace(
  /<p className="text-foreground\/70 leading-relaxed">\r?\n\s*Pharmaceutical education in India is strictly regulated.*?higher education\.\r?\n\s*<\/p>/,
  `{data?.approvalsPage?.description ? (
              <div 
                className="text-foreground/70 leading-relaxed [&_p]:text-inherit [&>p]:mb-2 last:[&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: data.approvalsPage.description }}
              />
            ) : (
              <p className="text-foreground/70 leading-relaxed">
                Pharmaceutical education in India is strictly regulated to ensure that practicing pharmacists meet the highest standards of professional ethics and competence in healthcare. Ishan Institute of Pharmacy holds all mandatory approvals from the Pharmacy Council of India (PCI) and is affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) and the Board of Technical Education, Uttar Pradesh (BTE UP). These certifications ensure that our diplomas and degrees are fully recognized for practice and higher education.
              </p>
            )}`
);

content = content.replace(
  /<div className="grid md:grid-cols-3 gap-8 pt-4">\r?\n.*?<\/div>\r?\n\s*<\/div>/s,
  `<div className="grid md:grid-cols-3 gap-8 pt-4">
              {(data?.approvalsPage?.features?.length > 0 ? data.approvalsPage.features : [
                { title: "PCI", description: "The primary regulator of pharmacy education in India, ensuring curriculum relevance and professional standards." },
                { title: "AKTU", description: "Provides academic affiliation for our degree programs (B.Pharm), conducts standardized examinations, and awards the final professional degree." },
                { title: "BTE UP", description: "Provides academic affiliation for our diploma programs (D.Pharm) and conducts standardized board examinations." }
              ]).map((feat: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-navy">{feat.title}</h4>
                  {feat.description && (
                    <div 
                      className="text-xs [&_p]:text-inherit [&>p]:mb-1 last:[&>p]:mb-0"
                      dangerouslySetInnerHTML={{ __html: feat.description }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>`
);

fs.writeFileSync('src/pages/Approvals.tsx', content);
