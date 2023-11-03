package com.example.bookstore.service.Order;

import com.example.bookstore.entity.Order;

import java.util.List;

public interface GetOrderListService {
    List<Order> getList(String userid);
}
