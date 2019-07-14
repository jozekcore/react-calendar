const fs = require('fs');

fs.copyFile('index.d.ts', 'dist/index.d.ts', (error) => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log('index.d.ts copied successfully.');
});
