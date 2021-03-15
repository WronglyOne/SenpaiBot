let jids = [
    "cookiemodel_a6u@talk.kik.com" ,
    "nanofuxion_tcf@talk.kik.com",
     "n00dles_x7l@talk.kik.com",
  ],
perm = (current) => {
    for (let i = 0; i < jids.length; i++) {
        const jid = jids[i];
        if(current == jid){
            return true;
        }
        
    }
    return false;
}

module.exports = {jids: jids, perm: perm};