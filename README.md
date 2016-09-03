# fis-postprocessor-px2rem

fis3/fis `px` 自动转为 `rem` 插件，提高源码可维护性

## 安装

* npm i fis-postprocessor-px2rem  
    `npm install -g fis-postprocessor-px2rem`
* 修改 fis-conf.js  
    ```
    fis.match('*less', {
        postprocessor: fis.plugin('px2rem', {
            remUnit: 75
        })
    });
    ```

## 用法

* 该插件要配合基于rem的flex布局方案使用，推荐大家用手淘的`lib-flexible`
* 通过增加注释判断转换类型，主要有：
    1. 默认所有的px都会转为rem
    2. `/*no*/` 不转换，常用于 1px的处理
    2. `/*px*/` 强制使用px，即不适配，各个分辨率看到的大小一样，字体通常会用到。


## 参数

```
    {
        baseDpr: 2,             // dpr基准
        remUnit: 75,            // rem 基准，由设计稿决定
        remPrecision: 6         // rem 精确位数
    }
```

## Example

#### Pre processing:

One raw stylesheet: `test.css`

```
.selector {
    width: 150px;
    height: 64px; /*px*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
}
```

#### After processing:

Rem version: `test.css`

```
.selector {
    width: 2rem;
    border: 1px solid #ddd;
}
[data-dpr="1"] .selector {
    height: 32px;
    font-size: 14px;
}
[data-dpr="2"] .selector {
    height: 64px;
    font-size: 28px;
}
[data-dpr="3"] .selector {
    height: 96px;
    font-size: 42px;
}
```

