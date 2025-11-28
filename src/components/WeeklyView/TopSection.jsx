import React, { useState } from "react";

export const TopSection = ({ currentWeekStart, setCurrentWeekStart }) => {
  const weekStart = new Date(currentWeekStart);
  const weekEnd = new Date(currentWeekStart);
  weekEnd.setDate(weekEnd.getDate() + 6); // 7-day week

  const formatDate = (date) =>
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getDate();

  const goNextWeek = () => {
    const nextWeek = new Date(currentWeekStart);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeekStart(nextWeek);
  };

  const goPrevWeek = () => {
    const prevWeek = new Date(currentWeekStart);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentWeekStart(prevWeek);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
      <button onClick={goPrevWeek}>{"<"}</button>
      <h2>{`${formatDate(weekStart)} - ${formatDate(weekEnd)}`}</h2>
      <button onClick={goNextWeek}>{">"}</button>
    </div>
  );
};
