var birthday = function (date) {
    var toDay = new Date();
    var dayYear1 = date.getFullYear() * 365;
    var dayMonth1 = date.getMonth() * 30;
    var dayDate1 = date.getDate();
    var dayFull1 = dayYear1 + dayMonth1 + dayDate1;
    var dayYear2 = toDay.getFullYear() * 365;
    var dayMonth2 = toDay.getMonth() * 30;
    var dayDate2 = toDay.getDate();
    var dayFull2 = dayYear2 + dayMonth2 + dayDate2;
    var resta = dayFull2 - dayFull1;
    var result = Math.floor(resta / 365);
    var tuCumpleaños = "Tu edad es de ".concat(result);
    console.log(tuCumpleaños);
};
birthday(new Date("1998-07-02"));
