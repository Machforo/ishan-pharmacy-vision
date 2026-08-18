const fs = require('fs');
let content = fs.readFileSync('src/pages/EventsCalendar.tsx', 'utf8');

content = content.replace(
  /<h3 className="text-xl font-bold text-foreground mb-2">{e\.name}<\/h3>\r?\n\s*<p className="text-sm leading-relaxed">{e\.description}<\/p>\r?\n\s*<\/div>\r?\n\s*<\/div>\r?\n\s*<div className="md:w-32 flex items-center justify-end">\r?\n\s*<button className="px-4 py-2 rounded-lg bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">\r?\n\s*Register\r?\n\s*<\/button>\r?\n\s*<\/div>/g,
  `<div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{e.title || e.name}</h3>
                      <p className="text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-32 flex items-center justify-end">
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors text-center inline-block">
                        Register
                      </a>
                    ) : (
                      <span className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider text-center inline-block opacity-50 cursor-not-allowed">
                        Register
                      </span>
                    )}
                  </div>`
);

fs.writeFileSync('src/pages/EventsCalendar.tsx', content);
