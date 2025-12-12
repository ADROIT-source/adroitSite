import React from "react";
import Bar from "../components/bar/bar";
import { Download } from "lucide-react";
import "../style/lerobot/lerobot.css";

interface DownloadItem {
  title: string;
  updateDate: string;
  link: string;
}

const downloadList: DownloadItem[] = [
  {
    title: "LeRobot 교육자료",
    updateDate: "2025-09-01",
    link: `
    https://mail.google.com/mail/u/0/?fs=1&to=adroit@adroit.co.kr&su=교육 신청 문의 드립니다&body=아래 내용을 작성해주세요.
%0A
■ 성함:
%0A
■ 이메일:
%0A
■ 소속:
%0A
■ 교육 희망 이유:
&tf=cm
    `,
  },
];

const LeRobot: React.FC = () => {
  return (
    <div className="LeRobot" id="lerobot">
      <Bar />
      <div className="LeRobotSection">
        <h1>서식 다운로드</h1>
        <div className="downloadList">
          {downloadList.map((item, idx) => (
            <div key={idx} className="lerobot_download_card">
              <div className="card_texts">
                <p className="card_title">{item.title}</p>
                <span className="card_date">
                  최근 업데이트 {item.updateDate}
                </span>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card_download"
              >
                <Download size={20} color="#ffffff" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeRobot;
