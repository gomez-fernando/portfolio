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

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Web Developer";

  let t20 = document.getElementById("t20");
  t20.innerHTML = "Technologies";

  let t30 = document.getElementById("t30");
  t30.innerHTML = "Certificates";

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

  let tienda_h4 = document.getElementById("tienda_h4");
  tienda_h4.innerHTML = "Smart Wallet Shop";

  let tienda_details_span1 = document.getElementById("tienda_details_span1");
  tienda_details_span1.innerHTML =
    "A responsive website to sell crypto wallets. You can open an account and place orders from the shopping cart. It uses an SQL database and MVC Pattern";

  let tienda_details_span2 = document.getElementById("tienda_details_span2");
  tienda_details_span2.innerHTML =
    "In my Github account you can find the code of this site";

  let visitar7 = document.getElementById("visitar7");
  visitar7.innerHTML = "Visit the website";

  // CERTIFICATES AND DIPLOMAS--------------------------------------------------
  let section_title_certificados = document.getElementById(
    "section_title_certificados"
  );
  section_title_certificados.innerHTML = "certificates and diplomas";

  let certificates_title_curso_laravel6 = document.getElementById(
    "certificates_title_curso_laravel6"
  );
  certificates_title_curso_laravel6.innerHTML = "Laravel 6 Course";

  let c_desc_1 = document.getElementById("c_desc_1");
  c_desc_1.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver1 = document.getElementById("ver1");
  ver1.innerHTML = "View document";

  let certificates_title_curso_fundamentos_de_javascript = document.getElementById(
    "certificates_title_curso_fundamentos_de_javascript"
  );
  certificates_title_curso_fundamentos_de_javascript.innerHTML =
    "Javascript Fundamentals Course";

  let c_desc_2 = document.getElementById("c_desc_2");
  c_desc_2.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver2 = document.getElementById("ver2");
  ver2.innerHTML = "View document";

  let certificates_title_curso_de_jquery_a = document.getElementById(
    "certificates_title_curso_de_jquery_a"
  );
  certificates_title_curso_de_jquery_a.innerHTML =
    "From jQuery to JavaScript Course";

  let c_desc_3 = document.getElementById("c_desc_3");
  c_desc_3.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver3 = document.getElementById("ver3");
  ver3.innerHTML = "View document";

  let certificates_title_curso_introduccion_a_php = document.getElementById(
    "certificates_title_curso_introduccion_a_php"
  );
  certificates_title_curso_introduccion_a_php.innerHTML =
    "php introduction course";

  let c_desc_4 = document.getElementById("c_desc_4");
  c_desc_4.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver4 = document.getElementById("ver4");
  ver4.innerHTML = "View document";

  let certificates_title_curso_de_bootstrap_4 = document.getElementById(
    "certificates_title_curso_de_bootstrap_4"
  );
  certificates_title_curso_de_bootstrap_4.innerHTML = "Boostrap 4 course";

  let c_desc_5 = document.getElementById("c_desc_5");
  c_desc_5.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver5 = document.getElementById("ver5");
  ver5.innerHTML = "View document";

  let certificates_title_curso_fundamentos_de_bases_de_datos = document.getElementById(
    "certificates_title_curso_fundamentos_de_bases_de_datos"
  );
  certificates_title_curso_fundamentos_de_bases_de_datos.innerHTML =
    "Data Bases Fundamentals course";

  let c_desc_6 = document.getElementById("c_desc_6");
  c_desc_6.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver6 = document.getElementById("ver6");
  ver6.innerHTML = "View document";

  let certificates_title_curso_profesional_de_git = document.getElementById(
    "certificates_title_curso_profesional_de_git"
  );
  certificates_title_curso_profesional_de_git.innerHTML =
    "Git and Github Professional Course";

  let c_desc_7 = document.getElementById("c_desc_7");
  c_desc_7.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver7 = document.getElementById("ver7");
  ver7.innerHTML = "View document";

  let certificates_title_curso_basico_de_java = document.getElementById(
    "certificates_title_curso_basico_de_java"
  );
  certificates_title_curso_basico_de_java.innerHTML = "Basic course of Java SE";

  let c_desc_8 = document.getElementById("c_desc_8");
  c_desc_8.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver8 = document.getElementById("ver8");
  ver8.innerHTML = "View document";

  let certificates_title_curso_css_grid = document.getElementById(
    "certificates_title_curso_css_grid"
  );
  certificates_title_curso_css_grid.innerHTML = "CSS Grid Layout Course";

  let c_desc_9 = document.getElementById("c_desc_9");
  c_desc_9.innerHTML =
    'Course done on the educational platform <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver9 = document.getElementById("ver9");
  ver9.innerHTML = "View document";

  let c_desc_10 = document.getElementById("c_desc_10");
  c_desc_10.innerHTML =
    'Accreditation of Competences in Information and Communication Technologies. <br> Course done at the <a href="https://www.uoc.edu/portal/es/index.html" target="_blank"><strong>Universitat Oberta de Catalunya (UOC)</strong></a>.';

  let ver10 = document.getElementById("ver10");
  ver10.innerHTML = "View document";
}

// spanish translation -------------------------
// ---------------------------------------------
function spanish() {
  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    console.log(item.id);
    item.innerHTML = "Bienvenido/as";
  };

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    console.log(item.id);
    item.innerHTML = "Portafolio";
  };

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    console.log(item.id);
    item.innerHTML = "Inicio";
  };

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Web Developer";

  let t20 = document.getElementById("t20");
  t20.innerHTML = "Tecnologías";

  let nav_menu_bienvenidos = document.getElementById("nav_menu_bienvenidos");
  nav_menu_bienvenidos.innerHTML = "Bienvenido/as";

  let nav_menu_tecnologias = document.getElementById("nav_menu_tecnologias");
  nav_menu_tecnologias.innerHTML = "Tecnologías";

  let nav_menu_portafolio = document.getElementById("nav_menu_portafolio");
  nav_menu_portafolio.innerHTML = "Portafolio";

  let nav_menu_certificados = document.getElementById("nav_menu_certificados");
  nav_menu_certificados.innerHTML = "Certificados";

  let nav_menu_contacto = document.getElementById("nav_menu_contacto");
  nav_menu_contacto.innerHTML = "Contacto";

  let section_title_bienvenidos = document.getElementById(
    "section_title_bienvenidos"
  );
  section_title_bienvenidos.innerHTML = "Bienvenido/as";

  let section_description_en = document.getElementById(
    "section_description_en"
  );
  section_description_en.innerHTML =
    "En ésta página web podéis encontrar una selección de proyectos personales. También información académica sobre mí y datos de contacto.";

  let about_title_tecnologias = document.getElementById(
    "about_title_tecnologias"
  );
  about_title_tecnologias.innerHTML = "Tecnologías";

  let about_text_p1 = document.getElementById("about_text_p1");
  about_text_p1.innerHTML =
    "Actualmente me encuentro cursando el Ciclo Superior de FP en Desarrollo Web en la UOC (Universitat Oberta de Catalunya).";

  let about_text_p2 = document.getElementById("about_text_p2");
  about_text_p2.innerHTML =
    "Dentro del currículum académico implementamos letios proyectos web y yo personalmente amplío mis conocimientos de manera autodidacta con cursos por internet y trabajos individuales que voy desarrollando por iniciativa propia.";

  let about_text_p3 = document.getElementById("about_text_p3");
  about_text_p3.innerHTML =
    "Las tecnologías con las que trabajo principalmente son:";

  let subscribe_title_creamos = document.getElementById(
    "subscribe_title_creamos"
  );
  subscribe_title_creamos.innerHTML = "Creamos algo juntos?";

  let subscribe_text_puedes = document.getElementById("subscribe_text_puedes");
  subscribe_text_puedes.innerHTML =
    "Puedes contactarme a través de los siguientes links";

  let section_title_portafolio = document.getElementById(
    "section_title_portafolio"
  );
  section_title_portafolio.innerHTML = "Portafolio";

  let amazing_video_details_span1 = document.getElementById(
    "amazing_video_details_span1"
  );
  amazing_video_details_span1.innerHTML =
    "Este sitio utiliza XMLHttpRequest() para obtener datos aleatorios de usuarios y películas. Se utiliza Vanilla JS únicamente y forma parte del curso de jQuery a JavaScript de Platzi.";

  let amazing_video_details_span2 = document.getElementById(
    "amazing_video_details_span2"
  );
  amazing_video_details_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar1 = document.getElementById("visitar1");
  visitar1.innerHTML = "Visitar la web";

  let inprl_details_span1 = document.getElementById("inprl_details_span1");
  inprl_details_span1.innerHTML =
    "Responsive website del Instituto Nacional de Riesgos Laborales. Desarrollado dentro del currículum académico de la Universitat Oberta de Catalunya (UOC). Se pueden registrar partes de accidente, editarlos y consultarlos. Control de usuarios y sesiones. Utiliza una base de datos SQL.";

  let inprl_details_span2 = document.getElementById("inprl_details_span2");
  inprl_details_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar2 = document.getElementById("visitar2");
  visitar2.innerHTML = "Visitar la web";

  let laragram_h4 = document.getElementById("laragram_h4");
  laragram_h4.innerHTML = "Red social con Laravel";

  let laragram_details_span1 = document.getElementById(
    "laragram_details_span1"
  );
  laragram_details_span1.innerHTML =
    "Se pueden dar de alta usuarios, subir imágenes, editarlas, comentarlas, dar like, consultar los perfiles de los usuarios, eliminar los comentarios y publicaciones propios. Utiliza una base de datos SQL. El sitio está disponible en inglés y español.";

  let laragram_details_span2 = document.getElementById(
    "laragram_details_span2"
  );
  laragram_details_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar3 = document.getElementById("visitar3");
  visitar3.innerHTML = "Visitar la web";

  let jquery_details_span1 = document.getElementById("jquery_details_span1");
  jquery_details_span1.innerHTML =
    "Diseño de un blog con resposive design utilizando jQuery. Cuenta con letias funcionalidades como un reloj, inicio de sesión, selector de tema, slider, botón de back-to-top y los posts son generados desde JS.";

  let jquery_details_span2 = document.getElementById("jquery_details_span2");
  jquery_details_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar4 = document.getElementById("visitar4");
  visitar4.innerHTML = "Visitar la web";

  let simon_h4 = document.getElementById("simon_h4");
  simon_h4.innerHTML = "SIMON SAYS con colores";

  let simon_details_span1 = document.getElementById("simon_details_span1");
  simon_details_span1.innerHTML =
    "Juego de memorización donde hay que seguir la secuencia de colores iluminados para ir pasando de nivel. Se puede seleccionar el tema preferido entre 5 colores diferentes.";

  let simon_details_span2 = document.getElementById("simon_details_span2");
  simon_details_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar5 = document.getElementById("visitar5");
  visitar5.innerHTML = "Visitar la web";

  let instagram_h4 = document.getElementById("instagram_h4");
  instagram_h4.innerHTML = "Layout tipo Instagram";

  let instagram_span1 = document.getElementById("instagram_span1");
  instagram_span1.innerHTML =
    "Uso de CSS Grid para replicar el layout de la página de Instagram.";

  let instagram_span2 = document.getElementById("instagram_span2");
  instagram_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar6 = document.getElementById("visitar6");
  visitar6.innerHTML = "Visitar la web";

  let tienda_h4 = document.getElementById("tienda_h4");
  tienda_h4.innerHTML = "Tienda Online Smart Wallet ";

  let tienda_details_span1 = document.getElementById("tienda_details_span1");
  tienda_details_span1.innerHTML =
    "Un sitio web responsive para vender obras de arte. Se puede abrir una cuenta y hacer los pedidos desde el carrito de la compra. Utiliza una base de datos SQL.";

  let tienda_details_span2 = document.getElementById("tienda_details_span2");
  tienda_details_span2.innerHTML =
    "En mi cuenta de Github encuentras el código de éste site";

  let visitar7 = document.getElementById("visitar7");
  visitar7.innerHTML = "Visitar la web";

  // CERTIFICADOS Y DIPLOMAS-------------------------------------------------
  let section_title_certificados = document.getElementById(
    "section_title_certificados"
  );
  section_title_certificados.innerHTML = "Certificados y Diplomas";

  let certificates_title_curso_laravel6 = document.getElementById(
    "certificates_title_curso_laravel6"
  );
  certificates_title_curso_laravel6.innerHTML = "Curso de Laravel 6";

  let c_desc_1 = document.getElementById("c_desc_1");
  c_desc_1.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver1 = document.getElementById("ver1");
  ver1.innerHTML = "Visualizar documento";

  let certificates_title_curso_fundamentos_de_javascript = document.getElementById(
    "certificates_title_curso_fundamentos_de_javascript"
  );
  certificates_title_curso_fundamentos_de_javascript.innerHTML =
    "Curso Fundamentos de Javascript";

  let c_desc_2 = document.getElementById("c_desc_2");
  c_desc_2.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver2 = document.getElementById("ver2");
  ver2.innerHTML = "Visualizar documento";

  let certificates_title_curso_de_jquery_a = document.getElementById(
    "certificates_title_curso_de_jquery_a"
  );
  certificates_title_curso_de_jquery_a.innerHTML =
    "Curso de jQuery a JavaScript";

  let c_desc_3 = document.getElementById("c_desc_3");
  c_desc_3.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver3 = document.getElementById("ver3");
  ver3.innerHTML = "Visualizar documento";

  let certificates_title_curso_introduccion_a_php = document.getElementById(
    "certificates_title_curso_introduccion_a_php"
  );
  certificates_title_curso_introduccion_a_php.innerHTML =
    "Curso Introducción a PHP";

  let c_desc_4 = document.getElementById("c_desc_4");
  c_desc_4.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver4 = document.getElementById("ver4");
  ver4.innerHTML = "Visualizar documento";

  let certificates_title_curso_de_bootstrap_4 = document.getElementById(
    "certificates_title_curso_de_bootstrap_4"
  );
  certificates_title_curso_de_bootstrap_4.innerHTML = "Curso de Bootstrap 4";

  let c_desc_5 = document.getElementById("c_desc_5");
  c_desc_5.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver5 = document.getElementById("ver5");
  ver5.innerHTML = "Visualizar documento";

  let certificates_title_curso_fundamentos_de_bases_de_datos = document.getElementById(
    "certificates_title_curso_fundamentos_de_bases_de_datos"
  );
  certificates_title_curso_fundamentos_de_bases_de_datos.innerHTML =
    "Curso Fundamentos de Bases de Datos";

  let c_desc_6 = document.getElementById("c_desc_6");
  c_desc_6.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver6 = document.getElementById("ver6");
  ver6.innerHTML = "Visualizar documento";

  let certificates_title_curso_profesional_de_git = document.getElementById(
    "certificates_title_curso_profesional_de_git"
  );
  certificates_title_curso_profesional_de_git.innerHTML =
    "Curso Profesional de Git y Github";

  let c_desc_7 = document.getElementById("c_desc_7");
  c_desc_7.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver7 = document.getElementById("ver7");
  ver7.innerHTML = "Visualizar documento";

  let certificates_title_curso_basico_de_java = document.getElementById(
    "certificates_title_curso_basico_de_java"
  );
  certificates_title_curso_basico_de_java.innerHTML = "Curso Básico de JAVA SE";

  let c_desc_8 = document.getElementById("c_desc_8");
  c_desc_8.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver8 = document.getElementById("ver8");
  ver8.innerHTML = "Visualizar documento";

  let certificates_title_curso_css_grid = document.getElementById(
    "certificates_title_curso_css_grid"
  );
  certificates_title_curso_css_grid.innerHTML = "Curso de CCS Grid Layout";

  let c_desc_9 = document.getElementById("c_desc_9");
  c_desc_9.innerHTML =
    'Curso realizado en la plataforma educativa <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver9 = document.getElementById("ver9");
  ver9.innerHTML = "Visualizar documento";

  let c_desc_10 = document.getElementById("c_desc_10");
  c_desc_10.innerHTML =
    'Acreditación de Competencias en Tecnologías de la Información y la Comunicación. <br> Realizado en la <a href="https://www.uoc.edu/portal/es/index.html" target="_blank"><strong>Universitat Oberta de Catalunya (UOC)</strong></a>.';

  let ver10 = document.getElementById("ver10");
  ver10.innerHTML = "Visualizar documento";
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
    item.innerHTML = "Portefeuille";
  };

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    console.log(item.id);
    item.innerHTML = "Accueil";
  };

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> développeur web";

  let t20 = document.getElementById("t20");
  t20.innerHTML = "Technologies";

  let nav_menu_bienvenidos = document.getElementById("nav_menu_bienvenidos");
  nav_menu_bienvenidos.innerHTML = "Bienvenue";

  let nav_menu_tecnologias = document.getElementById("nav_menu_tecnologias");
  nav_menu_tecnologias.innerHTML = "Technologies";

  let nav_menu_portafolio = document.getElementById("nav_menu_portafolio");
  nav_menu_portafolio.innerHTML = "Portefeuille";

  let nav_menu_certificados = document.getElementById("nav_menu_certificados");
  nav_menu_certificados.innerHTML = "Certificats";

  let nav_menu_contacto = document.getElementById("nav_menu_contacto");
  nav_menu_contacto.innerHTML = "Contact";

  let section_title_bienvenidos = document.getElementById(
    "section_title_bienvenidos"
  );
  section_title_bienvenidos.innerHTML = "bienvenue";

  let section_description_en = document.getElementById(
    "section_description_en"
  );
  section_description_en.innerHTML =
    "Sur ce site, vous trouverez une sélection de mes projets personnels. Des informations académiques sur moi et des liens de contact.";

  let about_title_tecnologias = document.getElementById(
    "about_title_tecnologias"
  );
  about_title_tecnologias.innerHTML = "Technologies";

  let about_text_p1 = document.getElementById("about_text_p1");
  about_text_p1.innerHTML =
    "J'étudie actuellement le Cycle Supérieur de FP en Développement Web à l'UOC (Université Ouverte de Catalogne).";

  let about_text_p2 = document.getElementById("about_text_p2");
  about_text_p2.innerHTML =
    "Dans le cadre du programme académique, nous mettons en œuvre plusieurs projets web et j'améliore personnellement mes connaissances de manière autodidacte avec des cours en ligne et des travaux individuels que je développe de ma propre initiative.";

  let about_text_p3 = document.getElementById("about_text_p3");
  about_text_p3.innerHTML =
    "Les technologies avec lesquelles je travaille sont principalement:";

  let subscribe_title_creamos = document.getElementById(
    "subscribe_title_creamos"
  );
  subscribe_title_creamos.innerHTML = "Créons-nous quelque chose ensemble?";

  let subscribe_text_puedes = document.getElementById("subscribe_text_puedes");
  subscribe_text_puedes.innerHTML =
    "Vous pouvez me contacter via les liens suivants";

  let section_title_portafolio = document.getElementById(
    "section_title_portafolio"
  );
  section_title_portafolio.innerHTML = "Portefeuille";

  let amazing_video_details_span1 = document.getElementById(
    "amazing_video_details_span1"
  );
  amazing_video_details_span1.innerHTML =
    "Ce site utilise XMLHttpRequest() pour obtenir des données aléatoires d'utilisateurs et de vidéos. Pour ce projet on utilise uniquement Vanilla JS et il fait partie du cours  jQuery à JavaScript de Platzi.";

  let amazing_video_details_span2 = document.getElementById(
    "amazing_video_details_span2"
  );
  amazing_video_details_span2.innerHTML =
    "Dans mon compte Github vous trouvez le code de ce site";

  let visitar1 = document.getElementById("visitar1");
  visitar1.innerHTML = "Visiter le website";

  let inprl_details_span1 = document.getElementById("inprl_details_span1");
  inprl_details_span1.innerHTML =
    "Responsive website del Instituto Nacional de Riesgos Laborales. Desarrollado dentro del currículum académico de la Universitat Oberta de Catalunya (UOC). Des rapports d'accident peuvent être enregistrés, édités et consultés. Contrôle des utilisateurs et des sessions. Ce site utilise une base de données SQL.";

  let inprl_details_span2 = document.getElementById("inprl_details_span2");
  inprl_details_span2.innerHTML =
    "Dans mon compte Github vous trouvez le code de ce site";

  let visitar2 = document.getElementById("visitar2");
  visitar2.innerHTML = "Visiter le website";

  let laragram_h4 = document.getElementById("laragram_h4");
  laragram_h4.innerHTML = "Réseau social avec Laravel";

  let laragram_details_span1 = document.getElementById(
    "laragram_details_span1"
  );
  laragram_details_span1.innerHTML =
    "Il est possible d'enregistrer des utilisateurs, de télécharger des images, de les éditer, de les commenter, de en faire un like, de consulter un profil d'utilisateur, de supprimer vos propres commentaires et publications. Ce site utilise une base de données SQL et il est disponible en anglais et en espagnol.";

  let laragram_details_span2 = document.getElementById(
    "laragram_details_span2"
  );
  laragram_details_span2.innerHTML =
    "Dans mon compte Github vous trouvez le code de ce site";

  let visitar3 = document.getElementById("visitar3");
  visitar3.innerHTML = "Visiter le website";

  let jquery_details_span1 = document.getElementById("jquery_details_span1");
  jquery_details_span1.innerHTML = `Conception d'un blog avec un design réactif utilisant jQuery. Il possède plusieurs fonctionnalités telles qu'une horloge, un système de log in, un sélecteur de thème, un slider et un bouton de "back-to-top". Les publications sont générées à partir du fichier JS.`;

  let jquery_details_span2 = document.getElementById("jquery_details_span2");
  jquery_details_span2.innerHTML =
    "Dans mon compte Github vous trouvez le code de ce site";

  let visitar4 = document.getElementById("visitar4");
  visitar4.innerHTML = "Visiter le website";

  let simon_h4 = document.getElementById("simon_h4");
  simon_h4.innerHTML = "SIMON SAYS avec des couleurs";

  let simon_details_span1 = document.getElementById("simon_details_span1");
  simon_details_span1.innerHTML =
    "Un jeu de mémoire où vous devez suivre la séquence de couleurs illuminées pour monter de niveau. Vous pouvez sélectionner votre thème préféré parmi 5 couleurs différentes.";

  let simon_details_span2 = document.getElementById("simon_details_span2");
  simon_details_span2.innerHTML =
    "Dans mon compte Github vous trouvez le code de ce site";

  let visitar5 = document.getElementById("visitar5");
  visitar5.innerHTML = "Visiter le website";

  let instagram_h4 = document.getElementById("instagram_h4");
  instagram_h4.innerHTML = "Layout de type Instagram";

  let instagram_span1 = document.getElementById("instagram_span1");
  instagram_span1.innerHTML =
    "Utilisation de CSS Grid pour répliquer la mise en page d'Instagram";

  let instagram_span2 = document.getElementById("instagram_span2");
  instagram_span2.innerHTML =
    "Dans mon compte Github vous trouvez le code de ce site";

  let visitar6 = document.getElementById("visitar6");
  visitar6.innerHTML = "Visiter le website";

  let tienda_h4 = document.getElementById("tienda_h4");
  tienda_h4.innerHTML = "Boutique Smart Wallet";

  let tienda_details_span1 = document.getElementById("tienda_details_span1");
  tienda_details_span1.innerHTML =
    "A responsive website to sell crypto wallets. You can open an account and place orders from the shopping cart. Ce site utilise une base de données SQL.";

  let tienda_details_span2 = document.getElementById("tienda_details_span2");
  tienda_details_span2.innerHTML =
    "In my Github account you can find the code of this site";

  let visitar7 = document.getElementById("visitar7");
  visitar7.innerHTML = "Visit the website";

  // CERTIFICATS ET DIPLOMES--------------------------------------------
  let section_title_certificados = document.getElementById(
    "section_title_certificados"
  );
  section_title_certificados.innerHTML = "Certificats et diplômes";

  let certificates_title_curso_laravel6 = document.getElementById(
    "certificates_title_curso_laravel6"
  );
  certificates_title_curso_laravel6.innerHTML = "Cours Laravel 6";

  let c_desc_1 = document.getElementById("c_desc_1");
  c_desc_1.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver1 = document.getElementById("ver1");
  ver1.innerHTML = "Voir le document";

  let certificates_title_curso_fundamentos_de_javascript = document.getElementById(
    "certificates_title_curso_fundamentos_de_javascript"
  );
  certificates_title_curso_fundamentos_de_javascript.innerHTML =
    "Cours Fondements de javascript";

  let c_desc_2 = document.getElementById("c_desc_2");
  c_desc_2.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver2 = document.getElementById("ver2");
  ver2.innerHTML = "Voir le document";

  let certificates_title_curso_de_jquery_a = document.getElementById(
    "certificates_title_curso_de_jquery_a"
  );
  certificates_title_curso_de_jquery_a.innerHTML =
    "Cours de jQuery à JavaScript";

  let c_desc_3 = document.getElementById("c_desc_3");
  c_desc_3.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver3 = document.getElementById("ver3");
  ver3.innerHTML = "Voir le document";

  let certificates_title_curso_introduccion_a_php = document.getElementById(
    "certificates_title_curso_introduccion_a_php"
  );
  certificates_title_curso_introduccion_a_php.innerHTML =
    "Cours d'introduction à PHP";

  let c_desc_4 = document.getElementById("c_desc_4");
  c_desc_4.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver4 = document.getElementById("ver4");
  ver4.innerHTML = "Voir le document";

  let certificates_title_curso_de_bootstrap_4 = document.getElementById(
    "certificates_title_curso_de_bootstrap_4"
  );
  certificates_title_curso_de_bootstrap_4.innerHTML = "Cours de Bootstrap 4";

  let c_desc_5 = document.getElementById("c_desc_5");
  c_desc_5.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver5 = document.getElementById("ver5");
  ver5.innerHTML = "Voir le document";

  let certificates_title_curso_fundamentos_de_bases_de_datos = document.getElementById(
    "certificates_title_curso_fundamentos_de_bases_de_datos"
  );
  certificates_title_curso_fundamentos_de_bases_de_datos.innerHTML =
    "Cours d'initiation aux bases de données";

  let c_desc_6 = document.getElementById("c_desc_6");
  c_desc_6.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver6 = document.getElementById("ver6");
  ver6.innerHTML = "Voir le document";

  let certificates_title_curso_profesional_de_git = document.getElementById(
    "certificates_title_curso_profesional_de_git"
  );
  certificates_title_curso_profesional_de_git.innerHTML =
    "Cours professionnel de Git et Github";

  let c_desc_7 = document.getElementById("c_desc_7");
  c_desc_7.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver7 = document.getElementById("ver7");
  ver7.innerHTML = "Voir le document";

  let certificates_title_curso_basico_de_java = document.getElementById(
    "certificates_title_curso_basico_de_java"
  );
  certificates_title_curso_basico_de_java.innerHTML =
    "Cours les bases de JAVA SE";

  let c_desc_8 = document.getElementById("c_desc_8");
  c_desc_8.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver8 = document.getElementById("ver8");
  ver8.innerHTML = "Voir le document";

  let certificates_title_curso_css_grid = document.getElementById(
    "certificates_title_curso_css_grid"
  );
  certificates_title_curso_css_grid.innerHTML = "Cours de CCS Grid Design";

  let c_desc_9 = document.getElementById("c_desc_9");
  c_desc_9.innerHTML =
    'Cours suivi dans la plate-forme éducative <a href="https://platzi.com" target="_blank"><strong>Platzi</strong></a>.';

  let ver9 = document.getElementById("ver9");
  ver9.innerHTML = "Voir le document";

  let c_desc_10 = document.getElementById("c_desc_10");
  c_desc_10.innerHTML = `Accréditation des Compétences en technologies de l'information et de la communication. <br> Effectué à  <a href="https://www.uoc.edu/portal/es/index.html" target="_blank"><strong>l'Université Ouverte de Catalogne (UOC)</strong></a>.`;

  let ver10 = document.getElementById("ver10");
  ver10.innerHTML = "Voir le document";
}
