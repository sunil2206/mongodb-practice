var mocha =require('mocha');
var assert=require('assert');
var marioChar=require('../models/marioChar');

describe('it will find record',function(){
    var char;
    var char1;
    beforeEach(function(done){
        char=new marioChar({
            name:'mickey',
            age:50
        });
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });
    });
    it('find record from database',function(done){
        var temp1='mickey';
        marioChar.findOne({name:temp1}).then(function(result){
            assert(result.name === 'mickey');
            done();
        });
    });
    it('find record from database by id',function(done){
        
        marioChar.findOne({_id:char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            char1=result;
            done();
        });
    });
});