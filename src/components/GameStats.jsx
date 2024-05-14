import { memo } from "react";
import "./GameStats.css";
/* eslint-disable react/prop-types */
const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <div className="">
      <ul className="GameStats GameStats__left">
        <li>Level</li>
        <li className="value">{level}</li>
        <li>Lines to Level</li>
        <li className="value">{linesToLevel}</li>
        <li>points</li>
        <li className="value">{points}</li>
      </ul>
    </div>
  );
};

export default memo(GameStats);
