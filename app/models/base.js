function base (Model){
    this.model = Model;
}

//create
base.prototype.create = function (doc,callback){
    this.model.create(doc, function (error) {
        if(error) return callback(error);
        return callback(doc);
    });
};


base.prototype.getById = function (id, callback) {
    this.model.findOne({_id:id}, function(error, model){
        if(error) return callback(error,null);
        return callback(null,model);
    });
};


base.prototype.countByQuery = function (query, callback) {
    this.model.count(query, function(error, model){
        if(error) return callback(error,null);
        return callback(null,model);
    });
};


base.prototype.getByQuery = function (query,fileds,opt,callback) {
    this.model.find(query, fileds, opt, function(error,model){
        if(error) return callback(error,null);

        return callback(null,model);
    });
};


base.prototype.getAll = function (callback) {
    this.model.find({}, function(error,model){
        if(error) return callback(error,null);

        return callback(null, model);
    });
};

base.prototype.delete = function (query, callback){
    this.model.remove(query, function(error){
        if(error) return callback(error);

        return callback(null);
    });
};


base.prototype.update = function( conditions, update ,options, callback) {
    this.model.update(conditions, update, options, function (error) {
        if(error) return callback(error);
        return callback(null);
    });
};

module.exports = base;