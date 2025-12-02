export const MiddleSection = ({ weeklyData, taskTargets }) => {
  const tasks = Object.keys(taskTargets);

  const completedCounts = {};
  tasks.forEach((task) => {
    completedCounts[task] = weeklyData.reduce((acc, day) => {
      if (task === "Bike" || task === "Walk/Run" || task == "Words") {
        return acc + (Number(day[task]) || 0);
      } else {
        return acc + (day[task] ? 1 : 0);
      }
    }, 0);
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", marginBottom: "16px", paddingLeft: "5px" }}>
      {tasks.map((task) => (
        <div key={task}>
          {task}: {completedCounts[task]}/{taskTargets[task]}
        </div>
      ))}
    </div>
  );
};
