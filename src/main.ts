
/// <reference path="./main.d.ts" />
import conf from "./config"
import * as Utils from "./Utils"
namespace xdwin {
  export class XdMain extends conf {
    // private defaults = conf.defaults;
    // public win = window;
    // private windows = conf.windows;
    // private stickZIndex = conf.stickZIndex;
    // private zIndex = conf.zIndex;
    // private defaultFrames: DefaultFrames = conf.defaultFrames
    constructor() {
      super()
      // let that = this
      // Object.defineProperty(that.win, 'xdwinui', {
      //   // 打开窗口
      //   open(options: any) {
      //     let winform = that.create(options);
      //     return winform;
      //   },
      //   // 打开文本窗口快捷方法
      //   html(id: string, title: string, content: string, options: any) {
      //     let winform = that.create(xdwin.Utils.layxDeepClone({}, {
      //       id: id,
      //       title: title,
      //       type: 'html',
      //       content: content
      //     }, options || {}));
      //     return winform;
      //   },
      //   // 打开网页窗口快捷方法
      //   iframe(id: string, title: string, url: string, options: any) {
      //     let winform = that.create(xdwin.Utils.layxDeepClone({}, {
      //       id: id,
      //       title: title,
      //       type: 'url',
      //       url: url
      //     }, options || {}));
      //     return winform;
      //   },
      //   // 打开窗口组快捷方法
      //   group(id, frames, frameIndex, options) {
      //     let winform = this.create(xdwin.Utils.layxDeepClone({}, {
      //       id: id,
      //       type: 'group',
      //       frames: frames,
      //       frameIndex: frameIndex,
      //     }, options || {}));
      //     return winform;
      //   },
      //   // 获取窗口列表
      //   windows() {
      //     return this.windows;
      //   },
      //   // 获取当前窗口对象
      //   getWindow(id) {
      //     return this.windows[id];
      //   },
      //   // 关闭窗口
      //   destroy(id) {
      //     this.destroy(id);
      //   },
      //   // 窗口最大化
      //   max(id) {
      //     this.max(id);
      //   },
      //   // 设置标题
      //   setTitle(id, title, useFrameTitle) {
      //     this.setTitle(id, title, useFrameTitle);
      //   },
      //   // 闪烁窗口
      //   flicker(id) {
      //     this.flicker(id);
      //   },
      //   // 恢复窗口
      //   restore(id) {
      //     this.restore(id);
      //   },
      //   // 更新层级别
      //   updateZIndex(id) {
      //     this.updateZIndex(id);
      //   },
      //   // 更新最小化布局
      //   updateMinLayout() {
      //     this.updateMinLayout();
      //   },
      //   // 置顶切换
      //   stickToggle(id) {
      //     this.stickToggle(id);
      //   },
      //   // 设置窗口位置
      //   setPosition(id, position) {
      //     this.setPosition(id, position);
      //   },
      //   // 获取子框架window对象
      //   getChildContext(id) {
      //     return this.getChildContext(id);
      //   },
      //   // 获取父框架window对象
      //   getParentContext(id) {
      //     return this.getParentContext(id);
      //   },
      //   // 设置窗口内容，文本窗口有效
      //   setContent(id, content) {
      //     this.setContent(id, content);
      //   },
      //   // 设置iframe地址，iframe窗口有效
      //   setUrl(id, url) {
      //     this.setUrl(id, url);
      //   },
      //   // 设置窗口组内容
      //   setGroupContent(id, frameId, content) {
      //     this.setGroupContent(id, frameId, content);
      //   },
      //   // 设置窗口组标题
      //   setGroupTitle(id, frameId, title, useFrameTitle) {
      //     this.setGroupTitle(id, frameId, title, useFrameTitle);
      //   },
      //   // 设置窗口组Url
      //   setGroupUrl(id, frameId, url) {
      //     this.setGroupUrl(id, frameId, url);
      //   },
      //   // 设置窗口组索引
      //   setGroupIndex(id, frameId) {
      //     this.setGroupIndex(id, frameId);
      //   },
      //   // 关闭所有窗口
      //   destroyAll() {
      //     this.destroyAll();
      //   },
      //   // ================ 内置组件
      //   // 消息框
      //   msg(msg, options) {
      //     return this.msg(msg, options);
      //   },
      //   // 提示框
      //   alert(title, msg, yes, options) {
      //     return this.alert(title, msg, yes, options);
      //   },
      //   // 询问框
      //   confirm(title, msg, yes, options) {
      //     return this.confirm(title, msg, yes, options);
      //   },
      //   // 获取prompt输入框textarea对象
      //   getPromptTextArea(id) {
      //     return this.getPromptTextArea(id);
      //   },
      //   // 输入框
      //   prompt(title, msg, yes, options) {
      //     return this.prompt(title, msg, yes, options);
      //   },
      //   // 加载框
      //   load(id, msg, options) {
      //     return this.load(id, msg, options);
      //   }
      // })
    }

    create(options: any) {
      let that = this,
        config = Utils.layxDeepClone({}, that.defaults, options || {}),
        winform: WinForm;
      if (!config.id) {
        console.error("窗口id不能为空且唯一");
        return;
      };

      let _winform = that.windows[config.id];
      if (_winform) {
        if (_winform.status === "min") {
          that.restore(_winform.id);
        }

        that.flicker(config.id);
        return _winform;
      }

      // 创建窗口阻隔
      if (config.shadable === true) {
        let layxShade: any = document.createElement("div");
        layxShade.setAttribute("id", "xdwin-" + config.id + "-shade");
        layxShade.classList.add("xdwin-shade");
        layxShade.style.zIndex = config.alwaysOnTop === true ? (++that.stickZIndex) : (++that.zIndex);
        document.body.appendChild(layxShade);
        layxShade.onclick = (e: any) => {
          e = e || window.event;
          that.flicker(config.id);
          e.stopPropagation();
        }
      }

      // 动态插入样式
      if (config.style) {
        let style: any = document.getElementById("xdwin-style");
        if (style) {
          style.innerHTML += config.style;
        } else {
          style = document.createElement("style");
          style.setAttribute("id", "xdwin-style");
          style.type = "text/css";
          style.innerHTML = config.style;
          document.getElementsByTagName("HEAD").item(0).appendChild(style);
        }
      }
      // 创建xdwin-window
      let xdWindow: any = document.createElement("div");
      xdWindow.setAttribute("id", "xdwin-" + config.id);
      xdWindow.classList.add("xdwin-window");
      xdWindow.classList.add("xdwin-flexbox");
      if (config.shadow === true) {
        xdWindow.style.setProperty("box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
        xdWindow.style.setProperty("-moz-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
        xdWindow.style.setProperty("-webkit-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
      }
      // 转换最小化参数
      let _minWidth = Utils.Util.compileLayxWidthOrHeight("width", config.minWidth, that.defaults.minWidth);
      let _minHeight = Utils.Util.compileLayxWidthOrHeight("height", config.minHeight, that.defaults.minHeight);

      let _width = Utils.Util.compileLayxWidthOrHeight("width", config.width, that.defaults.width);
      _width = Math.max(_width, _minWidth);

      let _height = Utils.Util.compileLayxWidthOrHeight("height", config.height, that.defaults.height);
      _height = Math.max(_height, _minHeight);

      let _position = Utils.Util.compileLayxPosition(_width, _height, config.position);

      xdWindow.style.zIndex = config.alwaysOnTop === true ? (++that.stickZIndex) : (++that.zIndex);
      xdWindow.style.width = _width + "px";
      xdWindow.style.height = _height + "px";
      xdWindow.style.minWidth = _minWidth + "px";
      xdWindow.style.minHeight = _minHeight + "px";
      xdWindow.style.top = _position.top + "px";
      xdWindow.style.left = _position.left + "px";
      if (config.border !== false) {
        xdWindow.style.setProperty("border", config.border === true ? '1px solid #3baced' : config.border);
      }
      xdWindow.style.backgroundColor = config.bgColor;
      xdWindow.style.opacity = Utils.Util.isNumber(config.opacity) ? config.opacity : 1;
      // 为 html 类型添加更新层事件
      if (config.type === "html" || config.type === "group") {
        xdWindow.onclick = function (e: any) {
          e = e || window.event;
          that.updateZIndex(config.id);
          e.stopPropagation();
        };
      }
      document.body.appendChild(xdWindow);

      // ================ 存储对象信息

      winform.id = config.id;
      // 存储窗口domId
      winform.windowId = xdWindow.getAttribute("id");
      // 存储窗口dom对象
      winform.window = xdWindow;
      // 存储窗口创建时间
      winform.createDate = new Date();
      // 存储窗口状态
      winform.status = "normal";
      // 存储窗口类型
      winform.type = config.type;
      // 存储按钮集合
      winform.buttons = config.buttons;
      // 存储子窗口
      winform.frames = config.frames;
      // 存储子窗口索引
      winform.groupCurrentId = (Utils.Util.isArray(config.frames) && config.frames.length > 0 && config.frames[config.frameIndex]) ? config.frames[config.frameIndex].id : null;
      // 存储窗口初始化区域信息
      winform.area = {
        width: _width,
        height: _height,
        minWidth: _minWidth,
        minHeight: _minHeight,
        top: _position.top,
        left: _position.left
      };
      // 存储置顶状态
      winform.isStick = config.alwaysOnTop === true;
      // 存储窗口层级别
      winform.zIndex = config.alwaysOnTop === true ? that.stickZIndex : that.zIndex;
      // 存储拖动状态
      winform.movable = config.movable;
      // 存储拖动限制配置信息
      winform.moveLimit = config.moveLimit;
      // 存储拖曳状态
      winform.resizable = config.resizable;
      // 存储拖曳限制配置信息
      winform.resizeLimit = config.resizeLimit;
      // 存储内置按钮操作信息
      winform.stickable = config.stickable;
      winform.minable = config.minable;
      winform.maxable = config.maxable;
      winform.restorable = config.restorable;
      winform.closable = config.closable;
      // 存储事件
      winform.event = config.event;


      // ================ 正式开始创建内容

      if (config.control === true) {
        // 创建控制栏
        let controlBar = document.createElement("div");
        controlBar.classList.add("xdwin-control-bar");
        controlBar.classList.add("xdwin-flexbox");
        config.controlStyle && controlBar.setAttribute("style", config.controlStyle);
        if (config.type === "group") {
          controlBar.classList.add("xdwin-type-group");
        }
        xdWindow.appendChild(controlBar);

        // 创建窗口默认图标
        if (config.icon !== false) {
          // 创建控制栏左边容器
          let leftBar = document.createElement("div");
          leftBar.classList.add("xdwin-left-bar");
          leftBar.classList.add("xdwin-flexbox");
          leftBar.classList.add("xdwin-flex-vertical");
          controlBar.appendChild(leftBar);

          let windowIcon = document.createElement("div");
          windowIcon.classList.add("xdwin-icon");
          windowIcon.classList.add("xdwin-window-icon");
          windowIcon.innerHTML = config.icon === true ? '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-default-icon"></use></svg>' : config.icon;
          leftBar.appendChild(windowIcon);
        }

        // 窗口标题
        let title = document.createElement("div");
        title.classList.add("xdwin-title");
        title.classList.add("xdwin-flexauto");
        title.classList.add("xdwin-flexbox");
        if (config.type === "group") {
          title.classList.add("xdwin-type-group");
        }
        // 绑定双击事件
        if (config.allowControlDbclick === true) {
          title.ondblclick = function (e) {
            e = e || window.event;
            if (config.restorable === true) {
              that.restore(config.id);
            }
            e.stopPropagation();
          }
        }
        // 绑定拖动事件
        if (config.movable === true) {
          new XdwinDrag(title);
        }
        controlBar.appendChild(title);
        if (config.type !== "group") {
          // 标题标签
          let label = document.createElement("label");
          label.innerHTML = config.title;
          title.setAttribute("title", label.innerText);
          title.appendChild(label);
        }
        else {
          // 窗口窗口组标题
          if (Utils.Util.isArray(config.frames)) {
            for (let i = 0; i < config.frames.length; i++) {
              let frameConfig = Utils.layxDeepClone({}, that.defaultFrames, config.frames[i]);
              let frameTitle = document.createElement("div");
              frameTitle.setAttribute("data-frameId", frameConfig.id);
              frameTitle.classList.add("xdwin-group-title");
              if (i === config.frameIndex) {
                frameTitle.setAttribute("data-enable", "1");
              }
              frameTitle.onclick = function (e) {
                e = e || window.event;
                let prevSelectTitle = xdWindow.querySelector(".xdwin-group-title[data-enable='1']");
                if (prevSelectTitle !== this) {
                  prevSelectTitle.removeAttribute("data-enable");
                  this.setAttribute("data-enable", "1");
                  // 设置选中
                  that._setGroupIndex(config.id, this);
                }
                e.stopPropagation();
              }
              title.appendChild(frameTitle);
              // 窗口组Label
              let groupLabel = document.createElement("label");
              groupLabel.innerHTML = frameConfig.title;
              frameTitle.setAttribute("title", groupLabel.innerText);
              frameTitle.appendChild(groupLabel);
            }
          }
        }

        // 创建控制栏右边容器
        let rightBar = document.createElement("div");
        rightBar.classList.add("xdwin-right-bar");
        rightBar.classList.add("xdwin-flexbox");
        controlBar.appendChild(rightBar);

        // 创建用户自定义按钮
        let customMenu = document.createElement("div");
        customMenu.classList.add("xdwin-custom-menus");
        customMenu.classList.add("xdwin-flexbox");
        rightBar.appendChild(customMenu);

        if (config.stickMenu === true || config.minMenu === true || config.maxMenu === true || config.closeMenu === true) {
          // 创建内置按钮
          let inlayMenu = document.createElement("div");
          inlayMenu.classList.add("xdwin-inlay-menus");
          inlayMenu.classList.add("xdwin-flexbox");
          rightBar.appendChild(inlayMenu);

          if (config.stickMenu === true || (config.alwaysOnTop === true && config.stickMenu)) {
            // 创建置顶按钮
            let stickMenu = document.createElement("div");
            stickMenu.classList.add("xdwin-icon");
            stickMenu.classList.add("xdwin-flexbox");
            stickMenu.classList.add("xdwin-flex-center");
            stickMenu.classList.add("xdwin-stick-menu");
            config.alwaysOnTop === true ? stickMenu.setAttribute("title", "取消置顶") : stickMenu.setAttribute("title", "置顶");
            config.alwaysOnTop === true && stickMenu.setAttribute("data-enable", "1");
            stickMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-stick"></use></svg>';
            if (config.stickable === true) {
              stickMenu.onclick = function (e) {
                e = e || window.event;
                that.stickToggle(config.id);
                e.stopPropagation();
              }
            }
            inlayMenu.appendChild(stickMenu);
          }

          if (config.minMenu === true) {
            // 创建最小化按钮
            let minMenu = document.createElement("div");
            minMenu.classList.add("xdwin-icon");
            minMenu.classList.add("xdwin-flexbox");
            minMenu.classList.add("xdwin-flex-center");
            minMenu.classList.add("xdwin-min-menu");
            minMenu.setAttribute("title", "最小化");
            minMenu.setAttribute("data-menu", "min");
            minMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-min"></use></svg>';
            minMenu.onclick = function (e) {
              e = e || window.event;
              if (!this.classList.contains("xdwin-restore-menu")) {
                if (config.minable === true) {
                  that.min(config.id);
                }
              }
              else {
                if (config.restorable === true) {
                  that.restore(config.id);
                }
              }
              e.stopPropagation();
            }
            inlayMenu.appendChild(minMenu);
          }

          if (config.maxMenu === true) {
            // 创建最大化按钮
            let maxMenu = document.createElement("div");
            maxMenu.classList.add("xdwin-icon");
            maxMenu.classList.add("xdwin-flexbox");
            maxMenu.classList.add("xdwin-flex-center");
            maxMenu.classList.add("xdwin-max-menu");
            maxMenu.setAttribute("title", "最大化");
            maxMenu.setAttribute("data-menu", "max");
            maxMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-max"></use></svg>';
            maxMenu.onclick = function (e) {
              e = e || window.event;
              if (!this.classList.contains("xdwin-restore-menu")) {
                if (config.maxable === true) {
                  that.max(config.id);
                }
              }
              else {
                if (config.restorable === true) {
                  that.restore(config.id);
                }
              }
              e.stopPropagation();
            }
            inlayMenu.appendChild(maxMenu);
          }

          if (config.closeMenu === true) {
            // 创建关闭按钮
            let destroyMenu = document.createElement("div");
            destroyMenu.classList.add("xdwin-icon");
            destroyMenu.classList.add("xdwin-flexbox");
            destroyMenu.classList.add("xdwin-flex-center");
            destroyMenu.classList.add("xdwin-destroy-menu");
            destroyMenu.setAttribute("title", "关闭");
            destroyMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-destroy"></use></svg>';
            destroyMenu.onclick = function (e) {
              // e = e || window.event;
              if (config.closable === true) {
                that.destroy(config.id);
              }
              e.stopPropagation();
            }
            inlayMenu.appendChild(destroyMenu);
          }
        }
      }

      //创建内容容器
      let main = document.createElement("div");
      main.classList.add("xdwin-main");
      main.classList.add("xdwin-flexauto");
      xdWindow.appendChild(main);

      // 创建内容遮罩效果
      let contentShade = document.createElement("div");
      contentShade.classList.add("xdwin-content-shade");
      contentShade.classList.add("xdwin-flexbox");
      contentShade.classList.add("xdwin-flex-center");

      // dom元素直接添加
      if (Utils.Util.isDom(config.loaddingText)) {
        contentShade.appendChild(config.loaddingText);
      }
      else {
        contentShade.innerHTML = config.loaddingText;
      }
      main.appendChild(contentShade);

      switch (config.type) {
        case "html":
        default:
          // 绑定加载之前事件
          if (Utils.Util.isFunction(config.event.onload.before)) {
            var revel = config.event.onload.before(xdWindow, winform);
            if (revel === false) {
              return;
            }
          }
          // 创建html内容
          that.createHtmlBody(main, config, config.content);
          main.removeChild(contentShade);

          // 绑定加载之后事件
          if (Utils.Util.isFunction(config.event.onload.after)) {
            config.event.onload.after(xdWindow, winform);
          }
          break;
        case "url":
          // 绑定加载之前事件
          if (Utils.Util.isFunction(config.event.onload.before)) {
            var revel = config.event.onload.before(xdWindow, winform);
            if (revel === false) {
              return;
            }
          }
          that.createFrameBody(main, config, xdWindow, winform);

          // 绑定加载之后事件
          if (Utils.Util.isFunction(config.event.onload.after)) {
            config.event.onload.after(xdWindow, winform);
          }

          break;
        case "group":
          // 创建窗口组主体
          if (Utils.Util.isArray(config.frames)) {
            // 绑定加载之前事件
            if (Utils.Util.isFunction(config.event.onload.before)) {
              var revel = config.event.onload.before(xdWindow, winform);
              if (revel === false) {
                return;
              }
            }

            var groupLoadCount = 0;
            for (var i = 0; i < config.frames.length; i++) {
              var frameConfig = Utils.layxDeepClone({}, that.defaultFrames, config.frames[i]);
              var frameBody = document.createElement("div");
              frameBody.classList.add("xdwin-group-main");
              frameBody.setAttribute("data-frameId", frameConfig.id);
              if (i === config.frameIndex) {
                frameBody.setAttribute("data-enable", "1");
              }
              main.appendChild(frameBody);
              //生成内容
              if (frameConfig.type === "html") {
                that.createHtmlBody(frameBody, config, frameConfig.content, "group", frameConfig);
                // 加载完毕，添加complete标识
                frameBody.setAttribute("data-complete", "1");

                var loadComplteMains = xdWindow.querySelectorAll(".xdwin-group-main[data-complete='1']");
                if (loadComplteMains.length === config.frames.length) {
                  main.removeChild(contentShade);
                  // 绑定加载之后事件
                  if (Utils.Util.isFunction(config.event.onload.after)) {
                    config.event.onload.after(xdWindow, winform);
                  }
                }
              }
              else if (frameConfig.type === "url") {
                that.createFrameBody(frameBody, config, xdWindow, winform, "group", frameConfig);
              }
            }
          }
          break;
      }

      if (config.resizable === true) {
        // 创建拖曳容器
        var resize = document.createElement("div");
        resize.classList.add("xdwin-resizes");
        xdWindow.appendChild(resize);

        // 创建8个方向拖曳
        if (config.resizeLimit.t === false) {
          // 上
          var resizeTop = document.createElement("div");
          resizeTop.classList.add("xdwin-resize-top");
          new XdwinResize(resizeTop, true, false, true, false);
          resize.appendChild(resizeTop);
        }
        if (config.resizeLimit.r === false) {
          // 右
          var resizeRight = document.createElement("div");
          resizeRight.classList.add("xdwin-resize-right");
          new XdwinResize(resizeRight, false, false, false, true);
          resize.appendChild(resizeRight);
        }

        if (config.resizeLimit.b === false) {
          //下
          var resizeBottom = document.createElement("div");
          resizeBottom.classList.add("xdwin-resize-bottom");
          new XdwinResize(resizeBottom, false, false, true, false);
          resize.appendChild(resizeBottom);
        }

        if (config.resizeLimit.l === false) {
          // 左
          var resizeLeft = document.createElement("div");
          resizeLeft.classList.add("xdwin-resize-left");
          new XdwinResize(resizeLeft, false, true, false, true);
          resize.appendChild(resizeLeft);
        }

        if (config.resizeLimit.lt === false) {
          // 左上
          var resizeLeftTop = document.createElement("div");
          resizeLeftTop.classList.add("xdwin-resize-left-top");
          new XdwinResize(resizeLeftTop, true, true, false, false);
          resize.appendChild(resizeLeftTop);
        }

        if (config.resizeLimit.rt === false) {
          //右上
          var resizeRightTop = document.createElement("div");
          resizeRightTop.classList.add("xdwin-resize-right-top");
          new XdwinResize(resizeRightTop, true, false, false, false);
          resize.appendChild(resizeRightTop);
        }

        if (config.resizeLimit.lb === false) {
          //左下
          var resizeLeftBottom = document.createElement("div");
          resizeLeftBottom.classList.add("xdwin-resize-left-bottom");
          new XdwinResize(resizeLeftBottom, false, true, false, false);
          resize.appendChild(resizeLeftBottom);
        }

        if (config.resizeLimit.rb === false) {
          // 右下
          var resizeRightBottom = document.createElement("div");
          resizeRightBottom.classList.add("xdwin-resize-right-bottom");
          new XdwinResize(resizeRightBottom, false, false, false, false);
          resize.appendChild(resizeRightBottom);
        }
      }

      // 创建状态栏
      if (config.statusBar) {
        var statusBar = document.createElement("div");
        statusBar.classList.add("xdwin-statu-bar");
        config.statusBarStyle && statusBar.setAttribute("style", config.statusBarStyle);
        // 创建按钮

        if (config.statusBar === true && Utils.Util.isArray(config.buttons)) {
          var btnElement = that.createLayxButtons(config.buttons, config.id, config.isPrompt);
          statusBar.appendChild(btnElement);
        }
        else {
          // dom元素直接添加
          if (Utils.Util.isDom(config.statusBar)) {
            statusBar.appendChild(config.statusBar);
          }
          else {
            statusBar.innerHTML = config.statusBar;
          }
        }

        xdWindow.appendChild(statusBar);
      }

      // 自动关闭提示
      if (/(^[1-9]\d*$)/.test(config.autodestroy)) {
        var second = config.autodestroy / 1000;
        if (config.autodestroyText !== false) {
          var autodestroyTip = document.createElement("div");
          autodestroyTip.classList.add("xdwin-auto-destroy-tip");
          autodestroyTip.innerHTML = config.autodestroyText.replace("{second}", second);
          xdWindow.appendChild(autodestroyTip);
        }
        var destroyTimer = setInterval(function () {
          --second;
          if (config.autodestroyText !== false) {
            autodestroyTip.innerHTML = config.autodestroyText.replace("{second}", second);
          }
          if (second <= 0) {
            clearInterval(destroyTimer);
            that.destroy(config.id);
          }
        }, 1000);
      }

      // 存储窗口对象
      that.windows[config.id] = winform;

      // 如果可视区域小于窗口窗口，自动最大化
      if (_width > window.innerWidth || _height > window.innerHeight) {
        that.max(config.id);
      }
      return winform;
    }

    private _setGroupIndex(id: string, target: any) {
      let that = this,
        windowId = "xdwin-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        var frameId = target.getAttribute("data-frameId");
        var prevGroupMain = layxWindow.querySelector(".xdwin-group-main[data-enable='1']");
        var currentGroupMain = layxWindow.querySelector(".xdwin-group-main[data-frameId='" + frameId + "']");
        if (currentGroupMain !== prevGroupMain) {
          prevGroupMain.removeAttribute("data-enable");
          currentGroupMain.setAttribute("data-enable", "1");
          winform.groupCurrentId = frameId;
        }
      }
    }

    // 闪烁窗口
    flicker(id: string) {
      let that = this,
        flickerTimer: any,
        windowId = "xdwin-" + id,
        xdWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (xdWindow && winform) {
        // 更新层级别
        that.updateZIndex(id);

        if (xdWindow.classList.contains('xdwin-flicker')) {
          xdWindow.classList.remove('xdwin-flicker');
        }
        xdWindow.classList.add('xdwin-flicker');

        flickerTimer = setTimeout(() => {
          xdWindow.classList.remove('xdwin-flicker');
          clearTimeout(flickerTimer);
        }, 120 * 8);
      }
    };
    // 恢复窗口
    restore(id: string) {
      let that = this,
        windowId = "xdwin-" + id,
        xdWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (xdWindow && winform) {
        if (winform.restorable !== true) return;
        // 更新层级别
        that.updateZIndex(id);

        // 绑定恢复之前事件
        if (Utils.Util.isFunction(winform.event.onrestore.before)) {
          let revel = winform.event.onrestore.before(xdWindow, winform);
          if (revel === false) {
            return;
          }
        }

        let area = winform.area;
        if (winform.status === "normal") {
          that.max(id);
        }
        else if (winform.status === "max") {
          // 恢复滚动条
          if (document.body.classList.contains("xdwin-body")) {
            document.body.classList.remove('xdwin-body');
          }
          // 设置窗口信息
          xdWindow.style.top = area.top + "px";
          xdWindow.style.left = area.left + "px";
          xdWindow.style.width = area.width + "px";
          xdWindow.style.height = area.height + "px";
          // 存储状态
          winform.status = "normal";
          // 更新图标
          let restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='max']");
          if (restoreMenu) {
            restoreMenu.classList.remove("xdwin-restore-menu");
            restoreMenu.classList.add("xdwin-max-menu");
            restoreMenu.setAttribute("title", "最大化");
            restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-max"></use></svg>';
          }
          // 显示拖曳
          let resizePanel = xdWindow.querySelector(".xdwin-resizes");
          if (resizePanel) {
            resizePanel.removeAttribute("data-enable");
          }
        }
        if (winform.status === "min") {
          if (winform.minBefore === "normal") {
            // 设置窗口信息
            xdWindow.style.top = area.top + "px";
            xdWindow.style.left = area.left + "px";
            xdWindow.style.width = area.width + "px";
            xdWindow.style.height = area.height + "px";
            // 存储状态
            winform.status = "normal";
            // 更新图标
            let restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='min']");
            if (restoreMenu) {
              restoreMenu.classList.remove("xdwin-restore-menu");
              restoreMenu.classList.add("xdwin-min-menu");
              restoreMenu.setAttribute("title", "最小化");
              restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-min"></use></svg>';
            }
            // 显示拖曳
            let resizePanel = xdWindow.querySelector(".xdwin-resizes");
            if (resizePanel) {
              resizePanel.removeAttribute("data-enable");
            }
          }
          else if (winform.minBefore === "max") {
            that.max(id);
          }
          // 更新最小化布局
          that.updateMinLayout();
        }

        // 克隆一份
        let _winform = Utils.layxDeepClone({}, winform);
        delete that.windows[id];
        that.windows[id] = _winform;
        // 更新最小化布局
        that.updateMinLayout();

        if (xdWindow.classList.contains("xdwin-min-statu")) {
          xdWindow.classList.remove("xdwin-min-statu");
        }

        // 绑定恢复之后事件
        if (Utils.Util.isFunction(winform.event.onrestore.after)) {
          winform.event.onrestore.after(xdWindow, winform);
        }
      }
    }
    // 更新层级别
    updateZIndex(id: string) {
      let that = this,
        windowId = "xdwin-" + id,
        xdWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (xdWindow && winform) {
        let layxShade: any = document.getElementById("xdwin-" + id + "-shade");
        if (layxShade) {
          layxShade.style.zIndex = (winform.isStick === true ? (++that.stickZIndex) : (++that.zIndex));
        }
        if (winform.isStick === true) {
          winform.zIndex = (++that.stickZIndex) + 1;
        }
        else {
          winform.zIndex = (++that.zIndex) + 1;
        }
        xdWindow.style.zIndex = winform.zIndex;
      }
    }

    // 更新最小化布局
    updateMinLayout() {
      let that = this,
        windows = that.windows,
        innertArea = Utils.Util.innerArea(),
        paddingLeft = 10,
        paddingBottom = 10,
        widthByMinStatu = 240,
        stepIndex = 0,
        lineMaxCount = Math.floor(innertArea.width / (widthByMinStatu + paddingLeft));
      for (let id in windows) {
        let winform = windows[id],
          xdWindow: any = document.getElementById("xdwin-" + id);
        if (xdWindow && winform.status === "min") {
          let control = xdWindow.querySelector(".xdwin-control-bar");
          if (control) {
            let heightByMinStatus = control.offsetHeight;
            xdWindow.classList.add("xdwin-min-statu");
            // 设置最小化区域
            xdWindow.style.width = widthByMinStatu + 'px';
            xdWindow.style.height = heightByMinStatus + 'px';
            xdWindow.style.top = innertArea.height - (Math.floor(stepIndex / lineMaxCount) + 1) * (heightByMinStatus + paddingBottom) + 'px';
            xdWindow.style.left = stepIndex % lineMaxCount * (widthByMinStatu + paddingLeft) + paddingLeft + 'px';
            stepIndex++;
          }
        }
      }
    };
    // 最大化
    max(id: string) {
      let that = this,
        windowId = "xdwin-" + id,
        xdWindow: any = document.getElementById(windowId),
        winform = that.windows[id],
        innertArea = Utils.Util.innerArea();
      if (xdWindow && winform) {
        if (winform.maxable !== true) return;
        // 更新层级别
        that.updateZIndex(id);

        // 绑定最大化之前事件
        if (Utils.Util.isFunction(winform.event.onmax.before)) {
          let revel = winform.event.onmax.before(xdWindow, winform);
          if (revel === false) {
            return;
          }
        }

        // 隐藏滚动条
        document.body.classList.add('xdwin-body');
        // 设置窗口信息
        xdWindow.style.top = 0;
        xdWindow.style.left = 0;
        xdWindow.style.width = innertArea.width + "px";
        xdWindow.style.height = innertArea.height + "px";
        // 存储状态
        winform.status = "max";
        // 更新图标
        let maxMenu = xdWindow.querySelector(".xdwin-max-menu");
        if (maxMenu) {
          maxMenu.classList.remove("xdwin-max-menu");
          maxMenu.classList.add("xdwin-restore-menu");
          maxMenu.setAttribute("title", "恢复");
          maxMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-restore"></use></svg>';
        }
        // 隐藏拖曳
        let resizePanel = xdWindow.querySelector(".xdwin-resizes");
        if (resizePanel) {
          resizePanel.setAttribute("data-enable", "0");
        }

        // 更新最小化图标
        let restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='min']");
        if (restoreMenu) {
          restoreMenu.classList.remove("xdwin-restore-menu");
          restoreMenu.classList.add("xdwin-min-menu");
          restoreMenu.setAttribute("title", "最小化");
          restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-min"></use></svg>';
        }

        // 克隆一份
        let _winform = Utils.layxDeepClone({}, winform);
        delete that.windows[id];
        that.windows[id] = _winform;
        // 更新最小化布局
        that.updateMinLayout();

        if (xdWindow.classList.contains("xdwin-min-statu")) {
          xdWindow.classList.remove("xdwin-min-statu");
        }

        // 绑定最大化之后事件
        if (Utils.Util.isFunction(winform.event.onmax.after)) {
          winform.event.onmax.after(xdWindow, winform);
        }
      }
    };

    // 最小化
    min(id: string) {
      let that = this,
        windowId = "xdwin-" + id,
        xdWindow = document.getElementById(windowId),
        winform = that.windows[id],
        innertArea = Utils.Util.innerArea();
      if (xdWindow && winform) {
        if (winform.minable !== true) return;
        // 更新层级别
        that.updateZIndex(id);

        // 绑定最小化之前事件
        if (Utils.Util.isFunction(winform.event.onmin.before)) {
          let revel = winform.event.onmin.before(xdWindow, winform);
          if (revel === false) {
            return;
          }
        }

        // 存储状态
        winform.minBefore = winform.status;
        winform.status = "min";
        // 更新图标
        let minMenu = xdWindow.querySelector(".xdwin-min-menu");
        if (minMenu) {
          minMenu.classList.remove("xdwin-max-menu");
          minMenu.classList.add("xdwin-restore-menu");
          minMenu.setAttribute("title", "恢复");
          minMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-restore"></use></svg>';
        }
        // 隐藏拖曳
        let resizePanel = xdWindow.querySelector(".xdwin-resizes");
        if (resizePanel) {
          resizePanel.setAttribute("data-enable", "0");
        }

        // 更新最大化图标
        let restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='max']");
        if (restoreMenu) {
          restoreMenu.classList.remove("xdwin-restore-menu");
          restoreMenu.classList.add("xdwin-max-menu");
          restoreMenu.setAttribute("title", "最大化");
          restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-max"></use></svg>';
        }
        // 克隆一份
        let _winform = Utils.layxDeepClone({}, winform);
        delete that.windows[id];
        that.windows[id] = _winform;
        // 更新最小化布局
        that.updateMinLayout();

        // 绑定最小化之后事件
        if (Utils.Util.isFunction(winform.event.onmin.after)) {
          winform.event.onmin.after(xdWindow, winform);
        }
      }
    };
    // 销毁
    destroy(id: string) {
      let that = this,
        windowId = "xdwin-" + id,
        xdWindow = document.getElementById(windowId),
        layxShade = document.getElementById(windowId + '-shade'),
        winform = that.windows[id];
      if (xdWindow && winform) {
        // 更新层级别
        that.updateZIndex(id);

        // 绑定关闭之前事件
        if (Utils.Util.isFunction(winform.event.ondestroy.before)) {
          let revel = winform.event.ondestroy.before(xdWindow, winform);
          if (revel === false) {
            return;
          }
        }

        if (winform.closable !== true) return;

        delete that.windows[id];
        xdWindow.parentNode.removeChild(xdWindow);

        if (layxShade) {
          layxShade.parentNode.removeChild(layxShade);
        }

        // 更新最小化布局
        that.updateMinLayout();

        // 关闭之后事件
        if (Utils.Util.isFunction(winform.event.ondestroy.after)) {
          winform.event.ondestroy.after();
        }
        for (let key in winform) {
          delete winform[key];
        }
        winform = undefined;
      }
    };
  }

  class XdwinDrag extends XdMain {
    constructor() {
      super()
    }
  }

  class XdwinResize extends XdMain {

    private isResizing: any;
    private isFirstResizing: any;
    private handle: any;
    private isTop: any;
    private isLeft: any;
    private lockX: any;
    private lockY: any;

    constructor(handle: any, isTop: any, isLeft: any, lockX: any, lockY: any) {
      super()
      this.handle = handle;
      this.isTop = isTop;
      this.isLeft = isLeft;
      this.lockX = lockX;
      this.lockY = lockY;
      // 移动标识
      this.isResizing = false;

      // 判断是否第一次拖曳
      this.isFirstResizing = true;
    }

    private drag(e: any) {
      e = e || window.event;
      // 只允许鼠标左键拖曳
      let button = e.button || e.which;
      if (button == 1 && e.shiftKey == false) {
        let moveMouseCoord = Utils.Util.getMousePosition(e),
          distX = moveMouseCoord.x - this.handle.mouseStartCoord.x,
          distY = moveMouseCoord.y - this.handle.mouseStartCoord.y,
          _top = this.handle.winform.area.top + distY,
          _left = this.handle.winform.area.left + distX,
          _height = this.isTop ? this.handle.winform.area.height - distY : this.handle.winform.area.height + distY,
          _width = this.isLeft ? this.handle.winform.area.width - distX : this.handle.winform.area.width + distX;
        // 是否有任何移动操作
        if (distX !== 0 || distY !== 0) {
          this.isResizing = true;
          // 隐藏滚动条
          document.body.classList.add('xdwin-body');

          if (this.isFirstResizing === true) {
            this.isFirstResizing = false;

            // 绑定拖曳之前事件
            if (Utils.Util.isFunction(this.handle.winform.event.onresize.before)) {
              let reval = this.handle.winform.event.onresize.before(this.handle.layxWindow, this.handle.winform);
              if (reval === false) {
                this.isResizing = false;
                this.isFirstResizing = true;
                document.onmouseup = null;
                document.onmousemove = null;
                return;
              }
            }
          }
          // 限制最小宽度
          _width = Math.max(_width, this.handle.winform.area.minWidth);
          // 显示最小最大左边距
          if (this.isLeft) {
            _left = Math.min(_left, this.handle.winform.area.left + this.handle.winform.area.width - this.handle.winform.area.minWidth);
            _left = Math.max(0, _left);

            _width = Math.min(_width, this.handle.winform.area.left + this.handle.winform.area.width);
          } else {
            _left = Math.min(_left, this.handle.winform.area.left);
            _left = Math.max(this.handle.winform.area.left, _left);

            _width = Math.min(_width, this.handle.innerArea.width - this.handle.winform.area.left);
          }
          // 限制最小高度
          _height = Math.max(_height, this.handle.winform.area.minHeight);
          // 显示最小最大上边距
          if (this.isTop) {
            _top = Math.min(_top, this.handle.winform.area.top + this.handle.winform.area.height - this.handle.winform.area.minHeight);
            _top = Math.max(0, _top);

            _height = Math.min(_height, this.handle.winform.area.top + this.handle.winform.area.height);
          } else {
            _top = Math.min(_top, this.handle.winform.area.top);
            _top = Math.max(this.handle.winform.area.top, _top);

            _height = Math.min(_height, this.handle.innerArea.height - this.handle.winform.area.top);
          }
          // 是否锁住Y轴
          if (this.lockY) {
            this.handle.layxWindow.style.width = _width + 'px';
            this.handle.layxWindow.style.left = _left + 'px';
          }
          // 是否锁住X轴
          if (this.lockX) {
            this.handle.layxWindow.style.top = _top + 'px';
            this.handle.layxWindow.style.height = _height + 'px';
          }
          if (this.lockY === false && this.lockX === false) {
            this.handle.layxWindow.style.width = _width + 'px';
            this.handle.layxWindow.style.left = _left + 'px';
            this.handle.layxWindow.style.top = _top + 'px';
            this.handle.layxWindow.style.height = _height + 'px';
          }

          // 绑定拖曳中事件
          if (Utils.Util.isFunction(this.handle.winform.event.onresize.progress)) {
            this.handle.winform.event.onresize.progress(this.handle.layxWindow, this.handle.winform);
          }
        }
      }
    }

    dragstart(e: any) {
      e = e || window.event;

      let xdwinWindow = Utils.Util.getNodeByClassName(this.handle, 'xdwin-window', this.win);
      if (xdwinWindow) {
        let id = xdwinWindow.getAttribute("id").substr(5),
          winform = conf.windows[id];
        if (winform) {
          // 最小化不允许拖曳
          if (winform.status !== "min" && winform.resizable === true) {
            // 创建全局遮罩层
            let xdwinMove = document.getElementById("xdwin-window-move");
            if (!xdwinMove) {
              xdwinMove = document.createElement("div");
              xdwinMove.setAttribute("id", "xdwin-window-move");
              document.body.appendChild(xdwinMove);
            }
            // 更新层级别
            this.updateZIndex(id);
            xdwinMove.style.zIndex = String(winform.zIndex - 1);

            // 获取鼠标点击坐标
            let mouseCoord = Utils.Util.getMousePosition(e);
            // 存储一开始的坐标
            this.handle.mouseStartCoord = mouseCoord;
            // 存储xdwinWindow Dom对象
            this.handle.xdwinWindow = xdwinWindow;
            // 存储winform对象
            this.handle.winform = winform;
            // 存储浏览器可视区域信息
            this.handle.innerArea = Utils.Util.innerArea();
            // 禁止浏览器默认事件
            e.preventDefault();
            // 禁止冒泡
            e.stopPropagation();

            let mousePreventDefault = xdwinWindow.querySelector(".xdwin-mouse-preventDefault");
            if (!mousePreventDefault) {
              // 解决鼠标拖出目标容器bug
              mousePreventDefault = document.createElement("div");
              mousePreventDefault.classList.add("xdwin-mouse-preventDefault");
              let main = xdwinWindow.querySelector(".xdwin-main");
              if (main) {
                main.appendChild(mousePreventDefault);
              }
            }

            document.onmouseup = this.dragend;
            document.onmousemove = this.drag;
          }
          else {
            this.restore(id);
          }
        }
      }
      return false;
    };

    dragend(e: any) {
      e = e || window.event;
      document.onmouseup = null;
      document.onmousemove = null;
      // 移除鼠标拖动遮罩层
      let mousePreventDefault = this.handle.layxWindow.querySelector(".xdwin-mouse-preventDefault");
      if (mousePreventDefault) {
        mousePreventDefault.parentNode.removeChild(mousePreventDefault);
      }

      let layxMove = document.getElementById("xdwin-window-move");
      if (layxMove) {
        layxMove.parentNode.removeChild(layxMove);
      }

      // 只有发生移动才触发
      if (this.isResizing === true) {
        this.isResizing = false;
        this.isFirstResizing = true;


        // 更新窗口位置信息
        this.handle.winform.area.top = this.handle.layxWindow.offsetTop;
        this.handle.winform.area.left = this.handle.layxWindow.offsetLeft;
        this.handle.winform.area.width = this.handle.layxWindow.offsetWidth;
        this.handle.winform.area.height = this.handle.layxWindow.offsetHeight;

        // 恢复滚动条
        if (document.body.classList.contains("xdwin-body")) {
          document.body.classList.remove('xdwin-body');
        }

        // 绑定拖曳之后事件
        if (Utils.Util.isFunction(this.handle.winform.event.onresize.after)) {
          this.handle.winform.event.onresize.after(this.handle.layxWindow, this.handle.winform);
        }
      }
    };
  }
}