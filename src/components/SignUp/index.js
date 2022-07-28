import StyledSignUp from "./SignUp.styled";
import { Formik, Form } from "formik";
import { send } from "@emailjs/browser";

// importing necessary components
import Field from "./Field";

// importing validation schema
import { schema } from "./validation";

const initialValues = {
  fullName: "",
  phone: "",
  details: "",
};

const SignUp = () => {
  const sendEmail = (values) => {
    send("service_5j76yil", "template_5j9h7ik", values, "rJ50KExoXgFizHrAb")
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={({ fullName, phone, details }) => {
        const filteredValues = {
          fullName: fullName.trim(),
          phone: phone.trim(),
          details: details.trim(),
        };

        sendEmail(filteredValues);
      }}
    >
      {(props) => (
        <StyledSignUp>
          <Form>
            <fieldset>
              <Field
                name="fullName"
                label="Ваше полное имя"
                type="text"
                placeholder="Андрей Николаевич"
              />
              <Field
                name="phone"
                label="Ваш номер телефона"
                type="text"
                placeholder="+998 (99) 701-17-71"
              />
              <Field
                name="details"
                label="Ваше сообщение"
                placeholder="Опишите подробности..."
              />
            </fieldset>

            <input type="submit" value={"Отправить"} />

            <p>
              Нажатием данной кнопки вы соглашаетесь на обработку ваших
              персональных данных.
            </p>
          </Form>
        </StyledSignUp>
      )}
    </Formik>
  );
};

export default SignUp;