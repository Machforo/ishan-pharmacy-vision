const fs = require('fs');
let content = fs.readFileSync('src/pages/WhyChooseUs.tsx', 'utf8');

content = content.replace(
  /<p className="text-foreground\/70 leading-relaxed text-lg">\r?\n\s*Ishan Institute of Pharmacy is not just an educational centre; it's a launchpad for healthcare leaders and pharmacists\. Our commitment to laboratory training, ethical practice, and industry partnerships sets us apart in pharmaceutical education\.\r?\n\s*<\/p>/,
  `{whyContent ? (
                <div 
                  className="text-foreground/70 leading-relaxed text-lg [&_p]:text-inherit [&>p]:mb-2 last:[&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: whyContent }}
                />
              ) : (
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Ishan Institute of Pharmacy is not just an educational centre; it's a launchpad for healthcare leaders and pharmacists. Our commitment to laboratory training, ethical practice, and industry partnerships sets us apart in pharmaceutical education.
                </p>
              )}`
);

fs.writeFileSync('src/pages/WhyChooseUs.tsx', content);
