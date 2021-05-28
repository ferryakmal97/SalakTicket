import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//fungsi saat Vote
export const _onVote = async (value, totalVote) => {
  const uid = auth().currentUser.uid;
  if (value.voteList.includes(uid)) {
    const findId = value.voteList.findIndex((finder) => finder == uid);
    value.voteList.splice(findId, 1);
    const unVote = await firestore().collection('Posts').doc(value.id).update({
      voteList: value.voteList,
    });
    return unVote;
  } else {
    const vote = await firestore()
      .collection('Posts')
      .doc(value.id)
      .update({
        voteList: [...value.voteList, uid],
      });
    return vote;
  }
};
//fungsi saat mengambil member
export const _getMember = async (setter) => {
  const uid = auth().currentUser.uid;
  let tempArray = [];
  await firestore()
    .collection('Member')
    .doc(uid)
    .collection('list')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {
        tempArray = [
          ...tempArray,
          {id: documentSnapshot.ref.id, ...documentSnapshot.data()},
        ];
      });
    });
  return tempArray;
};
