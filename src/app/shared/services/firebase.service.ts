import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { UtilService } from './util.service';
// import { getDownloadURL, getStorage, ref, uploadBytes, } from 'firebase/storage';
// import { initializeApp, getApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  path = "";

  firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  constructor(
    public storage: StorageService,
    public util: UtilService,
  ) { }

  // async initialize() {
  //   try {
  //     initializeApp(this.firebaseConfig);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // getDb() {
  //   var app = getApp();
  //   return getFirestore(app);
  // }

  // async upload(file: any) {
  //   return new Promise(async (resolve, reject) => {
  //     const name = new Date().getTime().toString() + file.name;
  //     const storage = getStorage();
  //     const storageRef = ref(storage, name);
  //     const metadata = {
  //       contentType: file.type,
  //     };
  //     uploadBytes(storageRef, file, metadata)
  //       .then(async (res:any) => {
  //         var obj: any = {
  //           file: {
  //             mimetype: file.type,
  //             originalname: file.name,
  //             fileName: name,
  //             size: file.size,
  //           },
  //         };
  //         obj.url = await getDownloadURL(res.ref);
  //         resolve(obj);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });
  // }

}
