import React from "react";
import { Input, Button, Divider } from "antd";
import "./style.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { actCreateNewUser } from "../../Redux/features/UserSlice";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email đăng ký"),
  password: Yup.string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .required("Vui lòng tạo mật khẩu"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
});
const SignInForm = () => {
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onValid = (formValue) => {
    dispatch(actCreateNewUser(formValue));
  };

  return (
    <div className="sign-in-form">
      <label>Địa chỉ Email:</label>
      <Controller
        control={control}
        name="email"
        render={({ field }) => {
          return <Input placeholder="Nhập Email Đăng Ký" {...field} />;
        }}
      />
      {!!errors.email?.message && (
        <i style={{ color: "red" }} className="valid">
          {errors.email?.message}
        </i>
      )}

      <label>Mật khẩu:</label>
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return <Input.Password placeholder="Nhập mật khẩu" {...field} />;
        }}
      />
      {!!errors.password?.message && (
        <i style={{ color: "red" }} className="valid">
          {errors.password?.message}
        </i>
      )}

      <label>Nhập lại mật khẩu:</label>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => {
          return <Input.Password placeholder="Nhập lại mật khẩu" {...field} />;
        }}
      />
      {!!errors.confirmPassword?.message && (
        <i style={{ color: "red" }} className="valid">
          {errors.confirmPassword?.message}
        </i>
      )}

      <Divider />

      <Button
        type="primary"
        block
        style={{ backgroundColor: "rgb(142, 0, 0)" }}
        onClick={handleSubmit(onValid)}
      >
        Tạo tài khoản
      </Button>
    </div>
  );
};

export default SignInForm;
