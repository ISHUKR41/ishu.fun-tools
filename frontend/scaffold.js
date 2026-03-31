import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOOLS } from './src/data/tools.data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(__dirname, 'src', 'pages', 'tools');
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

let routesConfig = [];

TOOLS.forEach(tool => {
  const compName = toPascalCase(tool.slug);
  const catDir = path.join(basePath, tool.category);
  const toolDir = path.join(catDir, tool.slug);
  
  if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
  if (!fs.existsSync(toolDir)) fs.mkdirSync(toolDir, { recursive: true });
  
  const compPath = path.join(toolDir, `${compName}.jsx`);
  const metaPath = path.join(toolDir, `${compName}.meta.js`);
  const cssPath = path.join(toolDir, `${compName}.module.css`);

  const content = `import React from 'react';
import ToolPage from '../../../ToolPage'; 

export default function ${compName}() {
  return <ToolPage fallbackSlug="${tool.slug}" />;
}
`;
  if(!fs.existsSync(compPath)) fs.writeFileSync(compPath, content);
  if(!fs.existsSync(metaPath)) fs.writeFileSync(metaPath, `export const metadata = {\n  slug: "${tool.slug}",\n  title: "${tool.name} Online",\n};\n`);
  if(!fs.existsSync(cssPath)) fs.writeFileSync(cssPath, `/* ${compName} Styles */\n.${tool.slug}-container {}\n`);
  
  routesConfig.push({
    slug: tool.slug,
    importPath: `./pages/tools/${tool.category}/${tool.slug}/${compName}`
  });
});

const importsOutput = routesConfig.map(r => 
  `const ${toPascalCase(r.slug)} = lazy(() => import('${r.importPath}'));`
).join('\n');

const routesOutput = routesConfig.map(r => 
  `        <Route path="/tools/${r.slug}" element={<PageWrapper><${toPascalCase(r.slug)} /></PageWrapper>} />`
).join('\n');

fs.writeFileSync(path.join(__dirname, 'routes-snippet.txt'), importsOutput + '\n\n' + routesOutput);
console.log(`Successfully generated folders for ${TOOLS.length} tools.`);
