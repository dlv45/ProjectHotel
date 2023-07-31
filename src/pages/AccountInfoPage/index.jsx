import React, { useState } from "react";
import { Avatar, Upload, Button, message, Input } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import "./style.scss";

const AccountInfoPage = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [userInfo, setUserInfo] = useState({
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phoneNumber: "0123456789",
  });

  const handleAvatarChange = (info) => {
    console.log(info);
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

  const handleFieldChange = (field, value) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Gửi thông tin tài khoản mới lên API (nếu có)
    // Sau khi thành công, bạn có thể cập nhật thông tin tài khoản lưu trữ từ API vào state userInfo

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
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // URL API xử lý việc tải lên hình ảnh
          onChange={handleAvatarChange}
        >
          {avatarURL ? (
            <Button onClick={handleRemoveAvatar}>Remove</Button>
          ) : (
            <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
          )}
        </Upload>
      </div>
      <div className="account-info-page__user-info">
        <div className="account-info-page__user-form">
          <label>Họ và tên:</label>
          <Input
            placeholder="Nhập họ và tên"
            value={userInfo.fullName}
            onChange={(e) => handleFieldChange("fullName", e.target.value)}
          />
        </div>
        <div className="account-info-page__user-form">
          <label>Email:</label>
          <Input
            type="email"
            placeholder="Nhập email"
            value={userInfo.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </div>
        <div className="account-info-page__user-form">
          <label>Số điện thoại:</label>
          <Input
            type="tel"
            placeholder="Nhập số điện thoại"
            value={userInfo.phoneNumber}
            onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
          />
        </div>
      </div>
      <div className="account-info-page__btn">
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AccountInfoPage;
