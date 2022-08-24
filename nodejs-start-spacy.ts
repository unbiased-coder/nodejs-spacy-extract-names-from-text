const NLP = require("spacy-nlp");
var serverPromise = NLP.server({ port: process.env.IOPORT });
