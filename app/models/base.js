function base (model){
    this.model = model;
}

// 新增
base.prototype.create = function (doc,callback){
    this.model.create(doc, function (error, model) {
        if(error) return callback(error, null);
        return callback(null, model);
    });
};

// 查询
base.prototype.getById = function (id, callback) {
    this.model.findOne({_id:id}, function(error, model){
        if(error) return callback(error,null);
        return callback(null,model);
    });
};

// 获取单条数据
base.prototype.getSingle = function (query, callback) {
    this.model.findOne(query, function (error, model) {
        if(error) return callback(error,null);
        return callback(null,model);
    });
}

// 获取总数
base.prototype.countByQuery = function (query, callback) {
    this.model.count(query, function(error, model){
        if(error) return callback(error,null);
        return callback(null,model);
    });
};

// 条件查询
base.prototype.getByQuery = function (query,fileds,opt,callback) {
    this.model.find(query, fileds, opt, function(error,model){
        if(error) return callback(error,null);

        return callback(null,model);
    });
};

// 查询所有
base.prototype.getAll = function (callback) {
    this.model.find({}, function(error,model){
        if(error) return callback(error,null);

        return callback(null, model);
    });
};

// 删除
base.prototype.delete = function (query, callback){
    this.model.remove(query, function(error){
        if(error) return callback(error);

        return callback(null);
    });
};

// 更新
base.prototype.update = function( conditions, update ,options, callback) {
    this.model.update(conditions, update, options, function (error) {
        if(error) return callback(error);
        return callback(null);
    });
};

module.exports = base;