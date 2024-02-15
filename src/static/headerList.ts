type link = {
  name: string;
  path: string;
  id?: string;
};

const headerLinks: link[] = [
  {
    name: "Пицца",
    path: '/',
    id: "menu-pizza",
  },
  {
    name: "Паста",
    path: '/',
    id: "menu-pasta",
  },
  {
    name: "Супы",
    path: '/',
    id: "menu-soups",
  },
  {
    name: "Салаты",
    path: '/',
    id: "menu-salads",
  },
  {
    name: "Напитки",
    path: '/',
    id: "menu-drinks",
  },
  {
    name: "Десерты",
    path: '/',
    id: "menu-desserts",
  },
  {
    name: "Бакалея",
    path: '/',
    id: "menu-groceries",
  },
  {
    name: "Антипасти",
    path: '/',
    id: "menu-antipasti",
  },
  {
    name: "Комбо",
    path: '/',
    id: "menu-combo",
  },
  {
    name: "Акции",
    path: "/actions",
  },
  {
    name: "Контакты",
    path: "/contact",
  },
];

export default headerLinks;
