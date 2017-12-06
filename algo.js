/*
* Copyright 2017 Carmine
*
* Licensed under the EUPL, Version 1.1 or – as soon they
will be approved by the European Commission - subsequent
versions of the EUPL (the "Licence");
* You may not use this work except in compliance with the
Licence.
* You may obtain a copy of the Licence at:
*
*
https://joinup.ec.europa.eu/software/page/eupl
*
* Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
* See the Licence for the specific language governing
permissions and limitations under the Licence.
*/
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
class Squadra {
    constructor(nome) {
        this.nomesquadra = nome;
        this.punti = 0;
        this.puntiTrad = 0;
        this.golfatti = 0;
        this.golsubiti = 0;
        this.pareggi = 0;
        this.sconfitte = 0;
        this.vittorie = 0;
    }
    aggiungipartita(GFa, GSa) {
        if (GFa > GSa) {
            this.puntiTrad = this.puntiTrad + 3;
            this.vittorie = this.vittorie + 1;
        }
        if (GFa == GSa) {
            this.puntiTrad = this.puntiTrad + 1;
            this.pareggi = this.pareggi + 1;
        }
        if (GFa < GSa) {
            this.sconfitte = this.sconfitte + 1;
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
    }
    getPunti() {
        return this.punti;
    }
    getPuntiTrad() {
        return this.puntiTrad;
    }
    getGolFatti() {
        return this.golfatti;
    }
    getGolSubiti() {
        return this.golsubiti;
    }
    azzeraPunti() {
        this.punti = 0;
    }
    azzeraPuntiTrad() {
        this.puntiTrad = 0;
    }
    resettaGol() {
        this.golfatti = 0;
        this.golsubiti = 0;
    }
    resettaPartiteVintePersePareggiate() {
        this.vittorie = 0;
        this.pareggi = 0;
        this.sconfitte = 0;
    }
}
;
var Inter = new Squadra("Inter");
var Juve = new Squadra("juventus");
var Napoli = new Squadra("Napoli");
var Milan = new Squadra("Milan");
var Lazio = new Squadra("Lazio");
var Benevento = new Squadra("Benevento");
var Sampdoria = new Squadra("Sampdoria");
var Roma = new Squadra("Roma");
var Hellas = new Squadra("Verona");
var Torino = new Squadra("Torino");
var Atalanta = new Squadra("Atalanta");
var Spal = new Squadra("Spal");
var Crotone = new Squadra("Crotone");
var Chievo = new Squadra("Chievo");
var Fiorentina = new Squadra("Fiorentina");
var Udinese = new Squadra("Udinese");
var Genoa = new Squadra("Genoa");
var Sassuolo = new Squadra("Sassuolo");
var Cagliari = new Squadra("Cagliari");
var Bologna = new Squadra("Bologna");
var arr = new Array(20);
var sortedarr = new Array(20);
var squadre = new Array(20);
let partite = function (giornata) {
    let squadra;
    // Equivalent to for(squadra of squadre) loop
    for (let i = 0; i < squadre.length; i++) {
        squadra = squadre[i];
        squadra.azzeraPunti();
        squadra.azzeraPuntiTrad();
        squadra.resettaGol();
        squadra.resettaPartiteVintePersePareggiate();
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
    for (let i = 0; i < squadre.length; i++) {
        let corrente = squadre[i];
        if (corrente.nomesquadra == squadra1)
            corrente.aggiungipartita(goal1, goal2);
        if (corrente.nomesquadra == squadra2)
            corrente.aggiungipartita(goal2, goal1);
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
    partite(giornata);
    console.log("Generando array...");
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
    sortedarr = Array.from(arr);
    sortedarr.sort((a, b) => b - a);
    console.log("dentro lista");
    var squadredauscire = [];
    for (let i = 0; i < arr.length; i++) {
        for (let c = 0; c < arr.length; c++) {
            if (arr[c] == sortedarr[i]) {
                squadredauscire.push({
                    "Squadra": squadre[c].nomesquadra,
                    "Alternativa": squadre[c].punti.toFixed(1),
                    "Tradizionale": squadre[c].puntiTrad.toFixed(1),
                    "Somma": arr[c].toFixed(1),
                    "Gol Fatti": squadre[c].golfatti,
                    "Gol Subiti": squadre[c].golsubiti,
                    "Vittorie": squadre[c].vittorie,
                    "Pareggi": squadre[c].pareggi,
                    "Sconfitte": squadre[c].sconfitte
                });
            }
        }
    }
    return squadredauscire;
};
