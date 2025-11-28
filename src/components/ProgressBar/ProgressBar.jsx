import React from "react";
import styles from "./ProgressBar.module.css";

export const ProgressBar = ({
  actualValue,
  targetValue,
  goalValue,
  actualLabel,
  targetLabel,
  goalLabel,
  leftLabel,
}) => {
  const actualPercent = (actualValue / goalValue) * 100;
  const targetPercent = (targetValue / goalValue) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftLabel}>{leftLabel}</div>
      <div className={styles.progressBarContainer}>
        {/* Actual Progress */}
<div
  className={styles.actualBar}
  style={{ width: `${actualPercent}%` }}
>
  <span className={styles.actualLabel}>{actualLabel}</span>
</div>

{/* Target Progress Marker */}
<div
  className={styles.targetMarker}
  style={{ left: `${targetPercent}%` }}
>
  <span className={styles.targetLabel}>{targetLabel}</span>
</div>

        {/* Actual Label */}
        <span
          className={styles.label}
          style={{ left: `${actualPercent}%` }}
        >
          {actualLabel}
        </span>

        {/* Goal Label */}
        <span className={styles.goalLabel}>{goalLabel}</span>
      </div>
    </div>
  );
};
