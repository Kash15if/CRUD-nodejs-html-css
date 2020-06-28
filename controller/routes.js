const express = require('express');
const router = express.Router();
var College = require('../models/data1');
var School = require('../models/data2');
var Reg = require('../models/data3');
const app = express();
var bodyParser = require('body-parser')

var reg = Reg.find({});


var path = require('path');



app.use(bodyParser.json());
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
 
var Path = path.join(__dirname, '../');




    
    
//admin section start
     
     // route for admin for for colleges     
     router.get('/eduplanner/admin12c',function(req,res){
        res.sendFile(Path + '/views/adminCol.html');
         });
         

     // route for admin for for schools     
     router.get('/eduplanner/admin12s',function(req,res){
        res.sendFile(Path + '/views/adminSch.html');
    });
    

    //route for sending & saving data  it into database and redirecting same form
router.post('/subcol',urlEncodedParser,function(req,res){
    var college = new College({

        college: req.body.name,
        dept: req.body.dept,
        course: req.body.dept,
        pincode: req.body.pincode,
        fee: req.body.fee,
        rank: req.body.rank
    });
    college.save();
res.redirect('/eduplanner/admin12c')

});





    //route for sending & saving data  it into database and redirecting same form
    router.post('/subsch',urlEncodedParser,function(req,res){
        var school = new School({
    school: req.body.name,
    address: req.body.address ,
    pincode: req.body.pincode,
    fee: req.body.fee,
    rank: req.body.rank,
    website: req.body.website
   });
        school.save();
    res.redirect('/eduplanner/admin12s')
    
    });
    
    

//admin section ends





//user section starts

// route for homepage
router.get('/',function(req,res){
    res.sendFile(Path + '/views/homepage.html');
     });

// route for about us
router.get('/aboutus',function(req,res){
    res.sendFile(Path + '/views/aboutus.html');
});




//search results for school
router.get('/schres',function(req,res){
    var sch = School.find({$and: [{rank: {$lte: req.query.rank}}, {pincode: {$eq: req.query.pincode}} ] });

    sch.exec(function(err,data){
        if (err) throw err;
        res.render('registered',{data: data});
    });  
    });
    



 // route for search  schools  seearch filter form   
 router.get('/schform',function(req,res){
    res.sendFile(Path + '/views/searchSchool.html');
});



     // route for college search form filter   
     router.get('/colform',function(req,res){
        res.sendFile(Path + '/views/searchCollege.html');
    });
    

//college search result

router.get('/colresult',function(req,res){
    res.sendFile(Path + '/views/ResultsCol.ejs');
});



//Schools search result

router.get('/colresult',function(req,res){
    res.sendFile(Path + '/views/ResultsSc.ejs');
});


    
//school college registration
// route for homepage
router.get('/register',function(req,res){
    res.sendFile(Path + '/views/register.html');
     });


  //route for sending & saving data  it into database and redirecting same form
  router.post('/registration',urlEncodedParser,function(req,res){
    var reg = new Reg({
school: req.body.name,
address: req.body.address ,
pincode: req.body.pincode,
fee: req.body.fee,
rank: req.body.rank,
website: req.body.website
});
    reg.save();
res.send("your details will be uploaded soon");

});


// route for my notes which I've submitted before     
router.get('/registered',function(req,res){
    reg.exec(function(err,data){
        if (err) throw err;
        res.render('registered',{data: data});
    });  
    });
    





module.exports = router;