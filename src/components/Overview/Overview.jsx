import React from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const Overview = () => {
  return (
    <div>
      <br />
      <h1>Task Progress</h1>
      <br/>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={1188}
            actualLabel="100"
            targetLabel="150"
            goalLabel="1188"
            leftLabel="Bike"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Walk/Run"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Gym"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={112}
            actualLabel="100"
            targetLabel="150"
            goalLabel="112"
            leftLabel="Abs"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={1188}
            actualLabel="100"
            targetLabel="150"
            goalLabel="1188"
            leftLabel="Breakfast"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Lunch"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Dinner"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={112}
            actualLabel="100"
            targetLabel="150"
            goalLabel="112"
            leftLabel="Snacking"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={1188}
            actualLabel="100"
            targetLabel="150"
            goalLabel="1188"
            leftLabel="Stretching"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Teethcare"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Body Fat"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={112}
            actualLabel="100"
            targetLabel="150"
            goalLabel="112"
            leftLabel="Weight"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={1188}
            actualLabel="100"
            targetLabel="150"
            goalLabel="1188"
            leftLabel="Words"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="Ongoing Learning"
          />
        </div>
      </div>
      <br></br>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingLeft: '5px', paddingRight: '10px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={224}
            actualLabel="100"
            targetLabel="150"
            goalLabel="224"
            leftLabel="NPR"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            actualValue={100}
            targetValue={150}
            goalValue={112}
            actualLabel="100"
            targetLabel="150"
            goalLabel="112"
            leftLabel="Books"
          />
        </div>
      </div>
    </div>
  );
};
