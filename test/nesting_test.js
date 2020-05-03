var mocha=require('mocha');
var assert=require('assert');
var mongoose=require('mongoose');
var Author=require('../models/author');


describe('to create sub document',function(){
    beforeEach(function(done){
       mongoose.connection.collections.authors.drop(function(){
           done();
       });
    });
    it('it will create sub document',function(done){
        var sudha=new Author({
            name:'sudha murthey',
            age:48,
            books:[{title:'lifes truths',pages:200}]
        });
        sudha.save().then(function(){
            Author.findOne({name:'sudha murthey'}).then(function(result){
                assert(result.books.length===1);
                done();
            });
        });
    });
    it('it will add sub document',function(done){
        var sudha=new Author({
            name:'sudha murthey',
            age:48,
            books:[{title:'lifes truths',pages:200}]
        });
        sudha.save().then(function(){
            Author.findOne({name:'sudha murthey'}).then(function(result){
                result.books.push({title:'programming in c',pages:500});
                result.save().then(function(){
                    Author.findOne({name:'sudha murthey'}).then(function(result){
                        assert(result.books.length===2);
                        done();
                    });
                });
            });
        });
    });
});