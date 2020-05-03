var mocha =require('mocha');
var assert=require('assert');
var marioChar=require('../models/marioChar');
describe('its demo test',function(){

    it('add record to database',function(done){
        var char=new marioChar({
            name:'mickey',
            age:50
        });
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });
    });
});