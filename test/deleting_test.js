var mocha =require('mocha');
var assert=require('assert');
var marioChar=require('../models/marioChar');

describe('it will delete record',function(){
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
    it('delete record from database',function(done){
        marioChar.findOneAndRemove({name:'mickey'}).then(function(){
            marioChar.findOne({name:'mickey'}).then(function(result){
                assert(result===null);
                done();
            });
        });
    
    });
});
   
