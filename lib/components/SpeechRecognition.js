
import annyang from 'annyang';

let transcript = {
    transcriptValue: '',
    isCommandMatch: false,
    isSuccess: false
};

let commands = {};

export function ShortListen(autoArray) {
    return new Promise((resolve, reject) => {

        setInitValues();

        if (autoArray.length > 0) {
            annyang.removeCommands();
            setCommands(autoArray);

            annyang.addCallback('resultMatch', (phrase, match, phraseArray) => {
                commandCallBack(phrase, phraseArray)
                    .then(() => {
                        resolve(transcript);
                    })
                    .catch((e) => {
                        reject(e);
                    });
            });
        }

        annyang.addCallback('resultNoMatch', (phrases) => {
            noCommandCallBack(phrases)
                .then(() => {
                    resolve(transcript);
                })
                .catch((e) => {
                    reject(e);
                });
        });

        annyang.start({ autoRestart: false, continuous: false });
    });
}

function setInitValues() {
    transcript.transcriptValue = '';
    transcript.isCommandMatch = false;
    transcript.isSuccess = false;
    commands = {};
}

function setCommands(autoArray) {
    let clearCommand = 'new search';
    commands[clearCommand] = () => {};

    for (let i = 0; i < autoArray.length; i++) {
        let command = 'show number ' + (i + 1);
        commands[command] = () => {return autoArray[i].id;}; // annonymous function to return vehicle id
    }

    annyang.addCommands(commands);
}

function commandCallBack(phrase, phraseArray) {
    return new Promise((resolve) => {

        transcript.isCommandMatch = true; // set to true so we know a specific command was spoken

        if(phrase === 'new search')
        {
            transcript.transcriptValue = phrase;
            transcript.isSuccess = true;
            resolve(transcript);
            return;
        }

        let autoID = '';
        phrase = phrase.toLowerCase();

        try {
            autoID = commands[phrase]();
        } catch (e) {
            for (let phraseIndex in phraseArray) {
                try {
                    autoID = commands[phraseIndex]();
                } catch (e) {
                    console.log(e);
                }
            }
        }

        if (autoID) {
            transcript.transcriptValue = autoID;
            transcript.isSuccess = true;
        } else {
            transcript.transcriptValue = 'No Match';
        }

        resolve(transcript);
    });
}

function noCommandCallBack (phrases) {
    return new Promise((resolve, reject) => {
        try {
            let primaryPhrase = phrases[0];

            if (primaryPhrase.length > 0) {
                transcript.transcriptValue = primaryPhrase;
                transcript.isSuccess = true;
            } else {
                transcript.transcriptValue = 'No match';
            }

            resolve(transcript);
        } catch (e) {
            return reject();
        }
    });
}