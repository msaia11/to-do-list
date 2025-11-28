import React from 'react'
import styles from './App.module.css';
import {WeeklyView} from './components/WeeklyView/WeeklyView';
import {Overview} from './components/Overview/Overview';

function App() {
  
  return (
    <div className={styles.App}>
      <Overview />
      <br />
      <WeeklyView />
    </div>
  )
}

export default App
