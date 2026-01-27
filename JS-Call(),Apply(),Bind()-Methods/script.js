// call(), apply() and bind() methods Example in JavaScript
const userInfo = {
  userName: "Nagu Mulampaka",
  course: "Java Full Stack Development",
};

function intro(city) {
  console.log(
    `The username is ${this.userName}, and he is currently learning ${this.course} and is from ${city}.`,
  );
}
// Using call() to invoke the function
intro.call(userInfo, "Visakhapatnam");

const bahubali = {
  hero: "Prabhas",
  director: "Rajamouli",
};

function movieIntro(year, producer) {
  console.log(
    `Bahubali was directed by ${this.hero} starring ${this.hero}. It was released in the year ${year} produced by ${producer}`,
  );
}
// Using apply() to invoke the function
movieIntro.apply(bahubali, [2015, "Arka Media"]);

// Using bind() to invoke the function
const bahubaliInfo = movieIntro.bind(bahubali, 2015, "Arka Media");
bahubaliInfo();
bahubaliInfo();
bahubaliInfo();
