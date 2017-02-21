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
    else{
        format.number = number;
    }

    return format;
}

function formatSeconds(seconds){
    var format = {};

    if(seconds < 3600){
        format.number = parseInt(seconds / 60);
        format.unit = 'm';
    }
    else{
        format.number = Math.round((seconds / 3600) * 10) / 10;
        format.unit = 'h';
    }

    return format;
}

function formatDateString(dateString){

    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];

    var date = new Date(dateString);

    return date.getDate() + ' ' +  monthNames[date.getMonth()] + ' ' + date.getFullYear();
};

function formatDateTimeString(dateTimeString){

    var dateTime = new Date(dateTimeString);

    var dateString = formatDateString(dateTimeString);
    return dateString + " " + dateTime.getHours() + ":" + dateTime.getMinutes();
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

var dateTime = dateTime || {};

dateTime.today = new Date();
dateTime.today.formatted = formatDateForQuery(dateTime.today);

dateTime.tomorrow = new Date(dateTime.today.getFullYear(), dateTime.today.getMonth(), dateTime.today.getDay() + 1);
dateTime.tomorrow.formatted = formatDateForQuery(dateTime.tomorrow);

dateTime.firstDayThisYear = new Date(dateTime.today.getFullYear(), 0, 1);
dateTime.firstDayThisYear.formatted = formatDateForQuery(dateTime.firstDayThisYear);

dateTime.firstDayThisMonth = new Date(dateTime.today.getFullYear(), dateTime.today.getMonth(), 1);
dateTime.firstDayThisMonth.formatted = formatDateForQuery(dateTime.firstDayThisMonth);

dateTime.firstDayThisWeek = new Date(dateTime.today.getFullYear(), dateTime.today.getMonth(), dateTime.today.getDate() - dateTime.today.getDay());
dateTime.firstDayThisWeek.formatted = formatDateForQuery(dateTime.firstDayThisWeek);

dateTime.next = function(day){
    return new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
};

dateTime.previous = function(day){
    return new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);
};