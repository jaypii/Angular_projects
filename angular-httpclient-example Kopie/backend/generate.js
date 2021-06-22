var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 20; i++) {
  database.users.push({
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('(###) ###-####')
  });
}

console.log(JSON.stringify(database));
