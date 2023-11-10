import { useState, useEffect } from "react";
import apelLogo from "./assets/apel.svg";
import InputField from "./components/InputField.jsx";
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

            <InputField
              name="teamName"
              type="text"
              placeholderMsg="اكتب اسم الفريق"
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
            />
          </div>
          <div className="grid-item">
            <label>الاسم الكامل بالعربية</label>
            <InputField
              name="arName"
              type="text"
              placeholderMsg="اكتب اسمك بالعربية"
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
            />
          </div>
          <div className="grid-item">
            <label>الاسم الكامل بالإنجليزية</label>
            <InputField
              name="enName"
              type="text"
              placeholderMsg="اكتب اسمك بالإنجليزية"
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
            />
          </div>
          <div className="grid-item">
            <label>البريدالإلكتروني</label>
            <InputField
              name="email"
              type="email"
              placeholderMsg="اكتب بريدك الإلكتروني"
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
            />
          </div>
          <div className="grid-item">
            <label>رقم الهاتف</label>
            <InputField
              name="phoneNumber"
              type="number"
              placeholderMsg="اكتب رقم هاتفك"
              max={11}
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
            />
          </div>
          <div className="grid-item">
            <label>الرقم القومي</label>
            <InputField
              name="nationalId"
              type="number"
              placeholderMsg="اكتب رقمك القومي"
              max={14}
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
            />
          </div>
          <div className="grid-item">
            <label>الجامعة</label>
            <InputField
              name="university"
              type="select"
              placeholderMsg="اختر جامعتك"
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
              options={["أسوان", "القاهرة"]}
            />
          </div>
          <div className="grid-item">
            <label>السنة الدراسية</label>

            <InputField
              name="academicYear"
              type="select"
              placeholderMsg="اختر سنة دراسية"
              formData={formData}
              handleChange={handleChange}
              validationErrors={validationErrors}
              focusedFields={focusedFields}
              options={["الإعدادية", "الأولي", "الثانية", "الثالثة", "الرابعة"]}
            />
          </div>

          <button className="submit-btn">أرسل</button>
        </div>
      </form>
    </main>
  );
}

export default App;
