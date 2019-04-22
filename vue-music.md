### 一、准备工作

1. vue init webpack vue-music

2. 在src下创建文件夹，空文件夹下增加.gitkeep文件（作用：用来追踪空文件夹，因为git无法追踪空文件夹）

3. main.js中引入.css文件报错：

   ```
   需要使用 style-loader css-loader 来处理 css
   需要使用 file-loader url-loader 来处理 ttf|eot|svg|woff

   npm install style-loader css-loader --save-dev（相当于--save-dev.开发环境需要的；--save是开发生产都需要的）
   webpack.base.conf.js中
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader'],
       include:[]//如果这句不加上，依然会报错
     },
    
   LESS:npm install less less-loader --save
   npm install stylus stylus-loader --save-dev
   ```

4. npm install babel-polyfill -S   

   1. Babel默认只转换新的javascript句法，而不转换新的API，（错误eg:使用了 Vue 以及用 axios 来发请求，在谷歌浏览器上面，预览是没有问题的,在IE就报错，包括安卓5以下的设备，也会有这种情况）
   2. main.js中：import  "babel-polyfill"

5. 父子组件传值

   1. 父传子：

      在子组件中定义 props:[ 'msgFather' ] (或者对象形式props:{msgFather：{type:'Boolean',default:true})父组件中在<son :msg-father='true'></son>

   2. 子传父：

      通过 this.$emit("sendiptVal", this.inputValue) ；父组件中<son @sendiptVal='showChildMsg'></son>

   ### 二、推荐页面

6. 切换的时候可能重新去渲染组件，例如轮播图，切换到别的tab,然后回来时，轮播图又重新开始，这样就体验不好，所以往App.vue 里的router-view  外面加keep-alive

7. 组件有定时器时，要在组件beforeDestroy()里面clear  定时器，有利于内存的释放

8. better-scroll单击事件与fastclick点击事件相冲突，导致图片点击无反应；只需要将需要点击的图片添加fastcick默认的class属性即可（needsclick）(表示监听该属性如果需要点击是则不拦截点击事件)

9. vue项目实现手机预览  config/index.js  dev下host改成本机地址（cmd：ipconfig 的IPV4地址）或0.0.0.0，然后重新运行；如果还不可以：则将电脑的防火墙关掉；

   ### 三、 歌手页面

   ​

   ​

   ​

   ​

   ​				

   ​

