/*
*
*
[rewrite_local]
^https:\/\/api\.swiftgram\.app\/v0\/settings$ script-response-body swiftgram_pro.js

[mitm]
hostname = api.swiftgram.app

*
*
*

let obj=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);if(obj['\x67\x6c\x6f\x62\x61\x6c']){obj['\x67\x6c\x6f\x62\x61\x6c']['\x61\x6e\x6e\x6f\x75\x6e\x63\x65\x6d\x65\x6e\x74\x73\x5f\x64\x61\x74\x61']="\x5b\x5d";obj['\x67\x6c\x6f\x62\x61\x6c']['\x70\x61\x79\x6d\x65\x6e\x74\x73\x5f\x65\x6e\x61\x62\x6c\x65\x64']=false;obj['\x67\x6c\x6f\x62\x61\x6c']['\x63\x61\x6e\x5f\x67\x72\x61\x6e\x74']=true}obj['\x75\x73\x65\x72']=obj['\x75\x73\x65\x72']||{};obj['\x75\x73\x65\x72']['\x69\x73\x5f\x70\x72\x6f']=true;obj['\x75\x73\x65\x72']['\x63\x61\x6e\x5f\x62\x75\x79\x5f\x69\x6e\x5f\x62\x65\x74\x61']=true;obj['\x75\x73\x65\x72']['\x63\x61\x6e\x5f\x73\x65\x6e\x64\x5f\x74\x65\x6c\x65\x73\x63\x6f\x70\x65']=true;$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](obj)});