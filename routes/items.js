var express =  require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jordan:jordan@ds133311.mlab.com:33311/myitemlist_jordan',['paintings']);

//Get All Items
router.get('/items', function(req, res, next){
	db.paintings.find(function(err, items){
		if(err){
			res.send(err);
		}
		res.json(items);
	})
});

//Get Single Item
router.get('/item/:id', function(req, res, next){
	db.paintings.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, item){
		if(err){
			res.send(err);
		}
		res.json(item);
	})
});

//Save Item
router.post('/item', function(req, res, next){
	var item = req.body;
	if(!item.title || !(item.isDone + '')){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.paintings.save(item, function(err, item){
			if(err){
				res.send(err);
			}
			res.json(item);
		});
	}
});

// Delete Item
router.delete('/item/:id', function(req, res, next){
	db.paintings.remove({_id: mongojs.ObjectId(req.params.id)},function(err, item){
		if(err){
			res.send(err);
		}
		res.json(item);
	})
});

// Update Item

router.put('/item/:id', function(req, res, next){
	var item = req.body;
	var upditem = {};

	if(item.isDone){
		upditem.isDone = item.isDone;

	}

	if(item.title){
		upditem.title = item.title;

	}

	if(!upditem){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	} else {
		db.paintings.update({_id: mongojs.ObjectId(req.params.id)},upditem, {}, function(err, item){
			if(err){
				res.send(err);
			}
			res.json(item);
		})
	}	
});

module.exports = router;