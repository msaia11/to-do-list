import { useEffect } from "react";
import db from "../../Database";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const BottomSection = ({ weeklyData, setWeeklyData, weekStart }) => {
  const days = ["M", "T", "W", "Th", "F", "S", "Su"];
  const tasks = [
    "Bike", "Walk/Run", "Gym", "Abs", "Breakfast", "Lunch", "Dinner",
    "Snacking", "Book", "Teethcare", "BodyFat", "Weight",
    "Words", "Learning", "NPR", "Stretching"
  ];

  const numericTasks = ["Bike", "Walk/Run", "BodyFat", "Weight", "Words"];

  // ---------- SAFE DATE HANDLER ----------
  const getDateString = (dayIndex) => {
    const base = new Date(weekStart);

    if (isNaN(base.getTime())) {
      console.warn("Invalid weekStart passed to getDateString:", weekStart);
      return null; // Prevents crash
    }

    base.setDate(base.getDate() + dayIndex);
    return base.toISOString().split("T")[0]; // yyyy-mm-dd
  };

  // ---------- HANDLE CHANGE ----------
  const handleChange = (dayIndex, task, value) => {
    const newData = [...weeklyData];
    newData[dayIndex][task] = value;
    setWeeklyData(newData);

    const dateStr = getDateString(dayIndex);
    if (!dateStr) return; // Prevent invalid Firestore writes

    const ref = doc(db, "users", "Matt", "dates", dateStr);
    setDoc(ref, { [task]: value }, { merge: true });
  };

  // ---------- FETCH WEEK ----------
  useEffect(() => {
    const fetchWeek = async () => {
      const week = [];

      for (let i = 0; i < 7; i++) {
        const dateStr = getDateString(i);

        // If date is invalid, push empty row and continue
        if (!dateStr) {
          week.push(
            Object.fromEntries(
              tasks.map((t) => [t, numericTasks.includes(t) ? 0 : false])
            )
          );
          continue;
        }

        const ref = doc(db, "users", "Matt", "dates", dateStr);
        const snap = await getDoc(ref);

        week.push(
          snap.exists()
            ? { ...snap.data() }
            : Object.fromEntries(
                tasks.map((t) => [t, numericTasks.includes(t) ? 0 : false])
              )
        );
      }

      setWeeklyData(week);
    };

    fetchWeek();
  }, [weekStart]);

  // Prevent rendering before data ready
  if (!weeklyData || weeklyData.length !== 7) return null;

  // ---------- RENDER ----------
  return (
    <div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}
      >
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
              <td
                style={{
                  textAlign: "center",
                  paddingRight: "8px",
                  paddingTop: "5px",
                }}
              >
                {task}
              </td>

              {days.map((_, dayIndex) => (
                <td key={dayIndex}>
                  {numericTasks.includes(task) ? (
                    <input
                      type="number"
                      value={weeklyData[dayIndex][task] ?? ""}
                      onChange={(e) =>
                        handleChange(dayIndex, task, Number(e.target.value))
                      }
                      style={{ width: "40px" }}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      checked={!!weeklyData[dayIndex][task]}
                      onChange={(e) =>
                        handleChange(dayIndex, task, e.target.checked)
                      }
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <br />
    </div>
  );
};
