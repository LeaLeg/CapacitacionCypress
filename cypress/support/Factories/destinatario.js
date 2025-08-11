import { faker } from '@faker-js/faker';

export function crearDestinatario() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(), // before version 9.1.0, use userName()
    zipCode: faker.location.zipCode()
  };
}