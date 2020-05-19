const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/savoirefaire");

const userSeed = [{
firstName: "Juliet",
secondName: "George",
username:"julesgeorge",
password: "hdfjdhjdsdhjd"
}, {

    firstName: "Reigner",
    lastName: "George",
    username:"yaygeorge",
    password: "hdfjhfddhjdshj"

},{

    firstName: "Justina",
    lastName: "George",
    username:"jaygeorge",
    password: "hddjdnd"


}];
const productSeed = [{
Name: "Flower Dress",
Description: "Long flower dress ",
Price: 25,
Brand:"Speedos"
},
{
    Name: "Jeans",
    Description:" Blue Jeans",
    Price: 30,
    Brand: "American Apparel"

},
{
    Name: "Shirt",
    Description:"flower Shirt for work",
    Price: 15,
    Brand: "Mango"

}
];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.Products.remove({})
  .then(() => db.Products.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });