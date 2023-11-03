package com.example.bookstore.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("order_list")
public class Order {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private Integer userId;
    private Integer bookId;
    private Integer nums;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date time;
    private Double cost;
    private String bookName;
    private String userName;
    private String bookClass;
}
