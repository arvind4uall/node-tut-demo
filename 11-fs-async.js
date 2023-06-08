const { readFile, writeFile, read } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) return null;
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first},${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) return null;
        console.log("Done the task");
      }
    );
  });
});
console.log("Starting the new task");
