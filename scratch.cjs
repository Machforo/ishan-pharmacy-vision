const fs = require('fs');
const ts = require('typescript');
const richText = fs.readFileSync('src/lib/richText.ts', 'utf8');
const js = ts.transpileModule(richText, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
eval(js);
console.log(toRichHtml('"&lt;p&gt;dsgfasfsdgsd&lt;/p&gt;"'));
console.log(toRichHtml('&quot;&lt;p&gt;dsgfasfsdgsd&lt;/p&gt;&quot;'));
