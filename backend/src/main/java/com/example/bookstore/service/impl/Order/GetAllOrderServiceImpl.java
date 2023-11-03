package com.example.bookstore.service.impl.Order;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.bookstore.entity.Order;
import com.example.bookstore.mapper.OrderMapper;
import com.example.bookstore.service.Order.GetAllOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetAllOrderServiceImpl implements GetAllOrderService {
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public List<Order> getAllOrder() {
        QueryWrapper<Order> queryWrapper = new QueryWrapper<>();
        return orderMapper.selectList(queryWrapper);
//        return null;
    }
}
