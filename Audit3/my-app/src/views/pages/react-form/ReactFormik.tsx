import {
  Formik,
  FormikProps,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldArray,
  FieldArrayRenderProps,
} from "formik";
import React from "react";
import styles from "./ReactFormik.module.css";

interface UserForm {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  address: string;
  addressList: string[];
  sex: string;
}

export class ReactFormik extends React.Component {
  validate = (values: UserForm) => {
    let error: any = {};
    if (!values.email) {
      error.email = "Email is required";
    }
    if (!values.password) {
      error.password = " Password is required ";
    } else if (values.password.length < 4 || values.password.length > 10) {
      error.password = "Password length must be between 4 and 10 characters!";
    }
    if (!values.confirmPassword || values.confirmPassword !== values.password) {
      error.confirmPassword = "Confirm password must equal password! ";
    }
    if (!values.sex) {
      error.sex = "Sex is required!";
    }
    if (values.addressList && values.addressList.length > 0) {
      const addressErrors: string[] = [];
      values.addressList.forEach((address, index) => {
        if (!address) {
          addressErrors[index] = "Address is required";
        }
      });
      if (addressErrors.length > 0) {
        error.addressList = addressErrors;
      }
    }
    if (Object.keys(error).length > 0) {
      return error;
    }
  };

  handleSubmit = (values: UserForm, formikHelpers: FormikHelpers<UserForm>) => {
    console.log(values, formikHelpers);
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          showPassword: false,
          address: "",
          addressList: [] as string[],
          sex: "",
        }}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {(formikProps: FormikProps<UserForm>) => (
          <Form>
            {/* Email address */}
            <div className="form-group">
              <label htmlFor="email" className={styles.label}>
                Email Address
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </label>
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className={styles.label}>
                Password
                <Field
                  type={formikProps.values.showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Enter  your  password "
                />
              </label>
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>
            {/* Confrim password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
                <Field
                  type={formikProps.values.showPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Re-render password "
                />
              </label>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>
            {/* show password */}
            <div className="form-group">
              <label htmlFor="showPassword" className={styles.label}>
                <Field
                  type="checkbox"
                  name="showPassword"
                  className={styles.checkbox}
                />{" "}
                Check to display password
              </label>
            </div>
            {/* address  */}
            <div className="form-group">
              <label htmlFor="address" className={styles.label}>
                Address
                <Field
                  type="address"
                  name="address"
                  className="form-control"
                  placeholder="Enter your address"
                />
              </label>
              <ErrorMessage
                name="address"
                component="div"
                className="text-danger"
              />
            </div>
            {/* address list  */}
            <FieldArray name="addressList">
              {(arrayHelper: FieldArrayRenderProps) => (
                <div className="form-group">
                  <div>
                    <button
                      className="btn btn-secondary"
                      onClick={() => arrayHelper.push("")}
                    >
                      Add address
                    </button>
                  </div>
                  {formikProps.values.addressList.map(
                    (address: string, index: number) => (
                      <div key={index}>
                        <label className={styles.label}>
                          Address{index + 1}
                          <div className="d-flex align-items-center">
                            <Field
                              type="text"
                              name={`addressList[${index}]`}
                              className="form-control"
                            />
                            <button
                              className="btn btn-danger"
                              onClick={() => arrayHelper.remove(index)}
                            >
                              Remove
                            </button>
                          </div>
                        </label>
                      </div>
                    )
                  )}
                </div>
              )}
            </FieldArray>
            <ErrorMessage
              name="addressList"
              component="div"
              className="text-danger"
            />
            {/* SEX */}
            <div className="form-group">
              <label htmlFor="sex" className={styles.label}>
                Sex
                <Field as="select" name="sex" className="form-control">
                  <option value="">Please select your sex </option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </Field>
              </label>
              <ErrorMessage
                name="sex"
                component="div"
                className="text-danger"
              />
            </div>
            {/* Submit */}
            <div className="from-group">
              <button
                type="submit"
                className={`btn btn-primary ${styles.button} `}
                disabled={!formikProps.isValid}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
export default ReactFormik;
