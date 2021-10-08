# WebSocket Chat

A simple chat with rooms.

## Dependences

You need the following software installed and configured in order to use this server:
- [x] NodeJs
- [x] MongoDB

## Install

- [x] Clone or download this repo into your chosen folder.
- [x] In that folder (A.K.A "Main Folder" for now on), go CLI and run:
```
npm install
```
- [x] Go to **config** folder.
- [x] Open a file named **db.config.js** in that subfolder.
- [x] Change XXXX for your appropriate values:
```javascript
dbConfig = {
 HOST: "XXXXXXX",
 PORT: "XXXX",
 USER: "XXXX",
 PASSWORD: "XXXX",
 DB: "XXXX"
};

module.exports=dbConfig;
```
- [x] In main folder, go CLI and run:
```
node server.js
```
- [x] Enjoy!

##ToDo
- [] Unique nicks
- [] Auth
- [] Better UI
- [] Date in messages
- [] Better funcionalities ("is typing", etc...)
