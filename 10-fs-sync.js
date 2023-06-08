const { readFileSync, writeFileSync } = require("fs");

console.log("start");
// readFileSync(path, encoding)
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

//Here {flag:"a"} tells not to override value instead append the value
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first},${second}`,
  { flag: "a" },
  console.log("Done the task")
);

console.log("Starting the new task");
