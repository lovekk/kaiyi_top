商城+垃圾分类回收+凯易币转账+直播
===============

> 运行环境要求PHP7.1+。

## 主要特性

### 开源无加密
源码开源无加密，有详细的代码注释，有完整系统手册
### TP6框架
使用最新的 ThinkPHP 6.0框架开发
### 前端采用Vue CLI框架
前端使用Vue CLI框架nodejs打包，页面加载更流畅，用户体验更好
### 标准接口
标准接口、前后端分离，二次开发更方便
### 支持队列
降低流量高峰，解除耦合，高可用
### 长连接
减少CPU及内存使用及网络堵塞，减少请求响应时长
### 无缝事件机制
行为扩展更方便，方便二次开发
### 后台快速生成表单
后台应用form-builder 无需写页面快速增删改查
### 数据表格导出
PHPExcel数据导出,导出表格更加美观可视；
### 数据统计分析
后台使用ECharts图表统计，实现用户、产品、订单、资金等统计分析
### 强大的后台权限管理
后台多种角色、多重身份权限管理，权限可以控制到每一步操作
### 一件安装
自动检查系统环境一键安装



## 手动安装
1.创建数据库，倒入数据库文件
2.修改数据库连接文件
配置文件路径/.env
~~~
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = 127.0.0.1 #数据库连接地址
DATABASE = test #数据库名称
USERNAME = username #数据库登录账号
PASSWORD = password #数据库登录密码
HOSTPORT = 3306 #数据库端口
CHARSET = utf8
DEBUG = true

[LANG]
default_lang = zh-cn
~~~
3.修改目录权限（linux系统）777
/public
/runtime
4.后台登录：
http://域名/admin
默认账号：admin 密码：crmeb.com

## 定时任务
在自动收货,库存预警等功能使用到
```sh
php think timer [ status ] [ --d ]
```
参数
- status: 状态
    - start: 启动
    - stop: 关闭
    - restart: 重启
- --d : 后台执行
## 长连接服务
在h5聊天,后台管理员消息通知等功能使用到
```sh
php think workerman [ status ] [ server ] [ --d ]
```
windows环境下需要分三步执行
```sh
# 内部通讯服务
php think workerman start channel
# h5端聊天服务
php think workerman start chat
# 后台管理员通知
php think workerman start admin
```
参数
- status: 状态
    - start: 启动
    - stop: 关闭
    - restart: 重启
- server: 服务 (windows)
    - channel: 内部通讯
    - chat: h5
    - admin: 后台

- --d : 后台执行

## 文档

[TP6开发手册](https://www.kancloud.cn/manual/thinkphp6_0/content)




