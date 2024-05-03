const birthday = ( date: Date ) => {
    const toDay: Date = new Date();

    const dayYear1: number = date.getFullYear() * 365;
    const dayMonth1: number = date.getMonth() * 30;
    const dayDate1: number = date.getDate();
    const dayFull1: number = dayYear1 + dayMonth1 + dayDate1;

    const dayYear2: number = toDay.getFullYear() * 365;
    const dayMonth2: number = toDay.getMonth() * 30;
    const dayDate2: number = toDay.getDate();
    const dayFull2: number = dayYear2 + dayMonth2 + dayDate2;

    const resta: number = dayFull2 - dayFull1;
    const result: number = Math.floor(resta/365);

    const tuCumpleaños: string = `Tu edad es de ${result}`;

    console.log(tuCumpleaños);
}


birthday(new Date("1998-07-02"));
