import { useState, useEffect } from "react";
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
  const [focusedFields, setFocusedFields] = useState([]);
  const [validationErrors, setValidationErrors] = useState({
    teamName: false,
    arName: false,
    enName: false,
    email: false,
    phoneNumber: false,
    nationalId: false,
    university: false,
    academicYear: false,
  });

  // checkvalidation
  function preValidate(formData) {
    const teamNameRegx = /\w|^[ء-ي ]*$/;
    const arNameRegx = /[ء-ي ] [ء-ي ]/g;
    const enNameRegx = /[a-zA-Z ] [a-zA-Z ]/g;
    const emailRegx = /\w@(gmail|yahoo).com/g;
    const phoneRegx = /01(0|1|2|5)\d{8}/g;
    const idRegx = /(2|3)\d{6}28\d{5}/g;
    setValidationErrors({
      teamName: false,
      arName: false,
      enName: false,
      email: false,
      phoneNumber: false,
      nationalId: false,
      university: false,
      academicYear: false,
    });
    if (!teamNameRegx.test(formData.teamName)) {
      console.log("invalid team name");
      setValidationErrors((prevErrorState) => {
        return { ...prevErrorState, teamName: true };
      });
    }
    if (!arNameRegx.test(formData.arName)) {
      console.log("invalid arabic name");
      setValidationErrors((prevErrorState) => {
        return { ...prevErrorState, arName: true };
      });
    }
    if (!enNameRegx.test(formData.enName)) {
      console.log("invalid english name");
      setValidationErrors((prevErrorState) => {
        return { ...prevErrorState, enName: true };
      });
    }
    if (!emailRegx.test(formData.email)) {
      console.log("invalid email");
      setValidationErrors((prevErrorState) => {
        return { ...prevErrorState, email: true };
      });
    }
    if (!phoneRegx.test(formData.phoneNumber)) {
      console.log("invalid number");

      setValidationErrors((prevErrorState) => {
        return { ...prevErrorState, phoneNumber: true };
      });
    }
    if (!idRegx.test(formData.nationalId)) {
      console.log("invalid id");
      setValidationErrors((prevErrorState) => {
        return { ...prevErrorState, nationalId: true };
      });
    }
  }

  // handle typing in fields
  function handleChange(event) {
    const { name, value, maxLength } = event.target;
    if (!focusedFields.includes(name)) {
      setFocusedFields((prevFocusedFields) => [...prevFocusedFields, name]);
    }
    if (
      value.length <= maxLength ||
      (name !== "phoneNumber" && name !== "nationalId")
    ) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    }
  }

  useEffect(() => {
    preValidate(formData);
  }, [formData]);

  // handle form submition
  function handleSubmit(event) {
    event.preventDefault();
    const hasErrors = Object.values(validationErrors).some((error) => error);

    if (!hasErrors) {
      // this should be the data sent to the server using BackEnd
      console.log(formData);
    }
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
              className={
                validationErrors.teamName && focusedFields.includes("teamName")
                  ? "error"
                  : ""
              }
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
              className={
                validationErrors.arName && focusedFields.includes("arName")
                  ? "error"
                  : ""
              }
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
              className={
                validationErrors.enName && focusedFields.includes("enName")
                  ? "error"
                  : ""
              }
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
              className={
                validationErrors.email && focusedFields.includes("email")
                  ? "error"
                  : ""
              }
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
              className={
                validationErrors.phoneNumber &&
                focusedFields.includes("phoneNumber")
                  ? "error"
                  : ""
              }
            />
          </div>
          <div className="grid-item">
            <label>الرقم القومي</label>
            <input
              name="nationalId"
              type="number"
              placeholder="اكتب رقمك القومي"
              required
              maxLength={14}
              value={formData.nationalId}
              onChange={handleChange}
              className={
                validationErrors.nationalId &&
                focusedFields.includes("nationalId")
                  ? "error"
                  : ""
              }
            />
          </div>
          <div className="grid-item">
            <label>الجامعة</label>
            <select
              name="university"
              required
              value={formData.university}
              onChange={handleChange}
              className={
                validationErrors.university &&
                focusedFields.includes("university")
                  ? "error"
                  : ""
              }
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
              className={
                validationErrors.teamName &&
                focusedFields.includes("academicYear")
                  ? "error"
                  : ""
              }
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
