'use strict';
const inter = 1;
const juve = 2;
const napoli = 3;
const milan = 4;
const lazio = 5;
const benevento = 0;
const sampdoria = 6;
const roma = 7;
const hellas = 8;
const torino = 9;
const atalanta = 10;
const spal = 11;
const crotone = 12;
const chievo = 13;
const fiorentina = 14;
const udinese = 15;
const genoa = 16;
const sassuolo = 17;
const cagliari = 18;
const bologna = 19;
const quotaCS = 2.5;
const quotaGS = 1.5;
const quotaGF = 1.3;
var Squadra = (function () {
    function Squadra() {
        this.punti = 0;
        this.puntiTrad = 0;
        this.golfatti = 0;
        this.golsubiti = 0;
    }
    Squadra.prototype.aggiungipartita = function (GFa, GSa) {
        if (parseInt(GFa) > parseInt(GSa)) {
            this.puntiTrad = this.puntiTrad + 3;
        }
        if (parseInt(GFa) == parseInt(GSa)) {
            this.puntiTrad = this.puntiTrad + 1;
        }
        if (parseInt(GSa) == 0) {
            this.punti = this.punti + quotaCS;
        }
        else {
            if (parseInt(GSa) == 1) {
                this.punti = this.punti + 1.5;
            }
        }
        if (parseInt(GFa) > 0) {
            this.punti = this.punti + 1.3;
        }
        this.golfatti = this.golfatti + GFa;
        this.golsubiti = this.golsubiti + GSa;
    };
    Squadra.prototype.getPunti = function () {
        return this.punti;
    };
    Squadra.prototype.getPuntiTrad = function () {
        return this.puntiTrad;
    };
    Squadra.prototype.getGolFatti = function () {
        return this.golfatti;
    };
    Squadra.prototype.getGolSubiti = function () {
        return this.golsubiti;
    };
    Squadra.prototype.azzeraPunti = function () {
        this.punti = 0;
    };
    Squadra.prototype.azzeraPuntiTrad = function () {
        this.puntiTrad = 0;
    };
    Squadra.prototype.resettaGol = function () {
        this.golfatti = 0;
        this.golsubiti = 0;
    };
    return Squadra;
})();
;
var Inter = new Squadra();
var Juve = new Squadra();
var Napoli = new Squadra();
var Milan = new Squadra();
var Lazio = new Squadra();
var Benevento = new Squadra();
var Sampdoria = new Squadra();
var Roma = new Squadra();
var Hellas = new Squadra();
var Torino = new Squadra();
var Atalanta = new Squadra();
var Spal = new Squadra();
var Crotone = new Squadra();
var Chievo = new Squadra();
var Fiorentina = new Squadra();
var Udinese = new Squadra();
var Genoa = new Squadra();
var Sassuolo = new Squadra();
var Cagliari = new Squadra();
var Bologna = new Squadra();
var arr = new Array(20);
var arralt = new Array(20);
var arrtrad = new Array(20);
var sortedarr = new Array(20);
var squadre = new Array(20);
var nomisquadre = new Array(20);
var arrfatti = new Array(20);
var arrsubiti = new Array(20);
let partite = function (giornata) {
    let squadra;
    for (let i = 0; i < squadre.length; i++) {
        squadra = squadre[i];
        squadra.azzeraPunti();
        squadra.azzeraPuntiTrad();
        squadra.resettaGol();
    }
    console.log("PARTITEEEEEEEEEEEEEEEEEEEEEE");
    let soloquarta = 0;
    let finoquinta = 0;
    let finosesta = 0;
    let finosettima = 0;
    let finottava = 0;
    let finonona = 0;
    let finodecima = 0;
    if (giornata < 5)
        soloquarta = 1;
    if (giornata < 6)
        finoquinta = 1;
    if (giornata < 7)
        finosesta = 1;
    if (giornata < 8)
        finosettima = 1;
    if (giornata < 9)
        finottava = 1;
    if (giornata < 10)
        finonona = 1;
    if (giornata < 11)
        finodecima = 1;
    partita("juventus", "Cagliari", 3, 0);
    partita("Verona", "Napoli", 1, 3);
    partita("Atalanta", "Roma", 0, 1);
    partita("Bologna", "Torino", 1, 1);
    partita("Crotone", "Milan", 0, 3);
    partita("Inter", "Fiorentina", 3, 0);
    partita("Lazio", "Spal", 0, 0);
    partita("Sampdoria", "Benevento", 2, 1);
    partita("Sassuolo", "Genoa", 0, 0);
    partita("Udinese", "Chievo", 1, 2);
    partita("Benevento", "Bologna", 0, 1);
    partita("Genoa", "juventus", 2, 4);
    partita("Roma", "Inter", 1, 3);
    partita("Torino", "Sassuolo", 3, 0);
    partita("Milan", "Cagliari", 2, 1);
    partita("Napoli", "Atalanta", 3, 1);
    partita("Crotone", "Verona", 0, 0);
    partita("Spal", "Udinese", 3, 2);
    partita("Chievo", "Lazio", 1, 2);
    partita("Fiorentina", "Sampdoria", 1, 2);
    partita("juventus", "Chievo", 3, 0);
    partita("Inter", "Spal", 2, 0);
    partita("Verona", "Fiorentina", 0, 5);
    partita("Udinese", "Genoa", 1, 0);
    partita("Atalanta", "Sassuolo", 2, 1);
    partita("Cagliari", "Crotone", 1, 0);
    partita("Lazio", "Milan", 4, 1);
    partita("Benevento", "Torino", 0, 1);
    partita("Bologna", "Napoli", 0, 3);
    partita("Crotone", "Inter", 0, 2);
    partita("Fiorentina", "Bologna", 2, 1);
    partita("Roma", "Verona", 3, 0);
    partita("Sassuolo", "juventus", 1, 3);
    partita("Milan", "Udinese", 2, 1);
    partita("Napoli", "Benevento", 6, 0);
    partita("Spal", "Cagliari", 0, 2);
    partita("Torino", "Sampdoria", 2, 2);
    partita("Chievo", "Atalanta", 1, 1);
    partita("Genoa", "Lazio", 2, 3);
    if (!soloquarta) {
        partita("Bologna", "Inter", 1, 1);
        partita("Benevento", "Roma", 0, 4);
        partita("Atalanta", "Crotone", 5, 1);
        partita("Cagliari", "Sassuolo", 0, 1);
        partita("Genoa", "Chievo", 1, 1);
        partita("juventus", "Fiorentina", 1, 0);
        partita("Lazio", "Napoli", 1, 4);
        partita("Milan", "Spal", 2, 0);
        partita("Udinese", "Torino", 2, 3);
        partita("Verona", "Sampdoria", 0, 0);
        if (!finoquinta) {
            partita("Roma", "Udinese", 3, 1);
            partita("Spal", "Napoli", 2, 3);
            partita("juventus", "Torino", 4, 0);
            partita("Sampdoria", "Milan", 2, 0);
            partita("Cagliari", "Chievo", 0, 2);
            partita("Crotone", "Benevento", 2, 0);
            partita("Verona", "Lazio", 0, 3);
            partita("Inter", "Genoa", 1, 0);
            partita("Sassuolo", "Bologna", 0, 1);
            partita("Fiorentina", "Atalanta", 1, 1);
        }
        if (!finosesta) {
            partita("Udinese", "Sampdoria", 4, 0);
            partita("Genoa", "Bologna", 0, 1);
            partita("Napoli", "Cagliari", 3, 0);
            partita("Benevento", "Inter", 1, 2);
            partita("Lazio", "Sassuolo", 6, 1);
            partita("Torino", "Verona", 2, 2);
            partita("Chievo", "Fiorentina", 2, 1);
            partita("Spal", "Crotone", 1, 1);
            partita("Milan", "Roma", 0, 2);
            partita("Atalanta", "juventus", 2, 2);
        }
        if (!finosettima) {
            partita("juventus", "Lazio", 1, 2);
            partita("Roma", "Napoli", 0, 1);
            partita("Fiorentina", "Udinese", 2, 1);
            partita("Bologna", "Spal", 2, 1);
            partita("Cagliari", "Genoa", 2, 3);
            partita("Crotone", "Torino", 2, 2);
            partita("Sampdoria", "Atalanta", 3, 1);
            partita("Sassuolo", "Chievo", 0, 0);
            partita("Inter", "Milan", 3, 2);
            partita("Verona", "Benevento", 1, 0);
            if (!finottava) {
                partita("Sampdoria", "Crotone", 5, 0);
                partita("Napoli", "Inter", 0, 0);
                partita("Chievo", "Verona", 3, 2);
                partita("Atalanta", "Bologna", 1, 0);
                partita("Benevento", "Fiorentina", 0, 3);
                partita("Milan", "Genoa", 0, 0);
                partita("Spal", "Sassuolo", 0, 1);
                partita("Torino", "Roma", 0, 1);
                partita("Udinese", "juventus", 2, 6);
                partita("Lazio", "Cagliari", 3, 0);
                if (!finonona) {
                    partita("Inter", "Sampdoria", 3, 2);
                    partita("Atalanta", "Verona", 3, 0);
                    partita("Bologna", "Lazio", 1, 2);
                    partita("Cagliari", "Benevento", 2, 1);
                    partita("Chievo", "Milan", 1, 4);
                    partita("Fiorentina", "Torino", 3, 0);
                    partita("Genoa", "Napoli", 2, 3);
                    partita("juventus", "Spal", 4, 1);
                    partita("Roma", "Crotone", 1, 0);
                    partita("Sassuolo", "Udinese", 0, 1);
                    if (!finodecima) {
                        partita("Milan", "juventus", 0, 2);
                        partita("Roma", "Bologna", 1, 0);
                        partita("Benevento", "Lazio", 1, 5);
                        partita("Sampdoria", "Chievo", 4, 1);
                        partita("Spal", "Genoa", 1, 0);
                        partita("Napoli", "Sassuolo", 3, 1);
                        partita("Udinese", "Atalanta", 2, 1);
                        partita("Crotone", "Fiorentina", 2, 1);
                        partita("Torino", "Cagliari", 2, 1);
                        partita("Verona", "Inter", 1, 2);
                    }
                }
            }
        }
    }
    console.log("PARTITEEEEEEEEEEEEEEEEEEEEEEFATTE");
};
function partita(squadra1, squadra2, goal1, goal2) {
    console.log("partita");
    console.log(squadra1);
    if (squadra1 == "Inter") {
        Inter.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Napoli") {
        Napoli.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "juventus" || squadra1 == "juve") {
        Juve.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Lazio") {
        Lazio.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Milan") {
        Milan.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Torino") {
        Torino.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Sampdoria") {
        Sampdoria.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Roma") {
        Roma.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Fiorentina") {
        Fiorentina.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Cagliari") {
        Cagliari.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Atalanta") {
        Atalanta.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "ChievoVerona" || squadra1 == "Chievo" || squadra1 == "Chievoverona") {
        Chievo.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Bologna") {
        Bologna.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Spal") {
        Spal.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Udinese") {
        Udinese.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Genoa") {
        Genoa.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Sassuolo") {
        Sassuolo.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Crotone") {
        Crotone.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Hellas Verona" || squadra1 == "Hellas" || squadra1 == "Verona") {
        Hellas.aggiungipartita(goal1, goal2);
    }
    if (squadra1 == "Benevento") {
        Benevento.aggiungipartita(goal1, goal2);
    }
    if (squadra2 == "Inter") {
        Inter.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Napoli") {
        Napoli.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "juventus" || squadra2 == "juve") {
        Juve.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Lazio") {
        Lazio.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Milan") {
        Milan.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Torino") {
        Torino.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Sampdoria") {
        Sampdoria.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Roma") {
        Roma.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Fiorentina") {
        Fiorentina.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Cagliari") {
        Cagliari.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Atalanta") {
        Atalanta.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "ChievoVerona" || squadra2 == "Chievo" || squadra2 == "Chievoverona") {
        Chievo.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Bologna") {
        Bologna.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Spal") {
        Spal.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Udinese") {
        Udinese.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Genoa") {
        Genoa.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Sassuolo") {
        Sassuolo.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Crotone") {
        Crotone.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Hellas Verona" || squadra2 == "Hellas" || squadra2 == "Verona") {
        Hellas.aggiungipartita(goal2, goal1);
    }
    if (squadra2 == "Benevento") {
        Benevento.aggiungipartita(goal2, goal1);
    }
}
/*let tipoclassifica = () => {
  let Alt = document.getElementById("alt").checked;
  let Trad = document.getElementById("trad").checked;
  let Somma = document.getElementById("somma").checked;
  if (Alt) return "Alt";
  if (Trad) return "Trad";
  if (Somma) return "Somma";
};*/
let failista = function () {
    console.log("dentro lista");
    var squadredauscire = new Array();
    var squadra = {};
    for (let i = 0; i < arr.length; i++) {
        for (let c = 0; c < arr.length; c++) {
            if (arr[c] == sortedarr[i]) {
                squadredauscire.squadra.pushs({
                    "nome": nomisquadre[c],
                    "punti": arr[c]
                });
            }
        }
    }
    return squadredauscire;
};
module.exports = function (giornata) {
    squadre[inter] = Inter;
    squadre[juve] = Juve;
    squadre[milan] = Milan;
    squadre[sampdoria] = Sampdoria;
    squadre[torino] = Torino;
    squadre[roma] = Roma;
    squadre[benevento] = Benevento;
    squadre[hellas] = Hellas;
    squadre[atalanta] = Atalanta;
    squadre[spal] = Spal;
    squadre[crotone] = Crotone;
    squadre[chievo] = Chievo;
    squadre[fiorentina] = Fiorentina;
    squadre[napoli] = Napoli;
    squadre[bologna] = Bologna;
    squadre[cagliari] = Cagliari;
    squadre[genoa] = Genoa;
    squadre[sassuolo] = Sassuolo;
    squadre[lazio] = Lazio;
    squadre[udinese] = Udinese;
    nomisquadre[inter] = "Inter";
    nomisquadre[juve] = "Juve";
    nomisquadre[milan] = "Milan";
    nomisquadre[sampdoria] = "Sampdoria";
    nomisquadre[torino] = "Torino";
    nomisquadre[roma] = "Roma";
    nomisquadre[benevento] = "Benevento";
    nomisquadre[hellas] = "Hellas";
    nomisquadre[atalanta] = "Atalanta";
    nomisquadre[spal] = "Spal";
    nomisquadre[crotone] = "Crotone";
    nomisquadre[chievo] = "Chievo";
    nomisquadre[fiorentina] = "Fiorentina";
    nomisquadre[napoli] = "Napoli";
    nomisquadre[bologna] = "Bologna";
    nomisquadre[cagliari] = "Cagliari";
    nomisquadre[genoa] = "Genoa";
    nomisquadre[sassuolo] = "Sassuolo";
    nomisquadre[lazio] = "Lazio";
    nomisquadre[udinese] = "Udinese";
    partite(giornata);
    console.log("Generando array...");
    console.log("Alternativa");
    arralt[inter] = Inter.getPunti();
    arralt[juve] = Juve.getPunti();
    arralt[milan] = Milan.getPunti();
    arralt[sampdoria] = Sampdoria.getPunti();
    arralt[torino] = Torino.getPunti();
    arralt[roma] = Roma.getPunti();
    arralt[benevento] = Benevento.getPunti();
    arralt[hellas] = Hellas.getPunti();
    arralt[atalanta] = Atalanta.getPunti();
    arralt[spal] = Spal.getPunti();
    arralt[crotone] = Crotone.getPunti();
    arralt[chievo] = Chievo.getPunti();
    arralt[fiorentina] = Fiorentina.getPunti();
    arralt[napoli] = Napoli.getPunti();
    arralt[bologna] = Bologna.getPunti();
    arralt[cagliari] = Cagliari.getPunti();
    arralt[genoa] = Genoa.getPunti();
    arralt[sassuolo] = Sassuolo.getPunti();
    arralt[lazio] = Lazio.getPunti();
    arralt[udinese] = Udinese.getPunti();
    console.log("Tradizionale");
    arrtrad[inter] = Inter.getPuntiTrad();
    arrtrad[juve] = Juve.getPuntiTrad();
    arrtrad[milan] = Milan.getPuntiTrad();
    arrtrad[sampdoria] = Sampdoria.getPuntiTrad();
    arrtrad[torino] = Torino.getPuntiTrad();
    arrtrad[roma] = Roma.getPuntiTrad();
    arrtrad[benevento] = Benevento.getPuntiTrad();
    arrtrad[hellas] = Hellas.getPuntiTrad();
    arrtrad[atalanta] = Atalanta.getPuntiTrad();
    arrtrad[spal] = Spal.getPuntiTrad();
    arrtrad[crotone] = Crotone.getPuntiTrad();
    arrtrad[chievo] = Chievo.getPuntiTrad();
    arrtrad[fiorentina] = Fiorentina.getPuntiTrad();
    arrtrad[napoli] = Napoli.getPuntiTrad();
    arrtrad[bologna] = Bologna.getPuntiTrad();
    arrtrad[cagliari] = Cagliari.getPuntiTrad();
    arrtrad[genoa] = Genoa.getPuntiTrad();
    arrtrad[sassuolo] = Sassuolo.getPuntiTrad();
    arrtrad[lazio] = Lazio.getPuntiTrad();
    arrtrad[udinese] = Udinese.getPuntiTrad();
    console.log("Somma");
    arr[inter] = Inter.getPunti() + Inter.getPuntiTrad();
    arr[juve] = Juve.getPunti() + Juve.getPuntiTrad();
    arr[milan] = Milan.getPunti() + Milan.getPuntiTrad();
    arr[sampdoria] = Sampdoria.getPunti() + Sampdoria.getPuntiTrad();
    arr[torino] = Torino.getPunti() + Torino.getPuntiTrad();
    arr[roma] = Roma.getPunti() + Roma.getPuntiTrad();
    arr[benevento] = Benevento.getPunti() + Benevento.getPuntiTrad();
    arr[hellas] = Hellas.getPunti() + Hellas.getPuntiTrad();
    arr[atalanta] = Atalanta.getPunti() + Atalanta.getPuntiTrad();
    arr[spal] = Spal.getPunti() + Spal.getPuntiTrad();
    arr[crotone] = Crotone.getPunti() + Crotone.getPuntiTrad();
    arr[chievo] = Chievo.getPunti() + Chievo.getPuntiTrad();
    arr[fiorentina] = Fiorentina.getPunti() + Fiorentina.getPuntiTrad();
    arr[napoli] = Napoli.getPunti() + Napoli.getPuntiTrad();
    arr[bologna] = Bologna.getPunti() + Bologna.getPuntiTrad();
    arr[cagliari] = Cagliari.getPunti() + Cagliari.getPuntiTrad();
    arr[genoa] = Genoa.getPunti() + Genoa.getPuntiTrad();
    arr[sassuolo] = Sassuolo.getPunti() + Sassuolo.getPuntiTrad();
    arr[lazio] = Lazio.getPunti() + Lazio.getPuntiTrad();
    arr[udinese] = Udinese.getPunti() + Udinese.getPuntiTrad();
    arrfatti[inter] = Inter.getGolFatti();
    arrfatti[juve] = Juve.getGolFatti();
    arrfatti[milan] = Milan.getGolFatti();
    arrfatti[sampdoria] = Sampdoria.getGolFatti();
    arrfatti[torino] = Torino.getGolFatti();
    arrfatti[roma] = Roma.getGolFatti();
    arrfatti[benevento] = Benevento.getGolFatti();
    arrfatti[hellas] = Hellas.getGolFatti();
    arrfatti[atalanta] = Atalanta.getGolFatti();
    arrfatti[spal] = Spal.getGolFatti();
    arrfatti[crotone] = Crotone.getGolFatti();
    arrfatti[chievo] = Chievo.getGolFatti();
    arrfatti[fiorentina] = Fiorentina.getGolFatti();
    arrfatti[napoli] = Napoli.getGolFatti();
    arrfatti[bologna] = Bologna.getGolFatti();
    arrfatti[cagliari] = Cagliari.getGolFatti();
    arrfatti[genoa] = Genoa.getGolFatti();
    arrfatti[sassuolo] = Sassuolo.getGolFatti();
    arrfatti[lazio] = Lazio.getGolFatti();
    arrfatti[udinese] = Udinese.getGolFatti();
    arrsubiti[inter] = Inter.getGolSubiti();
    arrsubiti[juve] = Juve.getGolSubiti();
    arrsubiti[milan] = Milan.getGolSubiti();
    arrsubiti[sampdoria] = Sampdoria.getGolSubiti();
    arrsubiti[torino] = Torino.getGolSubiti();
    arrsubiti[roma] = Roma.getGolSubiti();
    arrsubiti[benevento] = Benevento.getGolSubiti();
    arrsubiti[hellas] = Hellas.getGolSubiti();
    arrsubiti[atalanta] = Atalanta.getGolSubiti();
    arrsubiti[spal] = Spal.getGolSubiti();
    arrsubiti[crotone] = Crotone.getGolSubiti();
    arrsubiti[chievo] = Chievo.getGolSubiti();
    arrsubiti[fiorentina] = Fiorentina.getGolSubiti();
    arrsubiti[napoli] = Napoli.getGolSubiti();
    arrsubiti[bologna] = Bologna.getGolSubiti();
    arrsubiti[cagliari] = Cagliari.getGolSubiti();
    arrsubiti[genoa] = Genoa.getGolSubiti();
    arrsubiti[sassuolo] = Sassuolo.getGolSubiti();
    arrsubiti[lazio] = Lazio.getGolSubiti();
    arrsubiti[udinese] = Udinese.getGolSubiti();
    sortedarr = Array.from(arr);
    sortedarr.sort(function (a, b) { return b - a; });
    console.log("dentro lista");
    var squadredauscire = [];
    for (let i = 0; i < arr.length; i++) {
        for (let c = 0; c < arr.length; c++) {
            if (arr[c] == sortedarr[i]) {
                squadredauscire.push({
                    "Squadra": nomisquadre[c],
                    "Alternativa": arralt[c].toFixed(1),
                    "Tradizionale": arrtrad[c].toFixed(1),
                    "Somma": arr[c].toFixed(1),
                    "Gol Fatti": arrfatti[c],
                    "Gol Subiti": arrsubiti[c]
                });
            }
        }
    }
    return squadredauscire;
};
