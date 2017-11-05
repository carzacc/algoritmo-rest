# REST API calcolo algoritmo [![Build Status](https://travis-ci.org/carzacc/algoritmo-rest.svg?branch=master)](https://travis-ci.org/carzacc/algoritmo-rest)
Potete usare l'API all'indirizzo http://algorest.carzacc.info usando richieste GET
L'output è un oggetto JSON come questo.
```json
[
    {
        "nome": "Napoli",
        "puntisomma": "62.5",
        "puntialt": "31.5",
        "puntitrad": "31.0"
    },
    {
        "nome": "Inter",
        "puntisomma": "60.5",
        "puntialt": "31.5",
        "puntitrad": "29.0"
    },
    {
        "nome": "Juve",
        "puntisomma": "57.8",
        "puntialt": "29.8",
        "puntitrad": "28.0"
    },
    {
        "nome": "Lazio",
        "puntisomma": "57.5",
        "puntialt": "29.5",
        "puntitrad": "28.0"
    },
    {
        "nome": "Roma",
        "puntisomma": "56.2",
        "puntialt": "32.2",
        "puntitrad": "24.0"
    },
    {
        "nome": "Sampdoria",
        "puntisomma": "43.9",
        "puntialt": "23.9",
        "puntitrad": "20.0"
    },
    {
        "nome": "Fiorentina",
        "puntisomma": "41.2",
        "puntialt": "25.2",
        "puntitrad": "16.0"
    },
    {
        "nome": "Atalanta",
        "puntisomma": "40.5",
        "puntialt": "25.5",
        "puntitrad": "15.0"
    },
    {
        "nome": "Bologna",
        "puntisomma": "39.4",
        "puntialt": "25.4",
        "puntitrad": "14.0"
    },
    {
        "nome": "Chievo",
        "puntisomma": "37.7",
        "puntialt": "22.7",
        "puntitrad": "15.0"
    },
    {
        "nome": "Milan",
        "puntisomma": "37.1",
        "puntialt": "21.1",
        "puntitrad": "16.0"
    },
    {
        "nome": "Torino",
        "puntisomma": "35.9",
        "puntialt": "19.9",
        "puntitrad": "16.0"
    },
    {
        "nome": "Udinese",
        "puntisomma": "35.3",
        "puntialt": "23.3",
        "puntitrad": "12.0"
    },
    {
        "nome": "Sassuolo",
        "puntisomma": "28.8",
        "puntialt": "20.8",
        "puntitrad": "8.0"
    },
    {
        "nome": "Crotone",
        "puntisomma": "26.5",
        "puntialt": "17.5",
        "puntitrad": "9.0"
    },
    {
        "nome": "Genoa",
        "puntisomma": "25.0",
        "puntialt": "19.0",
        "puntitrad": "6.0"
    },
    {
        "nome": "Cagliari",
        "puntisomma": "24.8",
        "puntialt": "15.8",
        "puntitrad": "9.0"
    },
    {
        "nome": "Spal",
        "puntisomma": "23.8",
        "puntialt": "15.8",
        "puntitrad": "8.0"
    },
    {
        "nome": "Hellas",
        "puntisomma": "20.0",
        "puntialt": "14.0",
        "puntitrad": "6.0"
    },
    {
        "nome": "Benevento",
        "puntisomma": "9.7",
        "puntialt": "9.7",
        "puntitrad": "0.0"
    }
]
```
Con il parametro g potrete scegliere la giornata di riferimento dei punti.
Ad esempio 
`
http://algorest.carzacc.info/?g=4
`
dà come output
```json
[
    {
        "nome": "Inter",
        "puntisomma": "26.2",
        "puntialt": "14.2",
        "puntitrad": "12.0"
    },
    {
        "nome": "Napoli",
        "puntisomma": "25.2",
        "puntialt": "13.2",
        "puntitrad": "12.0"
    },
    {
        "nome": "Juve",
        "puntisomma": "23.7",
        "puntialt": "11.7",
        "puntitrad": "12.0"
    },
    {
        "nome": "Torino",
        "puntisomma": "19.7",
        "puntialt": "11.7",
        "puntitrad": "8.0"
    },
    {
        "nome": "Milan",
        "puntisomma": "19.7",
        "puntialt": "10.7",
        "puntitrad": "9.0"
    },
    {
        "nome": "Lazio",
        "puntisomma": "19.4",
        "puntialt": "9.4",
        "puntitrad": "10.0"
    },
    {
        "nome": "Roma",
        "puntisomma": "14.9",
        "puntialt": "8.9",
        "puntitrad": "6.0"
    },
    {
        "nome": "Cagliari",
        "puntisomma": "14.9",
        "puntialt": "8.9",
        "puntitrad": "6.0"
    },
    {
        "nome": "Roma",
        "puntisomma": "14.9",
        "puntialt": "8.9",
        "puntitrad": "6.0"
    },
    {
        "nome": "Cagliari",
        "puntisomma": "14.9",
        "puntialt": "8.9",
        "puntitrad": "6.0"
    },
    {
        "nome": "Sampdoria",
        "puntisomma": "13.9",
        "puntialt": "6.9",
        "puntitrad": "7.0"
    },
    {
        "nome": "Fiorentina",
        "puntisomma": "13.9",
        "puntialt": "7.9",
        "puntitrad": "6.0"
    },
    {
        "nome": "Sampdoria",
        "puntisomma": "13.9",
        "puntialt": "6.9",
        "puntitrad": "7.0"
    },
    {
        "nome": "Fiorentina",
        "puntisomma": "13.9",
        "puntialt": "7.9",
        "puntitrad": "6.0"
    },
    {
        "nome": "Atalanta",
        "puntisomma": "12.4",
        "puntialt": "8.4",
        "puntitrad": "4.0"
    },
    {
        "nome": "Bologna",
        "puntisomma": "11.9",
        "puntialt": "7.9",
        "puntitrad": "4.0"
    },
    {
        "nome": "Chievo",
        "puntisomma": "10.9",
        "puntialt": "6.9",
        "puntitrad": "4.0"
    },
    {
        "nome": "Udinese",
        "puntisomma": "10.7",
        "puntialt": "7.7",
        "puntitrad": "3.0"
    },
    {
        "nome": "Spal",
        "puntisomma": "7.8",
        "puntialt": "3.8",
        "puntitrad": "4.0"
    },
    {
        "nome": "Genoa",
        "puntisomma": "7.6",
        "puntialt": "6.6",
        "puntitrad": "1.0"
    },
    {
        "nome": "Sassuolo",
        "puntisomma": "6.1",
        "puntialt": "5.1",
        "puntitrad": "1.0"
    },
    {
        "nome": "Crotone",
        "puntisomma": "5.0",
        "puntialt": "4.0",
        "puntitrad": "1.0"
    },
    {
        "nome": "Hellas",
        "puntisomma": "4.8",
        "puntialt": "3.8",
        "puntitrad": "1.0"
    },
    {
        "nome": "Benevento",
        "puntisomma": "4.3",
        "puntialt": "4.3",
        "puntitrad": "0.0"
    }
]
```
