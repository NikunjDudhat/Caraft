import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, reload, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase";


export const LoginApi = (data) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        if(user.user.emailVerified){
          const userRef = doc(db, "users", user.user.uid);

          await updateDoc(userRef, {
            emailVerified: true
          })

          const userRefGet = doc(db, "users", user.user.uid);
          const userSnap = await getDoc(userRefGet);
          resolve({payload: {id: userSnap.id, ...userSnap.data()}})
        } else{
          reject({payload : "Please Verifi Your Email"})
        }
      }).catch((error) => {
        if(error.code.localeCompare('auth/user-not-found') === 0){
          reject({payload: "Please Email Registered"})
        } else if(error.code.localeCompare('auth/wrong-password') === 0){
          reject({payload: "Wrong email or password"})
        }else{
          reject({payload: error})
        }
      })
  })
}



export const SignUpApi = (data) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      sendEmailVerification(user);
                      const uid = user.uid;
                    } else {

                    }
                  });
            })
            .then((emailsVerified) => {
              onAuthStateChanged(auth, async (user) => {
                if (user) {

                  if(user.emailVerified){
                    resolve({payload : "Email Successfully!"});
                  }else{
                    resolve({payload : "Please Verifi Your Email"});
                    await setDoc(doc(db, "users", user.uid), {
                      email: data.email,
                      role: "user",
                      emailVerified: user.emailVerified
                    })
                    .then(() => console.log("user addwd"))
                    .catch((err) => console.log(err.card))
                  }
                } else {
                  reject({payload : "somthing went wronge."});
                }
              });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if(errorCode.localeCompare("auth/email-already-in-use") === 0){
                    reject({payload : "email already registered."});
                }else{
                  reject({payload :errorCode });
                }       
            }); 
    })
}

export const LogoutAPI = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then((user) => {
        resolve({payload: "Logout Successfully!"})
      })
      .catch((error) => {
        reject({payload : error.code});
      })
  })
}

export const GoogleLoginAPI = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      resolve({payload : user})
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      
      reject({payload : errorCode});
    });
  })
}

export const ResetPasswordAPI = (data) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, data.email)
      .then((user) => {
        resolve({payload: "Please check your email"})
      })
      .catch((error) => {
        reject({payload : error.code});
      })
  })
}