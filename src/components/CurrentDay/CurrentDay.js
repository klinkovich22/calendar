import React, { useContext } from 'react';
import DayContextObj from '../../contexts/DayContext';
import {format} from 'date-fns'
import styles from './CurrentDay.module.css';

export default function CurrentDay(props) {
  
  const {currentDay} = useContext(DayContextObj)

  return (
    <section className={styles['current-day']}>
      <div className={styles['container-day']}>
        <p className={styles['week-day']}>{format(currentDay, 'EEEE')}</p>
        <p className={styles['num-month']}>{format(currentDay, 'd')}</p>
      </div>
    </section>
  )
}
