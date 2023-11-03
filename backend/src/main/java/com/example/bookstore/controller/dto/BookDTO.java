package com.example.bookstore.controller.dto;

import com.example.bookstore.entity.Book;
import com.example.bookstore.entity.BookPic;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    Book book;
    List<BookPic> bp;
}
