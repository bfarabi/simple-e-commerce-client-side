import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const handleSignIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((res) => {
      const { displayName, email, photoURl } = res.user;
      const signedInUser = {
        isSignedIn: true,
        photo: photoURl,
        name: displayName,
        email: email,
        success: true,
      };
      return signedInUser;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const email = error.email;
    });
};
export const handleSignOut = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      const signOutUser = {
        isSignedIn: false,
        photo: "",
        name: "",
        email: "",
        success: false,
      };
      return signOutUser;
    })
    .catch((error) => {});
};

//creating area

// export const createWithEmailAndPassword = (name, email, password) => {
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, name, email, password)
//   .then(res => {
//     const newUserInfo = res.user;
//     newUserInfo.error = "";
//     newUserInfo.success = true;
//     updateUserName(name);
//     return newUserInfo;
//   })
//   .catch((error) => {
//     const newUserInfo = {};
//     newUserInfo.error = "Email already used";
//     newUserInfo.success = false;
//     return newUserInfo;
//   });
// };

// export const signInUserWithEmailAndPassword = (email, password) => {
//   const auth = getAuth();
//  return signInWithEmailAndPassword(auth, email, password)
//   .then((res) => {
//     const newUserInfo = res.user;
//     newUserInfo.error = "";
//     newUserInfo.success = true;
//     return newUserInfo;

//   })
//   .catch((error) => {
//     const newUserInfo = {};
//     newUserInfo.error = "Email already used";
//     newUserInfo.success = false;
//     return newUserInfo;
//   });
// };
// export const updateUserName = (name) => {
//   const auth = getAuth();
//   updateProfile(auth.currentUser, {
//     displayName: name,
//   })
//     .then(() => {
//       console.log("name update successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
