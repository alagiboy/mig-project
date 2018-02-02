var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://migdbadmin:playboy@ds161890.mlab.com:61890/madeingambia',['companies']);

//get all companies
router.get('/companies', function(req, res, next){
    db.companies.find(function(err, companies ){
    	if(err){
    		res.send(err);
    	}
    	res.json(companies);

    })
});

//get single companies
router.get('/company/:id', function(req, res, next){
    db.companies.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
    	if(err){
    		res.send(err);
    	}
    	res.json(company);

    })
});

//save company
router.post('/company', function(res,req, next){
	var company = req.body;

	if(!company.name){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}else{
		db.companies.save(company, function(err, company){
			if(err){
				res.send(err);
			}
			res.json(company);

		});
	}

});

//delete a company
router.delete('/company/:id', function(req, res, next){
    db.companies.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
    	if(err){
    		res.send(err);
    	}
    	res.json(company);

    })
});

//update a company for approval
router.put('/company/:id', function(req, res, next){
	var company = req.body;
	var updCompany = {};

	if(company.isApproved){
		updCompany.isApproved = company.isApproved;
	};

	if(!updCompany){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	}else{

    db.companies.update({_id: mongojs.ObjectId(req.params.id)}, updCompany, {}, function(err, company){
    	if(err){
    		res.send(err);
    	}
    	res.json(company);

    })

	}

});

module.exports = router;