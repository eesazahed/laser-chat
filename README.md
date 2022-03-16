# Laser Chat

A chat app made with ReactJS and Google Firebase.

To host your own chat server, first open the terminal and type in `git clone https://github.com/EesaZahed/laser-chat.git` Next, type `cd laser-chat` and `npm i react` in the terminal.

Next, create a Google Firebase web project at https://console.firebase.google.com/, and enable a realtime database, and also add a method for user authentication with an email address and password. Once you create your project, go to your project settings, and copy the `firebaseConfig` object, and paste it in `src/firebase/config.js`.

To finally run it, type in the terminal of your project's directory `npm start`.

Your chat server is online and anyone with your API keys in the `firebaseConfig` object can edit your database. For more information about Firebase security, please read more about this at [https://firebase.google.com/docs/projects/api-keys](https://firebase.google.com/docs/projects/api-keys).

For your database rules, use the following:

```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "allposts": {
      ".read": "auth.uid !== null",
      ".write": "auth.uid !== null"
    }
  }
}
```

![image1](https://user-images.githubusercontent.com/97064249/158486167-e7c845c2-3807-4141-ada4-aefbfcd69757.png)
![image2](https://user-images.githubusercontent.com/97064249/158486163-61898c94-eb2e-4660-b017-3c16713857ba.png)

