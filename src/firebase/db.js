import { db } from './firebase.js';

export const onceGetVotes = () => db.ref('clash1').once('value');

export const doIncreaseOf = voteChoice =>
  db.ref(`clash1/votes/${voteChoice}`).transaction(function(currentCounter) {
    return currentCounter + 1;
  });

export const doDecreaseOf = voteChoice =>
  db.ref(`clash1/votes/${voteChoice}`).transaction(function(currentCounter) {
    return currentCounter - 1;
  });
