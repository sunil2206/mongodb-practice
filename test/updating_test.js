var mocha =require('mocha');
var assert=require('assert');
var marioChar=require('../models/marioChar');

describe('it will update record',function(){
    var char;
    
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
    it('updates the record in database',function(done){
        marioChar.findOneAndUpdate({name:'mickey'},{name:'jerry'}).then(function(){
            marioChar.findOne({_id:char._id}).then(function(result){
                assert(result.name==='jerry');
                done();
            });
        });
    });
    it('Increments the Age by 1',function(done){
        marioChar.updateMany({},{ $inc:{age:1}}).then(function(){
            marioChar.findOne({name:'mickey'}).then(function(result){
               assert(result.age===51);
               done();
            });
        });
    });
});