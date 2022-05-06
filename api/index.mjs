import express from "express";
import cors from "cors";

const PORT = 3131;
const app = express();

class Id {
  static id = 0;

  static next() {
    this.id++;
    return Id.id;
  }
}

class FakePerson {
  constructor(firstName, lastName, age, children, money) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.age = age;
    this.interested_in = "Soccer";
    this.alive = true;
    this.children_counter = children;
    this.money = money;
    this.id = Id.next() + "/id";
  }
}

const fakes = [
  new FakePerson("Lorem", "Ipsum", 29, 1, 1290),
  new FakePerson("Frog", "Plat", 39, 2, 1990),
  new FakePerson("Plate", "Cousin", 19, 0, 990),
  new FakePerson("Hog", "Log", 69, 5, 9990),
  new FakePerson("Fog", "Clock", 99, 12, 19990),
  new FakePerson("Zip", "Lock", 9, 0, 0),
  new FakePerson("Three", "Four", 52, 10, 100),
  new FakePerson("Jumbo", "Fiat", 23, 0, 10000),
  new FakePerson("Silver", "Quick", 85, 2, 8700),
  new FakePerson("Sink", "Apple", 31, 1, 1700),
];

const acceptedOrigins = "*";

app.use(
  cors({
    origin: acceptedOrigins,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    status: "up and running",
  });
});

app.get("/people", (req, res) => {
  res.json({ people: fakes });
});

app.listen(PORT, () => {
  console.log("OK - LISTENING ON " + PORT);
});
