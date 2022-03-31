const fs = require("fs");

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

fs.writeFile(".prettierrc.json", config, _ => null);
