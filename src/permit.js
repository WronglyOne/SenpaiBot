let jids = [
    "whhaattssup_gvc@talk.kik.com" , "roofies_ut8@talk.kik.com",
    // "nanofuxion_tcf@talk.kik.com",
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