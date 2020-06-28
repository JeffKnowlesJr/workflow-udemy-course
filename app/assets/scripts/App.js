import "../styles/styles.css";
// requires css-loader style-loader

if (module.hot) {
  module.hot.accept();
}

// Lesson example code below this line
// Nouns (Properties) and verbs (Methods)

// let jeff = {
//   name: "Jeff Knowles",
//   favoriteColor: "green",
//   greet: function () {
//     console.log(
//       "Hello, my name is " +
//         this.name +
//         " and my favorite color is " +
//         this.favoriteColor +
//         "."
//     );
//   },
// };

// jeff.greet();

function Person(fullName, favColor) {
  this.name = fullName;
  this.color = favColor;

  this.greet = function () {
    console.log(
      "Hello, my name is " +
        this.name +
        " and my favorite color is " +
        this.color +
        "."
    );
  };
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "orange");
jane.greet();
