package com.example.bookstore;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.bookstore.entity.Book;
import com.example.bookstore.entity.BookPic;
import com.example.bookstore.mapper.BookMapper;
import com.example.bookstore.mapper.BookPicMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Random;

@SpringBootTest
public class TestUserMyBatis {
    @Autowired(required = false)
    private BookPicMapper bookpicMapper;
    @Autowired
    private BookMapper bookMapper;
//    @Test
//    public void save(){
//        for(int j=1;j<=60;j++){
//            String bookname=bookMapper.selectById(j).getBookName().toString();
//            for(int i=1;i<=4;i++){
//                //System.out.println("/pic/content/"+bookname+"_"+i+".jpg");
//                BookPic bookPic=new BookPic();
//                bookPic.setBookId(j);
//                bookPic.setBookPicture("/pic/content/"+bookname+"_"+i+".jpg");
//                int rows = bookpicMapper.insert(bookPic);
//                //System.out.println(rows);
//            }
//        }
    @Test
    public void save2(){
        for(int i=1;i<=60;i++){
            Book book=bookMapper.selectById(i);
            book.setBookNum(100);
            book.setBookPicture("/pic/cover/"+book.getBookName()+".jpg");
            book.setBookPrice(Math.random()*30+10);
            book.setBookSale((int)(Math.random()*30+10));
            bookMapper.updateById(book);
        }

    }
}
