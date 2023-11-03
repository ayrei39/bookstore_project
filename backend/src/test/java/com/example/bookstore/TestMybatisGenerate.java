package com.example.bookstore;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.OutputFile;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

import java.util.Collections;

public class TestMybatisGenerate {
    public static void main(String[] args) {
        FastAutoGenerator.create("jdbc:mysql://localhost:3306/bookstore", "root", "111111")
                .globalConfig(builder -> {
                    builder.author("lpy") // 设置作者
                            .enableSwagger() // 开启 swagger 模式
                            .outputDir("D://mybatis"); // 指定输出目录
                })
                .packageConfig(builder -> {
                    builder.parent("com.example.bookstore") // 设置父包名
                            .moduleName("") // 设置父包模块名
                            .pathInfo(Collections.singletonMap(OutputFile.mapper, "D://mybatis//com/example/bookstore/mapper")); // 设置mapperXml生成路径
                })
                .strategyConfig(builder -> {
                    builder.addInclude("book_pic") // 设置需要生成的表名
                            .addTablePrefix("t_", "c_"); // 设置过滤表前缀
                })
                .templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
                .execute();
    }


}
