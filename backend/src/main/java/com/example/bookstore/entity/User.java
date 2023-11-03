package com.example.bookstore.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@ApiModel(value = "User对象", description = "")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer userId;

    private String username;

    private String password;

    private String phone;

    @ApiModelProperty("1表示存在 0表示删除")
    private Integer isDel;

    private Integer isAdmin;

    public User(String username, String password) {
        this.username=username;
        this.password=password;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    public Integer getIsDel() {
        return isDel;
    }

    public void setIsDel(Integer isDel) {
        this.isDel = isDel;
    }


    public Integer getIsAdmin() {return isAdmin; }
    @Override
    public String toString() {
        return "User{" +
            "userId=" + userId +
            ", username=" + username +
            ", password=" + password +
            ", phone=" + phone +
            ", isDel=" + isDel +
            ", isAdmin=" + isAdmin +
        "}";
    }
}
