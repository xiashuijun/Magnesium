package net.onebean.user.mngt.vo;

import org.hibernate.validator.constraints.NotBlank;

public class SmsCodeLoginRegisterReq {

    @NotBlank(message = "filed of telPhone can not be empty")
    private String telPhone;
    @NotBlank(message = "filed of smsCode can not be empty")
    private String smsCode;
    @NotBlank(message = "filed of deviceToken can not be empty")
    private String deviceToken;

    public String getTelPhone() {
        return telPhone;
    }

    public void setTelPhone(String telPhone) {
        this.telPhone = telPhone;
    }

    public String getSmsCode() {
        return smsCode;
    }

    public void setSmsCode(String smsCode) {
        this.smsCode = smsCode;
    }

    public String getDeviceToken() {
        return deviceToken;
    }

    public void setDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
    }
}