import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import logo from '../assets/logo.png';
import logo_mam from '../assets/logo_mam.png';
import option1 from '../assets/Option1.png';
import option2 from '../assets/Option2.png';
import option3 from '../assets/Option3.png';
import toProgramPage from '../assets/to_program_page.png';
import backgroundMother from '../assets/background_mother.png';
import backgroundColor from '../assets/background_color.png';
import backgroundPersonal from '../assets/background_personal2.png';
import backgroundConstant from '../assets/background_constant.png';
import backgroundStart from '../assets/background_start.png';
import options_Mom from '../assets/Options_Mom.png'

import optionMom1 from '../assets/option_mom1.png'
import optionMom2 from '../assets/option_mom2.png'
import optionMom3 from '../assets/option_mom3.png'

import personalImg1 from '../assets/personal_img1.png'
import personalImg2 from '../assets/personal_img2.png'
import logo_personal from '../assets/logo_personal.png'

import option_personal1 from '../assets/option_personal1.png'
import option_personal2 from '../assets/option_personal2.png'
import option_personal3 from '../assets/option_personal3.png'


import option_constant1 from '../assets/option_constant1.png'
import option_constant2 from '../assets/option_constant2.png'
import option_constant3 from '../assets/option_constant3.png'
import logo_constant from '../assets/logo_constant.png'
import constant_img from '../assets/constant_img.png'

import Contact from "../components/Contact"

const LandingPage = () => {
  const [typedText, setTypedText] = useState('');
  const descriptionText = `
 
 
  לאחר 17 שנות ניסיון בהתעמלות משקמת לנשים עם כאבים אורטופדיים
  והכשרת מורות ומאמנות כושר במרכזי התשלמויות ובשלוחות מכון וינגייט
  במרכז להתנועה משקמת בהנהלת טובי ברינגר
  התאמנו ופיתחנו מגוון תוכניות מדויקות לשיקום מיטבי
  עם שיטה שעובדת!!! וסייעה בס"ד לאלפי נשים להרגיש טוב יותר
  `;
  
  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      setTypedText((prev) => prev + descriptionText[index]);
      index++;

      if (index === descriptionText.length-1) {
        clearInterval(typeInterval);
      }
    }, 50); // זמן הכתיבה של כל אות במילישניות (אפשר לשנות לפי העדפה)

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div>
        {/* //עמוד 1 */}
    <div className="landing-page">
      <img src={logo} alt="logo" className="logo" />
      
      <div className="header-text">
        כאובה? כבדה? מתקשה לתפקד?
      </div>
      <div className="underline"></div>

      <div className="emphasis-text">
        זה בדיוק מה
          שאת צריכה</div>
     
      <div className="underline"></div>

      <div className="subtext">
     תרגול שמותאם במיוחד בשבילך  </div>
     <div className="subtext"> כדי שתהיי חזקה מבפנים ותחזרי לכוחות</div>
    
     <div className="description">
      {typedText}
  
  </div>
     



    </div>

   {/* עמוד 2 */}  
 <div id="background-start" className="background-section_small" style={{ backgroundImage: `url(${backgroundColor})` }}>
      
      
      
      
      
        { <div className="text_page_2"> התאמנו עבורך את מגוון התוכניות המדויקות בשבילך </div> }
{/* //לבחור את שלושת האופציות */}
{/* Options Section */}
<div className="options-container">

  
  
<div className="option">
  <img src={option3} alt="Option 3" className="option-image" />
  <a href="#background-constant">
    <img src={toProgramPage} alt="Go to program page" className="to-program-image" />
  </a>
</div>
  

  <div className="option">
    <img src={option2} alt="Option 2" className="option-image" />
    <a href="#background-personal">
      <img src={toProgramPage} alt="Go to program page" className="to-program-image" />
    </a>
  </div>


  <div className="option">
  <img src={option1} alt="Option 1" className="option-image" />
  <a href="#background-mother">
    <img src={toProgramPage} alt="Go to program page" className="to-program-image" />
  </a>
</div>
  

  
  {/* //עמוד 3 */}
 </div>
        </div>
       <div id="background-mother" className="background-section" style={{ backgroundImage: `url(${backgroundMother})` }}>
       <img src={logo_mam} alt="logo" className="logo" />

      <div className="text_page_2_1">שיקום אחרי לידה</div>
      <div className="subtext"> הגוף חלש ורפוי? הבטן בחוץ? מרגישה מדוללת כוחות ואנרגיות?</div>
      <div className="subtext"> משימות פשוטות של יום יום נהיו קשות ומורכבות?</div>
         <div className="text_page_2"> ,זה הזמן לחזור לכוחות</div> 
         <div className="strong_mam_txt"> להיות אמא חזקה</div> 
         <div className="text_page_2_2"> ,תוכנית אמא חזקה</div>
         <div className="text_page_2_3"> ...מעטפת של שיקום מקצועי עם כושר מותאם לתקופה של אחרי לידה</div>
         <div className="text_page_2_2"> בדיוק מה שאת צריכה עכשיו</div> 
         <div className="text_page_2_2">לשקם את שרירי הבטן ורצפת האגן, ולהרגיש חזקה וקלילה</div>
         <div className="text_page_2_3"> ,התוכנית שתחזיר אותך לכוחות ולמראה שלך - בצורה מבוקרת</div>
         <div className="text_page_2_3"> עם מענה אינדבידואלי לצריכים הספציפיים שלך</div>
      </div>



{/* //עמוד 4 */}
      <div id="background-mother" className="background-section" style={{ backgroundImage: `url(${backgroundMother})` }}>

      <img src={logo_mam} alt="logo" className="logo" />

    <div className="strong_mam_txt"> כל הפלוסים הייחודיים שתקבלי בסדנא</div> 

  
 
        { <img src={options_Mom} alt="Option 3" className="options_mom" /> }
       
   

    <div className="underline"></div>
    <div className="text_page_2_1">,לא מוותרים על השחרור והחוויה</div>
    <div className="text_page_2_3">אצלינו שיקום והנאה זה ביחד. בואי לגלות שזה אפשרי </div>
    <div className="underline"></div>
 </div>



{/* //עמוד 5 */}
<div id="background-mother" className="background-section" style={{ backgroundImage: `url(${backgroundColor})` }}>
<div className="strong_mam_txt">המסלולים</div>
<div className="subtext">המגוון שלנו במיוחד בשבילך</div>
<div className="subtext">כדי שתמצאי את המסלול שמתאים לך בדיוק</div>
{/* //לבחור את שלושת האופציות */}
{/* Options Section */}
<div className="options-container2">

<div className="option2">
  <img src={optionMom3} alt="Option 2" className="option-mom-path-image" />

  <img src={optionMom2} alt="Option 2" className="option-mom-path-image" />
  <img src={optionMom1} alt="Option 1" className="option-mom-path-image" />
</div>
</div>
  
<div className="text_page_2_2">מחכות לצאת איתך לדרך, להיות אמא חזקה</div>
</div>

{/* //עמוד 6 */}

 <div id="background-personal" className="background-section" style={{ backgroundImage: `url(${backgroundPersonal})` }}>
 <img src={logo_personal} alt="logo" className="logo" />
    < div className="strong_mam_txt" >אימון אישי</div>
<div className='strong_txt'> לבעיות אורטופדיות</div>
<div className="header-text-second"> כאובה? כבדה? מתקשה לתפקד?</div>  
<div className='text_page_2_1'>:אימון אישי מותאם הכולל</div>
{ <img src={personalImg1} alt="Option 3" className="options_personal" /> }
{ <img src={personalImg2} alt="Option 3" className="options_personal" /> }
</div>

{/* //עמוד 7 */}
<div id="background-personal" className="background-section" style={{ backgroundImage: `url(${backgroundPersonal})` }}>
<div className="strong_mam_txt">המסלולים</div>
<div className="subtext">מה שהכי מתאים למצב ולצורך שלך</div>
<div className="subtext"> אבחון - תרגול - תוכנית אימון</div>
{/* //לבחור את שלושת האופציות */}
{/* Options Section */}
<div className="options-container2">

<div className="option2">
  <img src={option_personal3} alt="Option 2" className="option-personal-path-image" />
  <img src={option_personal2} alt="Option 2" className="option-personal-path-image" />
  <img src={option_personal1} alt="Option 1" className="option-personal-path-image" />
</div>
</div>
  
<div className="text_page_2_2"> מחכה לך בס״ד עם כל הכלים לתנועה בריאה ושרירים משוחרריים</div>
</div>



{/* //עמוד 8 */}

<div id="background-constant" className="background-section" style={{ backgroundImage: `url(${backgroundConstant})` }}>

<img src={logo_constant} alt="logo" className="logo" />
< div className="strong_mam_txt" >אימון קבוע</div>
<div className='strong_txt'> שיקומי ומושגח</div>
<div className="header-text-second"> אחרי לידה? בהריון? סובלת מבעיות אורוטופדיות?</div>  
<div className='text_page_2_3'>באימון המשקם בקבוצות שלנו תכנסי לכושר כללי,</div>
<div className='text_page_2_3'>תרגישי רעננה, תשרפי שומנים ותקבלי כוח</div>
<div className='text_page_2_3'>בנוסף, תקבלי תרגילי שיקום ספציפיים בהתאם למצב שלך</div>
<div className='text_page_2_3'>ולמה שאת צריכה ורוצה לחזק</div>
<div className='text_page_2_3'>עם עין פקוחה בצורה מתונה</div>
<div className='text_page_2_3'></div>
<div className='text_page_2_2'>תחזרי לכוחות ותאספי את עצמך מחדש</div>


</div>
<div id="background-constant" className="background-section" style={{ backgroundImage: `url(${backgroundConstant})` }}>

<div className="strong_mam_txt">המסלולים</div>
<div className="subtext">רק תבחרי את מה שמתאים לך</div>
<div className="subtext">  תזכרי, התמדה מביאה תוצאות</div>
{/* //לבחור את שלושת האופציות */}
{/* Options Section */}
<div className="options-container2">

<div className="option2">
  <img src={option_constant3} alt="Option 2" className="option-personal-path-image" />
  <img src={option_constant2} alt="Option 2" className="option-personal-path-image" />
  <img src={option_constant1} alt="Option 1" className="option-personal-path-image" />
</div>
</div>
{ <img src={constant_img} alt="Option 3" className="options_mom" /> }
<div className="text_page_2_2"> מחכות לך בשגרה של אנרגיות ותנועה משקמת</div>

</div>
    
<Contact></Contact>
</div>
  );
};

export default LandingPage;


