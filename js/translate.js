//   english translation -----------------------
//--------------------------------------------
function english() {
  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    console.log(item.id);
    item.innerHTML = "Welcome";
  };

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    console.log(item.id);
    item.innerHTML = "Portfolio";
  };

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    console.log(item.id);
    item.innerHTML = "Home";
  };

  let contact = document.getElementsByClassName("t_contact");
  for (let item of contact) {
    console.log(item.id);
    item.innerHTML = "Contact";
  };

  let technologies = document.getElementsByClassName("t_technologies");
  for (let item of technologies) {
    console.log(item.id);
    item.innerHTML = "Technologies";
  };

  let account = document.getElementsByClassName("t_account");
  for (let item of account) {
    console.log(item.id);
    item.innerHTML = "In my ";
  };

  let find = document.getElementsByClassName("t_find");
  for (let item of find) {
    console.log(item.id);
    item.innerHTML = "account you can find the code of this site.";
  };

  let visit = document.getElementsByClassName("t_visit");
  for (let item of visit) {
    console.log(item.id);
    item.innerHTML = "Visit the website";
  };

  let course = document.getElementsByClassName("t_course");
  for (let item of course) {
    console.log(item.id);
    item.innerHTML = "Course done on the educational platform ";
  };

  let certificates = document.getElementsByClassName("t_certificates");
  for (let item of certificates) {
    console.log(item.id);
    item.innerHTML = "Certificates";
  };

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Web Developer";

  let t40 = document.getElementById("t40");
  t40.innerHTML = "On this website you can find a personal projects' selection, academic information about me and contact links.";

  let t50 = document.getElementById("t50");
  t50.innerHTML = "I'm currently studying the Senior Technician in Web Development career at the UOC (Open University of Catalonia).";

  let t60 = document.getElementById("t60");
  t60.innerHTML = "I also perform as a freelance web developer for little enterprises and individuals.";

  let t70 = document.getElementById("t70");
  t70.innerHTML = "The languages and frameworks I work with are: ";

  let t80 = document.getElementById("t80");
  t80.innerHTML = "Do you want to create something together?";

  let t90 = document.getElementById("t90");
  t90.innerHTML = "You can contact me using the following links";

  let t100 = document.getElementById("t100");
  t100.innerHTML = "Website to follow the quotation of the main cryptocurrencies. It uses the CoinCap API to get all the data and besides it shows a graph of price evolution in the last 24 hours.";

  let t110 = document.getElementById(
    "t110"
  );
  t110.innerHTML =
    "Online store developed with Angular 8. Using components, modules and routes. Connected to the Platzi's API REST. Layout with Material Design and hosted in Firebase.";

  let t120 = document.getElementById(
    "t120"
  );
  t120.innerHTML = "A CMS developed entirely with Laravel 6. It uses an SQL database. Users, press articles and editorial, publication or news deletion permissions can be fully managed. Developed within the UOC’s academic curriculum.";

  let t130 = document.getElementById("t130");
  t130.innerHTML =
    "A task control application. You can open an account and manage your own tasks (CRUD: create, query. edit and delete).";

  let t140 = document.getElementById("t140");
  t140.innerHTML =
    "This site uses XMLHttpRequest() to obtain random data about users and movies. I use just Vanilla JS and this site is developed within the jQuery to JavaScript course of Platzi.";

  let t150 = document.getElementById("t150");
  t150.innerHTML = "A social network developed with Laravel 6. Users can comment, give likes and stars to products. They can make their favorite list. The administrator can block users and add products and categories. Developed within the UOC’s academic curriculum.";

  let t160 = document.getElementById(
    "t160"
  );
  t160.innerHTML =
    "Design of a blog with resposive design using jQuery. It has several features such as a clock, login, theme selector, slider, back-to-top button and the posts are generated from the JS file.";

  let t170 = document.getElementById("t170");
  t170.innerHTML =
    "Responsive website of the National Institute of Occupational Risks. Developed within the academic curriculum of the  Open University of Catalonia (UOC). Accident reports can be recorded, edited and consulted. Users and sessions control. It uses an SQL database.";

  let t180 = document.getElementById(
    "t180"
  );
  t180.innerHTML = "Instagram's layout";

  let t190 = document.getElementById(
    "t190"
  );
  t190.innerHTML =
    "Use of CSS Grid to replicate the Instagram's page design.";

  let t200 = document.getElementById(
    "t200"
  );
  t200.innerHTML =
    "Simon says with colors";

  let t210 = document.getElementById("t210");
  t210.innerHTML = "Memory game where you must follow the sequence of illuminated colors to level up. You can select the background theme among 5 different colors.";

  let t220 = document.getElementById("t220");
  t220.innerHTML =
    "Webshop Smart Wallet";

  let t230 = document.getElementById("t230");
  t230.innerHTML =
    "A responsive website to sell crypto wallets. You can open an account and place orders from the shopping cart. It uses an SQL database and PHP with MVC. Developed within the UOC’s academic curriculum.";

  let t240 = document.getElementById("t240");
  t240.innerHTML = "A multilanguage website for a start-up. Developed with Laravel 6. It's a part of the academic curriculum of the UOC.";

  let t250 = document.getElementById("t250");
  t250.innerHTML = "Symfony 5 Course (PHP Master)";

  let t260 = document.getElementById(
    "t260"
  );
  t260.innerHTML =
    "Angular 8 Course";

  let t270 = document.getElementById(
    "t270"
  );
  t270.innerHTML =
    "Vue.js Course";

  let t280 = document.getElementById("t280");
  t280.innerHTML = "Laravel 6 Course";

  let t290 = document.getElementById("t290");
  t290.innerHTML =
    "From jQuery to JavaScript Course";

  let t300 = document.getElementById("t300");
  t300.innerHTML =
    "Scrum Course";

  let t310 = document.getElementById("t310");
  t310.innerHTML = "EcmaScript 6+ Course";

  let t320 = document.getElementById("t320");
  t320.innerHTML = "Git and Github Professional Course";

  let t330 = document.getElementById("t330");
  t330.innerHTML =
    "Boostrap 4 course";

  let t340 = document.getElementById("t340");
  t340.innerHTML =
    "CSS Grid Layout Course";

  let t350 = document.getElementById("t350");
  t350.innerHTML = "PHP introduction course";

  let t360 = document.getElementById("t360");
  t360.innerHTML = "Basic course of Java SE";

  let t370 = document.getElementById("t370");
  t370.innerHTML =
    "WordPress Course";

  let t380 = document.getElementById("t380");
  t380.innerHTML =
    "Course of creation of themes and plugins for WordPress";

  let t390 = document.getElementById("t390");
  t390.innerHTML = "Javascript Fundamentals Course";

  let t400 = document.getElementById("t400");
  t400.innerHTML = "Data Bases Fundamentals course";

  let t410 = document.getElementById("t410");
  t410.innerHTML =
    "CSS Preprocessors Course";
}

// spanish translation -------------------------
// ---------------------------------------------
function spanish() {
  location.reload();
}

// french translation --------------------------
// ---------------------------------------------
function french() {

  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    console.log(item.id);
    item.innerHTML = "Bienvenue";
  };

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    console.log(item.id);
    item.innerHTML = "Portfolio";
  };

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    console.log(item.id);
    item.innerHTML = "Accueil";
  };

  let contact = document.getElementsByClassName("t_contact");
  for (let item of contact) {
    console.log(item.id);
    item.innerHTML = "Contact";
  };

  let technologies = document.getElementsByClassName("t_technologies");
  for (let item of technologies) {
    console.log(item.id);
    item.innerHTML = "Technologies";
  };

  let account = document.getElementsByClassName("t_account");
  for (let item of account) {
    console.log(item.id);
    item.innerHTML = "Dans mon compte de ";
  };

  let find = document.getElementsByClassName("t_find");
  for (let item of find) {
    console.log(item.id);
    item.innerHTML = "vous trouverez le code de ce site.";
  };

  let visit = document.getElementsByClassName("t_visit");
  for (let item of visit) {
    console.log(item.id);
    item.innerHTML = "Visiter le website";
  };

  let course = document.getElementsByClassName("t_course");
  for (let item of course) {
    console.log(item.id);
    item.innerHTML = "Cours suivi dans la plate-forme éducative ";
  };

  let certificates = document.getElementsByClassName("t_certificates");
  for (let item of certificates) {
    console.log(item.id);
    item.innerHTML = "Certificats";
  };

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Web Developer";

  let t40 = document.getElementById("t40");
  t40.innerHTML = "On this website you can find a personal projects' selection, academic information about me and contact links.";

  let t50 = document.getElementById("t50");
  t50.innerHTML = "I'm currently studying the Senior Technician in Web Development career at the UOC (Open University of Catalonia).";

  let t60 = document.getElementById("t60");
  t60.innerHTML = "I also perform as a freelance web developer for little enterprises and individuals.";

  let t70 = document.getElementById("t70");
  t70.innerHTML = "The languages and frameworks I work with are: ";

  let t80 = document.getElementById("t80");
  t80.innerHTML = "Do you want to create something together?";

  let t90 = document.getElementById("t90");
  t90.innerHTML = "You can contact me using the following links";

  let t100 = document.getElementById("t100");
  t100.innerHTML = "Website to follow the quotation of the main cryptocurrencies. It uses the CoinCap API to get all the data and besides it shows a graph of price evolution in the last 24 hours.";

  let t110 = document.getElementById(
    "t110"
  );
  t110.innerHTML =
    "Online store developed with Angular 8. Using components, modules and routes. Connected to the Platzi's API REST. Layout with Material Design and hosted in Firebase.";

  let t120 = document.getElementById(
    "t120"
  );
  t120.innerHTML = "A CMS developed entirely with Laravel 6. It uses an SQL database. Users, press articles and editorial, publication or news deletion permissions can be fully managed. Developed within the UOC’s academic curriculum.";

  let t130 = document.getElementById("t130");
  t130.innerHTML =
    "A task control application. You can open an account and manage your own tasks (CRUD: create, query. edit and delete).";

  let t140 = document.getElementById("t140");
  t140.innerHTML =
    "This site uses XMLHttpRequest() to obtain random data about users and movies. I use just Vanilla JS and this site is developed within the jQuery to JavaScript course of Platzi.";

  let t150 = document.getElementById("t150");
  t150.innerHTML = "A social network developed with Laravel 6. Users can comment, give likes and stars to products. They can make their favorite list. The administrator can block users and add products and categories. Developed within the UOC’s academic curriculum.";

  let t160 = document.getElementById(
    "t160"
  );
  t160.innerHTML =
    "Design of a blog with resposive design using jQuery. It has several features such as a clock, login, theme selector, slider, back-to-top button and the posts are generated from the JS file.";

  let t170 = document.getElementById("t170");
  t170.innerHTML =
    "Responsive website of the National Institute of Occupational Risks. Developed within the academic curriculum of the  Open University of Catalonia (UOC). Accident reports can be recorded, edited and consulted. Users and sessions control. It uses an SQL database.";

  let t180 = document.getElementById(
    "t180"
  );
  t180.innerHTML = "Instagram's layout";

  let t190 = document.getElementById(
    "t190"
  );
  t190.innerHTML =
    "Use of CSS Grid to replicate the Instagram's page design.";

  let t200 = document.getElementById(
    "t200"
  );
  t200.innerHTML =
    "Simon says with colors";

  let t210 = document.getElementById("t210");
  t210.innerHTML = "Memory game where you must follow the sequence of illuminated colors to level up. You can select the background theme among 5 different colors.";

  let t220 = document.getElementById("t220");
  t220.innerHTML =
    "Webshop Smart Wallet";

  let t230 = document.getElementById("t230");
  t230.innerHTML =
    "A responsive website to sell crypto wallets. You can open an account and place orders from the shopping cart. It uses an SQL database and PHP with MVC. Developed within the UOC’s academic curriculum.";

  let t240 = document.getElementById("t240");
  t240.innerHTML = "A multilanguage website for a start-up. Developed with Laravel 6. It's a part of the academic curriculum of the UOC.";

  let t250 = document.getElementById("t250");
  t250.innerHTML = "Symfony 5 Course (PHP Master)";

  let t260 = document.getElementById(
    "t260"
  );
  t260.innerHTML =
    "Angular 8 Course";

  let t270 = document.getElementById(
    "t270"
  );
  t270.innerHTML =
    "Vue.js Course";

  let t280 = document.getElementById("t280");
  t280.innerHTML = "Laravel 6 Course";

  let t290 = document.getElementById("t290");
  t290.innerHTML =
    "From jQuery to JavaScript Course";

  let t300 = document.getElementById("t300");
  t300.innerHTML =
    "Scrum Course";

  let t310 = document.getElementById("t310");
  t310.innerHTML = "EcmaScript 6+ Course";

  let t320 = document.getElementById("t320");
  t320.innerHTML = "Git and Github Professional Course";

  let t330 = document.getElementById("t330");
  t330.innerHTML =
    "Boostrap 4 course";

  let t340 = document.getElementById("t340");
  t340.innerHTML =
    "CSS Grid Layout Course";

  let t350 = document.getElementById("t350");
  t350.innerHTML = "PHP introduction course";

  let t360 = document.getElementById("t360");
  t360.innerHTML = "Basic course of Java SE";

  let t370 = document.getElementById("t370");
  t370.innerHTML =
    "WordPress Course";

  let t380 = document.getElementById("t380");
  t380.innerHTML =
    "Course of creation of themes and plugins for WordPress";

  let t390 = document.getElementById("t390");
  t390.innerHTML = "Javascript Fundamentals Course";

  let t400 = document.getElementById("t400");
  t400.innerHTML = "Data Bases Fundamentals course";

  let t410 = document.getElementById("t410");
  t410.innerHTML =
    "CSS Preprocessors Course";
}
