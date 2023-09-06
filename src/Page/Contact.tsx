import React, { useRef } from "react";
import "../style/startPage.scss";
import emailjs from "@emailjs/browser";
import contact from "../images/menuImg.png";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current !== null) {
      await emailjs
        .sendForm(
          "service_6asu7lo",
          "template_uiqbqzp",
          formRef.current,
          "7uIYN0ZL2eLQTztHI"
        )
        .then(
          (result) => {
            alert("전송이 완료 되었습니다 감사합니다.");
          },
          (error) => {
            alert("메세지를 전송하지 못했습니다");
          }
        );
      await formRef.current
        ?.querySelectorAll("input")
        .forEach((input) => (input.value = ""));
      const textarea = formRef.current?.querySelector("textarea");
      if (textarea) textarea.value = "";
    }
  };
  return (
    <div className="Contact">
      <div className="pageTop"></div>
      <div className="pageMain">
        <h1>Contact Me</h1>
        <form ref={formRef} className="contact-wrap" onSubmit={sendEmail}>
          <div className="desc">
            <img src={contact} alt="" />
            <span>
              궁금하신 사항이나 <br />
              부족한 부분에 대한 피드백을 주시면 감사하겠습니다🙇🏻‍♂
            </span>
          </div>
          <div className="input-wrap">
            <div className="input">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="성함을 입력해 주세요"
                required
              />
            </div>
            <div className="input">
              <label>Phone</label>
              <input
                type="text"
                name="user_phone"
                placeholder="연락처를 입력해 주세요"
              />
            </div>
            <div className="input">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="이메일 주소를 입력해 주세요"
                required
              />
            </div>
            <div className="input">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="내용을 입력해 주세요"
                required
              />
              <button>보내기</button>
            </div>
          </div>
        </form>
      </div>
      <div className="pageBottom"></div>
    </div>
  );
};

export default Contact;
