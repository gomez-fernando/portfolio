// french translation -------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
function french() {
  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    item.innerHTML = "Bienvenue";
  }

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    item.innerHTML = "Portfolio";
  }

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    item.innerHTML = "Accueil";
  }

  let contact = document.getElementsByClassName("t_contact");
  for (let item of contact) {
    item.innerHTML = "Contact";
  }

  let technologies = document.getElementsByClassName("t_technologies");
  for (let item of technologies) {
    item.innerHTML = "Technologies";

    let devel = document.getElementsByClassName("t_devel");
    for (let item of devel) {
      item.innerHTML = "Développé pendant mon travail chez Doctaforum S.L.";
    }
  }

  let geicam = document.getElementsByClassName("t_geicam");
  for (let item of geicam) {
    item.innerHTML = "Tous les droits appartiennent au groupe Geicam et Doctaforum S.L.";
  }

  let account = document.getElementsByClassName("t_account");
  for (let item of account) {
    item.innerHTML = "Dans mon compte de ";
  }

  let servier = document.getElementsByClassName("t_servier");
  for (let item of servier) {
    item.innerHTML = "Tous les droits appartiennent aux Laboratorios Servier et à Doctaforum S.L.";
  }

  let find = document.getElementsByClassName("t_find");
  for (let item of find) {
    item.innerHTML = "vous trouverez le code de ce site.";
  }

  let visit = document.getElementsByClassName("t_visit");
  for (let item of visit) {
    item.innerHTML = "Visiter le website";
  }

  let course = document.getElementsByClassName("t_course");
  for (let item of course) {
    item.innerHTML = "Cours suivi dans la plate-forme éducative ";
  }

  let certificates = document.getElementsByClassName("t_certificates");
  for (let item of certificates) {
    item.innerHTML = "Certificats";
  }

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Data Engineer";

  let t40 = document.getElementById("t40");
  t40.innerHTML =
    "Sur ce site, vous trouverez une sélection de mes projets personnels. Des informations académiques sur moi et des liens de contact.";

  let t80 = document.getElementById("t80");
  t80.innerHTML = "Créons-nous quelque chose ensemble?";

  let t90 = document.getElementById("t90");
  t90.innerHTML = "Vous pouvez me contacter via les liens suivants";

  let lightningchat = document.getElementById("lightningchat");
  lightningchat.innerHTML =
    "Une application de chat en temps réel. Construit avec des websockets, React-Redux sur le frontend et Nest sur le backend.";

  let t100 = document.getElementById("t100");
  t100.innerHTML =
    "Site web pour suivre le cours des principales crypto-monnaies. Il utilise l’API de CoinCap pour obtenir toutes les données nécessaires et afficher aussi un graphique de l’évolution des prix au cours des dernières 24 heures.";

  let t110 = document.getElementById("t110");
  t110.innerHTML =
    "Plateforme éducative en ligne où les étudiants peuvent visionner et télécharger des vidéos et du matériel. Système de contact avec les tuteurs. L'application corrige les tests et délivre toutes les statistiques d'activité et les notes des élèves.";

  let t120 = document.getElementById("t120");
  t120.innerHTML =
    "Un CMS développé entièrement avec Laravel 6. Utilise une base de données SQL. Les utilisateurs, les articles de presse et les autorisations d’édition, de publication ou d’effacement de nouvelles peuvent être entièrement gérés. Développé dans le cadre du programme d’études de l’UOC.";

  let t140 = document.getElementById("t140");
  t140.innerHTML =
    "Ce site utilise XMLHttpRequest() pour obtenir des données aléatoires d'utilisateurs et de vidéos. Pour ce projet on utilise uniquement Vanilla JS et il fait partie du cours  jQuery à JavaScript de Platzi.";

  let t150 = document.getElementById("t150");
  t150.innerHTML =
    "Un réseau social développé avec Laravel 6. Les utilisateurs peuvent commenter, donner des likes et des étoiles aux produits. Ils peuvent faire leur liste de favoris. L’administrateur peut bloquer les utilisateurs et ajouter des produits et des catégories. Développé dans le cadre du programme d'études de l’UOC.";

  let t160 = document.getElementById("t160");
  t160.innerHTML =
    "Conception d'un blog avec un design réactif utilisant jQuery. Il possède plusieurs fonctionnalités telles qu'une horloge, un système de log in, un sélecteur de thème, un slider et un bouton de \"back-to-top\". Les publications sont générées à partir du fichier JS.";

  let t180 = document.getElementById("t180");
  t180.innerHTML = "Layout de type Instagram";

  let t190 = document.getElementById("t190");
  t190.innerHTML =
    "Utilisation de CSS Grid pour répliquer la mise en page d'Instagram.";

  let t200 = document.getElementById("t200");
  t200.innerHTML = "SIMON SAYS avec des couleurs";

  let t210 = document.getElementById("t210");
  t210.innerHTML =
    "Un jeu de mémoire où vous devez suivre la séquence de couleurs illuminées pour monter de niveau. Vous pouvez sélectionner votre thème préféré parmi 5 couleurs différentes.";

  let t220 = document.getElementById("t220");
  t220.innerHTML = "Boutique en ligne Smart Wallet";

  let t230 = document.getElementById("t230");
  t230.innerHTML =
    "Un site web responsive pour vendre des portefeuilles de crypto-monnaie. Vous pouvez ouvrir un compte et commander à partir du panier. Il utilise une base de données SQL et PHP avec MVC. Développé dans le cadre du programme d’études de l’UOC.";

  let t250 = document.getElementById("t250");
  t250.innerHTML = "Cours de Symfony 5 (Master en PHP)";

  document.getElementById("t260").innerHTML = "Cours de Angular";

  let t270 = document.getElementById("t270");
  t270.innerHTML = "Cours de tests unitaires avec Jest dans React";

  let t280 = document.getElementById("t280");
  t280.innerHTML = "Cours de Laravel 6";

  let t290 = document.getElementById("t290");
  t290.innerHTML = "Cours d'introduction à React";

  let t300 = document.getElementById("t300");
  t300.innerHTML = "Cours de Scrum";

  let t310 = document.getElementById("t310");
  t310.innerHTML = "Cours de JavaScript Ecma 6+";

  let t320 = document.getElementById("t320");
  t320.innerHTML = "Cours professionnel de Git et Github";

  let t330 = document.getElementById("t330");
  t330.innerHTML = "Cours de Bootstrap 4";

  let t340 = document.getElementById("t340");
  t340.innerHTML = "Cours de CCS Grid Design";

  let t350 = document.getElementById("t350");
  t350.innerHTML = "Cours d'introduction à PHP";

  let t360 = document.getElementById("t360");
  t360.innerHTML = "Cours de Redux";

  let t370 = document.getElementById("t370");
  t370.innerHTML = "Cours de WordPress";

  let t380 = document.getElementById("t380");
  t380.innerHTML = "Création de thèmes et plugins pour WordPress";

  let t390 = document.getElementById("t390");
  t390.innerHTML = "Cours Fondements de Javascript";

  let t400 = document.getElementById("t400");
  t400.innerHTML = "Cours d’initiation aux bases de données";

  let t410 = document.getElementById("t410");
  t410.innerHTML = "Cours de Préprocesseurs CSS";

  let t420 = document.getElementById("t420");
  t420.innerHTML =
    "Une application pour concentrer toutes les actualités qui vous intéressent, ainsi que vos blogs préférés. Enregistrez le RSS que vous souhaitez suivre et vous aurez toujours les dernières informations mises à jour. Vous pouvez créer votre compte et gérer tous les détails. Ajoutez vos listes et filtrez-les par catégorie ou par pays.";

  let t430 = document.getElementById("t430");
  t430.innerHTML = "3º Rencontre de la Vie Rurale";

  let t440 = document.getElementById("t440");
  t440.innerHTML =
    "Site web d'une supposée réunion sur l'environnement et la vie rurale qui se tiendra à Callús (Catalogne). Vous pouvez vous abonner à la newsletter grâce aux services de Sendinblue.";

  let t450 = document.getElementById("t450");
  t450.innerHTML =
    "Un site de nouvelles régionales pour la province de Malaga. Développé avec WordPress dans le programme académique de l'UOC. Responsive design.";

  let t470 = document.getElementById("t470");
  t470.innerHTML =
    "Site Web où des podcasts sur la recherche sur le cancer du sein sont régulièrement publiés. Les audios peuvent être lus et téléchargés. En plus de laisser des messages et des likes aux podcasts. L'administrateur peut également répondre aux messages.";

  let t480 = document.getElementById("t480");
  t480.innerHTML =
    "Un blog sur les astuces et les curiosités du monde Linux. Vous pouvez créer votre compte et gérer vos posts, laisser des commentaires et donner des likes à vos favoris. Développé avec Symfony 5.";

  // let t490 = document.getElementById("t490");
  // t490.innerHTML =
  //   "Un site Internet pour découvrir les principaux héros de l'univers DC. Vous pouvez utiliser le moteur de recherche pour trouver vos héros préférés. Développé avec Angular et hébergé sur Firebase.";

  let t500 = document.getElementById("t500");
  t500.innerHTML =
    "Application pour gérer vos tâches de manière ludique. Créé avec React en utilisant Typescript.";

  let t501 = document.getElementById("t501");
  t501.innerHTML =
    "Une application pour suivre les patients (animaux de compagnie) et les rendez-vous. Site hébergé sur Netlify.";

  let t510 = document.getElementById("t510");
  t510.innerHTML =
    "Une application intuitive et agile pour suivre vos dépenses et gérer vos budgets personnels, ou pour un événement, une activité, etc.";

  let t520 = document.getElementById("t520");
  t520.innerHTML =
    "Une application pour citer instantanément les principales crypto-monnaies avec la plus grande capitalisation. Sélectionnez la paire et recevez le dernier devis, mis à jour depuis cryptocompare.com";

  let t530 = document.getElementById("t530");
  t530.innerHTML =
    "Une application pour créer votre liste de vidéos Youtube préférées. Vous pouvez gérer vos favoris et les jouer directement dans l'application. L'API REST est développée avec Symfony. Le front-end est développé avec Angular.";

  let t540 = document.getElementById("t540");
  t540.innerHTML =
    "Plateforme d’accès privé pour le développement de la campagne Unis pour l’Adhésion.";

  let t550 = document.getElementById("t550");
  t550.innerHTML =
    "Une version légère de Trello. Vous pouvez créer des listes et des tâches et les modifier en utilisant drag and drop.";

  let t560 = document.getElementById("t560");
  t560.innerHTML =
    "Plate-forme d’accès privé avec diverses fonctionnalités vidéo interactives, des sondages et des documents commémorant le 10e anniversaire de Vpriv.";

  let t570 = document.getElementById("t_takeda");
  t570.innerHTML =
    "Tous les droits appartiennent à Takeda Pharmaceutical Company Limited et Doctaforum S.L.";

  let t580 = document.getElementById("t_lundbeck");
  t580.innerHTML =
    "Tous les droits appartiennent à Otsuka, Lundbeck et Doctaforum S.L.";

  let t590 = document.getElementById("t590");
  t590.innerHTML =
    "Application légère où simuler la cotisation d’assurance automobile en tenant compte du fabricant, de l’année d’immatriculation et des couvertures d’assurance.";

  let t600 = document.getElementById("t600");
  t600.innerHTML =
    "Courtier en assurance automobile";

  let t610 = document.getElementById("t610");
  t610.innerHTML =
    "Un site Web pour découvrir les principaux héros de l’univers DC. Vous pouvez utiliser le moteur de recherche pour trouver vos héros préférés. Développé avec Angular et hébergé chez Firebase.";

  let t620 = document.getElementById("t620");
  t620.innerHTML =
    "Une application pour consulter le temps de chaque ville dans différents pays. Elle utilise l’Api Open Weather Map.";

  let t630 = document.getElementById("t630");
  t630.innerHTML =
    "Moteur de recherche de nouvelles";

  let t640 = document.getElementById("t640");
  t640.innerHTML =
    "Un site web pour trouver les nouvelles du jour. Il utilise l’api de newsapi.org. Filtré par catégories de nouvelles avec un composant de pagination.";

  let t650 = document.getElementById("t650");
  t650.innerHTML =
    "Moteur de recherche de boissons";

  let t660 = document.getElementById("t660");
  t660.innerHTML =
    "Une application pour trouver toutes les boissons que vous pouvez imaginer. Vous pouvez également consulter la recette pour la préparer vous-même à la maison.";
  
  document.querySelector("#t670").innerHTML = "Cours d'introduction à Data Management";

  document.querySelector("#t680").innerHTML = "Cours de Data Warehouse";

  document.querySelector("#t690").innerHTML = "Cours de Master en Python";

  document.querySelector("#t700").innerHTML = "Cours de base JAVA SE";

  document.querySelector("#t710").innerHTML = "Cours de Talend Data Integration";

  document.querySelector("#t720").innerHTML = "Cours de Vue.js";
}
