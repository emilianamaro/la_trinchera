const menu = [
  {
    id: "tapas",
    title: "Las tapas",
    products: [
      { name: "gilda clasica", price: "2€", description: "gilda de anchoa." },
      { name: "chipirones a la plancha", price: "9´90€" },
      { name: "PATATAS BRAVAS.", price: "5,90€", image: "tapa-bravas.jpg" },
      { name: "QUESADILLA DE SERRANO Y QUESOS CON SALSA DE TOMATE.", price: "9,90€", image: "tapa-quesadilla.jpg" },
      { name: "TIRAS DE POLLO CRUNCH.", price: "7,90€", image: "tapa-pollo-crunch.jpg" },
      { name: "OREJA A LA PLANCHA.", price: "8€", image: "tapa-oreja.jpg" },
      { name: "PATATAS CON SALSA DE QUESO Y CHICHARRONES.", price: "9€", image: "tapa-patatas-chicharrones.jpg" },
      { name: "SEPIONET A LA PLANCHA.", price: "14.90€", image: "tapa-sepionet.jpg" },
      { name: "JAMON IBERICO Y QUESO CURADO.", price: "19€", image: "tapa-jamon-queso.jpg" },
      { name: "JAMON IBERICO.", price: "19€", image: "tapa-jamon.jpg" },
      { name: "QUESO CURADO.", price: "12€", image: "tapa-queso.jpg" },
      { name: "SARDINA AHUMADA CON QUESO CREMA,CONFITURA DE TOMATE Y SRIRACHA SUAVE.", price: "3.50€", image: "tapa-sardina.jpg" },
      { name: "MOLLEJAS DE TERNERA.", price: "14€", image: "tapa-mollejas.jpg" },
      { name: "CHAMPIÑONES A LA PLANCHA.", price: "6.50€", image: "tapa-champinones.jpg" },
      { name: "NACHOS CON GUACAMOLE,NUESTRA MEZCLA DE CARNE Y QUESO Y SUS ADEREZOS.", price: "16€", image: "tapa-nachos.jpg" },
      { name: "PROVOLONE CON TOMATE Y OREGANO.", price: "11.90€", image: "tapa-provolone.jpg" },
      { name: "TORREZNO DE SORIA.", price: "7,50€", image: "tapa-torrezno.jpg" },
      { name: "buñuelos de bacalao.", price: "8€", image: "tapa-bunuelos.jpg" }
    ]
  },
  {
    id: "ensaladas",
    title: "Las ensaladas",
    products: [
      { name: "GRETA:", price: "12.50€", description: "MEZCLUM DE LECHUGAS,TOMATES CHERRY,MAIZ,NUECES,AWAKATE,QUESO DE CABRA Y VINAGRETA DE PIMIENTO Y CEBOLLA.", image: "ensalada-greta.jpg" },
      { name: "CESAR:", price: "12,50€", description: "LECHUGA,TOMATES CHERRY,QUESO PARMESANO,SALSA CESAR,CRUCH DE POLLO,MAIZ,BACON YCEBOLLA CRUJIENTE.", image: "ensalada-cesar.jpg" }
    ]
  },
  {
    id: "burgers",
    title: "Las burgers",
    note: "LAS HAMBURGESAS NO SE PUEDEN MODIFICAR. ELIGE LA TUYA.",
    products: [
      { name: "KOREA.", price: "10,90€", description: "CARNE DE TERNERA 200G,PEPINILLOS,SALSA EMMY Y BACON.", image: "burger-korea.jpg" },
      { name: "EMI 2.0", price: "15,90€", description: "CARNE MADURADA 200G,CEBOLLA CARAMELIZADA,SALSA EMI,BACON,SALSA CAMENBERT Y CRUNCH ONION.", image: "burger-emi-2.jpg" },
      { name: "CAL Y ARENA:", price: "10,90€", description: "CARNE DE TERNERA 200G,JAMON,QUESO DE CABRA,CONFITURA DE TOMATE Y MEZCLUM.", image: "burger-cal-y-arena.jpg" },
      { name: "AMERICANA:", price: "10,90€", description: "CARNE DE TERNERA 200G,LECHUGA,TOMATE,SALSA TRINCHERA,QUESO CHEDAR,BACON Y CEBOLLA CARAMELIZADA.", image: "burger-americana.jpg" },
      { name: "old sweet liset.", price: "13,90€", description: "carne madurada,queso chedar,salsa de torrezno,con salsa smoke y cruch de nachos.", image: "burger-old-sweet-liset.jpg" },
      { name: "TRINCHERA", price: "10,90€", description: "CARNE DE TERNERA 200G,SALSA TRINCHERA,CREMA DE BERENJENA Y CEBOLLA.Y QUESO DE CABRA.", image: "burger-trinchera.jpg" },
      { name: "JALISCO:", price: "10,90€", description: "SOLO PARA LOS MAS VALIENTES.CON 200G DE CARNE DE TERNERA,CREMA DE QUESO,JALAPEÑOS,CEBOLLA ROJA,SALSA PICA CABRON Y HUEVO FRITO.", image: "burger-jalisco.jpg" },
      { name: "SMOKE:", price: "10.90€", description: "200G DE CARNE DE TERNERA,PEPINILLOS,CEBOLLA ROJA,CHEDAR,BACON Y SALSA AHUMADA.", image: "burger-smoke.jpg" },
      { name: "CHESEBURGER:", price: "7,50€", description: "CARNE Y QUESO IDEAL PARA LOS PEQUES.", image: "burger-cheseburger.jpg" },
      { name: "SRIRACHA:", price: "10,90€", description: "200G DE CARNE DE TERNERA,SALSA SRIRACHA,PEPINILLOS,CHEDAR Y CEBOLLA CRUNCH.", image: "burger-sriracha.jpg" },
      { name: "CARDIACA:", price: "14,90€", description: "DOBLE DE CARNE,CHEDAR,BACON Y SALSA BBQ.", image: "burger-cardiaca.jpg" },
      { name: "LA MADURADA:", price: "13,90€", description: "CARNE MADURADA 200G,QUESO CHEDAR,BACON,PEPINILLO Y CEBOLLA ROJA.(HASTA FIN DE EXISTENCIAS)", image: "burger-la-madurada.jpg" },
      { name: "ONION BBQ.", price: "11,90€", description: "CARNE DE TERNERA 200g,SALSA BBQ,QUESO CHEDAR,BACON Y AROS DE CEBOLLA.", image: "burger-onion-bbq.jpg" }
    ]
  },
  {
    id: "sandwiches",
    title: "Los sandwixx",
    products: [
      { name: "MIXTO DE YORK Y QUESO.", price: "6€", image: "sandwich-mixto.jpg" },
      { name: "GRANJERO:", price: "9.90€", description: "LECHUGA,TOMATE,POLLO,YORK Y QUESO,BACON Y MAHONESA.", image: "sandwich-granjero.jpg" },
      { name: "COSTERO:", price: "9,90€", description: "LECHUGA,TOMATE,CEBOLLA CARAMELIZADA,QUESO BRIE,BACON,HUEVO Y SALSA TRINCHERA.", image: "sandwich-costero.jpg" },
      { name: "SERRANITO:", price: "7€", description: "CON SERRANO,MANCHEGO Y TOMATE NATURAL.", image: "sandwich-serranito.jpg" }
    ]
  },
  {
    id: "carnes",
    title: "Las carnes",
    products: [
      { name: "ENTRECOTTE DE LOMO ALTO.", price: "21€", image: "carne-entrecotte.jpg" },
      { name: "PLUMA DE CERDO IBERICO.", price: "19€", image: "carne-pluma.jpg" },
      { name: "SECRETO DE CERDO CON SALSA PIMIENTA.", price: "14.90€", image: "carne-secreto.jpg" },
      { name: "POLLO A LA BRASA", price: "10.90€", image: "carne-pollo.jpg" },
      { name: "CONEJO A LA BRASA", price: "13.50€", image: "carne-conejo.jpg" },
      { name: "CHULETON DE CARNE MADURADA 45 DIAS", price: "60€/kg", image: "carne-chuleton.jpg" }
    ],
    complement: {
      name: "ACOMPAÑALAS CON NUESTRA SANGRIA DE CAVA",
      price: "25€",
      image: "sangria-cava.jpg"
    }
  },
  {
    id: "birras",
    title: "Las birras",
    featureImageLocal: "Fotos/cerveza.jpeg",
    featureImageAlt: "Tiradores de cerveza en la barra de La Trinchera",
    emptyNote: "La web actual no publica productos ni precios en esta sección."
  },
  {
    id: "vinos",
    title: "Los vinos",
    groups: [
      {
        title: "Ribera del Duero",
        products: [
          { name: "valdehermoso", price: "18€", description: "tinta del pais,9 meses barrica de roble." },
          { name: "traslascuestas", price: "18€", description: "tinta fina,8 meses barrica de roble" },
          { name: "el miron de prado rey", price: "20€", description: "tempranillo,albillo mayor,merlot,10 meses barrica de roble." },
          { name: "valdehermoso crianza", price: "22€", description: "tinta del pais,18 meses barrica de roble." },
          { name: "prado rey crianza", price: "24€", description: "tinta fina,cabernet,merlot,12 meses barrica de roble." },
          { name: "valderiz", price: "28", description: "tinta del pais,22 meses barrica de roble." },
          { name: "adaro", price: "32", description: "tinta fina,12 meses barrica de roble." }
        ]
      },
      {
        title: "Rioja",
        products: [
          { name: "marques de caceres bio", price: "16€", description: "tempranillo,graciano." },
          { name: "excellens cuvé", price: "18€", description: "tempranillo,14 meses barrica de roble." },
          { name: "baigorri", price: "20€", description: "tempranillo,14 meses barrica de roble." }
        ]
      },
      {
        title: "Valencianos",
        products: [
          { name: "bobal en calma", price: "16€", description: "d.o. utiel requena bobal 9 meses en tinajas." },
          { name: "rafa cañizares", price: "18€", description: "d.o. alicante,syrah,10 meses en tinajas." }
        ]
      },
      {
        title: "Vinos blancos",
        products: [
          { name: "tarima mediterraneo", price: "15€", description: "d.o. alicante,moscatel,merseguera." },
          { name: "marques de caceres", price: "16€", description: "d.o. rueda,verdejo." },
          { name: "marques de vizhoja", price: "16€", description: "vino de galicia.albariño,treixadura,loureiro." },
          { name: "baron de ley semi dulce", price: "17€", description: "d.o. rioja.sauvignon blanc" },
          { name: "hacienda hucediño", price: "17€", description: "d.o. valdeorras.godello" }
        ]
      },
      {
        title: "Rosados y cavas",
        products: [
          { name: "exelens rosé", price: "16€", description: "d.o. rioja.tempranillo,garnacha tinta." },
          { name: "cava nº29", price: "18€", description: "macabeo,xarel·lo." }
        ]
      }
    ]
  },
  {
    id: "postres",
    title: "Los postres",
    featureImage: "postre-carta.jpg",
    products: [
      { name: "tarta de pistacho", price: "6€" },
      { name: "tarta de lotus", price: "6€" },
      { name: "tarta de queso con arandanos", price: "6€" },
      { name: "coulan de chocolate con helado.", price: "5€" },
      { name: "tarta de toblerone con helado.", price: "5€", image: "postre-toblerone.jpg" },
      { name: "irish cream.", price: "5€", image: "postre-irish-cream.jpg" }
    ]
  }
];

const categoryLinks = document.querySelector("#category-links");
const menuSections = document.querySelector("#menu-sections");
const initialCategory = menu.find((category) => `#${category.id}` === window.location.hash) || menu[0];

function sentenceCase(text) {
  return text.toLocaleLowerCase("es")
    .replace(/^[\p{L}]/u, (letter) => letter.toLocaleUpperCase("es"))
    .replace(/\bemi\b/gi, "EMI")
    .replace(/\bemmy\b/gi, "EMMY")
    .replace(/\bbbq\b/gi, "BBQ")
    .replace(/\btrinchera\b/gi, "Trinchera")
    .replace(/\btoblerone\b/gi, "Toblerone")
    .replace(/\bd\.o\./gi, "D.O.");
}

function createProduct(product) {
  const article = document.createElement("article");
  article.className = `product-item${product.image ? " has-image" : ""}`;

  if (product.image) {
    const image = document.createElement("img");
    image.className = "product-photo";
    image.src = `images/products/${product.image}`;
    image.alt = sentenceCase(product.name.replace(/[.:]$/, ""));
    image.loading = "lazy";
    image.decoding = "async";
    article.append(image);
  }

  const copy = document.createElement("div");
  copy.className = "product-copy";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = sentenceCase(product.name);
  copy.append(name);

  if (product.description) {
    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = sentenceCase(product.description);
    copy.append(description);
  }

  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = product.price;
  price.setAttribute("aria-label", `Precio: ${product.price}`);

  article.append(copy, price);
  return article;
}

function createProductGrid(products) {
  const grid = document.createElement("div");
  grid.className = "row product-grid";
  products.forEach((product) => {
    const item = createProduct(product);
    item.classList.add("col-12", "col-md-6");
    grid.append(item);
  });
  return grid;
}

function renderCategory(category) {
  const section = document.createElement("section");
  section.className = "menu-section";
  section.id = category.id;
  section.dataset.category = category.id;

  const headingRow = document.createElement("div");
  headingRow.className = "section-heading";
  const heading = document.createElement("h2");
  heading.id = `${category.id}-title`;
  heading.textContent = sentenceCase(category.title);
  section.setAttribute("aria-labelledby", heading.id);
  headingRow.append(heading);
  section.append(headingRow);

  if (category.note) {
    const note = document.createElement("p");
    note.className = "section-note";
    note.textContent = sentenceCase(category.note);
    section.append(note);
  }

  if (category.featureImage || category.featureImageLocal) {
    const figure = document.createElement("figure");
    figure.className = "section-photo";
    const image = document.createElement("img");
    image.src = category.featureImageLocal || `images/products/${category.featureImage}`;
    image.alt = category.featureImageAlt || "Fotografía de postres de la carta de La Trinchera";
    image.loading = "lazy";
    image.decoding = "async";
    figure.append(image);
    section.append(figure);
  }

  if (category.groups) {
    category.groups.forEach((group) => {
      const groupSection = document.createElement("section");
      groupSection.className = "wine-group";
      groupSection.setAttribute("aria-label", group.title);
      const groupHeading = document.createElement("h3");
      groupHeading.textContent = sentenceCase(group.title);
      groupSection.append(groupHeading, createProductGrid(group.products));
      section.append(groupSection);
    });
  } else if (category.products?.length) {
    section.append(createProductGrid(category.products));
  }

  if (category.emptyNote) {
    const emptyNote = document.createElement("p");
    emptyNote.className = "menu-empty";
    emptyNote.textContent = sentenceCase(category.emptyNote);
    section.append(emptyNote);
  }

  if (category.complement) {
    const complement = document.createElement("aside");
    complement.className = "complement";
    complement.setAttribute("aria-label", category.complement.name);
    const image = document.createElement("img");
    image.src = `images/products/${category.complement.image}`;
    image.alt = "Sangría de cava";
    image.loading = "lazy";
    image.decoding = "async";
    const name = document.createElement("p");
    name.textContent = sentenceCase(category.complement.name);
    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = category.complement.price;
    complement.append(image, name, price);
    section.append(complement);
  }

  return section;
}

menu.forEach((category, index) => {
  const link = document.createElement("a");
  link.className = "category-link";
  link.href = `#${category.id}`;
  link.dataset.number = String(index + 1).padStart(2, "0");
  link.textContent = sentenceCase(category.title.replace(/^Las |^Los /i, ""));
  if (category.id === initialCategory.id) {
    link.setAttribute("aria-current", "location");
  }
  categoryLinks.append(link);
  menuSections.append(renderCategory(category));
});

const categoryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    categoryLinks.querySelectorAll(".category-link").forEach((link) => {
      if (link.hash === `#${entry.target.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  });
}, { rootMargin: "-20% 0px -68% 0px" });

menuSections.querySelectorAll(".menu-section").forEach((section) => {
  categoryObserver.observe(section);
});