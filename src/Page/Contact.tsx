import React,{useRef} from 'react'
import '../style/startPage.scss'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const formRef = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    // if(formRef.current !== null) {
      emailjs.sendForm('service_6asu7lo', 'template_uiqbqzp', formRef.current , '7uIYN0ZL2eLQTztHI')
        .then((result) => {
            alert('전송이 완료 되었습니다 감사합니다.');
        }, (error) => {
          alert('메세지를 전송하지 못했습니다')
        });
    // }
    console.log(formRef)
  };
  return (
    <div className="Contact">
      <div className="pageTop"></div>
      <div className="pageMain">
        <form ref={formRef} className="contact-wrap" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required/>
          <label>Email</label>
          <input type="email" name="user_email"  required/>
          <label>Message</label>
          <textarea name="message"  required/>
          <button>보내기</button>
        </form>
      </div>
      <div className="pageBottom"></div>
    </div>
  );
}

export default Contact
