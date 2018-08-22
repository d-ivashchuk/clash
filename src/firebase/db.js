import { db } from './firebase.js';

export const onceGetVotes = () => db.ref('clash1').once('value');
export const onceGetClashes = () => db.ref('clashes').once('value');

export const doIncreaseOf = voteChoice =>
  db.ref(`clash1/votes/${voteChoice}`).transaction(function(currentCounter) {
    return currentCounter + 1;
  });

export const doDecreaseOf = voteChoice =>
  db.ref(`clash1/votes/${voteChoice}`).transaction(function(currentCounter) {
    return currentCounter - 1;
  });

export const doCreateClash = (name_first, name_second) => {
  db.ref(`clashes`)
    .push()
    .set({
      names: { first: name_first, second: name_second },
      votes: { draw: 42, first: 84, second: 21, total: 147 }
    });
};
