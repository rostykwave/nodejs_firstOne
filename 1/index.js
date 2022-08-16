// const fs = require("fs").promises;
// const path = require("path");

// (async () => {
//   try {
//     const data = await fs.readFile(path.resolve("./data.txt"), "utf8");
//     console.log(data);

//     const newContent = `${data} new data hooorey`;
//     await fs.writeFile(path.resolve("./data1.txt"), newContent, "utf8");
//     await fs.rename("./data1.txt", "./tmp/data13.txt");
//     console.log(await fs.readdir("./tmp"));

//     await fs.unlink("./tmp/data13copy.txt");
//   } catch (error) {
//     console.error(error);
//   }
// })();

///////////////////////
// const fs = require("fs");
// const path = require("path");

// fs.readFile(path.resolve("./data.txt"), "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// ///////////////////////////////////////
// const path = require("path");
// console.log("path resolve", path.resolve("dateUtils.js"));
///////////////////////////////////////
// const Calc = require("calc-js").Calc;
// console.log("process", process.argv);
// const [, , a, b] = process.argv;

// console.log("new Calc", new Calc(parseFloat(a)).sum(parseFloat(b)).finish());
///////////////////////////////////////
// const { getCurrentDate } = require("./dateUtils");
// console.log("getCurrentDate", getCurrentDate());

// console.log('process', process.env);
