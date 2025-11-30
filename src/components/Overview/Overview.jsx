import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../../Database";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const Overview = () => {
  const [goals, setGoals] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);

  const goalNames = [
    "Bike", "Walk/Run",
    "Gym", "Abs",
    "Breakfast", "Lunch",
    "Dinner", "Snacking",
    "Stretching", "Teethcare",
    "BodyFat", "Weight",
    "Words", "Learning",
    "NPR", "Books"
  ];

  const numericGoals = ["Bike", "Walk/Run", "BodyFat", "Weight", "Words"];

  // ---------- Helper: week number since Dec 1st ----------
  const getWeekNumber = (date) => {
    const start = new Date("2025-12-01");
    start.setHours(0, 0, 0, 0);
    const diffMs = date - start;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return Math.floor(diffDays / 7) + 1; // first week = 1
  };

  // ---------- Fetch goal values ----------
  useEffect(() => {
    const fetchGoals = async () => {
      const ref = doc(db, "users", "Matt");
      const snap = await getDoc(ref);
      setGoals(snap.exists() ? snap.data() : {});
    };
    fetchGoals();
  }, []);

  // ---------- Fetch all weekly data ----------
  useEffect(() => {
    const fetchAllWeeks = async () => {
      const datesCol = collection(db, "users", "Matt", "dates");
      const snap = await getDocs(datesCol);
      const data = snap.docs.map(doc => doc.data());
      setWeeklyData(data);
    };

    fetchAllWeeks();
  }, []);

  if (!goals || !weeklyData) return <div>Loading overview...</div>;

  // ---------- Compute actual values ----------
  const getActualValue = (goalName) => {
    if (!numericGoals.includes(goalName)) {
      return weeklyData.reduce((sum, day) => sum + (day[goalName] ? 1 : 0), 0);
    }
    return weeklyData.reduce((sum, day) => sum + (Number(day[goalName]) || 0), 0);
  };

  // ---------- Compute dynamic target value based on week ----------
  const getTargetValue = (goalName) => {
    const totalGoal = goals?.[goalName] ?? 0;
    const now = new Date();
    const weekNumber = getWeekNumber(now);
    const target = (weekNumber / 56) * totalGoal;
    return Math.round(target);
  };

  // ---------- Split goals into rows of 2 ----------
  const rows = [];
  for (let i = 0; i < goalNames.length; i += 2) {
    rows.push(goalNames.slice(i, i + 2));
  }

  return (
    <div>
      <br />
      <h1>Task Progress (All Weeks)</h1>
      <br />

      {rows.map((row, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            paddingLeft: "5px",
            paddingRight: "10px",
            marginBottom: "20px"
          }}
        >
          {row.map((goalName) => {
            const actual = getActualValue(goalName);
            const target = getTargetValue(goalName);
            const goalValue = goals[goalName] ?? 0;

            return (
              <div key={goalName} style={{ flex: 1 }}>
                <ProgressBar
                  actualValue={actual}
                  targetValue={target}
                  goalValue={goalValue}
                  actualLabel={String(actual)}
                  targetLabel={String(target)}
                  goalLabel={String(goalValue)}
                  leftLabel={goalName}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
