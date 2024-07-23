import { useState } from "react";

function Form() {
  let fields = {
    fullName: "",
    userName: "",
  };

  let [formData, setFormData] = useState(fields);

  let formHandler = (event) => {
    let fName = event.target.name;
    let fValue = event.target.value;

    return setFormData((prevData) => {
      return { ...prevData, [fName]: fValue };
    });
  };

  let subHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
    });
  };

  return (
    <>
      <form onSubmit={subHandler}>
        <input
          placeholder="Enter full name"
          value={formData.fullName}
          name="fullName"
          onChange={formHandler}
        ></input>
        <br></br>
        <input
          placeholder="Enter username"
          value={formData.userName}
          name="userName"
          onChange={formHandler}
        ></input>
        <br></br>
        <button>submit</button>
      </form>
    </>
  );
}

export default Form;
