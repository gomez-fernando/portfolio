//   english translation -----------------------
//--------------------------------------------
function english() {
  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    item.innerHTML = "Welcome";
  }

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    item.innerHTML = "Portfolio";
  }

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    item.innerHTML = "Home";
  }

  let contact = document.getElementsByClassName("t_contact");
  for (let item of contact) {
    item.innerHTML = "Contact";
  }

  let technologies = document.getElementsByClassName("t_technologies");
  for (let item of technologies) {
    item.innerHTML = "Technologies";
  }

  let account = document.getElementsByClassName("t_account");
  for (let item of account) {
    item.innerHTML = "In my ";
  }

  let devel = document.getElementsByClassName("t_devel");
  for (let item of devel) {
    item.innerHTML = "Developed during my work at Doctaforum S.L.";
  }

  let geicam = document.getElementsByClassName("t_geicam");
  for (let item of geicam) {
    item.innerHTML = "All rights belong to the Geicam Group and Doctaforum S.L.";
  }

  let find = document.getElementsByClassName("t_find");
  for (let item of find) {
    item.innerHTML = "account you can find the code of this site.";
  }

  let visit = document.getElementsByClassName("t_visit");
  for (let item of visit) {
    item.innerHTML = "Visit the website";
  }

  let course = document.getElementsByClassName("t_course");
  for (let item of course) {
    item.innerHTML = "Course done on the educational platform ";
  }

  let certificates = document.getElementsByClassName("t_certificates");
  for (let item of certificates) {
    item.innerHTML = "Certificates";
  }

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Web Developer";

  let t40 = document.getElementById("t40");
  t40.innerHTML =
    "On this website you can find a personal projects' selection, academic information about me and contact links.";

  let t80 = document.getElementById("t80");
  t80.innerHTML = "Do you want to create something together?";

  let t90 = document.getElementById("t90");
  t90.innerHTML = "You can contact me using the following links";

  let lightningchat = document.getElementById("lightningchat");
  lightningchat.innerHTML =
    "A chat app in real time. Built with websockets, React-Redux on the frontend, and Nest on the backend.";

  let t100 = document.getElementById("t100");
  t100.innerHTML =
    "Website to follow the quotation of the main cryptocurrencies. It uses the CoinCap API to get all the data and besides it shows a graph of price evolution in the last 24 hours.";

  let t110 = document.getElementById("t110");
  t110.innerHTML =
    "Online educational platform where students can view and download videos and materials. Tutor contact system. The application corrects the tests and delivers all the activity statistics and grades of the students.";

  let servier = document.getElementById("servier");
  servier.innerHTML = "All rights belong to Servier Laboratories and Doctaforum S.L.";

  let t120 = document.getElementById("t120");
  t120.innerHTML =
    "A CMS developed entirely with Laravel 6. It uses an SQL database. Users, press articles and editorial, publication or news deletion permissions can be fully managed. Developed within the UOC’s academic curriculum.";

  let t140 = document.getElementById("t140");
  t140.innerHTML =
    "This site uses XMLHttpRequest() to obtain random data about users and movies. I use just Vanilla JS and this site is developed within the jQuery to JavaScript course of Platzi.";

  let t150 = document.getElementById("t150");
  t150.innerHTML =
    "A social network developed with Laravel 6. Users can comment, give likes and stars to products. They can make their favorite list. The administrator can block users and add products and categories. Developed within the UOC’s academic curriculum.";

  let t160 = document.getElementById("t160");
  t160.innerHTML =
    "Design of a blog with resposive design using jQuery. It has several features such as a clock, login, theme selector, slider, back-to-top button and the posts are generated from the JS file.";

  let t180 = document.getElementById("t180");
  t180.innerHTML = "Instagram's layout";

  let t190 = document.getElementById("t190");
  t190.innerHTML = "Use of CSS Grid to replicate the Instagram's page design.";

  let t200 = document.getElementById("t200");
  t200.innerHTML = "Simon says with colors";

  let t210 = document.getElementById("t210");
  t210.innerHTML =
    "Memory game where you must follow the sequence of illuminated colors to level up. You can select the background theme among 5 different colors.";

  let t220 = document.getElementById("t220");
  t220.innerHTML = "Webshop Smart Wallet";

  let t230 = document.getElementById("t230");
  t230.innerHTML =
    "A responsive website to sell crypto wallets. You can open an account and place orders from the shopping cart. It uses an SQL database and PHP with MVC. Developed within the UOC’s academic curriculum.";

  let t250 = document.getElementById("t250");
  t250.innerHTML = "Symfony 5 Course (PHP Master)";

  let t260 = document.getElementById("t260");
  t260.innerHTML = "Angular 8 Course";

  let t270 = document.getElementById("t270");
  t270.innerHTML = "Vue.js Course";

  let t280 = document.getElementById("t280");
  t280.innerHTML = "Laravel 6 Course";

  let t290 = document.getElementById("t290");
  t290.innerHTML = "From jQuery to JavaScript Course";

  let t300 = document.getElementById("t300");
  t300.innerHTML = "Scrum Course";

  let t310 = document.getElementById("t310");
  t310.innerHTML = "EcmaScript 6+ Course";

  let t320 = document.getElementById("t320");
  t320.innerHTML = "Git and Github Professional Course";

  let t330 = document.getElementById("t330");
  t330.innerHTML = "Boostrap 4 course";

  let t340 = document.getElementById("t340");
  t340.innerHTML = "CSS Grid Layout Course";

  let t350 = document.getElementById("t350");
  t350.innerHTML = "PHP introduction course";

  let t360 = document.getElementById("t360");
  t360.innerHTML = "Basic course of Java SE";

  let t370 = document.getElementById("t370");
  t370.innerHTML = "WordPress Course";

  let t380 = document.getElementById("t380");
  t380.innerHTML = "Creation of themes and plugins for WordPress";

  let t390 = document.getElementById("t390");
  t390.innerHTML = "Javascript Fundamentals Course";

  let t400 = document.getElementById("t400");
  t400.innerHTML = "Data Bases Fundamentals course";

  let t410 = document.getElementById("t410");
  t410.innerHTML = "CSS Preprocessors Course";

  let t420 = document.getElementById("t420");
  t420.innerHTML =
    "An application to concentrate all the news that interests you, as well as your favorite blogs. Save the RSS you want to follow and you will always have the latest information updated. You can create your account and manage all the details. Add your lists and filter them by category or country.";

  let t430 = document.getElementById("t430");
  t430.innerHTML = "3º Meeting Rural Life";

  let t440 = document.getElementById("t440");
  t440.innerHTML =
    "Website for a supposed meeting about the environment and rural life to be held in Callús (Catalonia). You can subscribe to the newsletter thanks to the services of Sendinblue.";

  let t450 = document.getElementById("t450");
  t450.innerHTML =
    "A regional news page for the province of Malaga. Developed with WordPress within the UOC's academic curriculum. Responsive design.";

  let t470 = document.getElementById("t470");
  t470.innerHTML =
    "Website where podcasts on breast cancer research are regularly published. Audios can be played and downloaded. As well as leaving messages and likes to the podcasts. The administrator can also reply to messages.";

  let t480 = document.getElementById("t480");
  t480.innerHTML =
    "A blog about tricks and curiosities of the Linux world. You can create your account and manage your posts, leave comments and like your favorites. Developed with Symfony 5.";

  // let t490 = document.getElementById("t490");
  // t490.innerHTML =
  //   "A website to discover the main heroes of the DC universe. You can use the search box to find your favorite heroes. Developed with Angular and hosted on Firebase.";

  let t500 = document.getElementById("t500");
  t500.innerHTML =
    "Application to manage your tasks in a fun way. Created with React using Typescript.";

  let t501 = document.getElementById("t501");
  t501.innerHTML =
    "An application to keep track of patients (pets) and appointments. Website hosted on Netlify.";
}

