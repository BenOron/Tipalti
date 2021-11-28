import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();
  let submitRes = JSON.parse(localStorage.getItem("inputs")) || {};
  const [submitted, setSubmit] = useState(submitRes);

  const forms = [
    {
      id: "12",
      name: "first",
      type: "text",
      value: "",
      errorMsG: "ErrorMsg",
      label: "First label1",
      validator: function (val) {
        return val > 6;
      },
    },
    {
      id: "13",
      name: "first2",
      type: "text",
      value: "",
      errorMsG: "ErrorMsg",
      label: "First label2",
      validator: function (val) {
        return val > 10;
      },
    },
    {
      id: "16",
      name: "first24",
      type: "radio",

      errorMsG: "ErrorMsg",
      label: "First label3",
      validator: function (checked) {
        return checked === "on";
      },
    },
    {
      id: "14",
      name: "second",
      type: "select",
      selectOption: ["ben", "test"],
      errorMsG: "ErrorMsg",
      label: "Second label",
      validator: function (val) {
        return val === "ben";
      },
    },
  ];

  const onSubmit = () => {
    if (localStorage.getItem("inputs")) {
      setSubmit(JSON.parse(localStorage.getItem("inputs")));
    }
  };

  const clearRes = () => {
    if (localStorage.getItem("inputs")) {
      localStorage.clear("inputs");
    }
    setSubmit([]);
  };

  useEffect(() => {
    if (localStorage.getItem("inputs")) {
      localStorage.clear("inputs");
    }
  }, []);

  return (
    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        {forms.map((item, i) => {
          if (item) {
            return (
              <div key={i}>
                {" "}
                <Inputs
                  checked={item.checked}
                  register={register}
                  inpuType={item.type}
                  selectOption={item.selectOption}
                  inpuValue={item.value}
                  inputName={item.name}
                  inputLabel={item.label}
                  inputValidatorFn={item.validator}
                />
              </div>
            );
          } else {
            return <></>;
          }
        })}

        <div>
          {submitted && submitted.length > 0 && (
            <button className={"button"} onClick={clearRes}>
              clear results
            </button>
          )}
          {!(submitted && submitted.length > 0) && (
            <button className={"button"} type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
      {submitted && submitted.length > 0 && (
        <div className={"res"}>
          {submitted &&
            submitted.length > 0 &&
            submitted.map((res, i) => {
              return (
                <div key={i}>
                  <span>
                    {" "}
                    {res.label} is {res.isValdate ? "valid" : "not vaild"} with
                    value {res.value}{" "}
                  </span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Home;
