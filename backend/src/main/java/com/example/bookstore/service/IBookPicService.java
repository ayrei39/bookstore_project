package com.example.bookstore.service;

import com.example.bookstore.entity.BookPic;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
public interface IBookPicService extends IService<BookPic> {
    List<BookPic> getBookPic(String id);
}
