

import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

export const sendPush = async (token: string, message: string) => {
  await admin.messaging().send({
    notification: {
      title: "Notification",
      body: message,
    },
    token,
  });

  console.log("Push sent");
};