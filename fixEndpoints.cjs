const fs = require('fs');
const files = ['src/pages/Admissions.tsx', 'src/pages/CertificatePrograms.tsx', 'src/pages/Scholarships.tsx'];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/usePharmacyData\("admissions"\)/g, 'usePharmacyData("admission")');
  fs.writeFileSync(f, c);
});
