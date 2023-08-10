import React from "react";
import { Input, Button, Divider } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { actLoginUser, loginSuccess } from "../../Redux/features/UserSlice";

const schema = Yup.object().shape({
  email: Yup.string().required("Vui lòng nhập email đăng nhập"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
});
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleLoginSuccess = (userInfo) => {
    dispatch(loginSuccess(userInfo));
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onValid = (formValue) => {
    const { email, password } = formValue;
    dispatch(actLoginUser({ email, password, handleLoginSuccess }));
  };

  const handleToSignIn = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };
  return (
    <div className="login-form-wrapper">
      <form className="login-form-container" onSubmit={handleSubmit(onValid)}>
        <label>Địa chỉ Email:</label>
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            return <Input placeholder="Nhập Email" {...field} />;
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

        <Divider />

        <Button
          type="primary"
          block
          style={{ backgroundColor: "rgb(142, 0, 0)" }}
          onClick={handleSubmit(onValid)}
        >
          Đăng Nhập
        </Button>

        <Divider />

        <Button block onClick={handleToSignIn}>
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
