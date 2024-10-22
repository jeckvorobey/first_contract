const { Address } = require('ton-core');

// Сырой адрес в формате хэша (256-битный адрес в hex)
const rawAddress = 'a3935861f79daf59a13d6d182e1640210c02f98e3df18fda74b8f5ab141abf18';

// Конвертируем сырой адрес в удобный формат для пользователя
const address = new Address(0, Buffer.from(rawAddress, 'hex'));

// Выводим адрес в формате удобном для TON
console.log(address.toString());