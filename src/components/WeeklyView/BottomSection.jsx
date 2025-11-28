import { useEffect } from "react";
import db from "../../Database";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const BottomSection = ({ weeklyData, setWeeklyData, weekStart}) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const tasks = ["Bike", "Walk/Run", "Gym", "Abs", "Breakfast", "Lunch", "Dinner", "Snacking", "Book", "Teethcare", "Body Fat", "Weight", "Words", "Learning", "NPR", "Stretching"];

  const numericTasks = ["Bike", "Walk/Run", "Body Fat", "Weight", "Words"];

  const getDateString = (dayIndex) => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + dayIndex);
    return date.toISOString().split("T")[0]; // yyyy-mm-dd
  };
  const handleChange = (dayIndex, task, value) => {
    const newData = [...weeklyData];
    newData[dayIndex][task] = value;
    setWeeklyData(newData);

    const dateStr = getDateString(dayIndex);
    const ref = doc(db, "users", "Matt", "dates", dateStr);

    setDoc(ref, { [task]: value }, { merge: true });
  };

  useEffect(() => {
    const fetchWeek = async () => {
      const week = [];
      
      for (let i = 0; i < 7; i++) {
        const dateStr = getDateString(i);
        const ref = doc(db, "users", "Matt", "dates", dateStr);
        const snap = await getDoc(ref);
        
        // If doc exists, use it. Otherwise create empty task values.
        week.push(
          snap.exists()
            ? { ...snap.data() }
            : Object.fromEntries(tasks.map((t) => [t, numericTasks.includes(t) ? 0 : false]))
          );
      }
    
      setWeeklyData(week);
    };

    fetchWeek();
  }, [weekStart]);

  if (!weeklyData || weeklyData.length !== 7) return null;

  return (
    <div>
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center"}}>
      <thead>
        <tr>
          <th>Task</th>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task}>
            <td style={{ textAlign: "center", paddingRight: "8px", paddingTop: "5px" }}>{task}</td>
            {days.map((_, dayIndex) => (
              <td key={dayIndex}>
                {numericTasks.includes(task) ? (
                  <input
                    type="number"
                    value={weeklyData[dayIndex][task] ?? ""}
                    onChange={(e) => handleChange(dayIndex, task, Number(e.target.value))}
                    style={{ width: "40px" }}
                  />
                ) : (
                  <input
                    type="checkbox"
                    checked={weeklyData[dayIndex][task]}
                    onChange={(e) => handleChange(dayIndex, task, e.target.checked)}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table> 
    <br></br>
    </div>
  );
};
