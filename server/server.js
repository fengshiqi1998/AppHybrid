"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
var scourses = [
    new Course(1, '2016级混合应用开发', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 23, 100),
    new Course(2, '2017-12-软件测试基础', "/imgs/swtest.png", 10, 90),
    new Course(3, '2017web开发（二）', "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130", 15, 97),
    new Course(4, '2016级测试方向-Web系统测试', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 30, 99),
    new Course(5, '2016级HTML5与CSS3前端开发', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 40, 100),
    new Course(6, '2017级3、4班软件测试基础', "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130", 50, 101),
    new Course(7, '2018级信息素养实践', 'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130', 3, 57),
    new Course(8, '2018级计算机导论', 'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130', 4, 105),
    new Course(9, '2017级网络原理', 'http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130', 12, 125),
    new Course(10, '2017级程序设计基础:C语言', 'http://usercontent.edu2act.cn/media/team/18-03-05/5AmFY6EtdvJUXsJKVAPXqK.jpg?imageView2/1/w/230/h/130', 5, 99),
    new Course(11, '2016级操作系统', 'http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130', 15, 396),
    new Course(12, '数据结构', 'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130', 17, 85)
];
app.get('/api', function (req, res) {
    res.json(scourses);
});
app.get('/api/courses', function (req, res) {
    res.json(scourses);
});
app.get('/api/courses/:id', function (req, res) {
    // res.json(courses);
    res.json(scourses.filter(function (ele) { return ele.id == req.params.id; }));
});
var Task = /** @class */ (function () {
    function Task(id, taskName, author, time, Fraction, WaitCount, UnfinishedCount, AcceptedCount) {
        this.id = id;
        this.taskName = taskName;
        this.author = author;
        this.time = time;
        this.Fraction = Fraction;
        this.WaitCount = WaitCount;
        this.UnfinishedCount = UnfinishedCount;
        this.AcceptedCount = AcceptedCount;
    }
    return Task;
}());
var tasks = [
    new Task(1, '任务二 -- js基础练习与应用', '刘冠军', '2018-09-30 16:35', 10, 13, 0, 77),
    new Task(2, '任务一 -- 组件交互与服务', '刘冠军', '2018-09-21 13:54', 10, 7, 7, 76),
    new Task(3, '第三次作业', '刘冠军', '2018-10-09 14:49', 2, 2, 30, 22),
    new Task(4, '第四次作业', '刘冠军', '2018-10-19 15:32', 2, 9, 3, 25),
    new Task(5, '第五次作业', '刘冠军', '2018-10-29 12:24', 20, 0, 3, 99)
];
app.get('/api/tasks', function (req, res) {
    res.json(tasks);
});
app.get('/api/tasks/:id', function (req, res) {
    // res.json(courses);
    res.json(tasks.filter(function (ele) { return ele.id == req.params.id; }));
});
var Lesson = /** @class */ (function () {
    function Lesson(id, courseName, images, content, classHour, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.content = content;
        this.classHour = classHour;
        this.person = person;
    }
    return Lesson;
}());
var ccourses = [
    new Lesson(1, 'Github 开源之旅视频课程第一季：启程', 'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190', '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull', 24, 4524),
    new Lesson(2, 'CSS3基础', 'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190', 'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。', 24, 424),
    new Lesson(3, 'HTML5基础', 'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190', 'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。', 425, 2455),
    new Lesson(4, 'Selenium IDE WEB自动化测试入门视频课程（中）', 'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190', '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。', 34, 742),
    new Lesson(5, '扩展的ICONIX软件过程实践', 'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190', 'ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。', 42, 731),
    new Lesson(6, 'Selenium IDE WEB自动化测试入门视频课程 上', 'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190', '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。', 43, 1243),
    new Lesson(7, '网页制作与开发', 'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190', '本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。', 24, 346),
    new Lesson(8, '产品&交互设计那些事儿', 'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190', '本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。', 83, 3453),
    new Lesson(9, 'VR AR产品设计的思考视频课程', 'http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190', '“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。VR技术不仅涉及到游戏领域，在训练、教育以及最新提出的全景直播等应用也开始被人不断提出，VR应用必将很快走出传统人们观念中游戏、三维模拟等应用范围，变成像微信、淘宝等常用手机应用一样融入日常生活中，而广大产品经理也需要充分了解VR技术背景，以全新角度规划用户需求发掘、产品功能设计等工作，以求为自身和企业牟取更多发展机遇。', 453, 2313),
    new Lesson(10, 'ProcessOn界面原型绘制', 'http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190', 'ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍其界面原型图的绘制功能。课程主要包括以下几项：ProcessOn界面原型绘制功能的主要操作。ProcessOn界面原型绘制功能的使用技巧。以微信为主要参考，完成微信App的高保真界面原型设计。ProcessOn仅仅是界面原型绘制工具中较为简单的一种，想要完成高质量的原型软件还是使用Axure比较好，', 83, 3453),
    new Lesson(11, 'ProcessOn绘制流程图', 'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190', '绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。流程图可以让流程图可以提供一种简单扼要的“缩略俯瞰图”，帮助观众快速了解业务如何运转。而在最关键的PRD文档中插入流程图可以让开发人员更顺畅的了解功能的流程。', 13, 434),
    new Lesson(12, '项目管理平台Redmine', 'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190', '本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台进行了简单的对比。让学员能够熟练的使用redmine进行项目进度的把握。', 21, 4345)
];
// app.get('/api',(req,res)=>{
//     res.json(ccourses);
// })
app.get('/api/ccourses', function (req, res) {
    res.json(ccourses);
});
app.get('/api/ccourses/:id', function (req, res) {
    // res.json(courses);
    res.json(ccourses.filter(function (ele) { return ele.id == req.params.id; }));
});
var community = /** @class */ (function () {
    function community(id, communityName, images, content, Publisher, time, readcount, commentcount) {
        this.id = id;
        this.communityName = communityName;
        this.images = images;
        this.content = content;
        this.Publisher = Publisher;
        this.time = time;
        this.readcount = readcount;
        this.commentcount = commentcount;
    }
    return community;
}());
var communitys = [
    new community(1, 'web开发（二）——函数', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', '（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。', '刘秀梅', '2018-10-21 15:10', 1319, 4),
    new community(2, '类定义关键字详解', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg', 'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来', '3-张馨元', '2018-10-09 19:21', 68, 0),
    new community(3, '一个java文件中可包含多个main方法', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg', '一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方', '3-张馨元', '2018-10-09 19:17', 55, 2),
    new community(4, '数据结构——线性表的经典应用', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg', '1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。', '杨伟彬', '2018-10-08 14:28', 56, 0),
    new community(5, '栈和队列之间的相互转化', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg', '队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元', '7-李建涛', '2018-10-01 12:51', 62, 2),
    new community(6, 'web开发（二）——字符串类型', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/qrZ4o7jdDUfyqA96vEw74A.jpg', '在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存', '刘秀梅', '2018-09-29 14:22', 239, 2),
    new community(7, 'JavaScript event（事件对象）', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', '在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相', '刘孟祎', '2018-09-28 09:40', 54, 0),
    new community(8, '数据结构——快速排序', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg', '快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。 分治法的基本思想', '张玉茹', '2018-09-27 16:57', 39, 0),
];
app.get('/api/community', function (req, res) {
    res.json(communitys);
});
var conversation = /** @class */ (function () {
    function conversation(content, Number) {
        this.content = content;
        this.Number = Number;
    }
    return conversation;
}());
var conversations = [
    new conversation('# 2015级程序设计基 ... #', '6万'),
    new conversation('# 2015级面向对象程 ... #', '3万'),
    new conversation('# cms与模板制作 #', '3万'),
    new conversation('# 数据结构 #', '2万'),
    new conversation('# 数据库原理（5.6. ... #', '2万'),
    new conversation('# 2014级PHP程序 ... #', '1万'),
    new conversation('# Web开发（二）20 ... #', '1万'),
    new conversation('# 2016级程序设计基 ... #', '1万'),
    new conversation('# Web开发（二）20 ... #', '1万'),
];
app.get('/api/conversation', function (req, res) {
    res.json(conversations);
});
app.listen(8000);
