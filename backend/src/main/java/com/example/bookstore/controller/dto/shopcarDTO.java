package com.example.bookstore.controller.dto;


import com.example.bookstore.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class shopcarDTO {
    Book book;
    int num;
    shopcarDTO(int num,Book b){
        this.num = num;
        this.book = b;
    }
}