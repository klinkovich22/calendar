import {getWeeksInMonth, getDay, addDays, format, endOfMonth} from 'date-fns';

function getTableDaysOfMonth (startOfCurrentMonth) {
  const numOfWeeks = getWeeksInMonth(startOfCurrentMonth, { weekStartsOn: 0 });
  const arrayDays = new Array(numOfWeeks*7);
  arrayDays.fill('');
  let day = startOfCurrentMonth;
  const fillDays = arrayDays.map((el,index)=>{
    // console.log(el, index, day);
    if(index%7===getDay(day) && day<=endOfMonth(startOfCurrentMonth)){
      const foundDate = format(day, 'd');
      day = addDays(day, 1);
      // console.log(foundDate);
      return foundDate;
    }
    else
    {
      return '';
    }
  });
  console.log(fillDays);
  return fillDays
}


export default getTableDaysOfMonth;