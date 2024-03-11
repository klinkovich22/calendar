import React, {useContext, useEffect, useState} from 'react';
import DayOfMonth from './DayOfMonth/DayOfMonth';
import DayContextObj from '../../contexts/DayContext';
import { getDate, getWeeksInMonth, format, addMonths, addDays} from 'date-fns'; // getDay - return num of week, 
import getTableDaysOfMonth from '../../utils/getTableDaysOfMonth';
import styles from './CurrentMonth.module.css';


export default function CurrentMonth() {
  
  const {startOfCurrentMonth, setStartOfCurrentMonth, currentDay, setCurrentDay} = useContext(DayContextObj);

  const [tableDays, setTableDays] = useState(getTableDaysOfMonth(startOfCurrentMonth));

  useEffect(()=>
    {
      setCurrentDay(addDays(startOfCurrentMonth, getDate(currentDay)-1));
      setTableDays(getTableDaysOfMonth(startOfCurrentMonth));
    }
  , [startOfCurrentMonth]);

  const arrayDayWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const mapNameDaysOfWeek = () => {
    return arrayDayWeek.map((el)=><td className={styles['day-of-week']}>{el}</td>);
  }

  const mapDaysOfWeek = (numOfCurWeek) => {
    const arrayDaysInWeek = tableDays.slice(7*numOfCurWeek, 7*(numOfCurWeek+1));
    return arrayDaysInWeek.map((el)=>{
      return <DayOfMonth el={el}/>
  });
  }
  
  const mapWeeksOfMonth = () => {
    const numOfWeeks = getWeeksInMonth(startOfCurrentMonth, { weekStartsOn: 0 });
    const arrayWeeks = new Array(numOfWeeks);
    arrayWeeks.fill(0);
    return arrayWeeks.map((el,index)=><tr className={styles['row']}>{mapDaysOfWeek(index)}</tr>);
  }

  const toogleMonth = (event) => {
    if (event.target.name === 'previous'){
      setStartOfCurrentMonth(addMonths(startOfCurrentMonth, -1));
    }
    else{
      setStartOfCurrentMonth(addMonths(startOfCurrentMonth, 1));
    }
  }



  return (
    <section className={styles['current-month']}>
      <div className={styles['container-month']}>
      <button className={styles.pointer} name='previous' onClick={toogleMonth}>◀</button>
        <div className={styles['calendar-place']}>
        <table className={styles.table}>
          <caption className={styles['month-name']}>{format(startOfCurrentMonth, 'MMMM yyyy') }</caption>
          <thead>
            <tr className={styles['row']}>
              {mapNameDaysOfWeek()}
            </tr>
          </thead>
          <tbody>
            {mapWeeksOfMonth()}
          </tbody>
        </table>
        </div>
      <button className={styles.pointer} name='next' onClick={toogleMonth}>▶</button>
      </div>
    </section>
  )
}
