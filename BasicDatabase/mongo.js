db.students.insertOne({
  name: "AKASH",
  subject: "Physics",
  gender: "Male",
  netWrth: "20",
  address: "23432423 mahindra park sdasdsad",
});

db.inventory.insertMany([
  {
    item: "journal",
    qty: 25,
    tags: ["blank", "red"],
    size: { h: 14, w: 21, uom: "cm" },
  },
  {
    item: "mat",
    qty: 85,
    tags: ["gray"],
    size: { h: 27.9, w: 35.5, uom: "cm" },
  },
  {
    item: "mousepad",
    qty: 25,
    tags: ["gel", "blue"],
    size: { h: 19, w: 22.85, uom: "cm" },
  },
]);

//  --  question i want all the items in the collection

db.students.find({});

//  -- question If i want students who love physics

db.students.find({ subject: "Physics" });

//  -- question if i want students whos age > 25
db.students.find({ age: { $gt: 25 } });

//  --  update queries

db.students.updateOne(
  { age: 25 },
  {
    $set: { netWrth: "100", subject: "Real world" },
  }
);

//  --  delete.
db.students.deleteOne({ age: 25 });
