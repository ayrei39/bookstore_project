package com.example.bookstore.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.bookstore.entity.Book;
import com.example.bookstore.service.IBookService;
import com.example.bookstore.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    IBookService bookService;
    //通过书名查找书的ID;
    @GetMapping("/getbookId")
    Result reserchbookByname(@RequestParam("bookname") String bookname){
        if(bookname!=null) {
            QueryWrapper<Book> qw=new QueryWrapper<>();
            qw.eq("book_name",bookname);
           if(bookService.getOne(qw)==null) return Result.fail().message("数据库没有这本书！");
           else return Result.ok(bookService.getOne(qw).getBookId());
        }
        return Result.fail().message("书名不能为空！");
    }
    //根据书名模糊查询
    @GetMapping("/getbook")
    Result reserchbookByname_1(@RequestParam("bookName") String bookname){
        QueryWrapper<Book> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("book_name", bookname);
        List<Book> bookList=bookService.list(queryWrapper);
        System.out.println(bookList);
        if(bookList.isEmpty()) return Result.fail().message("商城暂无此书！");
        else return Result.ok(bookList);
    }

    @GetMapping("/getbookName")
    public Map<String,String> getbookName(@RequestParam("bookId")Integer bookId) {
        QueryWrapper<Book> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("book_id",bookId);
        Book book =  bookService.getOne(queryWrapper);
        Map<String, String> map = new HashMap<>();
        map.put("bookName",book.getBookName());
        return map;
    }
}
