let jids = [
    "fuckdavid___ym7@talk.kik.com" ,
    "thelivingcomputer_ot6@talk.kik.com",
    "n00dles_x7l@talk.kik.com",
    "gardonezarikai_ppn@talk.kik.com",
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