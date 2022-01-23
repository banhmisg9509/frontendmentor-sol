const fs = require('fs/promises');
const { marked } = require('marked');

function parse(text) {
  return new Promise((resolve, reject) => {
    marked.parse(text, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

async function main() {
  const data = await fs.readFile('./README.md');
  const text = data.toString();

  try {
    const bodyContent = await parse(text);
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
        <title>Frontend Mentor Solutions</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <div class='container'>
        ${bodyContent}
        </div>
      </body>
    </html>
    `;
    await fs.writeFile('./index.html', htmlContent);
  } catch (error) {
    console.log(error);
  }
}

main();
