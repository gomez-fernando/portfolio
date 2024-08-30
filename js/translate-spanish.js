// spanish translation -----------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
function spanish() {
  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    item.innerHTML = "Bienvenido/as";
  }

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    item.innerHTML = "Portafolio";
  }

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    item.innerHTML = "Inicio";
  }

  let contact = document.getElementsByClassName("t_contact");
  for (let item of contact) {
    item.innerHTML = "Contacto";
  }

  let technologies = document.getElementsByClassName("t_technologies");
  for (let item of technologies) {
    item.innerHTML = "Tecnologías";
  }

  let devel = document.getElementsByClassName("t_devel");
  for (let item of devel) {
    item.innerHTML = "Desarrollado durante mi trabajo en Doctaforum S.L.";
  }

  let geicam = document.getElementsByClassName("t_geicam");
  for (let item of geicam) {
    item.innerHTML = "Todos los derechos pertenecen al Grupo Geicam y a Doctaforum S.L.";
  }

  let account = document.getElementsByClassName("t_account");
  for (let item of account) {
    item.innerHTML = "En mi cuenta de ";
  }

  let servier = document.getElementsByClassName("t_servier");
  for (let item of servier) {
    item.innerHTML = "Todos los derechos pertenecen a Laboratorios Servier y a Doctaforum S.L.";
  }

  let find = document.getElementsByClassName("t_find");
  for (let item of find) {
    item.innerHTML = "encontrarás el código de esta web.";
  }

  let visit = document.getElementsByClassName("t_visit");
  for (let item of visit) {
    item.innerHTML = "Visitar el sitio web";
  }

  let course = document.getElementsByClassName("t_course");
  for (let item of course) {
    item.innerHTML = "Curso realizado en la plataforma educativa ";
  }

  let certificates = document.getElementsByClassName("t_certificates");
  for (let item of certificates) {
    item.innerHTML = "Certificados";
  }

  // Ids -------------------------------------
  // -----------------------------------------
  document.getElementById("t10").innerHTML = "Fernando Gomez <br> Data Engineer";

  document.getElementById("t40").innerHTML =
    "En ésta página web podéis encontrar una selección de proyectos personales. También información académica sobre mí y datos de contacto.";

  document.getElementById("t80").innerHTML = "¿Creamos algo juntos?";

  document.getElementById("t90").innerHTML = "Puedes contactarme a través de los siguientes links";

  document.getElementById("lightningchat").innerHTML =
    "Una app de chat en tiempo real. Construída con websockets, React-Redux en el frontend y Nest en el backend.";

  document.getElementById("t100").innerHTML =
    "Sitio web para seguir la cotización de las principales criptomonedas. Utiliza la API de CoinCap para obtener todos los datos necesarios, además de mostrar una gráfica de la evolución del precio en las últimas 24 horas.";

  document.getElementById("t110").innerHTML =
    "Plataforma educativa online donde los estudiantes pueden ver y descargar los vídeos y materiales. Sistema de contacto con los tutores. La aplicación corrige los tests y entrega todas las estadísticas de actividad y calificaciones de los alumnos.";

  document.getElementById("t120").innerHTML =
    "Un CMS desarrollado íntegramente con Laravel 6. Utiliza una base de datos SQL. Se pueden gestionar completamente los usuarios, artículos de prensa y permisos de edición, publicación o eliminación de noticias. Desarrollado dentro del currículum académico de la UOC.";

  document.getElementById("t140").innerHTML =
    "Este sitio utiliza XMLHttpRequest() para obtener datos aleatorios de usuarios y películas. Se utiliza Vanilla JS únicamente y forma parte del curso de jQuery a JavaScript de Platzi.";

  document.getElementById("t150").innerHTML =
    "Una red social desarrollada con Laravel 6. Los usuarios pueden comentar, dar likes y estrellas a los productos. Pueden hacer su lista de favoritos. El administrador puede bloquear usuarios y añadir productos y categorías. Desarrollado dentro del currículum académico de la UOC.";

  document.getElementById("t160").innerHTML =
    "Diseño de un blog con resposive design utilizando jQuery. Cuenta con varias funcionalidades como un reloj, inicio de sesión, selector de tema, slider, botón de back-to-top y los posts son generados desde JS.";

  document.getElementById("t180").innerHTML = "Layout de Instagram";

  document.getElementById("t190").innerHTML =
    "Uso de CSS Grid para replicar el layout de la página de Instagram.";

  document.getElementById("t200").innerHTML = "Simón dice con colores";

  document.getElementById("t210").innerHTML =
    "Juego de memorización donde hay que seguir la secuencia de colores iluminados para ir pasando de nivel. Se puede seleccionar el tema preferido entre 5 colores diferentes.";

  document.getElementById("t220").innerHTML = "Tienda online Smart Wallet";

  document.getElementById("t230").innerHTML =
    "Un sitio web responsive para vender monederos de criptomonedas. Se puede abrir una cuenta y hacer los pedidos desde el carrito de la compra. Utiliza una base de datos SQL y PHP con MVC. Desarrollado dentro del currículum académico de la UOC.";

  document.getElementById("t250").innerHTML = "Curso de Symfony 5 (Máster en PHP)";

  document.getElementById("t260").innerHTML = "Curso de Angular";

  document.getElementById("t270").innerHTML = "Curso de Unit Testing con Jest en React";

  document.getElementById("t280").innerHTML = "Curso de Laravel 6";

  document.getElementById("t290").innerHTML = "Curso Introducción a React";

  document.getElementById("t300").innerHTML = "Curso de Scrum";

  document.getElementById("t310").innerHTML = "Curso de JavaScript Ecma 6+";

  document.getElementById("t320").innerHTML = "Curso Profesional de Git y Github";

  document.getElementById("t330").innerHTML = "Curso de Bootstrap 4";

  document.getElementById("t340").innerHTML = "Curso de CCS Grid";

  document.getElementById("t350").innerHTML = "Curso Introducción a PHP";

  document.getElementById("t360").innerHTML = "Curso de Redux";

  document.getElementById("t370").innerHTML = "Curso de WordPress";

  document.getElementById("t380").innerHTML = "Creación de temas y plugins para WordPress";

  document.getElementById("t390").innerHTML = "Curso Fundamentos de Javascript";

  document.getElementById("t400").innerHTML = "Curso Fundamentos de Bases de Datos";

  document.getElementById("t410").innerHTML = "Curso de Preprocesadores CSS";

  document.getElementById("t420").innerHTML =
    "Una aplicación donde concentrar todas las noticias que te interesan, así como tus blogs favoritos. Guarda el RSS que quieres seguir y tendrás siempre actualizadas las últimas informaciones. Puedes crear tu cuenta y gestionar todos los detalles. Añade tus listas y fíltralas por categoría o país.";

  document.getElementById("t430").innerHTML = "3º Encuentro Vida Rural";

  document.getElementById("t440").innerHTML =
    "Página web para un supuesto encuentro sobre medio ambiente y vida rural a celebrarse en Callús (Cataluña). Se puede suscribir a la newsletter gracias a los servicios de Sendinblue.";

  document.getElementById("t450").innerHTML =
    "Una página de noticias regionales para la provincia de Málaga. Desarrollado con WordPress dentro del currículum académico de la UOC. Diseño responsive.";

  document.getElementById("t470").innerHTML =
    "Sitio web donde se publican regularmente podcasts sobre la investigación del cáncer de mama. Se pueden reproducir y descargar los audios. Así como dejar mensajes y likes a los podcasts. El administrador puede responder también a los mensajes.";

  document.getElementById("t480").innerHTML =
    "Un blog sobre trucos y curiosidades del mundo Linux. Puedes crear tu cuenta y gestionar tus posts, dejar comentarios y dar like a tus favoritos. Desarrollado con Symfony 5.";

  // document.getElementById("t490").innerHTML =
  //   "Un sitio web para descubrir los principales héroes del universo DC. Puedes usar el buscador para encontrar tus héroes favoritos. Desarrollado con Angular y alojado en Firebase.";

  document.getElementById("t500").innerHTML =
    "Aplicación para gestionar tus tareas de forma divertida. Creada con React usando Typescript.";

  document.getElementById("t501").innerHTML =
    "Una aplicación para llevar el control de los pacientes (mascotas) y de las citas. Web alojada en Netlify.";

  document.getElementById("t510").innerHTML =
    "Una aplicación intuitiva y ágil para llevar el control de tus gastos y administrar tus presupuestos personales, o para un evento, actividad, etc.";

  document.getElementById("t520").innerHTML =
    "Una app para cotizar al instante las principales criptomonedas de mayor capitalización. Selecciona el par y recibe la última cotización, actualizada desde cryptocompare.com";

  document.getElementById("t530").innerHTML =
    "Una aplicación para crear tu lista de vídeos favoritos de Youtube. Puedes gestionar tus favoritos y reproducirlos diretamente en la app. El API REST está desarrollado con Symfony. El front end está desarrollado con Angular.";

  document.getElementById("t540").innerHTML =
    "Plataforma de acceso privado para el desarrollo de la campaña Unidos por la Adherencia.";

  document.getElementById("t550").innerHTML =
    "Una versión ligera de Trello. Se pueden crear listas y tareas, así como cambiarlas de orden y de lista usando drag and drop.";

  document.getElementById("t560").innerHTML =
    "Plataforma de acceso privado con diversas funcionalidades de vídeo interactivo, encuestas y materiales conmemorando el 10º aniversario de Vpriv.";

  document.getElementById("t_takeda").innerHTML =
    "Todos los derechos pertenecen a Takeda Pharmaceutical Company Limited y Doctaforum S.L.";

  document.getElementById("t_lundbeck").innerHTML =
    "Todos los derechos pertenecen a Otsuka, Lundbeck y Doctaforum S.L.";

  document.getElementById("t590").innerHTML =
    "App ligera donde simular la cotización de seguros de auto teniendo en cuenta el fabricante, el año de matriculación y las coberturas del seguro.";

  document.getElementById("t600").innerHTML =
    "Cotizador de Seguros de Auto";

  document.getElementById("t610").innerHTML =
    "Un sitio web para descubrir los principales héroes del universo DC. Puedes usar el buscador para encontrar tus héroes favoritos. Desarrollado con Angular y alojado en Firebase.";

  document.getElementById("t620").innerHTML =
    "Una aplicación para consultar el tiempo de cada ciudad en diferentes países. Utiliza la Api de Open Weather Map.";

  document.getElementById("t630").innerHTML =
    "Buscador de Noticias";

  document.getElementById("t640").innerHTML =
    "Un sitio web para encontrar las noticias del día. Utiliza la api de newsapi.org. Filtrado por categorías de noticias y componente de paginación.";

  document.getElementById("t650").innerHTML =
    "Buscador de Bebidas";

  document.getElementById("t660").innerHTML =
    "Una aplicación para encontrar todas las bebidas que puedas imaginar. También puedes ver la receta para preparala tú mismo en casa.";

  document.querySelector("#t670").innerHTML = "Curso de Introducción a Data Management";

  document.querySelector("#t680").innerHTML = "Curso de Data Warehouse";

  document.querySelector("#t690").innerHTML = "Curso de Máster en Python";

  document.querySelector("#t700").innerHTML = "Curso Básico de JAVA SE";

  document.querySelector("#t710").innerHTML = "Curso de Talend Data Integration";

  document.querySelector("#t720").innerHTML = "Curso de Vue.js";
}
