package com.example.bookstore.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@ApiModel(value = "Book对象", description = "")
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;
    @TableId(value = "book_id", type = IdType.AUTO)
    private Integer bookId;

    private String bookName;

    private String bookClass;

    private String bookDescription;

    private String bookPicture;

    private Double bookPrice;

    private Integer bookNum;

    private Integer bookSale;

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }
    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
    public String getBookClass() {
        return bookClass;
    }

    public void setBookClass(String bookClass) {
        this.bookClass = bookClass;
    }
    public String getBookDescription() {
        return bookDescription;
    }

    public void setBookDescription(String bookDescription) {
        this.bookDescription = bookDescription;
    }
    public String getBookPicture() {
        return bookPicture;
    }

    public void setBookPicture(String bookPicture) {
        this.bookPicture = bookPicture;
    }
    public Double getBookPrice() {
        return bookPrice;
    }

    public void setBookPrice(Double bookPrice) {
        this.bookPrice = bookPrice;
    }
    public Integer getBookNum() {
        return bookNum;
    }

    public void setBookNum(Integer bookNum) {
        this.bookNum = bookNum;
    }
    public Integer getBookSale() {
        return bookSale;
    }

    public void setBookSale(Integer bookSale) {
        this.bookSale = bookSale;
    }

    @Override
    public String toString() {
        return "Book{" +
            "bookId=" + bookId +
            ", bookName=" + bookName +
            ", bookClass=" + bookClass +
            ", bookDescription=" + bookDescription +
            ", bookPicture=" + bookPicture +
            ", bookPrice=" + bookPrice +
            ", bookNum=" + bookNum +
            ", bookSale=" + bookSale +
        "}";
    }
}
