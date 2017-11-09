
import annyang from 'annyang';

class SpeechRecognition {

    noCommandShortListen = () => {
        return new Promise((resolve, reject) => {
            annyang.addCallback('resultNoMatch', (phrases) => {
                try {
                    let firstPhrase = phrases[0];
                    return firstPhrase.length > 0 ? resolve(firstPhrase) : reject();
                } catch (e) {
                    return reject();
                }
            });

            annyang.start({ autoRestart: false, continuous: false });
        });
    };
}

export default SpeechRecognition;