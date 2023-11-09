import { useState } from "react";
import apelLogo from "./assets/apel.svg";

function App() {
  // state of the form's data
  const [formData, setFormData] = useState({
    teamName: "",
    arName: "",
    enName: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    university: "",
    academicYear: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  // handle typing in fields
  function handleChange(event) {
    const { name, value, maxLength } = event.target;
    if (value.length <= maxLength) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    }
  }
  // checkvalidation
  function preValidate(formData) {
    const teamNameRegx = /\w|^[ء-ي ]*$/;
    const arNameRegx = /[ء-ي ] [ء-ي ]/g;
    const enNameRegx = /[a-zA-Z ] [a-zA-Z ]/g;
    const emailRegx = /\w@(gmail|yahoo).com/g;
    const phoneRegx = /01(0|1|2|5)\d{8}/g;
    const idRegx = /(2|3)\d{6}28\d{5}/g;

    if (!teamNameRegx.test(formData.teamName)) {
      console.log("invalid team name");
    }
    if (!arNameRegx.test(formData.arName)) {
      console.log("invalid arabic name");
    }
    if (!enNameRegx.test(formData.enName)) {
      console.log("invalid english name");
    }
    if (!emailRegx.test(formData.email)) {
      console.log("invalid email");
    }
    if (!phoneRegx.test(formData.phoneNumber)) {
      console.log("invalid number");
    }
    if (!phoneRegx.test(formData.phoneNumber)) {
      console.log("invalid number");
    }
  }
  // handle form submition
  function handleSubmit(event) {
    event.preventDefault();
    preValidate(formData);
    console.log(formData);
  }

  return (
    <main className="main">
      <a href="">
        <img
          src={apelLogo}
          alt="Aswan Practical Engineerin Lab"
          className="apel-logo"
        />
      </a>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="grid" dir="rtl">
          <div className="grid-item">
            <label>اسم الفريق</label>
            <input
              name="teamName"
              type="text"
              placeholder="اكتب اسم الفريق"
              required
              value={formData.teamName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="grid-item">
            <label>الاسم الكامل بالعربية</label>
            <input
              name="arName"
              type="text"
              placeholder="اكتب اسمك بالعربية"
              required
              value={formData.arName}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>الاسم الكامل بالإنجليزية</label>
            <input
              name="enName"
              type="text"
              placeholder="اكتب اسمك بالإنجليزية"
              required
              value={formData.enName}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>البريدالإلكتروني</label>
            <input
              name="email"
              type="email"
              placeholder="اكتب بريدك الإلكتروني"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>رقم الهاتف</label>
            <input
              name="phoneNumber"
              type="number"
              placeholder="اكتب رقم هاتفك"
              required
              maxLength={11}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>الرقم القومي</label>
            <input
              name="nationalId"
              type="number"
              placeholder="اكتب رقمك القومي"
              required
              // onInput={   }
              maxLength={14}
              value={formData.nationalId}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>الجامعة</label>
            <select
              name="university"
              required
              value={formData.university}
              onChange={handleChange}
            >
              <option value="">اختر جامعتك</option>
              <option value="أسوان">أسوان</option>
            </select>
          </div>
          <div className="grid-item">
            <label>السنة الدراسية</label>
            <select
              name="academicYear"
              required
              value={formData.academicYear}
              onChange={handleChange}
            >
              <option value="-">اختر سنة دراسية</option>
              <option value="الإعدادية">الإعدادية</option>
              <option value="الأولي">الأولي</option>
              <option value="الثانية">الثانية</option>
              <option value="الثالثة">الثالثة</option>
              <option value="الرابعة">الرابعة</option>
            </select>
          </div>

          <button className="submit-btn">أرسل</button>
        </div>
      </form>
    </main>
  );
}

export default App;
