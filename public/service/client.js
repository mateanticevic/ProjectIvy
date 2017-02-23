var api = api || {};

//api.domain = "http://localhost:4680/";
api.domain = "http://api2.anticevic.net/";

api.token = "";

api.delete = function(callback){
	callback.OnComplete = function () { };
    callback.OnSuccess = function () { };

	var ajax = {
		type: "DELETE",
		dataType: "json",
		cache: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", api.token);
        },
        complete: function (xhr) {
            callback.OnComplete(xhr);
        },
        success: function (data) {
            callback.OnSuccess(data);
        }
    };

	return ajax;
};

api.get = function(callback){
	callback.OnComplete = function () { };
    callback.OnSuccess = function () { };

	var ajax = {
        headers:{
            Accept : "application/json"
        },
		type: "GET",
		dataType: "json",
		cache: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", api.token);
            xhr.setRequestHeader ("Accept", "application/json");
        },
        complete: function (xhr) {
            callback.OnComplete(xhr);
        },
        success: function (data) {
            callback.OnSuccess(data);
        }
    };

	return ajax;
};

api.post = function(callback, noAuth){
	callback.OnComplete = function () { };
    callback.OnSuccess = function () { };
    callback.OnError = function () { };

	var ajax = {
		type: "POST",
		cache: false,
        contentType: "application/json",
        beforeSend: function (xhr) {
            if(noAuth){

            }
            else{
                xhr.setRequestHeader ("Authorization", api.token);
            }
        },
        complete: function (xhr) {
            callback.OnComplete(xhr);
        },
        error: function(xhr, ex){
            callback.OnError(xhr, ex);
        },
        success: function (data) {
            callback.OnSuccess(data);
        }
    };

	return ajax;
};

api.put = function(callback){
	callback.OnComplete = function () { };
    callback.OnSuccess = function () { };

	var ajax = {
		type: "PUT",
		dataType: "json",
		cache: false,
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", api.token);
        },
        complete: function (xhr) {
            callback.OnComplete(xhr);
        },
        success: function (data) {
            callback.OnSuccess(data);
        }
    };

	return ajax;
};

api.postToken = function(username, password){

    var query={
        username: username,
        password: password
    };

    var callback = {};
	var call = api.post(callback, true);
    call.url = api.domain + "token?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getMovieCount = function(from, to){

    var query={
        from: from,
        to: to
    };

    var callback = {};
	var call = api.get(callback);
    call.url = call.url = api.domain + "movie/count?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getMoviesByYear = function(year){

    var callback = {};
	var call = api.get(callback);
    call.url = "https://api.anticevic.net/movie/seen/" + year;

    $.ajax(call);
	return callback;
};

api.getTrackingLast = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = call.url = api.domain + "tracking/last";

    $.ajax(call);
	return callback;
};

api.getTrackings = function(from, to){

    var query={
        from: from,
        to: to
    };

    var callback = {};
	var call = api.get(callback);
    call.url = call.url = api.domain + "tracking?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getTrackingCount = function(from, to){

    var query={
        from: from,
        to: to
    };

    var callback = {};
	var call = api.get(callback);
    call.url = call.url = api.domain + "tracking/count?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getTrackingDistance = function(from, to){

    var query={
        from: from,
        to: to
    };

    var callback = {};
	var call = api.get(callback);
    call.url = call.url = api.domain + "tracking/distance?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getTrackingCountByYear = function(year){

    var callback = {};
	var call = api.get(callback);
    call.url = "https://api.anticevic.net/tracking/" + year + "/count?username=mate";

    $.ajax(call);
	return callback;
};

api.getExpenseTypes = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "expensetype";

    $.ajax(call);
	return callback;
};

api.getVendors = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "vendor";

    $.ajax(call);
	return callback;
};

api.getCurrencies = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "currency";

    $.ajax(call);
	return callback;
};

api.getMovies = function(query){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "movie?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getIncomes = function(query){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "income?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getExpenses = function(query){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "expense?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getExpenseCount = function(from, to){

    var query={
        from: from,
        to: to
    };

    var callback = {};
	var call = api.get(callback);
    call.url = call.url = api.domain + "expense/count?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getExpenseSum = function(from, to){

    var query={
        from: from,
        to: to
    };    

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "expense/sum?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getWebTimeTotal = function(from, to){

    var query={
        from: from,
        to: to
    };    

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "web/time/total?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.putExpense = function(expense){

    var callback = {};
	var call = api.put(callback);
    call.url = api.domain + "expense";
    call.data = JSON.stringify(expense);

    $.ajax(call);
	return callback;
};

api.postExpense = function(expense){

    var callback = {};
	var call = api.post(callback);
    call.url = api.domain + "expense/" + expense.valueId;
    call.data = JSON.stringify(expense);

    $.ajax(call);
	return callback;
};

api.deleteExpense = function(valueId){

    var callback = {};
	var call = api.delete(callback);
    call.url = api.domain + "expense/" + valueId;

    $.ajax(call);
	return callback;
};

api.getMovies = function(query){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "movie?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getProjects = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "project";

    $.ajax(call);
	return callback;
};

api.getTaskTypes = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "task/type";

    $.ajax(call);
	return callback;
};

api.getTaskPriorities = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "task/priority";

    $.ajax(call);
	return callback;
};

api.getTasks = function(status, priority, type){

    var query={
        status: status,
        priority: priority,
        type: type
    };

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "task?" + $.param(query);

    $.ajax(call);
	return callback;
};

api.getUser = function(){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "user";

    $.ajax(call);
	return callback;
};

api.getCarLogLatest = function(carId){

    var callback = {};
	var call = api.get(callback);
    call.url = api.domain + "car/" + carId + "/log/latest";

    $.ajax(call);
	return callback;
};

api.putCarLog = function(carId, carLog){

    var callback = {};
	var call = api.put(callback);
    call.url = api.domain + "car/" + carId + "/log";
    call.data = JSON.stringify(carLog);

    $.ajax(call);
	return callback;
};

api.putTask = function(task){

    var callback = {};
	var call = api.put(callback);
    call.url = api.domain + "project/" + task.projectId + "/task";
    call.data = JSON.stringify(task);

    $.ajax(call);
	return callback;
};