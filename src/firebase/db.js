import { db } from './firebase.js';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const doCreatePet = (name, age, animal, breed, user) => {
  db
    .ref(`pets/${user}`)
    .push()
    .set({
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate placeat obcaecati id incidunt, error officiis alias ea atque totam maiores ad sunt impedit aut saepe, facilis dolorem illum. Doloremque.',
      info: {
        sex: '-',
        birthDate: 'xx/xx/xxxx',
        color: '-',
        name: name,
        age: age,
        animal: animal,
        breed: breed
      },
      marking: {
        code: '-',
        applicationDate: 'xx/xx/xxxx',
        location: '-'
      },
      vaccinations: ''
    });
};

export const onceGetUsers = () => db.ref('users').once('value');
export const onceGetPets = () => db.ref('pets').once('value');

export const onceGetPet = (user, petId) =>
  db.ref(`pets/${user}/${petId}`).once('value');
export const onceGetInfo = (user, petId) =>
  db.ref(`pets/${user}/${petId}/info`).once('value');
export const onceGetMarking = (user, petId) =>
  db.ref(`pets/${user}/${petId}/marking`).once('value');

export const updateInfo = (user, petId, value) =>
  db.ref(`pets/${user}/${petId}/info`).set({ ...value });
export const updateMarking = (user, petId, value) =>
  db.ref(`pets/${user}/${petId}/marking`).set({ ...value });

export const deletePet = (user, petId) =>
  db.ref(`pets/${user}/${petId}`).remove();
export const deleteVaccination = (user, petId, vaccinationId) =>
  db.ref(`pets/${user}/${petId}/vaccinations/${vaccinationId}`).remove();

export const doAddVaccination = (user, petId, type, date, validTill) =>
  db
    .ref(`pets/${user}/${petId}/vaccinations`)
    .push()
    .set({
      type: type,
      date: date,
      validTill: validTill
    });
