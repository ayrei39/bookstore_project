package com.example.bookstore.controller.Order;

import com.example.bookstore.entity.Order;
import com.example.bookstore.service.Order.GetAllOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GetAllOrderController {
    @Autowired
    private GetAllOrderService getAllOrderService;

    @GetMapping("/order/getall")
    public List<Order> getAllOrder() {

        return getAllOrderService.getAllOrder();
    }
}
