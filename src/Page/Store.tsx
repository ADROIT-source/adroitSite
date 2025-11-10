import React from "react";
import "../style/store/store.css";
import Bar from "../components/bar/bar";
import "../style/bar/bar.css";

const Store: React.FC = () => {
  return (
    <div className="store" id="store">
      <Bar />
      <div className="store_content">
        <h1>준비 중입니다</h1>
        <p>12월 초 오픈 예정입니다. 감사합니다.</p>
        <div className="store_back">
            <a href="/artibot" >돌아가기</a>
        </div>
        
        <div className="store_spinner"></div>
      </div>
    </div>
  );
};

export default Store;
