import React, { useId } from "react";

const Contact = () => {
  const id = useId();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confrimpassword: "",
    comment: "",
    isFriendly: false,
    joinNewsLetter: false,
    employment: "",
    favColor: "",
  });

  function handleChange(e) {
    const { type, name, value, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.confrimpassword) {
      console.log("Successfully signed up");
      if (formData.joinNewsLetter) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else {
      console.log("Password not matched!");
      return;
    }
  }
  function handleReset(e) {
    const { type, name, value, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "reset" ? "reset" : value,
      };
    });
  }

  return (
    <section className=" min-h-screen flex items-center bg-gray-500">
      <div className=" max-w-3xl mx-auto px-2 ">
        <h2 className="text-center text-3xl font-bold my-5 text-white max-md:text-red-400 font-main">
          Contact us
        </h2>
        <form onSubmit={handleSubmit} action="">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              className="border px-3 py-2 w-full mb-3"
              // controlled component
              value={formData.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              className="border px-3 py-2 w-full mb-3"
              // controlled component
              value={formData.lastName}
            />
          </div>
          <input
            type="email"
            placeholder="Your email"
            onChange={handleChange}
            name="email"
            className="border px-3 py-2 w-full mb-3"
            // controlled component
            value={formData.email}
          />
          <div className="flex gap-3">
            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
              className="border px-3 py-2 w-full mb-3"
              // controlled component
              value={formData.password}
            />
            <input
              type="password"
              placeholder="Confrim Password"
              onChange={handleChange}
              name="confrimpassword"
              className="border px-3 py-2 w-full mb-3"
              // controlled component
              value={formData.confrimpassword}
            />
          </div>
          <textarea
            name="comment"
            placeholder="Comment"
            className="w-full border my-2 resize-none p-3"
            onChange={handleChange}
            // controlled component
            value={formData.comment}
          />

          <div className="flex">
            <div className=" w-full">
              <input
                type="checkbox"
                name="isFriendly"
                id={id + "isFriendly"}
                className="me-3"
                onChange={handleChange}
                // controlled component
                checked={formData.isFriendly}
              />
              <label
                htmlFor={id + "isFriendly"}
                className="cursor-pointer text-white"
              >
                Are you friendly
              </label>
            </div>
            <div className=" w-full">
              <input
                type="checkbox"
                name="joinNewsLetter"
                id={id + "joinnewsletter"}
                className="me-3"
                onChange={handleChange}
                // controlled component
                checked={formData.joinNewsLetter}
              />
              <label
                htmlFor={id + "joinnewsletter"}
                className="cursor-pointer text-white"
              >
                I want to join newsletter.
              </label>
            </div>
          </div>

          <fieldset className="border p-3 text-white">
            <legend>Current employment status</legend>

            <div className="w-full">
              <input
                type="radio"
                id={id + "unemployed"}
                className="me-2"
                name="employment"
                value="Unemployed"
                checked={formData.employment === "Unemployed"}
                onChange={handleChange}
              />
              <label htmlFor={id + "unemployed"}>Unemployed</label>
            </div>

            <div className="w-full">
              <input
                type="radio"
                id={id + "part-time"}
                className="me-2"
                name="employment"
                value="Part-time"
                checked={formData.employment === "Part-time"}
                onChange={handleChange}
              />
              <label htmlFor={id + "part-time"}>Part-time</label>
            </div>

            <div className="w-full">
              <input
                type="radio"
                id={id + "full-time"}
                className="me-2"
                name="employment"
                value="Full-time"
                checked={formData.employment === "Full-time"}
                onChange={handleChange}
              />
              <label htmlFor={id + "full-time"}>Full-time</label>
            </div>
          </fieldset>

          <label
            className="mt-3 inline-block text-white"
            htmlFor={id + "favColor"}
          >
            Your favarot color:
          </label>
          <select
            name="favColor"
            id={id + "favColor"}
            value={formData.favColor}
            onChange={handleChange}
            className="border w-full my-3 text-black"
          >
            <option value="default" hidden>
              Select
            </option>
            <option value="orange">oragne</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Brown">Brown</option>
            <option value="Khaki">Khaki</option>
          </select>
          <button type="submit" className="border py-1 px-4 my-3 text-white">
            Save
          </button>
          <button
            type="reset"
            className="border py-1 px-4 my-3 ms-3 text-white"
            onClick={handleReset}
          >
            Cancle
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
