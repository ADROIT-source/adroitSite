import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // .env 읽어오기

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Gmail SMTP 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // 환경변수에서 가져옴
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/send-mail", async (req, res) => {
  const { company, name, email, phone, service, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
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

app.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server is running on http://localhost:${process.env.PORT || 5000}`);
});
