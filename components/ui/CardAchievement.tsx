import React from "react";

interface CardAchievementProps {
  titleCompletion: string;
  provider: string;
  time: string;
  role?: string;
  credential?: string;
  type?: string;
}

export default function CardAchievement({
  titleCompletion,
  provider,
  time,
  role,
  type,
  credential,
}: CardAchievementProps) {
  return (
    <div className="achievement-card fade-in">
      <div className="achievement-header">
        <div className="achievement-marker"></div>
        <div className="achievement-top">
          <h3 className="achievement-title">{titleCompletion}</h3>
          {role && <span className="achievement-role">{role}</span>}
        </div>
      </div>
      <div className="achievement-body">
        <div className="achievement-provider">
          <span className="label">Organizer&nbsp;:</span>
          <span className="value">{provider}</span>
        </div>
        <div className="achievement-time">
          <span className="label">Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <span className="value">{time}</span>
        </div>
        <div className="achievement-type">
          <span className="label">Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <span className="value">{type}</span>
        </div>
        {credential && (
          <div className="achievement-credential">
            <a
              href={credential}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-link"
            >
              View Credential
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
