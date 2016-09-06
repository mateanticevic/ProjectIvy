function formatBigNumber(number, round = 0){

    var format = {};

    var thousand = Math.pow(10,3);
    var million = Math.pow(10,6);
    var billion = Math.pow(10,9);

    if(number > billion){
        format.number = parseInt((number / billion));
        format.unit = "B";
    }
    else if(number > million){
        format.number = parseFloat((number / million)).toFixed(round);
        format.unit = "M";
    }
    else if(number > thousand){
        format.number = parseInt((number / thousand));
        format.unit = "k";
    }

    return format;
};

function formatDateString(dateString){

    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];

    var date = new Date(dateString);

    return date.getDate() + ' ' +  monthNames[date.getMonth()] + ' ' + date.getFullYear();
};

function formatDateForQuery(dateString){

    var date = new Date(dateString);

    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
};

function faIcon(icon){
    return 'fa ' + icon;
};

var defaults = defaults || {};

defaults.expense = function(){
    return {};
};

function expenseToBinding(expense){
    return {
        amount: expense.amount,
        comment: expense.comment,
        currencyValueId: expense.currency.valueId,
        date: expense.date,
        expenseTypeValueId: expense.expenseType.valueId,
        valueId: expense.valueId,
        vendorValueId: expense.vendor ? expense.vendor.valueId : null
    };
};