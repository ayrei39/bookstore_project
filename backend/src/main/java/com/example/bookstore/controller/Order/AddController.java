package com.example.bookstore.controller.Order;

import com.example.bookstore.service.Order.AddOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AddController {
    @Autowired
    private AddOrderService addOrderService;

    @PostMapping("/order/add")
    public Map<String,String> add(@RequestParam Map<String,String> data) {
        return addOrderService.add(data);
    }
}
