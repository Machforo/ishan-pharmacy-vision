const fs = require('fs');

// 1. Fix richText.ts double-escaped newlines
const richTextFile = 'd:/FreeLance/ishan-pharmacy-vision/src/lib/richText.ts';
let richTextContent = fs.readFileSync(richTextFile, 'utf8');
richTextContent = richTextContent.replace(
  /if \(text\.startsWith\('"'\) && text\.endsWith\('"'\)\) {\s*text = text\.slice\(1, -1\)\.trim\(\);\s*} else if \(text\.startsWith\('&quot;'\) && text\.endsWith\('&quot;'\)\) {\s*text = text\.slice\(6, -6\)\.trim\(\);\s*}/g,
  `if (text.startsWith('"') && text.endsWith('"')) {
    text = text.slice(1, -1).trim();
    text = text.replace(/\\\\n/g, '\\n');
  } else if (text.startsWith('&quot;') && text.endsWith('&quot;')) {
    text = text.slice(6, -6).trim();
    text = text.replace(/\\\\n/g, '\\n');
  }`
);
fs.writeFileSync(richTextFile, richTextContent, 'utf8');

// 2. Fix GuestLectures.tsx image rendering
const glFile = 'd:/FreeLance/ishan-pharmacy-vision/src/pages/GuestLectures.tsx';
let glContent = fs.readFileSync(glFile, 'utf8');
const glTarget = `<div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Mic2 className="w-5 h-5" />
                    </div>`;
const glReplacement = `{e.image && (
                    <div className="mb-4 rounded-xl overflow-hidden shadow-sm border h-48">
                      <img src={e.image} alt={e.speaker} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                      <Mic2 className="w-5 h-5" />
                    </div>`;
glContent = glContent.replace(glTarget, glReplacement);
fs.writeFileSync(glFile, glContent, 'utf8');

// 3. Fix IndustrialVisits.tsx image rendering
const ivFile = 'd:/FreeLance/ishan-pharmacy-vision/src/pages/IndustrialVisits.tsx';
let ivContent = fs.readFileSync(ivFile, 'utf8');
const ivTarget = `<div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{v.company}</h4>`;
const ivReplacement = `{v.image && (
                    <div className="mb-6 rounded-xl overflow-hidden shadow-sm border h-48">
                      <img src={v.image} alt={v.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{v.company}</h4>`;
ivContent = ivContent.replace(ivTarget, ivReplacement);
fs.writeFileSync(ivFile, ivContent, 'utf8');

console.log('Display issues fixed.');
