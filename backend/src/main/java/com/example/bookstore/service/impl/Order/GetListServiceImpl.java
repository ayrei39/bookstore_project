package com.example.bookstore.service.impl.Order;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.bookstore.entity.Order;
import com.example.bookstore.mapper.OrderMapper;
import com.example.bookstore.service.IBookService;
import com.example.bookstore.service.Order.GetOrderListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetListServiceImpl implements GetOrderListService {
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    IBookService bookService;

    @Override
    public List<Order> getList(String userid) {
        QueryWrapper<Order> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userid);
//        List<Order> orderList = orderMapper.selectList(queryWrapper);
        return orderMapper.selectList(queryWrapper);
    }
}
