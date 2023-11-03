package com.example.bookstore.service.impl.Order;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.bookstore.entity.Book;
import com.example.bookstore.entity.Order;
import com.example.bookstore.entity.User;
import com.example.bookstore.mapper.BookMapper;
import com.example.bookstore.mapper.OrderMapper;
import com.example.bookstore.mapper.UserMapper;
import com.example.bookstore.service.Order.AddOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AddOrderServiceImpl implements AddOrderService {
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private BookMapper bookMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    public Map<String, String> add(Map<String, String> data) {
        Integer user_id = Integer.parseInt(data.get("userId"));

        QueryWrapper<User> qUser = new QueryWrapper<>();
        qUser.eq("user_id",user_id);
        User user = userMapper.selectOne(qUser);
        String userName = user.getUsername();
        String bookName = data.get("bookName");
        Integer nums = Integer.parseInt(data.get("nums"));
        Date now = new Date();
        Double cost = Double.parseDouble(data.get("cost"));

        QueryWrapper<Book> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("book_name",bookName);
        Book book = bookMapper.selectOne(queryWrapper);

        Integer book_id = book.getBookId();
        String bookClass = book.getBookClass();

        Map<String, String> map = new HashMap<>();
        Order new_order = new Order(null, user_id, book_id, nums, now, cost,bookName,userName,bookClass);
        orderMapper.insert(new_order);
        map.put("error_message","success");

        return map;
    }
}
