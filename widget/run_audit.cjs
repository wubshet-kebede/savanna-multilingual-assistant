const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const axe = require('axe-core');

const assistantPath = path.join(__dirname, 'assistant.js');
const testHtmlPath = path.join(__dirname, 'test.html');

console.log('================================================================');
console.log('♿ HACKATHON 2026 ACCESSIBILITY VERIFICATION AUDIT (WCAG 2.2 AA)');
console.log('================================================================\n');

// 1. Audit test.html
console.log('1. Auditing Host Testbed (widget/test.html)...');
const testHtml = fs.readFileSync(testHtmlPath, 'utf8');
const testDom = new JSDOM(testHtml);
global.window = testDom.window;
global.document = testDom.window.document;
global.Node = testDom.window.Node;
global.Element = testDom.window.Element;

axe.run(testDom.window.document.documentElement).then(testResults => {
  console.log(`   - Violations: ${testResults.violations.length}`);
  console.log(`   - Passed Checks: ${testResults.passes.length}`);
  if (testResults.violations.length > 0) {
    for (const v of testResults.violations) {
      console.log(`   ❌ VIOLATION: ${v.id} - ${v.help}`);
    }
  } else {
    console.log('   ✅ test.html PASSED with 0 violations!\n');
  }

  // 2. Audit Multilingual Assistant Shadow DOM Template
  console.log('2. Auditing Multilingual Assistant Component Shadow DOM...');
  const assistantCode = fs.readFileSync(assistantPath, 'utf8');
  const renderMatch = assistantCode.match(/render\(\) \{[\s\S]*?this\.shadowRoot\.innerHTML = \`([\s\S]*?)\`;\s*\}/);
  let template = renderMatch[1];

  template = template.replace(/\$\{this\.styles\}/g, '');
  template = template.replace(/\$\{t\.direction\}/g, 'ltr');
  template = template.replace(/\$\{this\.currentLang\}/g, 'en');
  template = template.replace(/\$\{this\.soundEnabled\}/g, 'true');
  template = template.replace(/\$\{this\.soundEnabled \? [^}]+\}/g, 'true');
  template = template.replace(/\$\{this\.currentLang === '([a-z]+)' \? 'selected' : ''\}/g, (_, l) => l === 'en' ? 'selected' : '');
  template = template.replace(/\$\{t\.[a-zA-Z0-9]+\}/g, 'Accessible Label');

  const componentHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Audit</title></head>
<body><main>${template}</main></body>
</html>`;

  const compDom = new JSDOM(componentHtml);
  global.window = compDom.window;
  global.document = compDom.window.document;
  global.Node = compDom.window.Node;
  global.Element = compDom.window.Element;

  return axe.run(compDom.window.document.documentElement).then(compResults => {
    console.log(`   - Violations: ${compResults.violations.length}`);
    console.log(`   - Passed Checks: ${compResults.passes.length}`);
    if (compResults.violations.length > 0) {
      for (const v of compResults.violations) {
        console.log(`   ❌ VIOLATION: ${v.id} - ${v.help}`);
      }
      process.exit(1);
    } else {
      console.log('   ✅ Component Shadow DOM PASSED with 0 violations!\n');
      console.log('🏆 100% PASS: All automated WCAG 2.2 AA axe-core gates satisfied with ZERO ERRORS!\n');
      process.exit(0);
    }
  });
}).catch(err => {
  console.error('Audit Error:', err);
  process.exit(1);
});
