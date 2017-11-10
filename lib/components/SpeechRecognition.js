
import annyang from 'annyang';

class SpeechRecognition {

    constructor() {
        this.transcript = {
            transcriptValue: '',
            isCommandMatch: false,
            isSuccess: false
        };

        this.commands = {};
    }

    setInitValues = () => {
        this.transcript.transcriptValue = '';
        this.transcript.isCommandMatch = false;
        this.transcript.isSuccess = false;
        this.commands = {};
    }

    shortListen = (autoArray) => {
        return new Promise((resolve, reject) => {

            this.setInitValues();

            if (autoArray.length > 0) {
                annyang.removeCommands();
                this.setCommands(autoArray);

                annyang.addCallback('resultMatch', (phrase, match, phraseArray) => {
                    this.commandCallBack(phrase, phraseArray)
                        .then(() => {
                            resolve(this.transcript);
                        })
                        .catch((e) => {
                            reject(e);
                        });
                });
            }

            annyang.addCallback('resultNoMatch', (phrases) => {
                this.noCommandCallBack(phrases)
                    .then(() => {
                        resolve(this.transcript);
                    })
                    .catch((e) => {
                        reject(e);
                    });
            });

            annyang.start({ autoRestart: false, continuous: false });
        });
    };

    setCommands = (autoArray) => {
        for (let i = 0; i < autoArray.length; i++) {
            let command = 'show number ' + (i + 1);
            this.commands[command] = () => {return autoArray[i].id}; // annonymous function to return vehicle id
        }

        annyang.addCommands(this.commands);
    };

    commandCallBack = (phrase, phraseArray) => {
        return new Promise((resolve) => {
            this.transcript.isCommandMatch = true; // set to true so we know a specific command was spoken
            let autoID = '';
            phrase = phrase.toLowerCase();

            try {
                autoID = this.commands[phrase]();
            } catch (e) {
                for (let phraseIndex in phraseArray) {
                    try {
                        autoID = this.commands[phraseIndex]();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }

            if (autoID) {
                this.transcript.transcriptValue = autoID;
                this.transcript.isSuccess = true;
            } else {
                this.transcript.transcriptValue = 'No Match';
            }

            resolve(this.transcript);
        });
    };

    noCommandCallBack = (phrases) => {
        return new Promise((resolve, reject) => {
            try {
                let primaryPhrase = phrases[0];

                if (primaryPhrase.length > 0) {
                    this.transcript.transcriptValue = primaryPhrase;
                    this.transcript.isSuccess = true;
                } else {
                    this.transcript.transcriptValue = 'No match';
                }

                resolve(this.transcript);
            } catch (e) {
                return reject();
            }
        });
    };
}

export default SpeechRecognition;