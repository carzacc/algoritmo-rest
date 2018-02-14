let chai = require('chai');
chai.use(require('chai-http'));
let index = require('./index');

let should = chai.should();

describe('Algoritmo', function() {
    it('should list all 20 teams when no g is specified and Benevento should be last', function(fatto) {
        chai.request(index)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a("array");
                res.body.length.should.be.eql(20);
                res.body[19].Squadra.should.be.eql("Benevento");
                fatto();
            });
    });
    it('should give the correct result with g=4', function(fatto) {
        chai.request(index)
            .get('/?g=4')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a("array");
                res.body.length.should.be.eql(20);
                res.body[0].Squadra.should.be.eql("Inter");
                res.body[0].Somma.should.be.eql("26.2");
                res.body[1].Squadra.should.be.eql("Napoli");
                res.body[12].Squadra.should.be.eql("Chievo");
                res.body[12].Somma.should.be.eql("10.9")
                res.body[19].Squadra.should.be.eql("Benevento");
                fatto();
            });
    });
});
  

