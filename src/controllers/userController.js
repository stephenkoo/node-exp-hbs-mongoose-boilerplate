var User = require('../models/user');

// #index 
function getAll(req, res){
	User.find({}, function(err, users){
		if(err) res.json({ message: 'Users not found.' })
		response.render('users/index', { 'users' : users, 'title' : 'User List' });
	});
};

// #new (non-action)
function editUser(req, res){
	res.render('users/new');
};

// #create
function createUser(req, res){
	var user = new User(req.body);
	user.save(function(err){
		if(err) res.json({ message: 'Could not save user because:' + error });
		response.redirect('/users');
	});
};

// #show
function getUser(req, res){
	var id = req.params.id;
	User.findById({ _id: id }, function(err, user) {
		if(err) res.json({ message: 'Could not find user because:' + error });
		res.json({ candy: candy });
	});
};

// #edit (non-action)
function editUser(req, res){
	res.render('users/edit');
};

// #update
function updateUser(req, res){
	var id = req.params.id;
	User.findById({ _id: id }, function(err, user) {
		if(err) res.json({ message: 'Could not find user because:' + error });
		if(req.body.name) user.name = req.body.name;
		if(req.body.email) user.name = req.body.email;

		user.save(function(err){
			if(err) res.json({ message: 'Could not update user because:' + error });
			res.redirect('/users');
		});
	});
};

// #destroy
function removeUser(req, res){
	var id = req.params.id;
	User.remove({ _id: id }, function(err) {
		if(err) res.json({ message: 'Could not delete user because:' + error });
		res.redirect('/users');
	});
};

module.exports = {
	getAll : getAll,
	editUser : editUser,
	createUser : createUser,
	getUser : getUser,
	editUser : editUser,
	updateUser : updateUser,
	removeUser : removeUser
}
