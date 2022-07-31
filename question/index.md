# 遇到过的面试题

## js	
### Js 的继承
6 种
原型链继承 子类 prototype 赋值父类实例 父类属性被共享
构造函数继承 在子类.call 调用父类 不能获取参数
组合 继承
原型式继承
寄居式继承
寄居组合继承 子类的 prototype 赋值父类 prototype 的浅拷贝
# 闭包
因为作用域链的关系

# react
## react 18 新特性
concurrent 模式
批处理 SyncFlush
suspense ssr mode
新增 hooks useId useTransition useDeferedValue
使用新的浏览器 api 不兼容老浏览器
组件可以渲染 undefined
## react-router 原理
histoy 和 hash 模式
Hash 模式使用 onhashchange 监听 hash 值变化
histroy 模式使用 pushState
## function 和 class 的区别
1. 最大的区别在于心智负担，function 组件可以捕获这次渲染的所有 prop 和 state，但是 class 是默认是读取最新的数据，一些情况还会比较新旧状态是否一致，代码比较杂乱。比如说在 setTimeout 里，class 组件获取的是 setTimeout 执行时的数据，function 获取的是注册 setTimeout 的数据。当 function 想像 class 那样获取最新值的话可以使用 useRef，所以 function 更符合 react 的 immutable 和 UI 在概念上是当前应用状态的一个函数。
2.function 带给我们的好处是能提高渲染可预测性，够降低一些奇怪 bug 的几率，并且在找 bug 时路径是单一的，代码更加简洁。
function 的缺点就是带来了新的学习成本，必须按照新的思路去写代码，但接受这种新思路后会变得很简单。
# React Hooks
## Hooks 实现原理
函数组件会将内部用到的所有的 hooks 通过单向链表的形式, 保存在 fiber 节点里。一个 hooks 节点里面有 memoizedState，next 两个属性，state 用来保存当前值，next 指向下一个 hooks。
在组件调用的时候，就会按照顺序构造一条列表
## 为什么不能在条件语句里声明 hooks
因为当 update 的时候所遍历的还是 mount 的时候生成的 hooks 列表，这样的话回找到错误的 hooks 并执行
## React Hooks 要解决的问题是什么
hooks 要解决的问题时状态逻辑复用，
React Hooks 带来的好处不仅是 “更 FP，更新粒度更细，代码更清晰”，还有如下三个特性：
可以选择状态时平铺的还是嵌套的
Hooks 内部可以用 hooks，保证自定义 hooks 的复杂度。
更容易将组件的 UI 与状态分离。
### useEffect
#### useEffect 为什么要穷尽依赖项
如果漏掉某些值的话拿到的值有可能是未更新的
#### useEffect 使用场景
它是 state 变化后的副作用，异步执行，在渲染后执行。
需要穷尽依赖值，如果不写第二个参数就会一直执行。
return一个function，所以不能入参不能async这个下次render前执行
可以作为mounted声明周期函数。
还有Layouteffect 该hooks同步渲染并且在渲染前执行
#### useCallback 使用场景
缓存函数，使用 useMemo 也可以实现，使用有成本，只有在需要向下传入函数是不希望 re-render 才使用，并且如果在 fn 里更改依赖值，引用还是会改变，所以使用场景有限
useEvent 可以不用写依赖获取最新值并且保持引用不变

#### useMemo 使用场景
组件内防止重复计算
用 react.memo 缓存 props 防止渲染
缓存向子组件传入的引用值
也可以写一个 hoc 缓存一个组件

### useDeferedValue
类似防抖但无时延
### useTransition
# fiber 原理
## 为什么要用 fiber
因为 react 的渲染机制，父元素改变子元素都得递归更新，当 vdom 比较大时 reconcile 过程就会比较久，如果在 1 帧内执行不完就会卡顿。
fiber 可以把任务分的足够小，实现可中断，留下 1 帧内的最后 5ms 供浏览器渲染，fiber 并不会让应用更快，他只会让应用变得不卡，如果应用之前没有性能问题，fiber 体现不出来优势。
## fiber 结构
在 reconcile 期间 react 会把 vdom 转换为 fiber 结构，fiber 节点有三个指针指向父节点，兄弟节点，子节点。

## 双 fiber 数结构
一个 current fiber，一个即将渲染的 fiber 树

## schedule 调度
因为 fiber 树被分为了若干个小节点，所以 fiber 节点的计算与生成变为了可中断，在 schedule 里面有一个计时器 requestIdleCallback，他可以获取 IdleDeadline 这个值判断这一帧还有几秒，当这批任务执行的时间到了 10ms 以上的时候就中断，保存当前处理的节点，等待下次执行。下次执行时从上一次节点开始，可以通过三个指针继续执行
## 优先级
调度系统，支持不同渲染优先级，对 Concurrent 进行调度。当然，调度系统对低优先级任务会不断提高优先级，所以不会出现低优先级任务总得不到执行的情况。

useEffect 的回调函数为什么无法使用 async？
理由是 effect function 应该返回一个销毁函数，如果 useEffect 第一个参数传入 async


# 浏览器
## 浏览器缓存
分为强缓存和协商缓存
强缓存通过 expires 和 cache- control 判断缓存过期
Expirese 是缓存到期时间 然而这个是浏览器通过本地时间判断的
cache-control 优先级更高
有五个值
public 都可缓存
Privite 只有客户端缓存
No-cache 需要验证协商缓存
no-store 不缓存
max-age 相对时间

缓存放在哪 disk 放静态资源 memory 内存缓存：存放页面已加载的文件
如果强缓存未命中则检查协商缓存
last-modified/if-modified-since
服务器返回 last-modified 最新修改时间，浏览器发请求带 ifmodifiedsince，为上一次 last 的值，如果传过来的小雨最新的 last，则缓存需要更新
etag/if-none-match
服务器返回一个 etag，浏览器请求带上 etag，如果不一样则缓存需要更新
Etag 不存在时间戳不准确问题，但是生成 etag 耗费资源
## https
非对称传输密钥，对称传输数据
C 生成随机数
S 返回证书，生成随机数，证书包含 数字签名 浏览器支持的加密散发 指定 hash 函数
C 生成随机数，C 验证证书服务器公钥正确，C 验证数字签名缺点明文没被修改，使用 ca 公钥对签名解密，得到 ca hash 后的 hash 值，在对证书明文使用 hash，对比两个 hash 值来确定明文没被修改。如何确保 ca 共钥可靠，ca 公钥匙可回溯查询操作系统根证书

## cookie 和 localstorage 和 seeionstorage 的区别
生命周期：cookie 可设置失效时间，没有设置则为永远，local 只能手动清除，session 只在当前页面下有效
大小：cookie4k，其他 5m
cookie 要带在 https 请求里
Cookie 适合权限校验
Localstorage 适合前端做一些持久化缓存
Session 适合用于一些敏感数据

## cookie 有哪些属性
expires 时间戳
domain 域名
Path 域名路径
secure 只能被 https 传输
size cookie 大小
httponly
samesite
priority

# Css 
## BFC
### 如何创建
格式化块级上下文，创建一个渲染区域
可以使用 6 种方式出发 bfc
overflow：hidden
display：inline-block ｜ table-cell ｜ flex
position absolute
### 特性
合并margin
计算浮动元素高度
子元素与父元素左左边界重叠

### flex
父元素属性 flex-direction flex-wrap align-items jusitfy-content
子元素属性 flex-order
flex-basis 优先级小于min-height
flex-grow 按比例抢夺剩余位置 1就是默认占满
flex-shrink 按比例缩减 0就是不缩
## 经典题目
### 如何自适应元素高等与宽的一半
padding 实现与元素宽度比例关系

### 1px 线
#### 原因
手机物理像素和逻辑像素不一样，产生一个概念叫dpr
#### 解决办法
1.写入meta标签让viewport宽等与设备宽，根据dpr更改initial-scale
2.去掉border，用伪元素写transform:scale
3.box-shadow
4.图片
5.渐变
### 移动端自适应方案
#### vw方案
设计稿750px,让1vw等于7.5px，可以用postcss这个预处理，也可以用scss，stylus内部写一个转化函数, *  val
#### rem方案
根据rem等于根元素fontsize值，需要用js动态修改document.elementDocument.fontSize;
deviceWidth * 100/ 750 整个屏幕分为7.5个rem
### 如何渲染两个border
outline
box-shadow

### 更改动画渲染的中心点

# TypeScript
## 实现高级类型
## type 和 interface 的区别
Type 可以定义别名
type 可以用 keyof 定义
Type 可以定义联合类型
Type 可以定义元组类型
interface 可以重名

# 性能优化
## 工程化优化
减少 http 数量：主要是为了减少往返时间。可以将公用 utils 包进行整合
减少包的体积：terser，dead-code，tree-shaking，图片压缩 webp，分包按需加载，开启 gzip
使用 http2
缓存命中率：浏览器缓存和 cdn 缓存
ssr

## 渲染层面
动画方面的优化
Css 尽可能减少 reflow 和 layout 使用能开始 gpu 加速的属性，gpu 加速会单独创建一个 layer，比如 transform 和 opacity 和 will-change，或者用 lottie 动画，或者用一些动画库 react-spring，一些复杂的场景可以用 canvas
React 平常使用方面的一些优化
1. 减少 render 次数
useMemo,useCallback 和 React.memo
合理使用 ref
createPortal
用 useReducer 跳过 diff
适当的去合并一些 state

2. 减少 js 执行次数
debounce，throttle
Props 的时候尽量使用对象结构这也跟符合 fp 的理念
3. 然后是一些业务场景呀
首屏时间
先是计算首屏时间，我们手动上报埋点，第一次 useeffect 的时间减去 window.performance.timing.navigationStart。
取决于一些
懒加载
IntersectionObserver
getBoundingClientRect




