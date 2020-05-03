var mongoose=require('mongoose');


before(function(done){
    mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true,useUnifiedTopology: true });

    mongoose.connection.once('open',function(){
        console.log('connected successfully with database');
        done();
    }).on('error',function(error){
        console.log('error occured:',error);
    });
});

beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});