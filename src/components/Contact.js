import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // ספרייה להודעות alert מעוצבות
import './Contact.css'; // CSS file for styling

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6zhahmk",         // Service ID
      "template_r04cypj",        // Template ID
      e.target,
      "iVUZFWcg2ibcGI8fd"        // Public Key (User ID)
    )
    .then((result) => {
      console.log(result.text);
      setMessageStatus('Message sent successfully!');
      
      // Alert מעוצב להצלחה
      Swal.fire({
        icon: 'success',
        title: '!תודה על פניתך',
        text: 'המרכז לתנועה משקמת - ישמח לתת לך מענה'
      });
    })
    .catch((error) => {
      console.log(error.text);
      setMessageStatus('Failed to send message, please try again.');
      
      // Alert מעוצב לבעיה בשליחת ההודעה
      Swal.fire({
        icon: 'error',
        title: 'מצטערים, יש שגיאה זמנית',
        text: 'בבקשה- נשמח ליצור אתכם קשר בטלפון או במייל'
      });
    });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className="background">
      <div className="contact-container">
      
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="שם" required />
          <input type="email" name="email" placeholder="מייל" required />
          <input type="text" name="subject" placeholder="כותרת" required />
          <textarea name="message" placeholder="הודעה" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p>{messageStatus}</p> {/* Message status display */}
      </div>
    </div>
  );
};

export default Contact;
