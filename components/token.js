var secureToken = {
    urlGenerate: function urlGenerate(params) {

        if (!params === Object(params)) {
            throw new Error('Params is not object');
            return;
        }

        var obj = {
            domain: params.domain || '',
            urlPrefix: params.urlPrefix || '',
            filePath: params.filePath || '',
            fileName: params.fileName || '',
            sharedSecret: params.sharedSecret || '',
            prefixParameter: params.prefixParameter || 'wowzatoken',
            startTime: params.startTime || '0',
            endTime: params.endTime || '0'
        }

        var file = "";
        if (obj.filePath && obj.fileName) {
            file = obj.filePath + obj.fileName;
        }

        var sha256 = CryptoJS.algo.SHA256.create();
        sha256.update(
                obj.urlPrefix
                + file
                + "?" + obj.sharedSecret
                + "&" + obj.prefixParameter + "endtime=" + obj.endTime
                + "&" + obj.prefixParameter + "starttime=" + obj.startTime
            );
        var hash2 = sha256.finalize();
        var usableHash = hash2.toString(CryptoJS.enc.Base64);
        usableHash = usableHash.replace(/\+/g,'-');
        usableHash = usableHash.replace(/\//g,'_')

        var postFixParam = obj.prefixParameter + "starttime=" + obj.startTime
            + "&" + obj.prefixParameter + "endtime=" + obj.endTime
            + "&" + obj.prefixParameter + "hash=" + usableHash;

        var httpUrl = "http://"
            + obj.domain + "/"
            + obj.urlPrefix
            + file
            + "/playlist.m3u8?"
            + postFixParam;

        var rtmpUrl = "rtmp://"
            + obj.domain + "/"
            + obj.urlPrefix
            + file
            + "?"
            + postFixParam;

        return {
            http: httpUrl,
            rtmp: rtmpUrl
        };
    }
}