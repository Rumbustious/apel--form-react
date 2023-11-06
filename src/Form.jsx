import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import apelLogo from "./assets/apel.svg";

function App() {
  // state of the form's data
  const [formData, setFormData] = useState({
    arabicName: "",
    name: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    university: "",
    academicYear: "",
    gender: "",
  });

  // handle fields change
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // typescript
  // type formVals {
  //   name: String,
  //   email: String,
  // }

  const form = useForm();
  // const form = useForm<formVals>();
  const { register, control, handleSubmit, formState } = form;
  const errors = formState;
  // const { name, ref, onChange, onBlur } = register("name");

  // handle submite button
  function onSubmit(data) {
    console.log(data);
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
      <form
        className="form-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid">
          <div className="grid-item">
            <label>الاسم الكامل بالعربية</label>
            <input
              name="arabicName"
              dir="rtl"
              type="text"
              required
              placeholder="الاسم بالعربية"
              value={formData.arabicName}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>English Fullname</label>
            <input
              id="name"
              {...register("name", { required: "Username is required" })}
              type="text"
              required
              placeholder="English Fullname"
            />
            <p className="error-msg">{errors.name?.message}</p>
          </div>
          <div className="grid-item">
            <label>E-mail</label>
            <input
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid mail format",
                },
              })}
              required
              placeholder="Email"
              value={formData.email}
            />
          </div>
          <div className="grid-item">
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              required
              type="number"
              placeholder="phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>National ID</label>
            <input
              type="number"
              name="nationalId"
              required
              placeholder="National ID"
              value={formData.nationalId}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>Univeristy</label>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Aswan">Aswan</option>
              <option value="Assuit">Assuit</option>
              <option value="Cairo">Cairo</option>
            </select>
          </div>
          <div className="grid-item">
            <label>Academic Year</label>
            <select
              name="academicYear"
              required
              value={formData.academicYear}
              onChange={handleChange}
            >
              <option value="-">Select an option</option>
              <option value="prep">prep</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <fieldset id="gender-field">
            <legend>Gender</legend>
            <div>
              <label htmlFor="">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <button className="submit-btn">Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </main>
  );
}

export default App;
