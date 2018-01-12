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
  nomesquadra: string;
  alias: string[];
  punti: number;
  puntiTrad: number;
  golfatti: number;
  golsubiti: number;
  sconfitte: number;
  pareggi: number;
  vittorie: number;
  somma: number;
  constructor(nome: string) {
    this.nomesquadra = nome;
    this.punti = 0;
    this.puntiTrad = 0;
    this.golfatti = 0;
    this.golsubiti = 0;
    this.pareggi = 0;
    this.sconfitte = 0;
    this.vittorie = 0;
    this.somma = 0;
    this.alias = [];
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
    if (GFa < GSa)  {
      this.sconfitte = this.sconfitte + 1;
    }

    if (parseInt(GSa) == 0) {
      this.punti = this.punti + quotaCS;
    } else {
      if (parseInt(GSa) == 1) {
        this.punti = this.punti + 1.5;
      }
    }
    if (parseInt(GFa) > 0) {
      this.punti = this.punti + 1.3;
    }
    this.golfatti = this.golfatti+GFa;
    this.golsubiti = this.golsubiti+GSa;
  }
  getPunti(): number {
    return this.punti;
  }
  getPuntiTrad(): number {
    return this.puntiTrad;
  }
  getGolFatti(): number {
    return this.golfatti;
  }
  getGolSubiti(): number  {
    return this.golsubiti;
  }
  getVittorie(): number {
    return this.vittorie;
  }
  getPareggi(): number  {
    return this.pareggi;
  }
  getSconfitte(): number  {
    return this.sconfitte;
  }
  azzeraPunti() {
    this.punti=0;
  }
  azzeraPuntiTrad() {
    this.puntiTrad=0;
  }
  resettaGol()  {
    this.golfatti = 0;
    this.golsubiti = 0;
  }
  resettaPartiteVintePersePareggiate()  {
    this.vittorie = 0;
    this.pareggi = 0;
    this.sconfitte = 0;
  }
  calcolaSomma()  {
    this.somma = this.punti + this.puntiTrad;
  }
  getSomma()  {
    return this.somma;
  }
  aggiungiAlias(alias: string[])  {
    if(alias) {
      alias.forEach(al =>  {
        this.alias.push(al);
      })
    }
  }
};

var Inter = new Squadra("Inter");
var Juve = new Squadra("juventus");
Juve.aggiungiAlias([
  "Juventus",
  "Juve",
  "juve"
])
var Napoli = new Squadra("Napoli");
var Milan = new Squadra("Milan");
var Lazio = new Squadra("Lazio");
var Benevento = new Squadra("Benevento");
var Sampdoria = new Squadra("Sampdoria");
var Roma = new Squadra("Roma");
var Hellas = new Squadra("Verona");
Hellas.aggiungiAlias([
  "Hellas",
  "Hellas Verona",
  "HellasVerona"
])
var Torino = new Squadra("Torino");
var Atalanta = new Squadra("Atalanta");
var Spal = new Squadra("Spal");
Spal.aggiungiAlias([
  "Spal"
])
var Crotone = new Squadra("Crotone");
var Chievo = new Squadra("Chievo");
Chievo.aggiungiAlias([
  "ChievoVerona",
  "Chievo Verona"
])
var Fiorentina = new Squadra("Fiorentina");
var Udinese = new Squadra("Udinese");
var Genoa = new Squadra("Genoa");
var Sassuolo = new Squadra("Sassuolo");
var Cagliari = new Squadra("Cagliari");
var Bologna = new Squadra("Bologna");

var squadre: Squadra[] = new Array(20);

let partite = function(giornata): void {
  squadre.forEach(function(squadra) {
    squadra.azzeraPunti();
    squadra.azzeraPuntiTrad();
    squadra.resettaGol();
    squadra.resettaPartiteVintePersePareggiate();
  })
  console.log("PARTITEEEEEEEEEEEEEEEEEEEEEE");
  let soloquarta: boolean = false;
  let finoquinta: boolean = false;
  let finosesta: boolean = false;
  let finosettima: boolean = false;
  let finottava: boolean = false;
  let finonona: boolean = false;
  let finodecima: boolean = false;
  let finoundicesima: boolean = false;
  let finododicesima: boolean = false;
  let finotredicesima: boolean = false;
  let finoquattordicesima: boolean = false;
  let finoquindicesima: boolean = false;
  let finosedicesima: boolean = false;
  if(giornata<5)
    soloquarta=true;
  if(giornata<6)
    finoquinta=true;
  if(giornata<7)
    finosesta=true;
  if(giornata<8)
    finosettima=true;
  if(giornata<9)
    finottava=true;
  if(giornata<10)
    finonona=true;
  if(giornata<11)
    finodecima=true;
  if(giornata<12)
    finoundicesima=true;
  if(giornata<13)
    finododicesima=true;
  if(giornata<14)
    finotredicesima=true;
  if(giornata<15)
    finoquattordicesima=true;
  if(giornata<16)
    finoquindicesima=true;
  if(giornata<17)
    finosedicesima=true;
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
    if(!finosesta)
    {
      partita("Udinese","Sampdoria",4,0);
      partita("Genoa","Bologna",0,1);
      partita("Napoli","Cagliari",3,0);
      partita("Benevento","Inter",1,2);
      partita("Lazio","Sassuolo",6,1);
      partita("Torino","Verona",2,2);
      partita("Chievo","Fiorentina",2,1);
      partita("Spal","Crotone",1,1);
      partita("Milan","Roma",0,2);
      partita("Atalanta","juventus",2,2);
    }
    if(!finosettima)
    {
      partita("juventus","Lazio",1,2);
      partita("Roma","Napoli",0,1);
      partita("Fiorentina","Udinese",2,1);
      partita("Bologna","Spal",2,1);
      partita("Cagliari","Genoa",2,3);
      partita("Crotone","Torino",2,2);
      partita("Sampdoria", "Atalanta",3,1);
      partita("Sassuolo","Chievo",0,0);
      partita("Inter","Milan",3,2);
      partita("Verona", "Benevento",1,0);
      if(!finottava)
      {
        partita("Sampdoria","Crotone",5,0);
        partita("Napoli","Inter",0,0);
        partita("Chievo","Verona",3,2);
        partita("Atalanta","Bologna",1,0);
        partita("Benevento", "Fiorentina",0,3);
        partita("Milan","Genoa",0,0);
        partita("Spal","Sassuolo",0,1);
        partita("Torino","Roma",0,1);
        partita("Udinese","juventus",2,6);
        partita("Lazio","Cagliari",3,0);
        if(!finonona)
        {
          partita("Inter","Sampdoria",3,2);
          partita("Atalanta","Verona",3,0);
          partita("Bologna","Lazio",1,2);
          partita("Cagliari", "Benevento",2,1);
          partita("Chievo","Milan",1,4);
          partita("Fiorentina","Torino",3,0);
          partita("Genoa","Napoli",2,3);
          partita("juventus","Spal",4,1);
          partita("Roma","Crotone",1,0);
          partita("Sassuolo","Udinese",0,1);
          if(!finodecima) {
            partita("Milan","juventus",0,2);
            partita("Roma","Bologna",1,0);
            partita("Benevento","Lazio",1,5);
            partita("Sampdoria","Chievo",4,1);
            partita("Spal","Genoa",1,0);
            partita("Napoli","Sassuolo",3,1);
            partita("Udinese","Atalanta",2,1);
            partita("Crotone", "Fiorentina",2,1);
            partita("Torino","Cagliari",2,1);
            partita("Verona","Inter",1,2);
          }
          if(!finoundicesima) {
            partita("Bologna","Crotone",2,3);
            partita("Genoa","Sampdoria",0,2);
            partita("Inter","Torino",1,1);
            partita("Fiorentina","Roma",2,4);
            partita("Cagliari","Verona",2,1);
            partita("juventus","Benevento",2,1);
            partita("Chievo","Napoli",0,0);
            partita("Atalanta","Spal",1,1);
            partita("Sassuolo","Milan",0,2);
          }
          if(!finododicesima) {
            partita("Roma","Lazio",2,1);
            partita("Napoli","Milan",2,1);
            partita("Crotone","Genoa",0,1);
            partita("Benevento","Sassuolo",1,2);
            partita("Sampdoria","juventus",3,2);
            partita("Spal","Fiorentina",1,1);
            partita("Torino","Chievo",1,1);
            partita("Udinese","Cagliari",0,1);
            partita("Inter","Atalanta",2,0);
            partita("Verona","Bologna",2,3);
          }
          if(!finotredicesima)  {
            partita("Bologna","Sampdoria",3,0);
            partita("Sassuolo","Verona",0,2);
            partita("Chievo","Spal",2,1);
            partita("Cagliari","Inter",1,3);
            partita("Milan","Torino",0,0);
            partita("Genoa","Roma",1,1);
            partita("Udinese","Napoli",0,1);
            partita("Lazio","Fiorentina",1,1);
            partita("juventus","Crotone",3,0);
            partita("Atalanta","Benevento",1,0);
          }
          if(!finoquattordicesima)  {
            partita("Roma","Spal",3,1);
            partita("Napoli","juventus",0,1)
            partita("Torino","Atalanta",1,1);
            partita("Benevento","Milan",2,2);
            partita("Bologna","Cagliari",1,1);
            partita("Fiorentina","Sassuolo",3,0);
            partita("Inter","Chievo",5,0);
            partita("Sampdoria","Lazio",1,2);
            partita("Crotone","Udinese",0,3);
            partita("Verona","Genoa",0,1);
          }
        }
      }
    }
  }
  console.log("PARTITEEEEEEEEEEEEEEEEEEEEEEFATTE");
  squadre.forEach(function(squadra) {
    squadra.calcolaSomma();
  })

}

function partita(squadra1, squadra2, goal1, goal2) {
  console.log("partita");
  console.log(squadra1);
  squadre.forEach(function(corrente)  {
    if(corrente.nomesquadra == squadra1)  corrente.aggiungipartita(goal1,goal2);
    if(corrente.nomesquadra == squadra2)  corrente.aggiungipartita(goal2,goal1);
  })
}

module.exports = function(giornata) {
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
  squadre.sort((a, b) => b.somma - a.somma)
  console.log("dentro lista");
  return squadre.map((squadra) => {
    return {
      "Squadra": squadra.nomesquadra,
      "Alternativa": squadra.getPunti().toFixed(1),
      "Tradizionale": squadra.getPuntiTrad().toFixed(0),
      "Somma": squadra.getSomma().toFixed(1),
      "Gol Fatti": squadra.getGolFatti(),
      "Gol Subiti": squadra.getGolSubiti(),
      "Vittorie": squadra.getVittorie(),
      "Pareggi": squadra.getPareggi(),
      "Sconfitte": squadra.getSconfitte()
    }
  })
}
