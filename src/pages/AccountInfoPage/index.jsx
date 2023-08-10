import React, { useState } from "react";
import { Avatar, Upload, Button, message, Input } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import "./style.scss";
import { useSelector } from "react-redux";

const AccountInfoPage = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const { userInfo } = useSelector((state) => state.user);

  const handleAvatarChange = (info) => {
    if (info.file.status === "done") {
      setAvatarURL(info.file.response.url);
      message.success(`${info.file.name} tải lên thành công.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} tải lên thất bại.`);
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarURL(null);
  };

  const handleFieldChange = (fieldName, value) => {
    // Cập nhật thông tin người dùng dựa trên fieldName và value
  };

  const handleSave = () => {
    // Lưu thông tin người dùng và hiển thị thông báo thành công
    message.success("Thông tin tài khoản đã được lưu.");
  };

  return (
    <div className="account-info-page">
      <div className="account-info-page__title">
        <h2>THÔNG TIN TÀI KHOẢN</h2>
      </div>
      <div className="account-info-page__user-avatar">
        <Avatar
          size={150}
          icon={<UserOutlined />}
          src={avatarURL}
          style={{ border: "1px solid #ccc" }}
        />
        <Upload
          name="avatar"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={handleAvatarChange}
        >
          {avatarURL ? (
            <Button type="link" onClick={handleRemoveAvatar} htmlType="button">
              Remove
            </Button>
          ) : (
            <Button type="primary" icon={<UploadOutlined />} htmlType="button">
              Tải ảnh lên
            </Button>
          )}
        </Upload>
      </div>
      <div className="account-info-page__user-info">
        <div className="account-info-page__user-form">
          <label>Email:</label>
          <Input
            type="email"
            value={userInfo?.email || ""}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </div>
        <div className="account-info-page__user-form">
          <label>Mật khẩu:</label>
          <Input.Password
            type="tel"
            value={userInfo?.password || null}
            onChange={() => {}}
            disabled
          />
        </div>
      </div>
      <div className="account-info-page__btn">
        <Button type="primary" onClick={handleSave}>
          Lưu
        </Button>
      </div>
    </div>
  );
};

export default AccountInfoPage;
