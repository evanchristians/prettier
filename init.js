#!/usr/bin/env node

const fs = require("fs");

console.log("📈 Writing Prettier Configs...")

config = `
{
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": false,
  "arrowParens": "avoid"
}
`;


fs.writeFile(".prettierrc.json", config, (_) => console.log("✅ Done!"));
