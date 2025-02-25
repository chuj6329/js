if ($request && $request.headers) {
    var modifiedHeaders = $request.headers;
    console.log("Original Headers:", modifiedHeaders);
    Object.keys(modifiedHeaders).forEach(key => {
        const lowerKey = key.toLowerCase();
        if (lowerKey !== key) {
            modifiedHeaders[lowerKey] = modifiedHeaders[key];
            delete modifiedHeaders[key];
        }
    });
    console.log("Modified Headers:", modifiedHeaders);
    Object.assign(modifiedHeaders, {
        "mconfig-info": '{"zr4bw6pKFDIZScpo":{"version":2316352,"appver":"9.2.50"},"tPJJnts2H31BZXmp":{"version":3454976,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":598016,"appver":"1.7.50"},[...]
        "user-agent": "neteasemusic/9.2.50 (iPhone; iOS 18.2; Scale/3.00)",
        "cookie": "MUSIC_A_T=1705532211685; MUSIC_R_T=1705532446019; ntes_kaola_ad=1; EVNSM=1.0.0; NMCID=olqxtu.1737802817000.01.3; NMDI=Q1NKTQcBDADmwA0x9%2FFsGQKlW4FoAAAAPgql9ymlZBw2w%2B1RpxX6lIy[...]"
    });
    console.log("Final Headers:", modifiedHeaders);
    $done({ headers: modifiedHeaders });
} else {
    console.error("请求头未定义");
    $done({});
}