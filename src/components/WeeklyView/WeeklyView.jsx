import React, {useState} from "react";
import { TopSection } from "./TopSection";
import { MiddleSection } from "./MiddleSection";
import { BottomSection } from "./BottomSection";

export const WeeklyView = () => {
  const getStartOfWeek = () => {
    const now = new Date();
    const day = now.getDay();        // 0 = Sunday, 1 = Monday, ...
    const diff = (day === 0 ? -6 : 1) - day; 
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  };

  const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek());

  const [weeklyData, setWeeklyData] = useState(
    Array(7).fill(null).map(() => ({
      Bike: null,
      "Walk/Run": null,
      Gym: false,
      Abs: false,
      Breakfast: false,
      Lunch: false,
      Dinner: false,
      Snacking: false,
      Teethcare: false,
      Words: null,
      Learning: false,
      NPR: false,
      Strethcing: false
    }))
  );

  const taskTargets = {
    Bike: 25,
    "Walk/Run": 4,
    Gym: 4,
    Abs: 2,
    Breakfast: 7,
    Lunch: 6,
    Dinner: 6,
    Snacking: 6,
    Teethcare: 7,
    Words: 15,
    Learning: 2,
    NPR: 5,
    Strethcing: 5
  };

  return (
    <div>
      <TopSection currentWeekStart={currentWeekStart} setCurrentWeekStart={setCurrentWeekStart} />
      <MiddleSection weeklyData={weeklyData} taskTargets={taskTargets} />
      <BottomSection weeklyData={weeklyData} setWeeklyData={setWeeklyData} weekStart={currentWeekStart} />
    </div>
  );
};
