let textToSearch = 'Alex walked down the street to find his cat Bob, which is friends with his dog Victor';

(async () => {

    const spacyNLP = require("spacy-nlp");
    const nlp = spacyNLP.nlp;
    const result = await nlp.parse(textToSearch);
    console.log('Looking for names in buffer: ', textToSearch);
    result[0]['parse_list'].forEach((element: any) => {
        if (element.NE == 'PERSON')
            console.log('Found name: ', element.word);
    });
})();
