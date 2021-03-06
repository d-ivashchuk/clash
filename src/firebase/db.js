import { db } from './firebase.js';

export const onceGetClashes = () => db.ref('clashes').once('value');

export const doIncreaseOf = (voteChoice, clashId) =>
  db
    .ref(`clashes/${clashId}/votes/${voteChoice}`)
    .transaction(function(currentCounter) {
      return currentCounter + 1;
    });

export const doDecreaseOf = (voteChoice, clashId) =>
  db
    .ref(`clashes/${clashId}/votes/${voteChoice}`)
    .transaction(function(currentCounter) {
      return currentCounter - 1;
    });

export const doCreateClash = (name_first, name_second) => {
  db
    .ref(`clashes`)
    .push()
    .set({
      names: { first: name_first, second: name_second },
      votes: { draw: 42, first: 84, second: 21, total: 147 }
    });
};
