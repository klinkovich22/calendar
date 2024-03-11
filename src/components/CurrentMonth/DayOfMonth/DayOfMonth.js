import React, {useContext} from 'react';
import DayContextObj from '../../../contexts/DayContext';
import {format, addDays} from 'date-fns';
import cx from 'classnames';
import styles from './DayOfMonth.module.css'

export default function DayOfMonth(props) {
  
  const {currentDay, setCurrentDay, startOfCurrentMonth} = useContext(DayContextObj);
  
  const cnames = cx({
    [styles['day-of-month']]: true,
    [styles['choisen-day']]: props.el === format(currentDay, 'd')
  });

  const clickHandler = (event) => {
    setCurrentDay(addDays(startOfCurrentMonth, Number(event.target.textContent)-1));
  }
  
  return (
    <td className={cnames} onClick={clickHandler}>{props.el}</td>
  )
}
