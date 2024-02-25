//   portuguese translation -----------------------
//--------------------------------------------
function portuguese() {
  let welcome = document.getElementsByClassName("t_welcome");
  for (let item of welcome) {
    item.innerHTML = "Bem-vindo";
  }

  let portfolio = document.getElementsByClassName("t_portfolio");
  for (let item of portfolio) {
    item.innerHTML = "Portfólio";
  }

  let home = document.getElementsByClassName("t_home");
  for (let item of home) {
    item.innerHTML = "Início";
  }

  let contact = document.getElementsByClassName("t_contact");
  for (let item of contact) {
    item.innerHTML = "Contato";
  }

  let technologies = document.getElementsByClassName("t_technologies");
  for (let item of technologies) {
    item.innerHTML = "Tecnologias";
  }

  let account = document.getElementsByClassName("t_account");
  for (let item of account) {
    item.innerHTML = "Na minha conta do ";
  }

  let servier = document.getElementsByClassName("t_servier");
  for (let item of servier) {
    item.innerHTML = "Todos os direitos pertencem aos Laboratórios Servier e à Doctaforum S.L.";
  }

  let devel = document.getElementsByClassName("t_devel");
  for (let item of devel) {
    item.innerHTML = "Desenvolvido durante o meu trabalho na Doctaforum S.L.";
  }

  let geicam = document.getElementsByClassName("t_geicam");
  for (let item of geicam) {
    item.innerHTML = "Todos os direitos pertencem ao Grupo Geicam e à Doctaforum S.L.";
  }

  let find = document.getElementsByClassName("t_find");
  for (let item of find) {
    item.innerHTML = "você encontrará o código deste site.";
  }

  let visit = document.getElementsByClassName("t_visit");
  for (let item of visit) {
    item.innerHTML = "Visitar o site web";
  }

  let course = document.getElementsByClassName("t_course");
  for (let item of course) {
    item.innerHTML = "Curso realizado na plataforma educativa ";
  }

  let certificates = document.getElementsByClassName("t_certificates");
  for (let item of certificates) {
    item.innerHTML = "Certificados";
  }

  // Ids -------------------------------------
  // -----------------------------------------
  let t10 = document.getElementById("t10");
  t10.innerHTML = "Fernando Gomez <br> Desenvolvedor Web";

  let t40 = document.getElementById("t40");
  t40.innerHTML =
    "En ésta página web podéis encontrar una selección de proyectos personales. También información académica sobre mí y datos de contacto.";

  let t80 = document.getElementById("t80");
  t80.innerHTML = "Vamos criar algo juntos?";

  let t90 = document.getElementById("t90");
  t90.innerHTML = "Pode contactar-me através dos seguintes links";

  let lightningchat = document.getElementById("lightningchat");
  lightningchat.innerHTML =
    "Um aplicativo de chat em Tiempo real. Construído com websockets, React-Redux e Nest no backend.";

  let t100 = document.getElementById("t100");
  t100.innerHTML =
    "Site para seguir as citações das principais criptomoedas. Utiliza a API do CoinCap para obter todos os dados necessários, além de mostrar um gráfico da evolução do preço nas últimas 24 horas.";

  let t110 = document.getElementById("t110");
  t110.innerHTML =
    "Plataforma educacional online onde os alunos podem ver e baixar os vídeos e materiais. Sistema de contato com os tutores. A aplicação corrige os testes e entrega todas as estatísticas de atividade e qualificações dos alunos.";

  let t120 = document.getElementById("t120");
  t120.innerHTML =
    "Um CMS totalmente desenvolvido com o Laravel 6. Ele usa um banco de dados SQL. Os usuários, artigos de imprensa e permissões de edição, publicação ou remoção de notícias podem ser totalmente gerenciados. Desenvolvido no âmbito do currículo académico da UOC.";

  let t140 = document.getElementById("t140");
  t140.innerHTML =
    "Este site usa o XMLHttpRequest() para obter dados aleatórios de usuários e filmes. Vanilla JS é usado apenas e faz parte do curso jQuery para JavaScript de Platzi.";

  let t150 = document.getElementById("t150");
  t150.innerHTML =
    "Uma rede social desenvolvida com o Laravel 6. Os usuários podem comentar, dar likes e estrelas aos produtos. Eles podem fazer sua lista de favoritos. O administrador pode bloquear usuários e adicionar produtos e categorias. Desenvolvido dentro do currículo acadêmico da UOC.";

  let t160 = document.getElementById("t160");
  t160.innerHTML =
    "Projeto de blog com resposive design usando jQuery. Conta com várias funcionalidades como um relógio, início de sessão, seletor de tema, slider, botão de back-to-top e os posts são gerados desde JS.";

  let t180 = document.getElementById("t180");
  t180.innerHTML = "Layout do Instagram";

  let t190 = document.getElementById("t190");
  t190.innerHTML = "Utilização do CSS Grid para replicar o layout da página do Instagram.";

  let t200 = document.getElementById("t200");
  t200.innerHTML = "Simon diz com cores";

  let t210 = document.getElementById("t210");
  t210.innerHTML =
    "Jogo de memorização onde é necessário seguir a sequência de cores iluminadas para passar de nível. Você pode selecionar o tema preferido entre 5 cores diferentes.";

  let t220 = document.getElementById("t220");
  t220.innerHTML = "Loja online Smart Wallet";

  let t230 = document.getElementById("t230");
  t230.innerHTML =
    "Um site responsive para vender carteiras de criptomoedas. Você pode abrir uma conta e fazer as encomendas a partir do carrinho de compras. Utiliza um banco de dados SQL e PHP com MVC. Desenvolvido dentro do currículo acadêmico da UOC.";

  let t250 = document.getElementById("t250");
  t250.innerHTML = "Curso Symfony 5 (Master em PHP)";

  // let t260 = document.getElementById("t260");
  // t260.innerHTML = "Curso de Angular 8";

  let t270 = document.getElementById("t270");
  t270.innerHTML = "Curso de teste unitário com Jest em React";

  let t280 = document.getElementById("t280");
  t280.innerHTML = "Curso de Laravel 6";

  let t290 = document.getElementById("t290");
  t290.innerHTML = "Curso de Introdução ao React";

  let t300 = document.getElementById("t300");
  t300.innerHTML = "Curso de Scrum";

  let t310 = document.getElementById("t310");
  t310.innerHTML = "Curso de EcmaScript 6+";

  let t320 = document.getElementById("t320");
  t320.innerHTML = "Curso Profissional de Git e Github";

  let t330 = document.getElementById("t330");
  t330.innerHTML = "Curso de Bootstrap 4";

  let t340 = document.getElementById("t340");
  t340.innerHTML = "Curso de CCS Grid";

  let t350 = document.getElementById("t350");
  t350.innerHTML = "Curso Introdução ao PHP";

  let t360 = document.getElementById("t360");
  t360.innerHTML = "Curso de Redux";

  let t370 = document.getElementById("t370");
  t370.innerHTML = "Curso de WordPress";

  let t380 = document.getElementById("t380");
  t380.innerHTML = "Criação de temas e plugins para WordPress ";

  let t390 = document.getElementById("t390");
  t390.innerHTML = "Curso Fundamentos de Javascript";

  let t400 = document.getElementById("t400");
  t400.innerHTML = "Curso Fundamentos de Bases de Dados";

  let t410 = document.getElementById("t410");
  t410.innerHTML = "Curso de Pré-processadores CSS";

  let t420 = document.getElementById("t420");
  t420.innerHTML =
    "Um aplicativo para concentrar todas as notícias que você está interessado, bem como seus blogs favoritos. Salve o RSS que deseja seguir e terá sempre atualizadas as últimas informações. Pode criar a sua conta e gerir todos os detalhes. Adicione suas listas e fíltlas por categoria ou país.";

  let t430 = document.getElementById("t430");
  t430.innerHTML = "3º Encontro Vida Rural";

  let t440 = document.getElementById("t440");
  t440.innerHTML =
    "Website para um suposto encontro sobre meio ambiente e vida rural a ser celebrado em Callús (Catalunha). Você pode assinar a newsletter graças aos serviços da Sendinblue.";

  let t450 = document.getElementById("t450");
  t450.innerHTML =
    "Uma página de notícias regionais para a província de Málaga. Desenvolvido com WordPress dentro do currículo acadêmico da UOC. Design responsive.";

  let t470 = document.getElementById("t470");
  t470.innerHTML =
    "Site onde podcasts são publicados regularmente sobre a pesquisa do câncer de mama. Pode reproduzir e baixar áudios. Assim como deixar mensagens e likes aos podcasts. O administrador também pode responder às mensagens.";

  let t480 = document.getElementById("t480");
  t480.innerHTML =
    "Um blog sobre truques e curiosidades do mundo Linux. Você pode criar sua conta e gerenciar seus posts, deixar comentários e dar como seus favoritos. Desenvolvido com Symfony 5.";

  // let t490 = document.getElementById("t490");
  // t490.innerHTML =
  //   "A website to discover the main heroes of the DC universe. You can use the search box to find your favorite heroes. Developed with Angular and hosted on Firebase.";

  let t500 = document.getElementById("t500");
  t500.innerHTML =
    "Aplicativo para gerenciar suas tarefas de forma divertida. Criado com o React usando o Typescript.";

  let t501 = document.getElementById("t501");
  t501.innerHTML =
    "Um aplicativo de acompanhamento de pacientes (animais de estimação) e consultas. Web hospedado no Netlify.";

  let t510 = document.getElementById("t510");
  t510.innerHTML =
    "Uma aplicação intuitiva e ágil para levar o controle de suas despesas e administrar seus orçamentos pessoais, ou para um evento, atividade, etc.";

  let t520 = document.getElementById("t520");
  t520.innerHTML =
    "Um aplicativo para listar instantaneamente as principais criptomoedas de maior capitalização. Selecione o par e receba a última cotação, atualizada a partir cryptocompare.com";

  let t530 = document.getElementById("t530");
  t530.innerHTML =
    "Um aplicativo para criar sua lista de vídeos favoritos do Youtube. Você pode gerenciar seus favoritos e reproduzi-los diretamente no aplicativo. A API REST é desenvolvida com a Symfony. O front end é desenvolvido com Angular.";

  let t540 = document.getElementById("t540");
  t540.innerHTML =
    "Plataforma de acesso privado para o desenvolvimento da campanha Unidos pela Aderência";

  let t550 = document.getElementById("t550");
  t550.innerHTML =
    "Uma versão leve de Trello. Você pode criar listas e tarefas, bem como mudá-las de ordem e de lista usando drag and drop.";

  let t560 = document.getElementById("t560");
  t560.innerHTML =
    "Plataforma de acesso privado com diversas funcionalidades de vídeo interativo, pesquisas e materiais comemorando o 10º aniversário de Vpriv.";

  let t570 = document.getElementById("t_takeda");
  t570.innerHTML =
    "Todos os direitos pertencem à Takeda Pharmaceutical Company Limited e à Doctaforum S.L.";

  let t580 = document.getElementById("t_lundbeck");
  t580.innerHTML =
    "Todos os direitos pertencem à Otsuka, à Lundbeck e à Doctaforum S.L.";

  let t590 = document.getElementById("t590");
  t590.innerHTML =
    "Aplicativo leve onde simular a cotação do seguro automóvel, tendo em conta o fabricante, o ano de matrícula e as coberturas do seguro.";

  let t600 = document.getElementById("t600");
  t600.innerHTML =
    "Cotizador de Seguros de Automóvel";

  let t610 = document.getElementById("t610");
  t610.innerHTML =
    "Um site para descobrir os principais heróis do universo DC. Você pode usar o navegador para encontrar seus heróis favoritos. Desenvolvido com Angular e hospedado no Firebase.";

  let t620 = document.getElementById("t620");
  t620.innerHTML =
    "Um aplicativo para verificar o tempo de cada cidade em diferentes países. Ele usa o Open Weather Map Api.";

  let t630 = document.getElementById("t630");
  t630.innerHTML =
    "Buscador de Notícias";

  let t640 = document.getElementById("t640");
  t640.innerHTML =
    "Um site para encontrar as notícias do dia. Ele usa a api newsapi.org. Filtragem por categorias de notícias e um componente de paginação.";

  let t650 = document.getElementById("t650");
  t650.innerHTML =
    "Buscador de Bebidas";

  let t660 = document.getElementById("t660");
  t660.innerHTML =
    "Um aplicativo para encontrar todas as bebidas que você pode imaginar. Você também pode ver a receita para prepará-lo você mesmo em casa.";

  document.querySelector("#t670").innerHTML = "Curso de introdução ao Data Management";

  document.querySelector("#t680").innerHTML = "Curso de Data Warehouse";

  document.querySelector("#t690").innerHTML = "Curso de Master em Python";

  document.querySelector("#t700").innerHTML = "Curso Básico JAVA SE";
}

