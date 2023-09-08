const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const Handlebars = require("handlebars");
const path = require("path");

// Create a custom helper to split the Full English Name into Characters
Handlebars.registerHelper("printCharacters", function (inputString) {
  let result = new Array();
  //   for (let i = 0; i < 28; i++)
});

const compile = async function () {
  const filePath = path.join(process.cwd(), "templates", "kyc.hbs");
  const html = await fs.readFile(filePath, "utf-8");
  return Handlebars.compile(html)();
};

(async function () {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();
    const content = await compile();

    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "myPdf.pdf",
      format: "A4",
      printBackground: true,
    });

    console.log("done");
    await browser.close();
    process.exit();
  } catch (e) {
    console.error("Error", e);
  }
})();
