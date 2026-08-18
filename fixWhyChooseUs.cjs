const fs = require('fs');
const file = 'd:/FreeLance/ishan-pharmacy-vision/src/pages/WhyChooseUs.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add ICON_MAP before defaultReasons
content = content.replace(
  'const defaultReasons = [',
  'const ICON_MAP: Record<string, any> = { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle };\n\nconst defaultReasons = ['
);

// Fix Icon assignment inside map loops
content = content.replace(
  "const Icon = r.icon || Award;",
  "const Icon = typeof r.icon === 'string' ? (ICON_MAP[r.icon] || Award) : (r.icon || Award);"
);
content = content.replace(
  "const Icon = r.icon || Award;",
  "const Icon = typeof r.icon === 'string' ? (ICON_MAP[r.icon] || Award) : (r.icon || Award);"
);

fs.writeFileSync(file, content, 'utf8');
console.log('WhyChooseUs.tsx fixed');
