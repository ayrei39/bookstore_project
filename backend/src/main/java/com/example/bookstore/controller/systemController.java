package com.example.bookstore.controller;

import com.example.bookstore.entity.LoginForm;
import com.example.bookstore.entity.User;
import com.example.bookstore.service.IUserService;
import com.example.bookstore.util.Encode_MD5;
import com.example.bookstore.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@Api(tags = "系统管理")
@RestController
@RequestMapping("/sysController")
public class systemController {
    @Autowired
    private IUserService userService;

    @ApiOperation(value = "登录")
    @ResponseBody
    @PostMapping("/login")
    public Result login(@RequestBody LoginForm loginForm, HttpServletRequest request) {
//        Cookie[] cookies = request.getCookies();
        System.out.println(loginForm.getUsername()+"密码:"+loginForm.getPassword());
        Result login = userService.login(new User(loginForm.getUsername(),loginForm.getPassword()));
        if (login.getData() == null) {
            return login;
        }
        return Result.ok(login.getData());
    }

    @ApiOperation(value = "注册")
    @ResponseBody
    @PostMapping("/register")
    public Result register(@RequestBody User user) {
       // System.out.println("zhuce!!!");
        if (!StringUtils.isEmpty(user.getPassword())) {
            user.setPassword(Encode_MD5.encrypt(user.getPassword()));
        }
        //删除状态
        user.setIsDel(1);
        //角色
        //注册用户
        return userService.register(user);
    }

    @PostMapping("/checkPermissions")
    public Boolean isAdmin(@RequestBody User user) {

        return userService.checkPermissions(user);
    }
}