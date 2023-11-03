package com.example.bookstore.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.bookstore.entity.BookPic;
import com.example.bookstore.mapper.BookPicMapper;
import com.example.bookstore.service.IBookPicService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.bookstore.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@Service
public class BookPicServiceImpl extends ServiceImpl<BookPicMapper, BookPic> implements IBookPicService {
    @Override
    public List<BookPic> getBookPic(String id) {
        QueryWrapper<BookPic> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("book_id", id);
        return baseMapper.selectList(queryWrapper);
    }
}
