package com.example.bookstore.service;

import com.example.bookstore.entity.Book;
import com.example.bookstore.entity.Shoppingcart;
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
public interface IShoppingcartService extends IService<Shoppingcart> {
    List<Shoppingcart> getshopcar(String id);

    Shoppingcart getOneBook(String userId, String book_id);

    int updateShopCar(Shoppingcart shoppingcart);

    int delShopCar(String id);
    int deleteShoppingCart(String userId,String bookId);
    int deleteShoppingCart(String userId);
}
