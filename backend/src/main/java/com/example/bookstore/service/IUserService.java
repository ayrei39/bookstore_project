package com.example.bookstore.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.bookstore.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;
import com.example.bookstore.util.Result;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
public interface IUserService extends IService<User> {
    public Result register(User user);
    public Result login(User user);

    User findUserMsgByUsername(User user);

    IPage<User> getUserPage(Page<User> page, String username);

    Boolean checkPermissions(User user);
}
