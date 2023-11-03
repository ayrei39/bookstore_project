package com.example.bookstore.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.bookstore.entity.Book;
import com.example.bookstore.entity.Shoppingcart;
import com.example.bookstore.mapper.ShoppingcartMapper;
import com.example.bookstore.service.IShoppingcartService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.bookstore.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.Query;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@Service
public class ShoppingcartServiceImpl extends ServiceImpl<ShoppingcartMapper, Shoppingcart> implements IShoppingcartService {

    @Autowired
    private IUserService userService;
    @Override
    public List<Shoppingcart> getshopcar(String userid) {
        QueryWrapper<Shoppingcart> qw=new QueryWrapper<>();
        qw.eq("user_id",userid);
        return baseMapper.selectList(qw);
    }

    @Override
    public Shoppingcart getOneBook(String userId, String bookId) {
        QueryWrapper<Shoppingcart> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);
        queryWrapper.eq("book_id", bookId);
        return baseMapper.selectOne(queryWrapper);
    }

    @Override
    public int updateShopCar(Shoppingcart shoppingcart) {
        QueryWrapper<Shoppingcart> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", shoppingcart.getUserId());
        queryWrapper.eq("book_id", shoppingcart.getBookId());
        if (baseMapper.update(shoppingcart,queryWrapper) > 0)return 1;
        baseMapper.insert(shoppingcart);
        return 0;
    }

    @Override
    public int delShopCar(String id) {
        return 0;
    }

    @Override
    public int deleteShoppingCart(String userId, String bookId) {
        QueryWrapper<Shoppingcart> qw=new QueryWrapper<>();
        qw.eq("user_id",userId);
        qw.eq("book_id",bookId);
        return baseMapper.delete(qw);


    }

    @Override
    public int deleteShoppingCart(String userId) {
        QueryWrapper<Shoppingcart> qw=new QueryWrapper<>();
        qw.eq("user_id",userId);
        return baseMapper.delete(qw);
    }
}
