namespace xdwin {
  export const version = '2.0.5';
  export const defaults = {
    id: '',// 窗口唯一id
    icon: true, // 窗口图标，false为不启用，支持html
    title: '',  // 标题，支持html
    width: 800, // 初始化宽度，支持百分比 '100%'
    height: 600,    // 初始化高度，支持百分比 '100%'
    minWidth: 100,  // 最小宽度，支持百分比 '100%'
    minHeight: 100, // 最小高度，支持百分比 '100%'
    position: 'ct', // 初始化位置，支持'ct', 'lt', 'rt', 'lb', 'rb', 'lc', 'tc', 'rc', 'bc'，以及 [top,left]数组，同时也数字也支持混合写法，如：[100,'tc']
    control: true, // 是否显示控制栏
    style: '',   // style样式，
    controlStyle: '', // 控制栏样式
    bgColor: "#fff",  // 窗口颜色：默认透明
    shadow: true,   // 是否显示阴影
    border: "1px solid #3baced", // 边框，false不启用边框
    type: 'html',   // 窗口类型，支持：html,url,group
    frames: [], // 子框架
    frameIndex: 0,  // 默认显示自框架索引
    content: '', // type为html有效，支持字符串和element对象
    url: '', // type为url有效
    useFrameTitle: false, // 是否自动获取iframe页面标题填充窗口标题
    opacity: 1, // 透明度
    shadable: false, // 是否启用窗口阻隔
    loaddingText: '内容正在加载中，请稍后...', // 内容加载文本内容，支持html
    stickMenu: false,   // 是否显示置顶按钮
    stickable: true, // 是否允许置顶操作
    minMenu: true,  // 是否显示最小化按钮
    minable: true, // 是否允许最小化操作
    maxMenu: true,  // 是否显示最大化按钮
    maxable: true, // 是否允许最大化操作
    closeMenu: true,    // 是否显示关闭按钮
    closable: true, // 是否允许关闭操作
    restorable: true,   // 是否允许恢复操作
    resizable: true, // 是否显示拖曳操作
    autodestroy: false,  // 自动关闭，支持数值类型毫秒
    autodestroyText: '<div style="padding: 0 8px; ">此窗口将在 <strong>{second}</strong> 秒内自动关闭.</div>', // 是否显示关闭倒计时文本
    // 拖曳方向控制
    resizeLimit: {
      t: false, // 是否限制上边拖曳大小，false不限制
      r: false, // 是否限制右边拖曳大小，false不限制
      b: false, // 是否限制下边拖曳大小，false不限制
      l: false, // 是否限制左边拖曳大小，false不限制
      lt: false, // 是否限制左上边拖曳大小，false不限制
      rt: false, // 是否限制右上边拖曳大小，false不限制
      lb: false, // 是否限制左下边拖曳大小，false不限制
      rb: false // 是否限制右下边拖曳大小，false不限制
    },
    buttons: [],    // 生成状态栏按钮，必须设置statusBar=true
    isPrompt: false,    // 是否输入窗口，此窗口比较特殊，单独设置参数
    movable: true,  // 是否允许拖动窗口
    moveLimit: {
      vertical: false, // 是否禁止垂直拖动，false不禁止
      horizontal: false, // 是否禁止水平拖动，false不禁止
      leftOut: true, // 是否允许左边拖出，true允许
      rightOut: true, // 是否允许右边拖出，true允许
      topOut: true, // 是否允许上边拖出，true允许，此设置不管是false还是true，窗口都不能拖出窗体
      bottomOut: true, // 是否允许下边拖出，true允许
    },
    focusable: true, // 是否启用iframe页面点击置顶，只支持非跨域iframe
    alwaysOnTop: false, // 是否置顶
    allowControlDbclick: true,    // 允许控制栏双击切换窗口大小
    statusBar: false, // 是否显示状态栏，支持html，支持字符串和element对象
    statusBarStyle: '',// 状态栏样式
    // 事件
    event: {
      // 加载事件
      onload: {
        // 加载之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 加载之后
        after: function (layxWindow: any, winform: any) {
        }
      },
      // 最小化事件
      onmin: {
        // 最小化之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 最小化之后
        after: function (layxWindow: any, winform: any) {
        }
      },
      // 最大化事件
      onmax: {
        // 最大化之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 最大化之后
        after: function (layxWindow: any, winform: any) {
        }
      },
      // 恢复事件
      onrestore: {
        // 恢复之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 恢复之后
        after: function (layxWindow: any, winform: any) {
        }
      },
      // 关闭事件
      ondestroy: {
        // 关闭之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 关闭之后
        after: function () {
        }
      },
      // 移动事件
      onmove: {
        // 移动之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 移动中
        progress: function (layxWindow: any, winform: any) {
        },
        // 移动之后
        after: function (layxWindow: any, winform: any) {
        }
      },
      // 拖曳事件
      onresize: {
        // 拖曳之前，return false 不执行
        before: function (layxWindow: any, winform: any) {
        },
        // 拖曳中
        progress: function (layxWindow: any, winform: any) {
        },
        // 拖曳之后
        after: function (layxWindow: any, winform) {
        }
      }
    }
  };
  // 按钮配置参数
  export const defaultButtons = {
    label: '确定',
    callback(id: any) {
    }
  };
  // 默认子frame参数
  export const defaultFrames = {
    id: '',
    title: '',
    type: 'html',
    url: '',
    content: '',
    useFrameTitle: false,
  };
  export let xdmain = {

    // 默认子frame参数
    defaultFrames: {
      id: '',
      title: '',
      type: 'html',
      url: '',
      content: '',
      useFrameTitle: false,
    },
    // 普通层级别
    zIndex: 10000000,
    // 窗口集合
    windows: {},
    // 置顶层级别
    stickZIndex: 20000000,
    // 创建窗口骨架
    create: function (options) {
      let that = this,
        config = layxDeepClone({}, that.defaults, options || {}),
        winform = {};
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
        let layxShade = document.createElement("div");
        layxShade.setAttribute("id", "layx-" + config.id + "-shade");
        layxShade.classList.add("layx-shade");
        layxShade.style.zIndex = config.alwaysOnTop === true ? (++that.stickZIndex) : (++that.zIndex);
        document.body.appendChild(layxShade);
        layxShade.onclick = function (e) {
          e = e || window.event;
          that.flicker(config.id);
          e.stopPropagation();
        }
      }
      // 动态插入样式
      if (config.style) {
        let style = document.getElementById("layx-style");
        if (style) {
          style.innerHTML += config.style;
        } else {
          style = document.createElement("style");
          style.setAttribute("id", "layx-style");
          style.type = "text/css";
          style.innerHTML = config.style;
          document.getElementsByTagName("HEAD").item(0).appendChild(style);
        }
      }

      // 创建layx-window
      let layxWindow = document.createElement("div");
      layxWindow.setAttribute("id", "layx-" + config.id);
      layxWindow.classList.add("layx-window");
      layxWindow.classList.add("layx-flexbox");
      if (config.shadow === true) {
        layxWindow.style.setProperty("box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
        layxWindow.style.setProperty("-moz-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
        layxWindow.style.setProperty("-webkit-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
      }

      // 转换最小化参数
      let _minWidth = Utils.compileLayxWidthOrHeight("width", config.minWidth, that.defaults.minWidth);
      let _minHeight = Utils.compileLayxWidthOrHeight("height", config.minHeight, that.defaults.minHeight);

      let _width = Utils.compileLayxWidthOrHeight("width", config.width, that.defaults.width);
      _width = Math.max(_width, _minWidth);

      let _height = Utils.compileLayxWidthOrHeight("height", config.height, that.defaults.height);
      _height = Math.max(_height, _minHeight);

      let _position = Utils.compileLayxPosition(_width, _height, config.position);

      layxWindow.style.zIndex = config.alwaysOnTop === true ? (++that.stickZIndex) : (++that.zIndex);
      layxWindow.style.width = _width + "px";
      layxWindow.style.height = _height + "px";
      layxWindow.style.minWidth = _minWidth + "px";
      layxWindow.style.minHeight = _minHeight + "px";
      layxWindow.style.top = _position.top + "px";
      layxWindow.style.left = _position.left + "px";
      if (config.border !== false) {
        layxWindow.style.setProperty("border", config.border === true ? '1px solid #3baced' : config.border);
      }
      layxWindow.style.backgroundColor = config.bgColor;
      layxWindow.style.opacity = Utils.isNumber(config.opacity) ? config.opacity : 1;
      // 为 html 类型添加更新层事件
      if (config.type === "html" || config.type === "group") {
        layxWindow.onclick = function (e) {
          e = e || window.event;
          that.updateZIndex(config.id);
          e.stopPropagation();
        };
      }
      document.body.appendChild(layxWindow);

      // ================ 存储对象信息
      // 存储窗口Id
      winform.id = config.id;
      // 存储窗口domId
      winform.windowId = layxWindow.getAttribute("id");
      // 存储窗口dom对象
      winform.window = layxWindow;
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
      winform.groupCurrentId = (Utils.isArray(config.frames) && config.frames.length > 0 && config.frames[config.frameIndex]) ? config.frames[config.frameIndex].id : null;
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
        controlBar.classList.add("layx-control-bar");
        controlBar.classList.add("layx-flexbox");
        config.controlStyle && controlBar.setAttribute("style", config.controlStyle);
        if (config.type === "group") {
          controlBar.classList.add("layx-type-group");
        }
        layxWindow.appendChild(controlBar);

        // 创建窗口默认图标
        if (config.icon !== false) {
          // 创建控制栏左边容器
          let leftBar = document.createElement("div");
          leftBar.classList.add("layx-left-bar");
          leftBar.classList.add("layx-flexbox");
          leftBar.classList.add("layx-flex-vertical");
          controlBar.appendChild(leftBar);

          let windowIcon = document.createElement("div");
          windowIcon.classList.add("layx-icon");
          windowIcon.classList.add("layx-window-icon");
          windowIcon.innerHTML = config.icon === true ? '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-default-icon"></use></svg>' : config.icon;
          leftBar.appendChild(windowIcon);
        }

        // 窗口标题
        let title = document.createElement("div");
        title.classList.add("layx-title");
        title.classList.add("layx-flexauto");
        title.classList.add("layx-flexbox");
        if (config.type === "group") {
          title.classList.add("layx-type-group");
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
          new LayxDrag(title);
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
          if (Utils.isArray(config.frames)) {
            for (let i = 0; i < config.frames.length; i++) {
              let frameConfig = layxDeepClone({}, that.defaultFrames, config.frames[i]);
              let frameTitle = document.createElement("div");
              frameTitle.setAttribute("data-frameId", frameConfig.id);
              frameTitle.classList.add("layx-group-title");
              if (i === config.frameIndex) {
                frameTitle.setAttribute("data-enable", "1");
              }
              frameTitle.onclick = function (e) {
                e = e || window.event;
                let prevSelectTitle = layxWindow.querySelector(".layx-group-title[data-enable='1']");
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
        rightBar.classList.add("layx-right-bar");
        rightBar.classList.add("layx-flexbox");
        controlBar.appendChild(rightBar);

        // 创建用户自定义按钮
        let customMenu = document.createElement("div");
        customMenu.classList.add("layx-custom-menus");
        customMenu.classList.add("layx-flexbox");
        rightBar.appendChild(customMenu);

        if (config.stickMenu === true || config.minMenu === true || config.maxMenu === true || config.closeMenu === true) {
          // 创建内置按钮
          let inlayMenu = document.createElement("div");
          inlayMenu.classList.add("layx-inlay-menus");
          inlayMenu.classList.add("layx-flexbox");
          rightBar.appendChild(inlayMenu);

          if (config.stickMenu === true || (config.alwaysOnTop === true && config.stickMenu)) {
            // 创建置顶按钮
            let stickMenu = document.createElement("div");
            stickMenu.classList.add("layx-icon");
            stickMenu.classList.add("layx-flexbox");
            stickMenu.classList.add("layx-flex-center");
            stickMenu.classList.add("layx-stick-menu");
            config.alwaysOnTop === true ? stickMenu.setAttribute("title", "取消置顶") : stickMenu.setAttribute("title", "置顶");
            config.alwaysOnTop === true && stickMenu.setAttribute("data-enable", "1");
            stickMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-stick"></use></svg>';
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
            minMenu.classList.add("layx-icon");
            minMenu.classList.add("layx-flexbox");
            minMenu.classList.add("layx-flex-center");
            minMenu.classList.add("layx-min-menu");
            minMenu.setAttribute("title", "最小化");
            minMenu.setAttribute("data-menu", "min");
            minMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-min"></use></svg>';
            minMenu.onclick = function (e) {
              e = e || window.event;
              if (!this.classList.contains("layx-restore-menu")) {
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
            maxMenu.classList.add("layx-icon");
            maxMenu.classList.add("layx-flexbox");
            maxMenu.classList.add("layx-flex-center");
            maxMenu.classList.add("layx-max-menu");
            maxMenu.setAttribute("title", "最大化");
            maxMenu.setAttribute("data-menu", "max");
            maxMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-max"></use></svg>';
            maxMenu.onclick = function (e) {
              e = e || window.event;
              if (!this.classList.contains("layx-restore-menu")) {
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
            destroyMenu.classList.add("layx-icon");
            destroyMenu.classList.add("layx-flexbox");
            destroyMenu.classList.add("layx-flex-center");
            destroyMenu.classList.add("layx-destroy-menu");
            destroyMenu.setAttribute("title", "关闭");
            destroyMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-destroy"></use></svg>';
            destroyMenu.onclick = function (e) {
              e = e || window.event;
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
      main.classList.add("layx-main");
      main.classList.add("layx-flexauto");
      layxWindow.appendChild(main);

      // 创建内容遮罩效果
      let contentShade = document.createElement("div");
      contentShade.classList.add("layx-content-shade");
      contentShade.classList.add("layx-flexbox");
      contentShade.classList.add("layx-flex-center");

      // dom元素直接添加
      if (Utils.isDom(config.loaddingText)) {
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
          if (Utils.isFunction(config.event.onload.before)) {
            let revel = config.event.onload.before(layxWindow: any, winform: any);
            if (revel === false) {
              return;
            }
          }
          // 创建html内容
          that.createHtmlBody(main, config, config.content);
          main.removeChild(contentShade);

          // 绑定加载之后事件
          if (Utils.isFunction(config.event.onload.after)) {
            config.event.onload.after(layxWindow: any, winform: any);
          }
          break;
        case "url":
          // 绑定加载之前事件
          if (Utils.isFunction(config.event.onload.before)) {
            let revel = config.event.onload.before(layxWindow: any, winform: any);
            if (revel === false) {
              return;
            }
          }
          that.createFrameBody(main, config, layxWindow: any, winform: any);

          // 绑定加载之后事件
          if (Utils.isFunction(config.event.onload.after)) {
            config.event.onload.after(layxWindow: any, winform: any);
          }

          break;
        case "group":
          // 创建窗口组主体
          if (Utils.isArray(config.frames)) {
            // 绑定加载之前事件
            if (Utils.isFunction(config.event.onload.before)) {
              let revel = config.event.onload.before(layxWindow: any, winform: any);
              if (revel === false) {
                return;
              }
            }

            let groupLoadCount = 0;
            for (let i = 0; i < config.frames.length; i++) {
              let frameConfig = layxDeepClone({}, that.defaultFrames, config.frames[i]);
              let frameBody = document.createElement("div");
              frameBody.classList.add("layx-group-main");
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

                let loadComplteMains = layxWindow.querySelectorAll(".layx-group-main[data-complete='1']");
                if (loadComplteMains.length === config.frames.length) {
                  main.removeChild(contentShade);
                  // 绑定加载之后事件
                  if (Utils.isFunction(config.event.onload.after)) {
                    config.event.onload.after(layxWindow: any, winform: any);
                  }
                }
              }
              else if (frameConfig.type === "url") {
                that.createFrameBody(frameBody, config, layxWindow: any, winform: any, "group", frameConfig);
              }
            }
          }
          break;
      }

      if (config.resizable === true) {
        // 创建拖曳容器
        let resize = document.createElement("div");
        resize.classList.add("layx-resizes");
        layxWindow.appendChild(resize);

        // 创建8个方向拖曳
        if (config.resizeLimit.t === false) {
          // 上
          let resizeTop = document.createElement("div");
          resizeTop.classList.add("layx-resize-top");
          new LayxResize(resizeTop, true, false, true, false);
          resize.appendChild(resizeTop);
        }
        if (config.resizeLimit.r === false) {
          // 右
          let resizeRight = document.createElement("div");
          resizeRight.classList.add("layx-resize-right");
          new LayxResize(resizeRight, false, false, false, true);
          resize.appendChild(resizeRight);
        }

        if (config.resizeLimit.b === false) {
          //下
          let resizeBottom = document.createElement("div");
          resizeBottom.classList.add("layx-resize-bottom");
          new LayxResize(resizeBottom, false, false, true, false);
          resize.appendChild(resizeBottom);
        }

        if (config.resizeLimit.l === false) {
          // 左
          let resizeLeft = document.createElement("div");
          resizeLeft.classList.add("layx-resize-left");
          new LayxResize(resizeLeft, false, true, false, true);
          resize.appendChild(resizeLeft);
        }

        if (config.resizeLimit.lt === false) {
          // 左上
          let resizeLeftTop = document.createElement("div");
          resizeLeftTop.classList.add("layx-resize-left-top");
          new LayxResize(resizeLeftTop, true, true, false, false);
          resize.appendChild(resizeLeftTop);
        }

        if (config.resizeLimit.rt === false) {
          //右上
          let resizeRightTop = document.createElement("div");
          resizeRightTop.classList.add("layx-resize-right-top");
          new LayxResize(resizeRightTop, true, false, false, false);
          resize.appendChild(resizeRightTop);
        }

        if (config.resizeLimit.lb === false) {
          //左下
          let resizeLeftBottom = document.createElement("div");
          resizeLeftBottom.classList.add("layx-resize-left-bottom");
          new LayxResize(resizeLeftBottom, false, true, false, false);
          resize.appendChild(resizeLeftBottom);
        }

        if (config.resizeLimit.rb === false) {
          // 右下
          let resizeRightBottom = document.createElement("div");
          resizeRightBottom.classList.add("layx-resize-right-bottom");
          new LayxResize(resizeRightBottom, false, false, false, false);
          resize.appendChild(resizeRightBottom);
        }
      }

      // 创建状态栏
      if (config.statusBar) {
        let statusBar = document.createElement("div");
        statusBar.classList.add("layx-statu-bar");
        config.statusBarStyle && statusBar.setAttribute("style", config.statusBarStyle);
        // 创建按钮

        if (config.statusBar === true && Utils.isArray(config.buttons)) {
          let btnElement = that.createLayxButtons(config.buttons, config.id, config.isPrompt);
          statusBar.appendChild(btnElement);
        }
        else {
          // dom元素直接添加
          if (Utils.isDom(config.statusBar)) {
            statusBar.appendChild(config.statusBar);
          }
          else {
            statusBar.innerHTML = config.statusBar;
          }
        }

        layxWindow.appendChild(statusBar);
      }

      // 自动关闭提示
      if (/(^[1-9]\d*$)/.test(config.autodestroy)) {
        let second = config.autodestroy / 1000;
        if (config.autodestroyText !== false) {
          let autodestroyTip = document.createElement("div");
          autodestroyTip.classList.add("layx-auto-destroy-tip");
          autodestroyTip.innerHTML = config.autodestroyText.replace("{second}", second);
          layxWindow.appendChild(autodestroyTip);
        }
        let destroyTimer = setInterval(function () {
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
    },
    // 设置窗口组选择（内部方法）
    _setGroupIndex: function (id, target) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        let frameId = target.getAttribute("data-frameId");
        let prevGroupMain = layxWindow.querySelector(".layx-group-main[data-enable='1']");
        let currentGroupMain = layxWindow.querySelector(".layx-group-main[data-frameId='" + frameId + "']");
        if (currentGroupMain !== prevGroupMain) {
          prevGroupMain.removeAttribute("data-enable");
          currentGroupMain.setAttribute("data-enable", "1");
          winform.groupCurrentId = frameId;
        }
      }
    },
    // 设置窗口组索引
    setGroupIndex: function (id, frameId) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        let title = layxWindow.querySelector(".layx-group-title[data-frameId='" + frameId + "']");
        title.click();
      }
    },
    // 创建HTML内容
    createHtmlBody: function (main, config, content, type, frameConfig) {
      // 创建html内容
      let html = document.createElement("div");
      html.classList.add("layx-html");
      html.classList.add("layx-flexbox");
      html.setAttribute("id", "layx-" + config.id + (type === "group" ? "-" + frameConfig.id + "-" : "-") + "html");
      // dom元素直接添加
      if (Utils.isDom(content)) {
        html.appendChild(content);
      }
      else {
        html.innerHTML = content;
      }
      main.appendChild(html);
    },
    // 创建Frame内容
    createFrameBody: function (main, config, layxWindow: any, winform: any, type, frameConfig) {
      let that = this;
      let contentShade = (type === "group" ? main.parentNode : main).querySelector(".layx-content-shade");

      let iframe = document.createElement("iframe");
      iframe.setAttribute("id", "layx-" + config.id + (type === "group" ? "-" + frameConfig.id + "-" : "-") + "iframe");
      iframe.classList.add("layx-iframe");
      iframe.classList.add("layx-flexbox");
      iframe.setAttribute("allowtransparency", "true");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("scrolling", "auto");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("mozallowfullscreen", "");
      iframe.setAttribute("webkitallowfullscreen", "");
      iframe.src = (type === "group" ? frameConfig.url : config.url) || 'about:blank';

      let iframeTitle = "";
      // ie9+
      if (iframe.attachEvent) {
        iframe.attachEvent("onreadystatechange", function () {
          if (iframe.readyState === "complete" || iframe.readyState == "loaded") {
            iframe.detachEvent("onreadystatechange", arguments.callee);
            try {
              if (type === "group") {
                if (frameConfig.useFrameTitle === true) {
                  // 获取iframe标题
                  iframeTitle = iframe.contentWindow.document.querySelector("title").innerText;
                  that.setGroupTitle(config.id, frameConfig.id, iframeTitle);
                }
              }
              else {
                if (config.useFrameTitle === true) {
                  // 获取iframe标题
                  iframeTitle = iframe.contentWindow.document.querySelector("title").innerText;
                  that.setTitle(config.id, iframeTitle);
                }
              }
              if (config.focusable === true) {
                // 添加iframe点击事件
                iframe.contentWindow.onclick = function (e) {
                  let _slf = this.self;
                  e = e || iframe.contentWindow.event;
                  if (_slf !== over && _slf.frameElement && _slf.frameElement.tagName === "IFRAME") {
                    // 获取窗口dom对象
                    let layxWindow = Utils.getNodeByClassName(_slf.frameElement, 'layx-window', _slf);
                    // 更新层级别
                    let windowId = layxWindow.getAttribute("id").substr(5);
                    that.updateZIndex(windowId);
                  }
                  e.stopPropagation();
                }
              }
            } catch (e) {
              console.warn(e);
            }

            if (contentShade) {
              if (type === "group") {
                main.setAttribute("data-complete", "1");
                let loadComplteMains = layxWindow.querySelectorAll(".layx-group-main[data-complete='1']");

                if (config.frames.length === loadComplteMains.length) {
                  contentShade.parentNode.removeChild(contentShade);
                  // 绑定加载之后事件
                  if (Utils.isFunction(config.event.onload.after)) {
                    config.event.onload.after(layxWindow: any, winform: any);
                  }
                }
              }
              else {
                contentShade.parentNode.removeChild(contentShade);
                // 绑定加载之后事件
                if (Utils.isFunction(config.event.onload.after)) {
                  config.event.onload.after(layxWindow: any, winform: any);
                }
              }
            }
          }
        });
      }
      // chrome,foxfire,opera...
      else {
        iframe.addEventListener("load", function () {
          this.removeEventListener("load", arguments.call, false);
          try {
            if (type === "group") {
              if (frameConfig.useFrameTitle === true) {
                // 获取iframe标题
                iframeTitle = iframe.contentWindow.document.querySelector("title").innerText;
                that.setGroupTitle(config.id, frameConfig.id, iframeTitle);
              }
            }
            else {
              if (config.useFrameTitle === true) {
                // 获取iframe标题
                iframeTitle = iframe.contentWindow.document.querySelector("title").innerText;
                that.setTitle(config.id, iframeTitle);
              }
            }
            if (config.focusable === true) {
              // 添加iframe点击事件
              iframe.contentWindow.onclick = function (e) {
                let _slf = this.self;
                e = e || iframe.contentWindow.event;
                if (_slf !== over && _slf.frameElement && _slf.frameElement.tagName === "IFRAME") {
                  // 获取窗口dom对象
                  let layxWindow = Utils.getNodeByClassName(_slf.frameElement, 'layx-window', _slf);
                  // 更新层级别
                  let windowId = layxWindow.getAttribute("id").substr(5);
                  that.updateZIndex(windowId);
                }
                e.stopPropagation();
              }
            }
          } catch (e) {
            console.warn(e);
          }

          if (contentShade) {
            if (type === "group") {
              main.setAttribute("data-complete", "1");
              let loadComplteMains = layxWindow.querySelectorAll(".layx-group-main[data-complete='1']");

              if (config.frames.length === loadComplteMains.length) {
                contentShade.parentNode.removeChild(contentShade);
                // 绑定加载之后事件
                if (Utils.isFunction(config.event.onload.after)) {
                  config.event.onload.after(layxWindow: any, winform: any);
                }
              }
            }
            else {
              contentShade.parentNode.removeChild(contentShade);
              // 绑定加载之后事件
              if (Utils.isFunction(config.event.onload.after)) {
                config.event.onload.after(layxWindow: any, winform: any);
              }
            }
          }
        }, false);
      }
      main.appendChild(iframe);
    },
    // 设置窗口内容，文本窗口有效
    setContent: function (id, content) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        if (winform.type === "html") {
          let html = layxWindow.querySelector("#layx-" + id + "-html");
          if (html) {
            if (Utils.isDom(content)) {
              html.appendChild(content);
            }
            else {
              html.innerHTML = content;
            }
          }
        }
      }
    },
    // 获取窗口组Frame对象
    getGroupFrame: function (frames, frameId) {
      let frm = {};
      for (let i = 0; i < frames.length; i++) {
        if (frames[i].id === frameId) {
          frm = frames[i];
          break;
        }
      }
      return frm;
    },
    // 设置窗口组内容
    setGroupContent: function (id, frameId, content) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform && Utils.isArray(winform.frames)) {

        if (that.getGroupFrame(winform.frames, frameId).type === "html") {
          let html = layxWindow.querySelector("#layx-" + id + "-" + frameId + "-" + "html");
          if (html) {
            if (Utils.isDom(content)) {
              html.appendChild(content);
            }
            else {
              html.innerHTML = content;
            }
          }
        }
      }
    },
    // 设置iframe地址，iframe窗口有效
    setUrl: function (id, url) {
      url = url || 'about:blank';
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        if (winform.type === "url") {
          let iframe = layxWindow.querySelector("#layx-" + id + "-iframe");
          if (iframe) {
            iframe.setAttribute("src", url);
          }
        }
      }
    },
    // 设置窗口组Url
    setGroupUrl: function (id, frameId, url) {
      url = url || 'about:blank';
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        if (that.getGroupFrame(winform.frames, frameId).type === "html") {
          let iframe = layxWindow.querySelector("#layx-" + id + "-" + frameId + "-" + "iframe");
          if (iframe) {
            iframe.setAttribute("src", url);
          }
        }
      }
    },
    // 设置窗口组标题
    setGroupTitle: function (id, frameId, content, useFrameTitle) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        let title = layxWindow.querySelector(".layx-group-title[data-frameId='" + frameId + "']");
        if (title) {
          // 获取iframe标题
          if (useFrameTitle === true) {
            let iframe = layxWindow.querySelector("#layx-" + id + "-" + frameId + "-" + "iframe");
            try {
              content = iframe.contentDocument.querySelector("title").innerText;
            } catch (e) { }
          }
          let label = title.querySelector("label");
          if (label) {
            label.innerHTML = content;
            title.setAttribute("title", label.innerHTML);
          }
        }
      }
    },
    // 设置标题
    setTitle: function (id, content, useFrameTitle) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        let title = layxWindow.querySelector(".layx-title");
        if (title) {
          // 获取iframe标题
          if (useFrameTitle === true) {
            let iframe = layxWindow.querySelector("#layx-" + id + "-iframe");
            try {
              content = iframe.contentDocument.querySelector("title").innerText;
            } catch (e) { }
          }
          let label = title.querySelector("label");
          if (label) {
            label.innerHTML = content;
            title.setAttribute("title", label.innerHTML);
          }
        }
      }
    },
    // 置顶切换
    stickToggle: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        // 更新层级别
        that.updateZIndex(id);

        winform.isStick = !winform.isStick;
        let stickMenu = layxWindow.querySelector(".layx-stick-menu");
        if (stickMenu) {
          stickMenu.setAttribute("data-enable", winform.isStick ? "1" : "0");
          winform.isStick ? stickMenu.setAttribute("title", "取消置顶") : stickMenu.setAttribute("title", "置顶");
        }
        that.updateZIndex(id);
      }
    },
    // 恢复窗口
    restore: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        if (winform.restorable !== true) return;
        // 更新层级别
        that.updateZIndex(id);

        // 绑定恢复之前事件
        if (Utils.isFunction(winform.event.onrestore.before)) {
          let revel = winform.event.onrestore.before(layxWindow: any, winform: any);
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
          if (document.body.classList.contains("layx-body")) {
            document.body.classList.remove('layx-body');
          }
          // 设置窗口信息
          layxWindow.style.top = area.top + "px";
          layxWindow.style.left = area.left + "px";
          layxWindow.style.width = area.width + "px";
          layxWindow.style.height = area.height + "px";
          // 存储状态
          winform.status = "normal";
          // 更新图标
          let restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='max']");
          if (restoreMenu) {
            restoreMenu.classList.remove("layx-restore-menu");
            restoreMenu.classList.add("layx-max-menu");
            restoreMenu.setAttribute("title", "最大化");
            restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-max"></use></svg>';
          }
          // 显示拖曳
          let resizePanel = layxWindow.querySelector(".layx-resizes");
          if (resizePanel) {
            resizePanel.removeAttribute("data-enable");
          }
        }
        if (winform.status === "min") {
          if (winform.minBefore === "normal") {
            // 设置窗口信息
            layxWindow.style.top = area.top + "px";
            layxWindow.style.left = area.left + "px";
            layxWindow.style.width = area.width + "px";
            layxWindow.style.height = area.height + "px";
            // 存储状态
            winform.status = "normal";
            // 更新图标
            let restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='min']");
            if (restoreMenu) {
              restoreMenu.classList.remove("layx-restore-menu");
              restoreMenu.classList.add("layx-min-menu");
              restoreMenu.setAttribute("title", "最小化");
              restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-min"></use></svg>';
            }
            // 显示拖曳
            let resizePanel = layxWindow.querySelector(".layx-resizes");
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
        let _winform = layxDeepClone({}, winform);
        delete that.windows[id];
        that.windows[id] = _winform;
        // 更新最小化布局
        that.updateMinLayout();

        if (layxWindow.classList.contains("layx-min-statu")) {
          layxWindow.classList.remove("layx-min-statu");
        }

        // 绑定恢复之后事件
        if (Utils.isFunction(winform.event.onrestore.after)) {
          winform.event.onrestore.after(layxWindow: any, winform: any);
        }
      }
    },
    // 最小化
    min: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id],
        innertArea = Utils.innerArea();
      if (layxWindow && winform) {
        if (winform.minable !== true) return;
        // 更新层级别
        that.updateZIndex(id);

        // 绑定最小化之前事件
        if (Utils.isFunction(winform.event.onmin.before)) {
          let revel = winform.event.onmin.before(layxWindow: any, winform: any);
          if (revel === false) {
            return;
          }
        }

        // 存储状态
        winform.minBefore = winform.status;
        winform.status = "min";
        // 更新图标
        let minMenu = layxWindow.querySelector(".layx-min-menu");
        if (minMenu) {
          minMenu.classList.remove("layx-max-menu");
          minMenu.classList.add("layx-restore-menu");
          minMenu.setAttribute("title", "恢复");
          minMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-restore"></use></svg>';
        }
        // 隐藏拖曳
        let resizePanel = layxWindow.querySelector(".layx-resizes");
        if (resizePanel) {
          resizePanel.setAttribute("data-enable", "0");
        }

        // 更新最大化图标
        let restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='max']");
        if (restoreMenu) {
          restoreMenu.classList.remove("layx-restore-menu");
          restoreMenu.classList.add("layx-max-menu");
          restoreMenu.setAttribute("title", "最大化");
          restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-max"></use></svg>';
        }
        // 克隆一份
        let _winform = layxDeepClone({}, winform);
        delete that.windows[id];
        that.windows[id] = _winform;
        // 更新最小化布局
        that.updateMinLayout();

        // 绑定最小化之后事件
        if (Utils.isFunction(winform.event.onmin.after)) {
          winform.event.onmin.after(layxWindow: any, winform: any);
        }
      }
    },
    // 更新层级别
    updateZIndex: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        let layxShade = document.getElementById("layx-" + id + "-shade");
        if (layxShade) {
          layxShade.style.zIndex = (winform.isStick === true ? (++that.stickZIndex) : (++that.zIndex));
        }
        if (winform.isStick === true) {
          winform.zIndex = (++that.stickZIndex) + 1;
        }
        else {
          winform.zIndex = (++that.zIndex) + 1;
        }
        layxWindow.style.zIndex = winform.zIndex;
      }
    },
    // 更新最小化布局
    updateMinLayout: function () {
      let that = this,
        windows = that.windows,
        innertArea = Utils.innerArea(),
        paddingLeft = 10,
        paddingBottom = 10,
        widthByMinStatu = 240,
        stepIndex = 0,
        lineMaxCount = Math.floor(innertArea.width / (widthByMinStatu + paddingLeft));
      for (let id in windows) {
        let winform = windows[id],
          layxWindow = document.getElementById("layx-" + id);
        if (layxWindow && winform.status === "min") {
          let control = layxWindow.querySelector(".layx-control-bar");
          if (control) {
            let heightByMinStatus = control.offsetHeight;
            layxWindow.classList.add("layx-min-statu");
            // 设置最小化区域
            layxWindow.style.width = widthByMinStatu + 'px';
            layxWindow.style.height = heightByMinStatus + 'px';
            layxWindow.style.top = innertArea.height - (Math.floor(stepIndex / lineMaxCount) + 1) * (heightByMinStatus + paddingBottom) + 'px';
            layxWindow.style.left = stepIndex % lineMaxCount * (widthByMinStatu + paddingLeft) + paddingLeft + 'px';
            stepIndex++;
          }
        }
      }
    },
    // 最大化
    max: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id],
        innertArea = Utils.innerArea();
      if (layxWindow && winform) {
        if (winform.maxable !== true) return;
        // 更新层级别
        that.updateZIndex(id);

        // 绑定最大化之前事件
        if (Utils.isFunction(winform.event.onmax.before)) {
          let revel = winform.event.onmax.before(layxWindow: any, winform: any);
          if (revel === false) {
            return;
          }
        }

        // 隐藏滚动条
        document.body.classList.add('layx-body');
        // 设置窗口信息
        layxWindow.style.top = 0;
        layxWindow.style.left = 0;
        layxWindow.style.width = innertArea.width + "px";
        layxWindow.style.height = innertArea.height + "px";
        // 存储状态
        winform.status = "max";
        // 更新图标
        let maxMenu = layxWindow.querySelector(".layx-max-menu");
        if (maxMenu) {
          maxMenu.classList.remove("layx-max-menu");
          maxMenu.classList.add("layx-restore-menu");
          maxMenu.setAttribute("title", "恢复");
          maxMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-restore"></use></svg>';
        }
        // 隐藏拖曳
        let resizePanel = layxWindow.querySelector(".layx-resizes");
        if (resizePanel) {
          resizePanel.setAttribute("data-enable", "0");
        }

        // 更新最小化图标
        let restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='min']");
        if (restoreMenu) {
          restoreMenu.classList.remove("layx-restore-menu");
          restoreMenu.classList.add("layx-min-menu");
          restoreMenu.setAttribute("title", "最小化");
          restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-min"></use></svg>';
        }

        // 克隆一份
        let _winform = layxDeepClone({}, winform);
        delete that.windows[id];
        that.windows[id] = _winform;
        // 更新最小化布局
        that.updateMinLayout();

        if (layxWindow.classList.contains("layx-min-statu")) {
          layxWindow.classList.remove("layx-min-statu");
        }

        // 绑定最大化之后事件
        if (Utils.isFunction(winform.event.onmax.after)) {
          winform.event.onmax.after(layxWindow: any, winform: any);
        }
      }
    },
    // 销毁
    destroy: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        layxShade = document.getElementById(windowId + '-shade'),
        winform = that.windows[id];
      if (layxWindow && winform) {
        // 更新层级别
        that.updateZIndex(id);

        // 绑定关闭之前事件
        if (Utils.isFunction(winform.event.ondestroy.before)) {
          let revel = winform.event.ondestroy.before(layxWindow: any, winform: any);
          if (revel === false) {
            return;
          }
        }

        if (winform.closable !== true) return;

        delete that.windows[id];
        layxWindow.parentNode.removeChild(layxWindow);

        if (layxShade) {
          layxShade.parentNode.removeChild(layxShade);
        }

        // 更新最小化布局
        that.updateMinLayout();

        // 关闭之后事件
        if (Utils.isFunction(winform.event.ondestroy.after)) {
          winform.event.ondestroy.after();
        }
        for (let key in winform) {
          delete winform[key];
        }
        winform = undefined;
      }
    },
    // 关闭所有窗口
    destroyAll: function () {
      let that = this;
      for (let id in Layx.windows) {
        that.destroy(id);
      }
    },
    // 闪烁窗口
    flicker: function (id) {
      let that = this,
        flicker,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        // 更新层级别
        that.updateZIndex(id);

        if (layxWindow.classList.contains('layx-flicker')) {
          layxWindow.classList.remove('layx-flicker');
        }
        layxWindow.classList.add('layx-flicker');

        filcker = setTimeout(function () {
          layxWindow.classList.remove('layx-flicker');
          clearTimeout(filcker);
        }, 120 * 8);
      }
    },
    // 设置窗口位置
    setPosition: function (id, position) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform) {
        let _position = that.compileLayxPosition(position);
        winform.area.left = _position.left;
        winform.area.top = _position.top;
        layxWindow.style.left = _position.left + "px";
        layxWindow.style.top = _position.top + "px";
      }
    },
    // 获取子框架window对象
    getChildContext: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id],
        iframeWindow = null;
      if (layxWindow && winform && winform.type === "url") {
        let iframe = layxWindow.querySelector(".layx-iframe");
        if (iframe) {
          try {
            iframeWindow = iframe.contentWindow;
          } catch (e) { }
        }
      }
      return iframeWindow;
    },
    // 获取父框架window对象
    getParentContext: function (id) {
      let that = this;
      let iframeWindow = that.getChildContext(id);
      if (iframeWindow) {
        return iframeWindow.parent;
      }
      else {
        return null;
      }
    },
    // ================ 内置组件
    // 创建layx按钮
    createLayxButtons: function (buttons, id, isPrompt) {
      let that = this;

      let buttonPanel = document.createElement("div");
      buttonPanel.classList.add("layx-buttons");
      for (let i = 0; i < buttons.length; i++) {
        let buttonItem = document.createElement("button");
        let buttonConfig = layxDeepClone({}, that.defaultButtons, buttons[i]);
        buttonItem.classList.add("layx-button-item");
        buttonItem.innerText = buttonConfig.label;
        buttonItem.callback = buttons[i].callback;
        buttonItem.onclick = function (e) {
          if (Utils.isFunction(this.callback)) {
            if (isPrompt === true) {
              let textarea = that.getPromptTextArea(id);
              this.callback(id, (textarea ? textarea.value : "").replace(/(^\s*)|(\s*$)/g, ""), textarea);
            }
            else {
              this.callback(id);
            }
          }
        }
        buttonPanel.appendChild(buttonItem);
      }

      return buttonPanel;
    },
    // 消息框
    msg: function (msg, options) {
      let that = this;
      let winform = that.create(layxDeepClone({}, {
        id: 'layx-msg-' + Utils.rndNum(8),
        type: 'html',
        control: false,
        content: "<div class='layx-msg layx-flexbox layx-flex-center' style='height:83px;width:100%;'>" + msg + "</div>",
        autodestroy: 5000,
        width: 320,
        height: 85,
        minHeight: 85,
        stickMenu: false,
        minMenu: false,
        maxMenu: false,
        closeMenu: false,
        alwaysOnTop: true,
        resizable: false,
        movable: false,
        allowControlDbclick: false,
        position: [10, 'tc'],
        autodestroyText: false,
      }, that.options));

      //that.flicker(winform.id);
      return winform;
    },
    // 提示框
    alert: function (title, msg, yes, options) {
      let that = this;

      let winform = that.create(layxDeepClone({}, {
        id: 'layx-alert-' + Utils.rndNum(8),
        title: title || "提示消息",
        icon: false,
        type: 'html',
        content: "<div class='layx-alert layx-flexbox layx-flex-center'>" + msg + "</div>",
        width: 352,
        height: 157,
        minHeight: 157,
        stickMenu: false,
        minMenu: false,
        minable: false,
        maxMenu: false,
        maxable: false,
        alwaysOnTop: true,
        resizable: false,
        allowControlDbclick: false,
        shadable: true,
        statusBar: true,
        buttons: [
          {
            label: '确定',
            callback: function (id) {
              if (Utils.isFunction(yes)) {
                yes(id);
              }
              else {
                Layx.destroy(id);
              }
            }
          }],
        position: 'ct',
      }, that.options));

      //that.flicker(winform.id);
      return winform;
    },
    // 询问框
    confirm: function (title, msg, yes, options) {
      let that = this;

      let winform = that.create(layxDeepClone({}, {
        id: 'layx-confirm-' + Utils.rndNum(8),
        title: title || "询问消息",
        icon: false,
        type: 'html',
        content: "<div class='layx-confirm layx-flexbox layx-flex-center'>" + msg + "</div>",
        width: 352,
        height: 157,
        minHeight: 157,
        stickMenu: false,
        minMenu: false,
        minable: false,
        maxMenu: false,
        maxable: false,
        alwaysOnTop: true,
        resizable: false,
        allowControlDbclick: false,
        shadable: true,
        buttons: [
          {
            label: '确定',
            callback: function (id) {
              if (Utils.isFunction(yes)) {
                yes(id);
              }
            }
          },
          {
            label: '取消',
            callback: function (id) {
              Layx.destroy(id);
            }
          }
        ],
        statusBar: true,
        position: 'ct',
      }, that.options));

      //that.flicker(winform.id);
      return winform;
    },
    // 获取prompt输入框对象
    getPromptTextArea: function (id) {
      let that = this,
        windowId = "layx-" + id,
        layxWindow = document.getElementById(windowId),
        winform = that.windows[id];
      if (layxWindow && winform && winform.type === "html") {
        let promptPanel = layxWindow.querySelector(".layx-prompt");
        if (promptPanel) {
          let textarea = promptPanel.querySelector(".layx-textarea");
          if (textarea) {
            return textarea;
          }
        }
      }
      return null;
    },
    // 输入框
    prompt: function (title, msg, yes, options) {
      let that = this;

      let winform = that.create(layxDeepClone({}, {
        id: 'layx-prompt-' + Utils.rndNum(8),
        title: title || "请输入信息",
        icon: false,
        type: 'html',
        content: "<div class='layx-prompt'><label>" + msg + "</label><textarea class='layx-textarea'></textarea></div>",
        width: 352,
        height: 200,
        minHeight: 200,
        stickMenu: false,
        minMenu: false,
        minable: false,
        maxMenu: false,
        maxable: false,
        alwaysOnTop: true,
        resizable: false,
        allowControlDbclick: false,
        shadable: true,
        statusBar: true,
        isPrompt: true,
        buttons: [
          {
            label: '确定',
            callback: function (id, value, textarea) {
              if (textarea && value.length === 0) {
                textarea.focus();
              }
              else {
                if (Utils.isFunction(yes)) {
                  yes(id, value, textarea);
                }
              }
            }
          },
          {
            label: '取消',
            callback: function (id, value, textarea) {
              Layx.destroy(id);
            }
          }
        ],
        position: 'ct',
      }, that.options));

      //that.flicker(winform.id);
      return winform;
    },
    // 加载框
    load: function (id, msg, options) {
      let that = this;
      let loadElement = document.createElement("div");
      loadElement.classList.add("layx-load");
      loadElement.classList.add("layx-flexbox");
      loadElement.classList.add("layx-flex-center");
      loadElement.style.height = 83 + "px";
      loadElement.style.width = "100%";
      loadElement.innerHTML = msg;

      let dotCount = 0;
      let loadTimer = setInterval(function () {
        if (dotCount === 5) {
          dotCount = 0;
        }
        ++dotCount;
        let dotHtml = "";
        for (let i = 0; i < dotCount; i++) {
          dotHtml += ".";
        }
        loadElement.innerHTML = msg + dotHtml;
      }, 200);

      let winform = that.create(layxDeepClone({}, {
        id: id ? id : 'layx-load-' + Utils.rndNum(8),
        type: 'html',
        control: false,
        shadable: true,
        content: loadElement,
        width: 320,
        height: 85,
        minHeight: 85,
        stickMenu: false,
        minMenu: false,
        maxMenu: false,
        closeMenu: false,
        alwaysOnTop: true,
        resizable: false,
        movable: false,
        allowControlDbclick: false,
        position: 'ct',
      }, that.options));

      //that.flicker(winform.id);
      return winform;
    }
  };
}