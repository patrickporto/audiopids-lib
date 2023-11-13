# Audio PIDs Lib

![](https://img.shields.io/badge/Foundry-v11-informational)
[![Donate via Ko-Fi](https://img.shields.io/badge/donate-ko--fi-red.svg?logo=ko-fi)](https://ko-fi.com/darkmoor) [![Latest Version](https://img.shields.io/github/v/tag/patrickporto/audiopids-lib?label=version)](https://github.com/patrickporto/audiopids-lib/releases) [![Download Count](https://img.shields.io/github/downloads/patrickporto/audiopids-lib/latest/audiopids-lib.zip)](https://github.com/patrickporto/audiopids-lib/releases)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Faudiopids-lib&colorB=4aa94a)

## About

This module provides a library to help developers to create modules that use audio PIDs. It provides functions to handle the audio PIDs and a helper function to get the audio PIDs from a sound.

## API

### `listen(stream, callback, maxPids)`

This function is used to listen to the audio PIDs. It receives three parameters:

```js
const mic = await navigator.mediaDevices.getUserMedia({ audio: true })
const cancel = game.modules.get('audiopids-lib').api.listen(mic, (pids) => {
    console.log(pids)
}, 10);
```
