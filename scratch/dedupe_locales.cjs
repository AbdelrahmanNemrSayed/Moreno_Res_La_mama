const fs = require('fs');
const path = require('path');

// Go up one level from scratch directory
const localesDir = path.join(__dirname, '..', 'src', 'locales');
const files = fs.readdirSync(localesDir);

files.forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(localesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the object part
    const match = content.match(/export default \{([\s\S]*)\};/);
    if (match) {
      const body = match[1];
      const lines = body.split('\n');
      const seenKeys = new Set();
      const newLines = [];
      
      lines.forEach(line => {
        const keyMatch = line.match(/^\s*(\w+):/);
        if (keyMatch) {
          const key = keyMatch[1];
          if (!seenKeys.has(key)) {
            seenKeys.add(key);
            newLines.push(line);
          } else {
            // console.log(`Removed duplicate key "${key}" in ${file}`);
          }
        } else {
          newLines.push(line);
        }
      });
      
      const newContent = content.replace(body, newLines.join('\n'));
      fs.writeFileSync(filePath, newContent);
    }
  }
});
