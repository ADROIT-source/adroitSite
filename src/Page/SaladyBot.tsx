import React from "react";

const SaladyBot: React.FC = () => {
  return (
    <div>
      {/* CSS 스타일을 <style> 태그로 삽입 */}
      <style>{`
        :root {
          --bg: #0b0d10;
          --fg: #e9edf3;
          --muted: #a7b1bf;
          --brand: #00b894;
          --accent: #2a4b7c;
          --card: #10151b;
          --line: #2a3038;
        }
        * {
          box-sizing: border-box;
        }
        html,
        body {
          height: 100%;
        }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--fg);
          font: 16px/1.65 system-ui, -apple-system, "Segoe UI", Roboto,
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
        }
        a {
          color: var(--brand);
          text-decoration: none;
        }
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 55px 10px;
        }
        h1,
        h2,
        h3 {
          line-height: 1.25;
          margin: 0 0 16px;
        }
        h1 {
          font-size: 44px;
        }
        h2 {
          font-size: 28px;
          margin-top: 56px;
        }
        h3 {
          font-size: 20px;
          margin-top: 12px;
        }
        .lead {
          color: var(--muted);
          font-size: 18px;
          margin: 10px 0 18px;
        }
        .badge {
          display: inline-block;
          padding: 6px 10px;
          border: 1px solid var(--line);
          border-radius: 999px;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .hero {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 24px;
          align-items: center;
        }
        .cta {
          display: flex;
          gap: 12px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .button {
          padding: 12px 16px;
          border-radius: 12px;
          background: var(--brand);
          color: #041312;
          font-weight: 800;
          border: 0;
        }
        .button.alt {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--fg);
        }
        /* 이미지 플레이스홀더 */
        .img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          border: 2px dashed #2f3742;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b97a7;
          font-weight: 700;
          text-align: center;
          padding: 10px;
        }
        .img-box span {
          opacity: 0.95;
        }
        /* 카드 & 그리드 */
        .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 20px 30px;
          display:flex;
          flex-direction: column;
          justify-content: center;
        }
        .grid {
          display: grid;
          gap: 16px;
        }
        .grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .grid.cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .kicker {
          color: var(--brand);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .list {
          margin: 0;
          padding-left: 18px;
        }
        .list li {
          margin: 6px 0;
        }
        .step {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin: 10px 0;
        }
        .step .num {
          min-width: 28px;
          height: 28px;
          border-radius: 8px;
          background: var(--accent);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          margin-top: 3px;
        }
        .feature {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 12px;
          align-items: start;
        }
        .icon {
          width: 64px;
          height: 64px;
          border: 1px solid var(--line);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #93a0b3;
        }
        .note {
          color: var(--muted);
          font-size: 14px;
          margin : 15px 0px;
        }
        .footer {
          border-top: 1px solid var(--line);
          margin-top: 56px;
          padding-top: 24px;
          color: var(--muted);
          font-size: 14px;
        }
        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .grid.cols-3,
          .grid.cols-2 {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 36px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="container" id="top">
        <div className="badge" aria-label="기술 배지">
          Physical AI × LLM × Vision
        </div>
        <div className="hero" style={{ marginTop: 12 }}>
          <div>
            <h1>샐러디봇</h1>
            <p className="lead">
              LLM과 비전 기반 지능형 로봇이 개인의 건강 데이터와 취향을 분석해
              레시피를 생성하고, 6축 양팔 로봇이 정밀 제조까지 수행하는 초개인화
              샐러드 자동화 솔루션.
            </p>
            <div className="cta">
              <a className="button" href="#features">
                핵심 기술 보기
              </a>
              <a className="button alt" href="#demo">
                데모 시나리오
              </a>
            </div>
          </div>
          <div className="img-box" aria-label="히어로 이미지 자리">
            <span>이미지: 히어로(샐러디봇 제조 장면)</span>
          </div>
        </div>
      </section>
      {/* 문제 & 솔루션 */}
      <section className="container" id="problem">
        <div className="grid cols-2">
          <div className="card">
            <div className="kicker">문제 제기</div>
            <h2>기존 식품 제조의 한계</h2>
            <ul className="list">
              <li>
                <b>개인화 부재</b>: 질병·체질·알레르기·취향 반영의 어려움
              </li>
              <li>
                <b>유연성 부족</b>: PLC 위주의 고정 규칙, 레시피 변경 시 라인
                중단
              </li>
              <li>
                <b>비효율·낭비</b>: 경험적 수요예측 → 재고 비효율, 음식물 쓰레기
              </li>
              <li>
                <b>인력 문제</b>: 반복·고된 작업, 숙련 인력 확보 난항
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="kicker">솔루션</div>
            <h2>Physical AI ‘샐러디봇’</h2>
            <ul className="list">
              <li>
                건강 데이터와 취향 기반 <b>AI 초개인화 레시피</b> 생성
              </li>
              <li>
                <b>LLM+비전</b>으로 상황 인지·자율 계획·예외 대응
              </li>
              <li>
                <b>6축 양팔 로봇</b>의 병렬 제조로 속도·정밀도 향상
              </li>
              <li>
                데이터 기반 <b>수요/재고 최적화</b>, 낭비 최소화
              </li>
            </ul>
          </div>
        </div>
        <div
          className="img-box"
          style={{ marginTop: 16 }}
          aria-label="시스템 구성 이미지 자리"
        >
          <span>이미지: 시스템 구성(LLM·비전·로봇·주문/모니터링)</span>
        </div>
      </section>
      {/* 핵심 기술 */}
      <section className="container" id="features">
        <h2>샐러디봇의 핵심 기술</h2>
        <div className="grid cols-3" style={{ marginTop: 8 }}>
          <div className="card">
            <div className="img-box" aria-label="양팔 로봇 이미지 자리">
              <span>이미지: 6축 양팔 로봇</span>
            </div>
            <h3>6축 양팔 로봇 기반 유연 제조</h3>
            <p className="note">
              동시 집기·동시 제조 등 병렬 작업으로 생산성 극대화
            </p>
          </div>
          <div className="card">
            <div className="img-box" aria-label="LLM+비전 이미지 자리">
              <span>이미지: LLM+비전 제어</span>
            </div>
            <h3>LLM + 비전 기반 지능 제어</h3>
            <p className="note">
              알레르기·신선도 감지, 계획 동적 수정, 자율 예외처리
            </p>
          </div>
          <div className="card">
            <div className="img-box" aria-label="데이터 최적화 이미지 자리">
              <span>이미지: 데이터 최적화</span>
            </div>
            <h3>데이터 기반 최적화</h3>
            <p className="note">
              실시간 계량·피드백·학습으로 품질/원가/재고 최적화
            </p>
          </div>
        </div>
        <div className="grid cols-2" style={{ marginTop: 16 }}>
          <div className="card">
            <div className="feature">
              <div className="icon">♻</div>
              <div>
                <h3>유연 생산</h3>
                <p className="note">
                  소프트웨어 업데이트만으로 신메뉴/레시피 변경 대응
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">⚖</div>
              <div>
                <h3>정밀 계량</h3>
                <p className="note">
                  실시간 중량 보정으로 일관된 맛과 품질 보장
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">⏯</div>
              <div>
                <h3>자율 예외처리</h3>
                <p className="note">
                  사람 개입·재료 부족·센서 오류 시 안전 정지 및 복구
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box" aria-label="서비스 흐름도 이미지 자리">
              <span>이미지: 서비스 흐름도(주문→추천→제조→검증→기록)</span>
            </div>
          </div>
        </div>
      </section>
      {/* 가치/효과 */}
      <section className="container" id="value">
        <h2>운영자·소비자·사회에 주는 가치</h2>
        <div className="grid cols-3" style={{ marginTop: 8 }}>
          <div className="card">
            <h3>운영자 측면</h3>
            <ul className="list">
              <li>인건비 절감 및 24시간 안정 생산</li>
              <li>피크타임 대응, 일관 품질로 매출 증대</li>
              <li>데이터 기반 상품/마케팅 의사결정</li>
            </ul>
          </div>
          <div className="card">
            <h3>소비자 측면</h3>
            <ul className="list">
              <li>건강 데이터 반영 초개인화 식단</li>
              <li>알레르기·취향·목표(감량·혈당) 반영</li>
              <li>맛의 일관성·영양 신뢰성 향상</li>
            </ul>
          </div>
          <div className="card">
            <h3>사회적 측면</h3>
            <ul className="list">
              <li>음식물 폐기↓로 ESG 기여</li>
              <li>고령화·인력난 해소형 스마트팩토리</li>
              <li>로봇×AI 융합의 레퍼런스 모델</li>
            </ul>
          </div>
        </div>
        <div
          className="img-box"
          style={{ marginTop: 16 }}
          aria-label="임팩트 이미지 자리"
        >
          <span>이미지: 임팩트(ESG/생산성/개인화 지표)</span>
        </div>
      </section>
      {/* 데모 시나리오 */}
      <section className="container" id="demo">
        <h2>데모 시나리오 (End-to-End)</h2>
        <div className="grid cols-2" style={{ marginTop: 8 }}>
          <div className="card">
            <div className="step">
              <div className="num">1</div>
              <div>
                <b>사용자 주문</b> — 앱에서 취향 ·목표 입력
              </div>
            </div>
            <div className="step">
              <div className="num">2</div>
              <div>
                <b>AI 추천</b> — LLM이 레시피 생성·검증
              </div>
            </div>
            <div className="step">
              <div className="num">3</div>
              <div>
                <b>로봇 제조</b> — 양팔 병렬 작업, 실시간 계량
              </div>
            </div>
            <div className="step">
              <div className="num">4</div>
              <div>
                <b>예외 대응</b> — 사람 손/재료 부족 감지 시 안전 정지 후 복귀
              </div>
            </div>
            <div className="step">
              <div className="num">5</div>
              <div>
                <b>드레싱 퍼포먼스</b> — 마무리 동작 및 품질 확인
              </div>
            </div>
            <div className="step">
              <div className="num">6</div>
              <div>
                <b>기록/재고</b> — 제조 로그·재고 업데이트·알림
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box" aria-label="데모 다이어그램 이미지 자리">
              <span>이미지: 데모 흐름 다이어그램</span>
            </div>
          </div>
        </div>
      </section>
      {/* 시스템 구성/결과물 */}
      <section className="container" id="system">
        <h2>시스템 구성 & 결과물</h2>
        <div className="grid cols-3" style={{ marginTop: 8 }}>
          <div className="card">
            <div className="img-box" aria-label="주문 앱 이미지 자리">
              <span>이미지: 주문 앱</span>
            </div>
            <h3>주문 앱</h3>
            <p className="note">
              개인 프로필·목표·알레르기 입력, 추천 메뉴 확인
            </p>
          </div>
          <div className="card">
            <div className="img-box" aria-label="모니터링 웹 이미지 자리">
              <span>이미지: 모니터링 웹</span>
            </div>
            <h3>모니터링 웹</h3>
            <p className="note">로봇 상태·제조 로그·재고/소진량·경고 알림</p>
          </div>
          <div className="card">
            <div className="img-box" aria-label="양팔 로봇 이미지 자리">
              <span>이미지: 양팔 로봇</span>
            </div>
            <h3>양팔 로봇</h3>
            <p className="note">정밀 집기/도포/계량, 병렬 작업·실시간 보정</p>
          </div>
        </div>
        <div
          className="img-box"
          style={{ marginTop: 16 }}
          aria-label="아키텍처 이미지 자리"
        >
          <span>이미지: 아키텍처(LLM·Vision·Robot·App·DB)</span>
        </div>
      </section>
      {/* 확장 전략 */}
      <section className="container" id="roadmap">
        <h2>확장 전략</h2>
        <div className="grid cols-3" style={{ marginTop: 8 }}>
          <div className="card">
            <h3>B2C 구독</h3>
            <p className="note">
              월 정액 맞춤 샐러드 배송으로 안정적 매출 기반
            </p>
          </div>
          <div className="card">
            <h3>디지털 헬스 연동</h3>
            <p className="note">
              웨어러블/건강앱 데이터 기반 실시간 레시피 조절
            </p>
          </div>
          <div className="card">
            <h3>카테고리 확대</h3>
            <p className="note">
              도시락·샌드위치·주스 등 다품종 소량 B2B 솔루션
            </p>
          </div>
        </div>
        <div
          className="img-box"
          style={{ marginTop: 16 }}
          aria-label="확장 이미지 자리"
        >
          <span>이미지: 카테고리 확장/플랫폼화</span>
        </div>
      </section>
      {/* 문의 */}
      <section className="container" id="contact">
        <div className="card">
          <h2>문의 및 데모 요청</h2>
          <p className="note">
            샐러디봇의 실제 데모와 도입 상담을 원하시면 연락주세요.
          </p>
          <div className="img-box" aria-label="문의 배너 이미지 자리">
            <span>이미지: 문의 배너 / 연락처</span>
          </div>
        </div>
        <div className="footer">
          <div>
            © 2025 SaladyBot. Physical AI for Personalized Food Manufacturing.
          </div>
          <div className="note">
            본 페이지의 설명·흐름·가치는 제안서 요지를 웹용 1페이지로
            정리했습니다.
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaladyBot;