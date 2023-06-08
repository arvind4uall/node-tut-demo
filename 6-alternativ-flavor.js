//Since module.exports is an object so we can set a new property in that object.
module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};
module.exports.singlePerson = person;
