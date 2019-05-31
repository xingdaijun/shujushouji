## 基本信息

### 地址

| 地址 | 说明 | 备注 |
| :--------- | :--------- | :--------- |
| http://zhuishu.zhiask.cn | 测试服地址 |  |
| /api | API接口路径 |  |

### 管理员登录

#### 请求方法
* POST

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;username | true | string | 账号 |
| &nbsp;&nbsp;&nbsp;&nbsp;password | true | string | 密码 |

#### 接口名称
* login

#### 请求示例
    {
        "action": "login",
        "data": {
            "username": "admin",
            "password": "123456"
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | user id |
| &nbsp;&nbsp;&nbsp;&nbsp;uname | string | 用户名 |
| &nbsp;&nbsp;&nbsp;&nbsp;token | string | 用户口令 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
            "id": 1,
            "uname": "admin",
            "token": "babd637e533c21a8a06c05947b2e35acad8c2f43"
        }
    }
    
### 修改密码

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | user id |
| &nbsp;&nbsp;&nbsp;&nbsp;password | true | string | 密码 |
| &nbsp;&nbsp;&nbsp;&nbsp;password_new | true | string | 新密码 |

#### 接口名称
* mod_pwd

#### 请求示例
    {
        "action": "mod_pwd",
        "data": {
            "id": 1,
            "password": "123456",
            "password_new": "123456"
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }

### 搜索书籍

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;keywords | true | string | 关键字 |

#### 接口名称
* search_book

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "search_book",
            data: {
                "keywords": "霸道总裁",
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 书籍 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | string | 来源 |
| &nbsp;&nbsp;&nbsp;&nbsp;update_time | string | 更新时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;recent_chapter | string | 最新章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;image | string | 封面链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;type | string | 类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;intro | string | 简介 |
| &nbsp;&nbsp;&nbsp;&nbsp;flag | int | 连载状态 |
| &nbsp;&nbsp;&nbsp;&nbsp;catalog_link | string | 目录链接 |


#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "author": "李道然",
                "source": "shenqi",
                "update_time": "2019-05-13 22:20:42",
                "recent_chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "image": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3377379%2F3377379_41e9e94e75bb41f7bfd67acf9e84a771.jpg%2F",
                "type": "玄幻",
                "intro": "修炼了将近五千年的方羽，还是没有突破炼气期…… “我真的只有炼气期，但你们别惹我！”",
                "flag": 0,
                "catalog_link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d/chapter"
            }
        ]
    }
    
### 最新更新

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | false | string | 源 |
| &nbsp;&nbsp;&nbsp;&nbsp;page | false | int | 分页 |
| &nbsp;&nbsp;&nbsp;&nbsp;num | false | int | 数量 |

#### 接口名称
* list_book

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "list_book",
            data: {
                "source": "shenqi",
                "page": 1,
                "num": 10
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 书籍 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | string | 来源 |
| &nbsp;&nbsp;&nbsp;&nbsp;update_time | string | 更新时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;recent_chapter | string | 最新章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;image | string | 封面链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;type | string | 类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;intro | string | 简介 |
| &nbsp;&nbsp;&nbsp;&nbsp;flag | int | 连载状态 |
| &nbsp;&nbsp;&nbsp;&nbsp;catalog_link | string | 目录链接 |
| total | int | 总数 |


#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "author": "李道然",
                "source": "shenqi",
                "update_time": "2019-05-13 22:20:42",
                "recent_chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "image": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3377379%2F3377379_41e9e94e75bb41f7bfd67acf9e84a771.jpg%2F",
                "type": "玄幻",
                "intro": "修炼了将近五千年的方羽，还是没有突破炼气期…… “我真的只有炼气期，但你们别惹我！”",
                "flag": 0,
                "catalog_link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d/chapter"
            }
        ],
        "total": 10
    }
    
### 删除章节

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | array | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | user id |

#### 接口名称
* del_chapters

#### 请求示例
    {
        "action": "del_chapters",
        "data": [
            {
                "id": 1,
            }
            {
                "id": 2,
            }
        ]
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 更新

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | book id |

#### 接口名称
* upd_book

#### 请求示例
    {
        "action": "upd_book",
        "data": {
            "id": 1
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 重采

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | array | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 章节 id |

#### 接口名称
* re_crawler

#### 请求示例
    {
        "action": "re_crawler",
        "data": [
            {
                "id": 1
            },
            {
                "id": 2
            }
        ]
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 清空所有章节

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | book id |

#### 接口名称
* cls_chapter

#### 请求示例
    {
        "action": "cls_chapter",
        "data": {
            "id": 1
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 删除书籍

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | book id |

#### 接口名称
* del_book

#### 请求示例
    {
        "action": "del_book",
        "data": {
            "id": 1
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 修改章节

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 章节 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | true | string | 章节标题 |
| &nbsp;&nbsp;&nbsp;&nbsp;content | true | string | 章节内容 |

#### 接口名称
* mod_chapter

#### 请求示例
    {
        "action": "mod_chapter",
        "data": {
            "id": 6500781,
            "title": "新的标题",
            "content": "<p>新的内容<p>"
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 换源

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | book id |
| &nbsp;&nbsp;&nbsp;&nbsp;source | true | string | 源 |

#### 接口名称
* change_source

#### 请求示例
    {
        "action": "change_source",
        "data": {
            "id": 1,
            "source": "zhuishu",
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 插入章节

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;bid | true | int | book id |
| &nbsp;&nbsp;&nbsp;&nbsp;cid | true | int | 章节 id |
| &nbsp;&nbsp;&nbsp;&nbsp;link | true | string | 采集链接 |

#### 接口名称
* insert_chapter

#### 请求示例
    {
        "action": "change_source",
        "data": {
            "bid": 1,
            "cid": 1,
            "link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d"
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 采集方案

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |

#### 接口名称
* list_crawler

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "list_crawler",
            data: {
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | 方案名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | string | 源 |
| &nbsp;&nbsp;&nbsp;&nbsp;filter | array | 过滤文本 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pattern | string | 正则匹配 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;replace | string | 替换文本 |
| &nbsp;&nbsp;&nbsp;&nbsp;interval | int | 采集间隔（毫秒） |
| &nbsp;&nbsp;&nbsp;&nbsp;account | array | 账号列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user | string | 账号 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass | string | 密码 |


#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "name": "追书神器",
                "source": "shenqi",
                "filter": [
                    {
                        "pattern":'各位书友要是觉得《(.+?)》不错，请向您QQ群和微博里的朋友推荐哦！',
                        "replace":""
                    }
                ],
                "interval": 3000,
                "account": [
                    {
                        "user": "zhuishu1",
                        "pass": "123456"
                    }
                ]
             }
        ]
    }
    
### 采集清单

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;page | false | int | 分页 |
| &nbsp;&nbsp;&nbsp;&nbsp;num | false | int | 数量 |

#### 接口名称
* list_crawling

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "list_crawling",
            data: {
                "page": 1,
                "num": 10
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 书籍 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | string | 来源 |
| &nbsp;&nbsp;&nbsp;&nbsp;update_time | string | 更新时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;recent_chapter | string | 最新章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;image | string | 封面链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;type | string | 类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;intro | string | 简介 |
| &nbsp;&nbsp;&nbsp;&nbsp;flag | int | 连载状态 |
| &nbsp;&nbsp;&nbsp;&nbsp;catalog_link | string | 目录链接 |
| total | int | 总数 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "author": "李道然",
                "source": "shenqi",
                "update_time": "2019-05-13 22:20:42",
                "recent_chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "image": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3377379%2F3377379_41e9e94e75bb41f7bfd67acf9e84a771.jpg%2F",
                "type": "玄幻",
                "intro": "修炼了将近五千年的方羽，还是没有突破炼气期…… “我真的只有炼气期，但你们别惹我！”",
                "flag": 0,
                "catalog_link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d/chapter"
            }
        ],
        "total": 10
    }
    
### 搜索采集清单

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;keywords | true | string | 关键字 |
| &nbsp;&nbsp;&nbsp;&nbsp;page | false | int | 分页 |
| &nbsp;&nbsp;&nbsp;&nbsp;num | false | int | 数量 |

#### 接口名称
* search_crawling

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "search_crawling",
            data: {
                "keywords": "霸道总裁",
                "page": 1,
                "num": 10
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 书籍 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | string | 来源 |
| &nbsp;&nbsp;&nbsp;&nbsp;update_time | string | 更新时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;recent_chapter | string | 最新章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;image | string | 封面链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;type | string | 类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;intro | string | 简介 |
| &nbsp;&nbsp;&nbsp;&nbsp;flag | int | 连载状态 |
| &nbsp;&nbsp;&nbsp;&nbsp;catalog_link | string | 目录链接 |
| total | int | 总数 |


#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "author": "李道然",
                "source": "shenqi",
                "update_time": "2019-05-13 22:20:42",
                "recent_chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "image": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3377379%2F3377379_41e9e94e75bb41f7bfd67acf9e84a771.jpg%2F",
                "type": "玄幻",
                "intro": "修炼了将近五千年的方羽，还是没有突破炼气期…… “我真的只有炼气期，但你们别惹我！”",
                "flag": 0,
                "catalog_link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d/chapter"
            }
        ],
        "total": 10
    }
    
### 测试采集

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;link | true | string | 采集链接 |

#### 接口名称
* test_crawler

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "test_crawler",
            data: {
                "id": 1,
                "link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d"
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 书籍 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;source | string | 来源 |
| &nbsp;&nbsp;&nbsp;&nbsp;update_time | string | 更新时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;recent_chapter | string | 最新章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;image | string | 封面链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;type | string | 类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;intro | string | 简介 |
| &nbsp;&nbsp;&nbsp;&nbsp;flag | int | 连载状态 |
| &nbsp;&nbsp;&nbsp;&nbsp;catalog_link | string | 目录链接 |


#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "author": "李道然",
                "source": "shenqi",
                "update_time": "2019-05-13 22:20:42",
                "recent_chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "image": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3377379%2F3377379_41e9e94e75bb41f7bfd67acf9e84a771.jpg%2F",
                "type": "玄幻",
                "intro": "修炼了将近五千年的方羽，还是没有突破炼气期…… “我真的只有炼气期，但你们别惹我！”",
                "flag": 0,
                "catalog_link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d/chapter"
            }
        ]
    }
    
### 新增采集

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | false | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | false | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;link | false | string | 链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;filename | false | string | 文件名 |

#### 接口名称
* add_crawler

#### 请求示例
    {
        "action": "add_crawler",
        "data": {
            "id": 1,
            "title": "七界传说",
            "author": "李小明",
            "link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d",
            "filename": "MTIwMTktMDUtMjRUMTI6MTc6MDUuNzMwNjAz"
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 清空采集源

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |

#### 接口名称
* cls_crawler

#### 请求示例
    {
        "action": "cls_crawler",
        "data": {
            "id": 1,
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 修改采集方案

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;name | false | string | 方案名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;pattern | false | string | 过滤正则 |
| &nbsp;&nbsp;&nbsp;&nbsp;replace | false | string | 替换文本 |
| &nbsp;&nbsp;&nbsp;&nbsp;interval | false | int | 采集间隔（毫秒） |
| &nbsp;&nbsp;&nbsp;&nbsp;account | false | array | 账号列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user | false | string | 账号 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass | false | string | 密码 |

#### 接口名称
* mod_crawler

#### 请求示例
    {
        "action": "mod_crawler",
        "data": {
            "id": 1,
            "name": "追书神器",
            "filter": [
                {
                    "pattern":'各位书友要是觉得《(.+?)》不错，请向您QQ群和微博里的朋友推荐哦！',
                    "replace":""
                }
            ],
            "interval": 3000,
            "account": [
                {
                    "user": "zhuishu1",
                    "pass": "123456"
                }
            ]
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 采集任务列表

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;page | false | int | 分页 |
| &nbsp;&nbsp;&nbsp;&nbsp;num | false | int | 数量 |

#### 接口名称
* list_task

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "list_task",
            data: {
                "id": 1,
                "page": 1,
                "num": 10
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 任务 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;author | string | 作者 |
| &nbsp;&nbsp;&nbsp;&nbsp;link | string | 链接 |
| &nbsp;&nbsp;&nbsp;&nbsp;start_time | string | 开始时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;chapter_title | string | 当前章节标题 |
| &nbsp;&nbsp;&nbsp;&nbsp;chapter_idx | string | 当前章节序号 |
| &nbsp;&nbsp;&nbsp;&nbsp;chapter_cnt | string | 章节数量 |
| &nbsp;&nbsp;&nbsp;&nbsp;book_idx | int | 采集进度 |
| &nbsp;&nbsp;&nbsp;&nbsp;book_cnt | int | 采集数量 |
| &nbsp;&nbsp;&nbsp;&nbsp;status | int | 状态 |
| total | int | 总数 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "author": "李道然",
                "link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d",
                "start_time": "2019-05-13 22:20:42",
                "chapter_title": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "chapter_idx": 290,
                "chapter_cnt": 1884,
                "book_idx": 21,
                "book_cnt": 100,
                "status": 1
            }
        ],
        "total": 10
    }
    
### 新建采集任务

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;task | true | int | 采集任务 id |

#### 接口名称
* add_task

#### 请求示例
    {
        "action": "add_task",
        "data": {
            "id": 1,
            "task": 1
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 删除采集任务

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |
| &nbsp;&nbsp;&nbsp;&nbsp;task | true | int | 采集任务 id |

#### 接口名称
* del_task

#### 请求示例
    {
        "action": "del_task",
        "data": {
            "id": 1,
            "task": 1
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 清空采集任务

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 采集方案 id |

#### 接口名称
* cls_task

#### 请求示例
    {
        "action": "cls_task",
        "data": {
            "id": 1,
        }
    }

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        }
    }
    
### 错误日志列表

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;page | false | int | 分页 |
| &nbsp;&nbsp;&nbsp;&nbsp;num | false | int | 数量 |

#### 接口名称
* list_logging

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "list_logging",
            data: {
                "page": 1,
                "num": 10
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 错误id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;chapter | string | 章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;event_time | string | 事件时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;desc | string | 错误描述 |
| &nbsp;&nbsp;&nbsp;&nbsp;status | int | 状态 |
| total | int | 总数 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "event_time": "2019-05-13 22:20:42",
                "desc": "网络超时",
                "status": 1
            }
        ],
        "total": 10
    }
    
### 搜索错误日志

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;type | true | int | 类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;status | true | int | 状态 |
| &nbsp;&nbsp;&nbsp;&nbsp;page | false | int | 分页 |
| &nbsp;&nbsp;&nbsp;&nbsp;num | false | int | 数量 |

#### 接口名称
* search_logging

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "search_logging",
            data: {
                "type": 1,
                "status": 2,
                "page": 1,
                "num": 10
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | array | 结果 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | int | 错误 id |
| &nbsp;&nbsp;&nbsp;&nbsp;title | string | 书名 |
| &nbsp;&nbsp;&nbsp;&nbsp;chapter | string | 章节 |
| &nbsp;&nbsp;&nbsp;&nbsp;event_time | string | 事件时间 |
| &nbsp;&nbsp;&nbsp;&nbsp;desc | string | 错误描述 |
| &nbsp;&nbsp;&nbsp;&nbsp;status | int | 状态 |
| total | int | 总数 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "event_time": "2019-05-13 22:20:42",
                "desc": "网络超时",
                "status": 1
            }
        ],
        "total": 10
    }
    
### 删除错误日志

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | true | int | 错误 id |

#### 接口名称
* del_logging

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "del_logging",
            data: {
                "id": 1
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        
        }
    }
    
### 处理错误日志

#### 请求方法
* POST

#### 请求头
| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| Access-Token | true | string | 访问口令 |

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| action | true | string | 接口名称 |
| data | true | object | 接口数据 |
| &nbsp;&nbsp;&nbsp;&nbsp;id | false | int | 错误 id |

#### 接口名称
* mod_logging

#### 请求示例
    httpx.post(
        config.url + "api",
        JSON.stringify({
            action: "mod_logging",
            data: {
                "id": 1
            }
        }),
        {
            headers: {
                "Access-Token": token
            }
        }
    )
    

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| errcode | int | 结果码 |
| errmsg | string | 结果描述 |
| data | object | 结果 |

#### 返回示例

    {
        "errcode": 0,
        "errmsg": "success",
        "data": {
        
        }
    }

## 上传文件

### 地址

| 地址 | 说明 | 备注 |
| :--------- | :--------- | :--------- |
| /upload | 上传文件路径 |  |

#### 请求方法
* POST

#### 请求参数

| 参数 | 必须 | 类型 | 说明 |
| :--------- | :--------- | :--------- | :--------- |
| file | true | file | 文件 |

#### 返回结果
* JSON

| 参数 | 类型 | 说明 |
| :--------- | :--------- | :--------- |
| filename | string | 生成文件名 |