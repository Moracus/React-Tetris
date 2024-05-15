import { memo } from "react";
import "./GameStats.css";
/* eslint-disable react/prop-types */
const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <div className="GameStats">
      <ul>
        <li>
          Level: <span className="value">{level}</span>
        </li>

        <li>
          Lines to Level: <span className="value">{linesToLevel}</span>
        </li>
        <li>
          points: <span className="value">{points}</span>
        </li>
      </ul>
    </div>
  );
};

export default memo(GameStats);
