import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

import whatsapp_web from "whatsapp-web.js";
const { Client, RemoteAuth, LocalAuth } = whatsapp_web;

import QrCode from "qrcode-terminal";

import dotEnv from "dotenv";
dotEnv.config();

const waClientConfig = {
  authStrategy: new LocalAuth(),
};

const client = new Client(waClientConfig);

client.on("qr", (qr) => {
  QrCode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("client is ready");
});

client.initialize();

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDu3P-ACb6RGcqF5yVARACZwuRA6ywYQxc",
//   authDomain: "whatsapp-bots-c0830.firebaseapp.com",
//   projectId: "whatsapp-bots-c0830",
//   storageBucket: "whatsapp-bots-c0830.appspot.com",
//   messagingSenderId: "907020574739",
//   appId: "1:907020574739:web:bd6204a167ed745fa59fe6",
//   measurementId: "G-NWVLBEXYFJ",
//   databaseURL:
//     "https://whatsapp-bots-c0830-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const database = getDatabase(firebaseApp);
// const dbref = ref(database, "/");

// async function getDeviceSession() {
//   const sessionData = await get(child(dbref, "/"));

//   if (sessionData.exists()) {
//     const client = new Client({
//       authStrategy: new RemoteAuth({
//         store: sessionData,
//         backupSyncIntervalMs: 300000,
//       }),
//     });

//     doAuth(client);
//   } else {

//   }
// }
// getDeviceSession();

// function doAuth(client) {
//   client.on("qr", (qr) => {
//     QrCode.generate(qr, { small: true });
//   });
//   console.log("Initializing device session");

//   client.on("authenticated", (datas) => {
//     console.log("Authenticated,saving session to database");

//     console.log(datas);

//     // set(dbref, datas);
//   });

//   client.on("ready", () => {
//     console.log("client is ready");
//   });

//   client.initialize();
// }
