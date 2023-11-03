package com.example.bookstore.controller;


import com.example.bookstore.controller.dto.shopcarDTO;
import com.example.bookstore.entity.Shoppingcart;
import com.example.bookstore.service.IBookService;
import com.example.bookstore.service.IShoppingcartService;
import com.example.bookstore.util.Result;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author sqk
 * @since 2023-10-14
 */
@Api(tags = "购物车")
@RestController
@RequestMapping("/shoppingcart")
public class ShoppingcartController {
    @Autowired
    private IShoppingcartService shopcarService;
    @Autowired
    private IBookService bookService;
    @GetMapping("/getshopcar")
    public Result shopcart(String userId){
        System.out.println(userId);
        if (StringUtils.isEmpty(userId)) {
            return Result.fail().message("信息丢失 请刷新重试");
        }
        List<Shoppingcart> shopcar=shopcarService.getshopcar(userId);
        List<shopcarDTO> ans=new ArrayList<>();
        for(Shoppingcart shoppingcart:shopcar){
            System.out.println(shoppingcart.getBookId());
            ans.add(new shopcarDTO(bookService.getById(String.valueOf( shoppingcart.getBookId() )),shoppingcart.getNum()));
        }
        System.out.println(ans);
        return Result.ok(ans);
    }

         /// 查询用户的购物车的某个商品
    @ResponseBody
    @GetMapping("/getoneofshopcar")
    public Result findOneBook(String userId, String bookId) {

        if (StringUtils.isEmpty(userId)|| StringUtils.isEmpty(bookId))return Result.fail().message("空数据");
        Shoppingcart one = shopcarService.getOneBook(userId, bookId);
        System.out.println(one);
        if (one == null) return Result.fail().message("未查询到");
        return Result.ok(one);
    }


    @PostMapping("/getBookNum")
    public Result getBookNum(@RequestBody Shoppingcart shoppingcart) {
        String userId = shoppingcart.getUserId().toString();
        String bookId = shoppingcart.getBookId().toString();
        if (StringUtils.isEmpty(userId)|| StringUtils.isEmpty(bookId))return Result.fail().message("空数据");
        Shoppingcart one = shopcarService.getOneBook(userId, bookId);
        System.out.println(one);
        if (one == null) return Result.fail().message("未查询到");
        return Result.ok(one);
    }

    // 更新购物车商品数量  参数需要全部传入
    @PostMapping("/updateShopCar")
    public Result updateShopCar(@RequestBody Shoppingcart shoppingcart) {
        if (shoppingcart == null ||  shoppingcart.getUserId() == null ||shoppingcart.getBookId() == null ) return Result.fail().message("传入数据错误");
        if(shoppingcart.getNum()==0) {
            shopcarService.deleteShoppingCart(shoppingcart.getUserId().toString(),shoppingcart.getBookId().toString());
            return Result.ok().message("已从购物车中删除本书！");
        }
        if (shopcarService.updateShopCar(shoppingcart) > 0) {
            return Result.ok(findOneBook(
                    shoppingcart.getUserId().toString(),
                    shoppingcart.getBookId().toString())).message("更新成功");
        }
        return Result.ok().message("放入购物车成功");
    }
    @PostMapping("/deleshopcar")
    public Result deleteShopcar(String userId){
        return Result.ok(shopcarService.deleteShoppingCart(userId));
    }
}
