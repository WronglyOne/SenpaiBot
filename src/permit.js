let jids = [ "wronglyone_jpu@talk.kik.com",
            "zhorbex_zzg@talk.kik.com","verite_0fw@talk.kik.com" 
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
