package com.example.bookstore.controller;

import com.example.bookstore.controller.dto.BookDTO;
import com.example.bookstore.service.IBookPicService;
import com.example.bookstore.service.IBookService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import com.example.bookstore.util.Result;
import org.springframework.web.bind.annotation.RestController;
/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@Api(tags = "商品图片管理")
    @RestController
    @RequestMapping("/bookPic")
    public class BookPicController {
        @Autowired
        private IBookPicService bookpicService;
        @Autowired
    private IBookService bookService;
    //    根据商品id,获取商品图片
    @ApiOperation("根据book_id,获取书本图片")
    @GetMapping("/getBookPic")
    public Result getBookPic(String book_id) {
        System.out.println(book_id);
        if (StringUtils.isEmpty(book_id))return Result.fail().message("空数据");
        return Result.ok(new BookDTO(bookService.getById(book_id),bookpicService.getBookPic(book_id) ));
    }
}
