import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Gmail SMTP 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chanhyuk05220@gmail.com", // Gmail 주소
    pass: "tmnl xnni yizt ykrg", // 앱 비밀번호
  },
});

app.post("/send-mail", async (req, res) => {
  const { company, name, email, phone, service, message } = req.body;

  try {
    await transporter.sendMail({
      from: "chanhyuk05220@gmail.com", // 반드시 Gmail 계정과 동일
      to: "chanhyuk05220@gmail.com", // 수신자 (본인 메일로 받기)
      replyTo: email, // 고객이 입력한 메일 (답장 가능)
      subject: `[상담신청] ${company} - ${name}`,
      text: `
    회사명: ${company}
    담당자명: ${name}
    이메일: ${email}
    연락처: ${phone}
    관심 서비스: ${service}
    문의 내용:
    ${message}
      `,
    });

    res.json({ success: true, message: "메일 전송 성공!" });
  } catch (error) {
    console.error("메일 전송 에러:", error);
    res.status(500).json({ success: false, message: "메일 전송 실패" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server is running on http://localhost:5000");
});
