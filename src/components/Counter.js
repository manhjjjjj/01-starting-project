import classes from './Counter.module.css';
import React, { useState } from 'react';
import { useSelector } from "react-redux"
import Button from './Button';
const Counter = (props) => {
  const visible = useSelector((state) => state.visible);
  const counterValue = useSelector((state) => state.counterValue);
  const color = useSelector((state )=>state.coler)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <Button hieuUng={"Tang Counter Value"} />
      <Button hieuUng={"Giam Counter Value"} />
      <Button hieuUng={"reset"} />
      <div className={classes.value} style={{color: color}}>
        {visible ? "-- COUNTER VALUE --" : ""}
      </div>
      <Button hieuUng={"Bat Tat"} />
      <Button hieuUng={"Doi Mau"}/>
    </main>
  );
};

export default Counter;
