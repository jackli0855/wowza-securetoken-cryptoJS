Wowza Streaming Engine Secure Token Generator by  [cryptoJS](https://github.com/sytelus/CryptoJS)
--------

### Usage
#### Firstly import js file

```javascript

<script src="path/components/core-min.js" type="text/javascript"></script>

<script src="path/components/sha256-min.js" type="text/javascript"></script>

<script src="path/components/enc-base64-min.js" type="text/javascript"></script>

<script src="path/components/token.js" type="text/javascript"></script>

```

#### Call generate method
```javascript
secureToken.urlGenerate({
    domain: '127.0.0.1',
    urlPrefix: 'vod/_definst_/mp4:', // streaming path is test/myStream
    filePath: 'path/', // Only needed if vod ( path is vod/path/test.mp4 )
    fileName: 'test.mp4', //Only needed if vod ( path is vod/path/test.mp4 )
    sharedSecret: 'uhef87bdub13e87',
    prefixParameter: 'wowzatoken', //default value is wowzatoken
    startTime: '1461322012789', //Date.now()
    endTime: '1461322012789', //Date.now() + 30 * 60 * 1000
});
```
#### Return
```javascript
{
  'http': 'http://127.0.0.1/vod/_definst_/mp4:path/test.mp4/playlist.m3u8?wowzatokenstarttime=1480653131&wowzatokenendtime=1483245131&wowzatokenhash=5n3vTSGnlNKqkLCcfM9hX_KaksPIAykMo9P1SlaR2P8=',
  'rtmp': 'rtmp://127.0.0.1/test/myStream?wowzatokenstart_time=1461322012789&wowzatokenend_time=1461322012789&wowzatokenhash=5ryZOaf8XQHMQt3_BeP_YZ0ftH6pOPKN3yNvRU6T438KqkWqcPBAllpq52OBvWdYmuoWFltVYVLJTErJNbtHyQ=='
}
```
