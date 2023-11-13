import { CANONICAL_NAME, MODULE_NAME } from "./constants.js";

function listen(
    stream,
    callback,
    maxPids = 10,
) {
    const audioContext = new AudioContext();
    const microphone = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 1024;
    audioContext.resume();
    microphone.connect(analyser);

    let animationFrameId = 0

    const update = () => {
        const array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        const arraySum = array.reduce((a, value) => a + value, 0);
        const volume = arraySum / array.length;

        const numberOfPids = Math.round(volume / maxPids);
        callback(numberOfPids);
        animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
}

const api = {
    listen,
}


Hooks.on('init', async () => {
    console.log(`${MODULE_NAME} | Initializing ${MODULE_NAME}`);
    game.modules.get(CANONICAL_NAME).api = api;
});
