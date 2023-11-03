package com.example.bookstore.controller.Order;

import com.example.bookstore.entity.Order;
import com.example.bookstore.service.Order.GetOrderListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GetListController {
    @Autowired
    private GetOrderListService getOrderListService;

    @GetMapping("/order/getlist")
    public List<Order> getList(@RequestParam("userId") String useId) {
        System.out.println(useId);
        return getOrderListService.getList(useId);
    }
}
