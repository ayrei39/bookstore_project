package com.example.bookstore.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.bookstore.entity.User;
import com.example.bookstore.mapper.UserMapper;
import com.example.bookstore.service.IUserService;
import com.example.bookstore.util.Encode_MD5;
import com.example.bookstore.util.Result;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

    @Override
    public Result register(User user) {
        QueryWrapper<User> qw=new QueryWrapper<>();
        qw.eq("username",user.getUsername());
        if(findUserMsgByUsername(user) !=null ){
            return Result.fail().message("此账号已被注册");
        }
        baseMapper.insert(user);
        return Result.ok().message("注册成功");
    }

    @Override
    public Result login(User user) {
        User userinfo = findUserMsgByUsername(user);
        if (userinfo == null){
            return Result.fail().code(207).message("查无此账号");
        }
        if(!Encode_MD5.encrypt(user.getPassword()).equals(userinfo.getPassword())){
//            System.out.println(Encode_MD5.encrypt(user.getPassword()));
            return Result.fail().code(207).message("密码错误");
        }
        //System.out.println(userinfo.getUserId().toString());
        return Result.ok(userinfo.getUserId());
    }
    @Override
    public User findUserMsgByUsername(User user) {

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", user.getUsername());
        return baseMapper.selectOne(queryWrapper);
    }

    @Override
    public IPage<User> getUserPage(Page<User> page, String username) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if (!StringUtils.isEmpty(username)) {
            queryWrapper.like("username", username);
        }
//        queryWrapper.orderByDesc("id");
        return baseMapper.selectPage(page, queryWrapper);
    }

    @Override
    public Boolean checkPermissions(User user) {

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", user.getUserId());
        User new_user = baseMapper.selectOne(queryWrapper);

        return new_user.getIsAdmin() == 1;

    }
}
