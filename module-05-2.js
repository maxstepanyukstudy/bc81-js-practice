// ================ data begin

const orders = [
  {
    id: 'ORD-001',
    userId: 1,
    status: 'delivered',
    total: 62000,
    items: 1,
    createdAt: '2024-01-05',
    paymentMethod: 'card',
    isPaid: true,
    discount: 0,
    city: 'Kyiv',
    deliveryDays: 2,
  },
  {
    id: 'ORD-002',
    userId: 3,
    status: 'pending',
    total: 12500,
    items: 2,
    createdAt: '2024-01-18',
    paymentMethod: 'cod',
    isPaid: false,
    discount: 500,
    city: 'Lviv',
    deliveryDays: null,
  },
  {
    id: 'ORD-003',
    userId: 2,
    status: 'cancelled',
    total: 31000,
    items: 1,
    createdAt: '2024-01-22',
    paymentMethod: 'card',
    isPaid: false,
    discount: 1550,
    city: 'Kharkiv',
    deliveryDays: null,
  },
  {
    id: 'ORD-004',
    userId: 4,
    status: 'delivered',
    total: 45500,
    items: 3,
    createdAt: '2024-02-01',
    paymentMethod: 'card',
    isPaid: true,
    discount: 0,
    city: 'Kyiv',
    deliveryDays: 1,
  },
  {
    id: 'ORD-005',
    userId: 1,
    status: 'shipped',
    total: 3500,
    items: 1,
    createdAt: '2024-02-10',
    paymentMethod: 'wallet',
    isPaid: true,
    discount: 700,
    city: 'Kyiv',
    deliveryDays: null,
  },
  {
    id: 'ORD-006',
    userId: 5,
    status: 'delivered',
    total: 93000,
    items: 2,
    createdAt: '2024-02-14',
    paymentMethod: 'card',
    isPaid: true,
    discount: 2000,
    city: 'Odesa',
    deliveryDays: 3,
  },
  {
    id: 'ORD-007',
    userId: 2,
    status: 'pending',
    total: 7200,
    items: 1,
    createdAt: '2024-02-20',
    paymentMethod: 'cod',
    isPaid: false,
    discount: 0,
    city: 'Dnipro',
    deliveryDays: null,
  },
];

const users = [
  {
    id: 1,
    name: 'Олексій Коваль',
    age: 28,
    email: 'alex@example.com',
    role: 'admin',
    isActive: true,
    salary: 85000,
    department: 'Engineering',
    joinedAt: '2021-03-15',
    country: 'Ukraine',
  },
  {
    id: 2,
    name: 'Марія Петренко',
    age: 34,
    email: 'maria@example.com',
    role: 'manager',
    isActive: true,
    salary: 72000,
    department: 'Product',
    joinedAt: '2019-07-01',
    country: 'Ukraine',
  },
  {
    id: 3,
    name: 'Іван Сидоренко',
    age: 22,
    email: 'ivan@example.com',
    role: 'developer',
    isActive: false,
    salary: 45000,
    department: 'Engineering',
    joinedAt: '2023-01-10',
    country: 'Poland',
  },
  {
    id: 4,
    name: 'Анна Бойко',
    age: 29,
    email: 'anna@example.com',
    role: 'developer',
    isActive: true,
    salary: 61000,
    department: 'Engineering',
    joinedAt: '2022-05-20',
    country: 'Ukraine',
  },
  {
    id: 5,
    name: 'Дмитро Мельник',
    age: 45,
    email: 'dmytro@example.com',
    role: 'manager',
    isActive: true,
    salary: 95000,
    department: 'Sales',
    joinedAt: '2017-11-03',
    country: 'Germany',
  },
  {
    id: 6,
    name: 'Олена Гриценко',
    age: 31,
    email: 'olena@example.com',
    role: 'designer',
    isActive: false,
    salary: 55000,
    department: 'Design',
    joinedAt: '2020-09-14',
    country: 'Ukraine',
  },
  {
    id: 7,
    name: 'Тарас Захаренко',
    age: 26,
    email: 'taras@example.com',
    role: 'developer',
    isActive: true,
    salary: 58000,
    department: 'Engineering',
    joinedAt: '2022-12-01',
    country: 'Ukraine',
  },
];

const products = [
  {
    id: 101,
    name: 'MacBook Pro 14',
    category: 'laptops',
    price: 62000,
    stock: 15,
    rating: 4.8,
    brand: 'Apple',
    isAvailable: true,
    discount: 0,
    tags: ['work', 'premium'],
    weight: 1.6,
  },
  {
    id: 102,
    name: 'Dell XPS 15',
    category: 'laptops',
    price: 48000,
    stock: 0,
    rating: 4.5,
    brand: 'Dell',
    isAvailable: false,
    discount: 10,
    tags: ['work'],
    weight: 1.86,
  },
  {
    id: 103,
    name: 'iPhone 15 Pro',
    category: 'phones',
    price: 42000,
    stock: 30,
    rating: 4.9,
    brand: 'Apple',
    isAvailable: true,
    discount: 0,
    tags: ['mobile', 'premium'],
    weight: 0.187,
  },
  {
    id: 104,
    name: 'Samsung Galaxy S24',
    category: 'phones',
    price: 31000,
    stock: 22,
    rating: 4.6,
    brand: 'Samsung',
    isAvailable: true,
    discount: 5,
    tags: ['mobile'],
    weight: 0.167,
  },
  {
    id: 105,
    name: 'Sony WH-1000XM5',
    category: 'audio',
    price: 12000,
    stock: 50,
    rating: 4.7,
    brand: 'Sony',
    isAvailable: true,
    discount: 15,
    tags: ['audio', 'wireless'],
    weight: 0.25,
  },
  {
    id: 106,
    name: 'iPad Pro 12.9',
    category: 'tablets',
    price: 38000,
    stock: 8,
    rating: 4.7,
    brand: 'Apple',
    isAvailable: true,
    discount: 0,
    tags: ['tablet', 'premium'],
    weight: 0.682,
  },
  {
    id: 107,
    name: 'Logitech MX Master 3',
    category: 'accessories',
    price: 3500,
    stock: 100,
    rating: 4.8,
    brand: 'Logitech',
    isAvailable: true,
    discount: 20,
    tags: ['peripherals'],
    weight: 0.141,
  },
];

const tasks = [
  {
    id: 1,
    title: 'Налаштувати CI/CD pipeline',
    assignee: 'Олексій',
    priority: 'high',
    status: 'in-progress',
    storyPoints: 8,
    sprint: 3,
    tags: ['devops', 'automation'],
    createdAt: '2024-01-10',
    dueDate: '2024-01-25',
    isBlocked: false,
  },
  {
    id: 2,
    title: 'Написати unit-тести для auth модуля',
    assignee: 'Анна',
    priority: 'high',
    status: 'todo',
    storyPoints: 5,
    sprint: 3,
    tags: ['testing', 'auth'],
    createdAt: '2024-01-12',
    dueDate: '2024-01-28',
    isBlocked: true,
  },
  {
    id: 3,
    title: 'Оновити README документацію',
    assignee: 'Тарас',
    priority: 'low',
    status: 'done',
    storyPoints: 2,
    sprint: 2,
    tags: ['docs'],
    createdAt: '2024-01-05',
    dueDate: '2024-01-15',
    isBlocked: false,
  },
  {
    id: 4,
    title: 'Рефакторинг payment service',
    assignee: 'Іван',
    priority: 'medium',
    status: 'in-progress',
    storyPoints: 13,
    sprint: 3,
    tags: ['backend', 'payments'],
    createdAt: '2024-01-08',
    dueDate: '2024-01-30',
    isBlocked: false,
  },
  {
    id: 5,
    title: 'Додати rate limiting на API',
    assignee: 'Олексій',
    priority: 'high',
    status: 'todo',
    storyPoints: 5,
    sprint: 3,
    tags: ['backend', 'security'],
    createdAt: '2024-01-15',
    dueDate: '2024-01-29',
    isBlocked: false,
  },
  {
    id: 6,
    title: 'Дизайн нового дашборду',
    assignee: 'Олена',
    priority: 'medium',
    status: 'done',
    storyPoints: 8,
    sprint: 2,
    tags: ['design', 'frontend'],
    createdAt: '2024-01-03',
    dueDate: '2024-01-20',
    isBlocked: false,
  },
  {
    id: 7,
    title: 'Міграція бази даних на PostgreSQL',
    assignee: 'Анна',
    priority: 'high',
    status: 'todo',
    storyPoints: 21,
    sprint: 4,
    tags: ['database', 'backend'],
    createdAt: '2024-01-18',
    dueDate: '2024-02-15',
    isBlocked: true,
  },
];

// ================ data end, exercises begin

// Є масив об'єктів users. Використай .map(), щоб отримати масив лише з іменами (name) усіх користувачів.
const userNames = users.map(user => user.name);
console.log(userNames);

// ================

// Знайди продукт з name 'iPhone 15 Pro'. Так зазвичай шукають товар після кліку юзера.

// function getProductByName(products, productName) {
const getProductByName = (products, productName) => {
  return products.find(product => product.name === productName);
};

const productName = 'iPhone 15 Pro';
console.log(getProductByName(products, productName));

// ================

// Отримайте масив усіх email-адрес користувачів. Результат: ['alex@example.com', ...].

// function getUserEmails (users) {
const getUserEmails = users => {
  return users.map(user => user.email);
};
console.log(getUserEmails(users));

// Використай .reduce() для підрахунку замовлень зі статусом 'delivered'.

// function getOrdersByStatus (orders, status) {
//   const callback = (totalCount, order) => {
//     return order.status === status ? totalCount + 1 : totalCount;
//   };
//   const orderAmount = orders.reduce(callback, 0);
//   return orderAmount;
// };

const getOrdersByStatus = (orders, status) =>
  orders.reduce(
    (totalCount, order) =>
      order.status === status ? totalCount + 1 : totalCount,
    0
  );

console.log(getOrdersByStatus(orders, 'delivered'));
console.log(getOrdersByStatus(orders, 'pending'));

// ================

// Створити масив рядків у форматі: 'MacBook Pro 14 — 62000 грн'.

// const getProductsNameAndPrice = products => {
//   return products.map(product => {
//     return `${product.name} — ${product.price} грн`;
//   });
// };

const getProductsNameAndPrice = products =>
  products.map(product => `${product.name} — ${product.price} грн`);

console.log(getProductsNameAndPrice(products));

// ================

// Створіть масив об'єктів з полями:
// id, displayName (name), initials (перші літери імені та прізвища), isActive, role.
// Типова трансформація для UI-компонента.

const transformUsers = users => {
  return users.map(user => {
    const initials = user.name
      .split(' ')
      .map(word => word[0])
      .join('.')
      .concat('.');
    return {
      id: user.id,
      isActive: user.isActive,
      role: user.role,
      displayName: user.name,
      initials,
    };
  });
};
console.log(transformUsers(users));

// ================

// Отримайте замовлення з 'Kyiv' та createdAt що починається на '2024-02' (лютий 2024).

// const getOrdersByCityAndCreatedDate = (orders, city, createdAt) => {
//   return orders.filter(order => {
//     return order.city === city && order.createdAt.startsWith(createdAt);
//   });
// };

const getOrdersByCityAndCreatedDate = (orders, city, createdAt) =>
  orders.filter(
    order => order.city === city && order.createdAt.startsWith(createdAt)
  );
console.log(getOrdersByCityAndCreatedDate(orders, 'Kyiv', '2024-02'));

// ================
