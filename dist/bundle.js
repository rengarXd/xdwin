(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = {
    isBoolean: function isBoolean(obj) {
        return typeof obj === "boolean";
    },
    isString: function isString(obj) {
        return typeof obj === "string";
    },
    isNumber: function isNumber(obj) {
        return typeof obj === "number";
    },
    isArray: function isArray(o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    },
    isFunction: function isFunction(func) {
        return func && Object.prototype.toString.call(func) === '[object Function]';
    },
    isDom: function isDom(obj) {
        return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    },
    innerArea: function innerArea() {
        return { width: window.innerWidth, height: window.innerHeight };
    },
    compileLayxPosition: function compileLayxPosition(width, height, position) {
        var that = this,
            postionOptions = ['ct', 'lt', 'rt', 'lb', 'rb', 'lc', 'tc', 'rc', 'bc'],
            innerArea = that.innerArea();
        var pos = { top: 0, left: 0 };
        if (that.isArray(position) && position.length === 2) {
            pos.top = that.isNumber(position[0]) ? position[0] : that.compileLayxPosition(width, height, position[0]).top;
            pos.left = that.isNumber(position[1]) ? position[1] : that.compileLayxPosition(width, height, position[1]).left;
        } else {
            position = postionOptions.indexOf(position.toString()) > -1 ? position.toString() : 'ct';
            switch (position) {
                case 'ct':
                    pos.top = (innerArea.height - height) / 2;
                    pos.left = (innerArea.width - width) / 2;
                    break;
                case 'lt':
                    pos.top = 0;
                    pos.left = 0;
                    break;
                case 'rt':
                    pos.top = 0;
                    pos.left = innerArea.width - width;
                    break;
                case 'lb':
                    pos.top = innerArea.height - height;
                    pos.left = 0;
                    break;
                case 'rb':
                    pos.top = innerArea.height - height;
                    pos.left = innerArea.width - width;
                    break;
                case 'lc':
                    pos.left = 0;
                    pos.top = (innerArea.height - height) / 2;
                    break;
                case 'tc':
                    pos.top = 0;
                    pos.left = (innerArea.width - width) / 2;
                    break;
                case 'rc':
                    pos.left = innerArea.width - width;
                    pos.top = (innerArea.height - height) / 2;
                    break;
                case 'bc':
                    pos.top = innerArea.height - height;
                    pos.left = (innerArea.width - width) / 2;
                    break;
            }
        }
        return pos;
    },
    rndNum: function rndNum(n) {
        var rnd = "";
        for (var i = 0; i < n; i++) {
            rnd += Math.floor(Math.random() * 10);
        }return rnd;
    },
    compileLayxWidthOrHeight: function compileLayxWidthOrHeight(type, widthOrHeight, errorValue) {
        var that = this,
            innerArea = that.innerArea();
        if (/(^[1-9]\d*$)/.test(widthOrHeight)) {
            return Number(widthOrHeight);
        }
        if (/^(100|[1-9]?\d(\.\d\d?)?)%$/.test(widthOrHeight)) {
            var value = Number(widthOrHeight.toString().replace('%', ''));
            if (type === "width") {
                return innerArea.width * (value / 100);
            }
            if (type === "height") {
                return innerArea.height * (value / 100);
            }
        }
        return errorValue;
    },
    getNodeByClassName: function getNodeByClassName(node, className, parentWindow) {
        var that = this;
        if (node === parentWindow.document.body) {
            return null;
        }
        var cls = node.classList;
        if (cls.contains(className)) {
            return node;
        } else {
            return that.getNodeByClassName(node.parentNode, className);
        }
    },
    getMousePosition: function getMousePosition(e) {
        e = e || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        return { 'x': x, 'y': y };
    }
};
function layxDeepClone() {
    var extend = void 0,
        _extend = void 0,
        _isObject = void 0;
    _isObject = function _isObject(o) {
        return Object.prototype.toString.call(o) === '[object Object]';
    };
    _extend = function self(destination, source) {
        var property;
        for (property in destination) {
            if (destination.hasOwnProperty(property)) {
                if (_isObject(destination[property]) && _isObject(source[property])) {
                    self(destination[property], source[property]);
                }
                if (source.hasOwnProperty(property)) {
                    continue;
                } else {
                    source[property] = destination[property];
                }
            }
        }
    };

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var arr = args,
        result = {},
        i;
    if (!arr.length) return {};
    for (i = arr.length - 1; i >= 0; i--) {
        if (_isObject(arr[i])) {
            _extend(arr[i], result);
        }
    }
    arr[0] = result;
    return result;
}
exports.layxDeepClone = layxDeepClone;

},{}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var conf = function conf() {
    _classCallCheck(this, conf);

    this.version = '2.0.5';
    this.defaults = {
        id: '',
        icon: true,
        title: '',
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        position: 'ct',
        control: true,
        style: '',
        controlStyle: '',
        bgColor: "#fff",
        shadow: true,
        border: "1px solid #3baced",
        type: 'html',
        frames: new Array(),
        frameIndex: 0,
        content: '',
        url: '',
        useFrameTitle: false,
        opacity: 1,
        shadable: false,
        loaddingText: '内容正在加载中，请稍后...',
        stickMenu: false,
        stickable: true,
        minMenu: true,
        minable: true,
        maxMenu: true,
        maxable: true,
        closeMenu: true,
        closable: true,
        restorable: true,
        resizable: true,
        autodestroy: false,
        autodestroyText: '<div style="padding: 0 8px; ">此窗口将在 <strong>{second}</strong> 秒内自动关闭.</div>',
        resizeLimit: {
            t: false,
            r: false,
            b: false,
            l: false,
            lt: false,
            rt: false,
            lb: false,
            rb: false
        },
        buttons: new Array(),
        isPrompt: false,
        movable: true,
        moveLimit: {
            vertical: false,
            horizontal: false,
            leftOut: true,
            rightOut: true,
            topOut: true,
            bottomOut: true
        },
        focusable: true,
        alwaysOnTop: false,
        allowControlDbclick: true,
        statusBar: false,
        statusBarStyle: '',
        event: {
            onload: {
                before: function before(layxWindow, winform) {},
                after: function after(layxWindow, winform) {}
            },
            onmin: {
                before: function before(layxWindow, winform) {},
                after: function after(layxWindow, winform) {}
            },
            onmax: {
                before: function before(layxWindow, winform) {},
                after: function after(layxWindow, winform) {}
            },
            onrestore: {
                before: function before(layxWindow, winform) {},
                after: function after(layxWindow, winform) {}
            },
            ondestroy: {
                before: function before(layxWindow, winform) {},
                after: function after() {}
            },
            onmove: {
                before: function before(layxWindow, winform) {},
                progress: function progress(layxWindow, winform) {},
                after: function after(layxWindow, winform) {}
            },
            onresize: {
                before: function before(layxWindow, winform) {},
                progress: function progress(layxWindow, winform) {},
                after: function after(layxWindow, winform) {}
            }
        }
    };
    this.defaultButtons = {
        label: '确定',
        callback: function callback(id) {}
    };
    this.defaultFrames = {
        id: '',
        title: '',
        type: 'html',
        url: '',
        content: '',
        useFrameTitle: false
    };
    this.zIndex = 10000000;
    this.windows = null;
    this.stickZIndex = 20000000;
};

exports.default = conf;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var Utils = require("./Utils");
var xdwin;
(function (xdwin) {
    var XdMain = function (_config_1$default) {
        _inherits(XdMain, _config_1$default);

        function XdMain() {
            _classCallCheck(this, XdMain);

            return _possibleConstructorReturn(this, (XdMain.__proto__ || Object.getPrototypeOf(XdMain)).call(this));
        }

        _createClass(XdMain, [{
            key: "create",
            value: function create(options) {
                var that = this,
                    config = Utils.layxDeepClone({}, that.defaults, options || {}),
                    winform = void 0;
                if (!config.id) {
                    console.error("窗口id不能为空且唯一");
                    return;
                }
                ;
                var _winform = that.windows[config.id];
                if (_winform) {
                    if (_winform.status === "min") {
                        that.restore(_winform.id);
                    }
                    that.flicker(config.id);
                    return _winform;
                }
                if (config.shadable === true) {
                    var layxShade = document.createElement("div");
                    layxShade.setAttribute("id", "xdwin-" + config.id + "-shade");
                    layxShade.classList.add("xdwin-shade");
                    layxShade.style.zIndex = config.alwaysOnTop === true ? ++that.stickZIndex : ++that.zIndex;
                    document.body.appendChild(layxShade);
                    layxShade.onclick = function (e) {
                        e = e || window.event;
                        that.flicker(config.id);
                        e.stopPropagation();
                    };
                }
                if (config.style) {
                    var style = document.getElementById("xdwin-style");
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
                var xdWindow = document.createElement("div");
                xdWindow.setAttribute("id", "xdwin-" + config.id);
                xdWindow.classList.add("xdwin-window");
                xdWindow.classList.add("xdwin-flexbox");
                if (config.shadow === true) {
                    xdWindow.style.setProperty("box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
                    xdWindow.style.setProperty("-moz-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
                    xdWindow.style.setProperty("-webkit-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
                }
                var _minWidth = Utils.Util.compileLayxWidthOrHeight("width", config.minWidth, that.defaults.minWidth);
                var _minHeight = Utils.Util.compileLayxWidthOrHeight("height", config.minHeight, that.defaults.minHeight);
                var _width = Utils.Util.compileLayxWidthOrHeight("width", config.width, that.defaults.width);
                _width = Math.max(_width, _minWidth);
                var _height = Utils.Util.compileLayxWidthOrHeight("height", config.height, that.defaults.height);
                _height = Math.max(_height, _minHeight);
                var _position = Utils.Util.compileLayxPosition(_width, _height, config.position);
                xdWindow.style.zIndex = config.alwaysOnTop === true ? ++that.stickZIndex : ++that.zIndex;
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
                if (config.type === "html" || config.type === "group") {
                    xdWindow.onclick = function (e) {
                        e = e || window.event;
                        that.updateZIndex(config.id);
                        e.stopPropagation();
                    };
                }
                document.body.appendChild(xdWindow);
                winform.id = config.id;
                winform.windowId = xdWindow.getAttribute("id");
                winform.window = xdWindow;
                winform.createDate = new Date();
                winform.status = "normal";
                winform.type = config.type;
                winform.buttons = config.buttons;
                winform.frames = config.frames;
                winform.groupCurrentId = Utils.Util.isArray(config.frames) && config.frames.length > 0 && config.frames[config.frameIndex] ? config.frames[config.frameIndex].id : null;
                winform.area = {
                    width: _width,
                    height: _height,
                    minWidth: _minWidth,
                    minHeight: _minHeight,
                    top: _position.top,
                    left: _position.left
                };
                winform.isStick = config.alwaysOnTop === true;
                winform.zIndex = config.alwaysOnTop === true ? that.stickZIndex : that.zIndex;
                winform.movable = config.movable;
                winform.moveLimit = config.moveLimit;
                winform.resizable = config.resizable;
                winform.resizeLimit = config.resizeLimit;
                winform.stickable = config.stickable;
                winform.minable = config.minable;
                winform.maxable = config.maxable;
                winform.restorable = config.restorable;
                winform.closable = config.closable;
                winform.event = config.event;
                if (config.control === true) {
                    var controlBar = document.createElement("div");
                    controlBar.classList.add("xdwin-control-bar");
                    controlBar.classList.add("xdwin-flexbox");
                    config.controlStyle && controlBar.setAttribute("style", config.controlStyle);
                    if (config.type === "group") {
                        controlBar.classList.add("xdwin-type-group");
                    }
                    xdWindow.appendChild(controlBar);
                    if (config.icon !== false) {
                        var leftBar = document.createElement("div");
                        leftBar.classList.add("xdwin-left-bar");
                        leftBar.classList.add("xdwin-flexbox");
                        leftBar.classList.add("xdwin-flex-vertical");
                        controlBar.appendChild(leftBar);
                        var windowIcon = document.createElement("div");
                        windowIcon.classList.add("xdwin-icon");
                        windowIcon.classList.add("xdwin-window-icon");
                        windowIcon.innerHTML = config.icon === true ? '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-default-icon"></use></svg>' : config.icon;
                        leftBar.appendChild(windowIcon);
                    }
                    var title = document.createElement("div");
                    title.classList.add("xdwin-title");
                    title.classList.add("xdwin-flexauto");
                    title.classList.add("xdwin-flexbox");
                    if (config.type === "group") {
                        title.classList.add("xdwin-type-group");
                    }
                    if (config.allowControlDbclick === true) {
                        title.ondblclick = function (e) {
                            e = e || window.event;
                            if (config.restorable === true) {
                                that.restore(config.id);
                            }
                            e.stopPropagation();
                        };
                    }
                    if (config.movable === true) {
                        new XdwinDrag(title);
                    }
                    controlBar.appendChild(title);
                    if (config.type !== "group") {
                        var label = document.createElement("label");
                        label.innerHTML = config.title;
                        title.setAttribute("title", label.innerText);
                        title.appendChild(label);
                    } else {
                        if (Utils.Util.isArray(config.frames)) {
                            for (var _i = 0; _i < config.frames.length; _i++) {
                                var _frameConfig = Utils.layxDeepClone({}, that.defaultFrames, config.frames[_i]);
                                var frameTitle = document.createElement("div");
                                frameTitle.setAttribute("data-frameId", _frameConfig.id);
                                frameTitle.classList.add("xdwin-group-title");
                                if (_i === config.frameIndex) {
                                    frameTitle.setAttribute("data-enable", "1");
                                }
                                frameTitle.onclick = function (e) {
                                    e = e || window.event;
                                    var prevSelectTitle = xdWindow.querySelector(".xdwin-group-title[data-enable='1']");
                                    if (prevSelectTitle !== this) {
                                        prevSelectTitle.removeAttribute("data-enable");
                                        this.setAttribute("data-enable", "1");
                                        that._setGroupIndex(config.id, this);
                                    }
                                    e.stopPropagation();
                                };
                                title.appendChild(frameTitle);
                                var groupLabel = document.createElement("label");
                                groupLabel.innerHTML = _frameConfig.title;
                                frameTitle.setAttribute("title", groupLabel.innerText);
                                frameTitle.appendChild(groupLabel);
                            }
                        }
                    }
                    var rightBar = document.createElement("div");
                    rightBar.classList.add("xdwin-right-bar");
                    rightBar.classList.add("xdwin-flexbox");
                    controlBar.appendChild(rightBar);
                    var customMenu = document.createElement("div");
                    customMenu.classList.add("xdwin-custom-menus");
                    customMenu.classList.add("xdwin-flexbox");
                    rightBar.appendChild(customMenu);
                    if (config.stickMenu === true || config.minMenu === true || config.maxMenu === true || config.closeMenu === true) {
                        var inlayMenu = document.createElement("div");
                        inlayMenu.classList.add("xdwin-inlay-menus");
                        inlayMenu.classList.add("xdwin-flexbox");
                        rightBar.appendChild(inlayMenu);
                        if (config.stickMenu === true || config.alwaysOnTop === true && config.stickMenu) {
                            var stickMenu = document.createElement("div");
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
                                };
                            }
                            inlayMenu.appendChild(stickMenu);
                        }
                        if (config.minMenu === true) {
                            var minMenu = document.createElement("div");
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
                                } else {
                                    if (config.restorable === true) {
                                        that.restore(config.id);
                                    }
                                }
                                e.stopPropagation();
                            };
                            inlayMenu.appendChild(minMenu);
                        }
                        if (config.maxMenu === true) {
                            var maxMenu = document.createElement("div");
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
                                } else {
                                    if (config.restorable === true) {
                                        that.restore(config.id);
                                    }
                                }
                                e.stopPropagation();
                            };
                            inlayMenu.appendChild(maxMenu);
                        }
                        if (config.closeMenu === true) {
                            var destroyMenu = document.createElement("div");
                            destroyMenu.classList.add("xdwin-icon");
                            destroyMenu.classList.add("xdwin-flexbox");
                            destroyMenu.classList.add("xdwin-flex-center");
                            destroyMenu.classList.add("xdwin-destroy-menu");
                            destroyMenu.setAttribute("title", "关闭");
                            destroyMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-destroy"></use></svg>';
                            destroyMenu.onclick = function (e) {
                                if (config.closable === true) {
                                    that.destroy(config.id);
                                }
                                e.stopPropagation();
                            };
                            inlayMenu.appendChild(destroyMenu);
                        }
                    }
                }
                var main = document.createElement("div");
                main.classList.add("xdwin-main");
                main.classList.add("xdwin-flexauto");
                xdWindow.appendChild(main);
                var contentShade = document.createElement("div");
                contentShade.classList.add("xdwin-content-shade");
                contentShade.classList.add("xdwin-flexbox");
                contentShade.classList.add("xdwin-flex-center");
                if (Utils.Util.isDom(config.loaddingText)) {
                    contentShade.appendChild(config.loaddingText);
                } else {
                    contentShade.innerHTML = config.loaddingText;
                }
                main.appendChild(contentShade);
                switch (config.type) {
                    case "html":
                    default:
                        if (Utils.Util.isFunction(config.event.onload.before)) {
                            var revel = config.event.onload.before(xdWindow, winform);
                            if (revel === false) {
                                return;
                            }
                        }
                        that.createHtmlBody(main, config, config.content);
                        main.removeChild(contentShade);
                        if (Utils.Util.isFunction(config.event.onload.after)) {
                            config.event.onload.after(xdWindow, winform);
                        }
                        break;
                    case "url":
                        if (Utils.Util.isFunction(config.event.onload.before)) {
                            var revel = config.event.onload.before(xdWindow, winform);
                            if (revel === false) {
                                return;
                            }
                        }
                        that.createFrameBody(main, config, xdWindow, winform);
                        if (Utils.Util.isFunction(config.event.onload.after)) {
                            config.event.onload.after(xdWindow, winform);
                        }
                        break;
                    case "group":
                        if (Utils.Util.isArray(config.frames)) {
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
                                if (frameConfig.type === "html") {
                                    that.createHtmlBody(frameBody, config, frameConfig.content, "group", frameConfig);
                                    frameBody.setAttribute("data-complete", "1");
                                    var loadComplteMains = xdWindow.querySelectorAll(".xdwin-group-main[data-complete='1']");
                                    if (loadComplteMains.length === config.frames.length) {
                                        main.removeChild(contentShade);
                                        if (Utils.Util.isFunction(config.event.onload.after)) {
                                            config.event.onload.after(xdWindow, winform);
                                        }
                                    }
                                } else if (frameConfig.type === "url") {
                                    that.createFrameBody(frameBody, config, xdWindow, winform, "group", frameConfig);
                                }
                            }
                        }
                        break;
                }
                if (config.resizable === true) {
                    var resize = document.createElement("div");
                    resize.classList.add("xdwin-resizes");
                    xdWindow.appendChild(resize);
                    if (config.resizeLimit.t === false) {
                        var resizeTop = document.createElement("div");
                        resizeTop.classList.add("xdwin-resize-top");
                        new XdwinResize(resizeTop, true, false, true, false);
                        resize.appendChild(resizeTop);
                    }
                    if (config.resizeLimit.r === false) {
                        var resizeRight = document.createElement("div");
                        resizeRight.classList.add("xdwin-resize-right");
                        new XdwinResize(resizeRight, false, false, false, true);
                        resize.appendChild(resizeRight);
                    }
                    if (config.resizeLimit.b === false) {
                        var resizeBottom = document.createElement("div");
                        resizeBottom.classList.add("xdwin-resize-bottom");
                        new XdwinResize(resizeBottom, false, false, true, false);
                        resize.appendChild(resizeBottom);
                    }
                    if (config.resizeLimit.l === false) {
                        var resizeLeft = document.createElement("div");
                        resizeLeft.classList.add("xdwin-resize-left");
                        new XdwinResize(resizeLeft, false, true, false, true);
                        resize.appendChild(resizeLeft);
                    }
                    if (config.resizeLimit.lt === false) {
                        var resizeLeftTop = document.createElement("div");
                        resizeLeftTop.classList.add("xdwin-resize-left-top");
                        new XdwinResize(resizeLeftTop, true, true, false, false);
                        resize.appendChild(resizeLeftTop);
                    }
                    if (config.resizeLimit.rt === false) {
                        var resizeRightTop = document.createElement("div");
                        resizeRightTop.classList.add("xdwin-resize-right-top");
                        new XdwinResize(resizeRightTop, true, false, false, false);
                        resize.appendChild(resizeRightTop);
                    }
                    if (config.resizeLimit.lb === false) {
                        var resizeLeftBottom = document.createElement("div");
                        resizeLeftBottom.classList.add("xdwin-resize-left-bottom");
                        new XdwinResize(resizeLeftBottom, false, true, false, false);
                        resize.appendChild(resizeLeftBottom);
                    }
                    if (config.resizeLimit.rb === false) {
                        var resizeRightBottom = document.createElement("div");
                        resizeRightBottom.classList.add("xdwin-resize-right-bottom");
                        new XdwinResize(resizeRightBottom, false, false, false, false);
                        resize.appendChild(resizeRightBottom);
                    }
                }
                if (config.statusBar) {
                    var statusBar = document.createElement("div");
                    statusBar.classList.add("xdwin-statu-bar");
                    config.statusBarStyle && statusBar.setAttribute("style", config.statusBarStyle);
                    if (config.statusBar === true && Utils.Util.isArray(config.buttons)) {
                        var btnElement = that.createLayxButtons(config.buttons, config.id, config.isPrompt);
                        statusBar.appendChild(btnElement);
                    } else {
                        if (Utils.Util.isDom(config.statusBar)) {
                            statusBar.appendChild(config.statusBar);
                        } else {
                            statusBar.innerHTML = config.statusBar;
                        }
                    }
                    xdWindow.appendChild(statusBar);
                }
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
                that.windows[config.id] = winform;
                if (_width > window.innerWidth || _height > window.innerHeight) {
                    that.max(config.id);
                }
                return winform;
            }
        }, {
            key: "_setGroupIndex",
            value: function _setGroupIndex(id, target) {
                var that = this,
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
        }, {
            key: "flicker",
            value: function flicker(id) {
                var that = this,
                    flickerTimer = void 0,
                    windowId = "xdwin-" + id,
                    xdWindow = document.getElementById(windowId),
                    winform = that.windows[id];
                if (xdWindow && winform) {
                    that.updateZIndex(id);
                    if (xdWindow.classList.contains('xdwin-flicker')) {
                        xdWindow.classList.remove('xdwin-flicker');
                    }
                    xdWindow.classList.add('xdwin-flicker');
                    flickerTimer = setTimeout(function () {
                        xdWindow.classList.remove('xdwin-flicker');
                        clearTimeout(flickerTimer);
                    }, 120 * 8);
                }
            }
        }, {
            key: "restore",
            value: function restore(id) {
                var that = this,
                    windowId = "xdwin-" + id,
                    xdWindow = document.getElementById(windowId),
                    winform = that.windows[id];
                if (xdWindow && winform) {
                    if (winform.restorable !== true) return;
                    that.updateZIndex(id);
                    if (Utils.Util.isFunction(winform.event.onrestore.before)) {
                        var revel = winform.event.onrestore.before(xdWindow, winform);
                        if (revel === false) {
                            return;
                        }
                    }
                    var area = winform.area;
                    if (winform.status === "normal") {
                        that.max(id);
                    } else if (winform.status === "max") {
                        if (document.body.classList.contains("xdwin-body")) {
                            document.body.classList.remove('xdwin-body');
                        }
                        xdWindow.style.top = area.top + "px";
                        xdWindow.style.left = area.left + "px";
                        xdWindow.style.width = area.width + "px";
                        xdWindow.style.height = area.height + "px";
                        winform.status = "normal";
                        var restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='max']");
                        if (restoreMenu) {
                            restoreMenu.classList.remove("xdwin-restore-menu");
                            restoreMenu.classList.add("xdwin-max-menu");
                            restoreMenu.setAttribute("title", "最大化");
                            restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-max"></use></svg>';
                        }
                        var resizePanel = xdWindow.querySelector(".xdwin-resizes");
                        if (resizePanel) {
                            resizePanel.removeAttribute("data-enable");
                        }
                    }
                    if (winform.status === "min") {
                        if (winform.minBefore === "normal") {
                            xdWindow.style.top = area.top + "px";
                            xdWindow.style.left = area.left + "px";
                            xdWindow.style.width = area.width + "px";
                            xdWindow.style.height = area.height + "px";
                            winform.status = "normal";
                            var _restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='min']");
                            if (_restoreMenu) {
                                _restoreMenu.classList.remove("xdwin-restore-menu");
                                _restoreMenu.classList.add("xdwin-min-menu");
                                _restoreMenu.setAttribute("title", "最小化");
                                _restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-min"></use></svg>';
                            }
                            var _resizePanel = xdWindow.querySelector(".xdwin-resizes");
                            if (_resizePanel) {
                                _resizePanel.removeAttribute("data-enable");
                            }
                        } else if (winform.minBefore === "max") {
                            that.max(id);
                        }
                        that.updateMinLayout();
                    }
                    var _winform = Utils.layxDeepClone({}, winform);
                    delete that.windows[id];
                    that.windows[id] = _winform;
                    that.updateMinLayout();
                    if (xdWindow.classList.contains("xdwin-min-statu")) {
                        xdWindow.classList.remove("xdwin-min-statu");
                    }
                    if (Utils.Util.isFunction(winform.event.onrestore.after)) {
                        winform.event.onrestore.after(xdWindow, winform);
                    }
                }
            }
        }, {
            key: "updateZIndex",
            value: function updateZIndex(id) {
                var that = this,
                    windowId = "xdwin-" + id,
                    xdWindow = document.getElementById(windowId),
                    winform = that.windows[id];
                if (xdWindow && winform) {
                    var layxShade = document.getElementById("xdwin-" + id + "-shade");
                    if (layxShade) {
                        layxShade.style.zIndex = winform.isStick === true ? ++that.stickZIndex : ++that.zIndex;
                    }
                    if (winform.isStick === true) {
                        winform.zIndex = ++that.stickZIndex + 1;
                    } else {
                        winform.zIndex = ++that.zIndex + 1;
                    }
                    xdWindow.style.zIndex = winform.zIndex;
                }
            }
        }, {
            key: "updateMinLayout",
            value: function updateMinLayout() {
                var that = this,
                    windows = that.windows,
                    innertArea = Utils.Util.innerArea(),
                    paddingLeft = 10,
                    paddingBottom = 10,
                    widthByMinStatu = 240,
                    stepIndex = 0,
                    lineMaxCount = Math.floor(innertArea.width / (widthByMinStatu + paddingLeft));
                for (var id in windows) {
                    var winform = windows[id],
                        xdWindow = document.getElementById("xdwin-" + id);
                    if (xdWindow && winform.status === "min") {
                        var control = xdWindow.querySelector(".xdwin-control-bar");
                        if (control) {
                            var heightByMinStatus = control.offsetHeight;
                            xdWindow.classList.add("xdwin-min-statu");
                            xdWindow.style.width = widthByMinStatu + 'px';
                            xdWindow.style.height = heightByMinStatus + 'px';
                            xdWindow.style.top = innertArea.height - (Math.floor(stepIndex / lineMaxCount) + 1) * (heightByMinStatus + paddingBottom) + 'px';
                            xdWindow.style.left = stepIndex % lineMaxCount * (widthByMinStatu + paddingLeft) + paddingLeft + 'px';
                            stepIndex++;
                        }
                    }
                }
            }
        }, {
            key: "max",
            value: function max(id) {
                var that = this,
                    windowId = "xdwin-" + id,
                    xdWindow = document.getElementById(windowId),
                    winform = that.windows[id],
                    innertArea = Utils.Util.innerArea();
                if (xdWindow && winform) {
                    if (winform.maxable !== true) return;
                    that.updateZIndex(id);
                    if (Utils.Util.isFunction(winform.event.onmax.before)) {
                        var revel = winform.event.onmax.before(xdWindow, winform);
                        if (revel === false) {
                            return;
                        }
                    }
                    document.body.classList.add('xdwin-body');
                    xdWindow.style.top = 0;
                    xdWindow.style.left = 0;
                    xdWindow.style.width = innertArea.width + "px";
                    xdWindow.style.height = innertArea.height + "px";
                    winform.status = "max";
                    var maxMenu = xdWindow.querySelector(".xdwin-max-menu");
                    if (maxMenu) {
                        maxMenu.classList.remove("xdwin-max-menu");
                        maxMenu.classList.add("xdwin-restore-menu");
                        maxMenu.setAttribute("title", "恢复");
                        maxMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-restore"></use></svg>';
                    }
                    var resizePanel = xdWindow.querySelector(".xdwin-resizes");
                    if (resizePanel) {
                        resizePanel.setAttribute("data-enable", "0");
                    }
                    var restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='min']");
                    if (restoreMenu) {
                        restoreMenu.classList.remove("xdwin-restore-menu");
                        restoreMenu.classList.add("xdwin-min-menu");
                        restoreMenu.setAttribute("title", "最小化");
                        restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-min"></use></svg>';
                    }
                    var _winform = Utils.layxDeepClone({}, winform);
                    delete that.windows[id];
                    that.windows[id] = _winform;
                    that.updateMinLayout();
                    if (xdWindow.classList.contains("xdwin-min-statu")) {
                        xdWindow.classList.remove("xdwin-min-statu");
                    }
                    if (Utils.Util.isFunction(winform.event.onmax.after)) {
                        winform.event.onmax.after(xdWindow, winform);
                    }
                }
            }
        }, {
            key: "min",
            value: function min(id) {
                var that = this,
                    windowId = "xdwin-" + id,
                    xdWindow = document.getElementById(windowId),
                    winform = that.windows[id],
                    innertArea = Utils.Util.innerArea();
                if (xdWindow && winform) {
                    if (winform.minable !== true) return;
                    that.updateZIndex(id);
                    if (Utils.Util.isFunction(winform.event.onmin.before)) {
                        var revel = winform.event.onmin.before(xdWindow, winform);
                        if (revel === false) {
                            return;
                        }
                    }
                    winform.minBefore = winform.status;
                    winform.status = "min";
                    var minMenu = xdWindow.querySelector(".xdwin-min-menu");
                    if (minMenu) {
                        minMenu.classList.remove("xdwin-max-menu");
                        minMenu.classList.add("xdwin-restore-menu");
                        minMenu.setAttribute("title", "恢复");
                        minMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-restore"></use></svg>';
                    }
                    var resizePanel = xdWindow.querySelector(".xdwin-resizes");
                    if (resizePanel) {
                        resizePanel.setAttribute("data-enable", "0");
                    }
                    var restoreMenu = xdWindow.querySelector(".xdwin-restore-menu[data-menu='max']");
                    if (restoreMenu) {
                        restoreMenu.classList.remove("xdwin-restore-menu");
                        restoreMenu.classList.add("xdwin-max-menu");
                        restoreMenu.setAttribute("title", "最大化");
                        restoreMenu.innerHTML = '<svg class="xdwin-iconfont" aria-hidden="true"><use xlink:href="#xdwin-icon-max"></use></svg>';
                    }
                    var _winform = Utils.layxDeepClone({}, winform);
                    delete that.windows[id];
                    that.windows[id] = _winform;
                    that.updateMinLayout();
                    if (Utils.Util.isFunction(winform.event.onmin.after)) {
                        winform.event.onmin.after(xdWindow, winform);
                    }
                }
            }
        }, {
            key: "destroy",
            value: function destroy(id) {
                var that = this,
                    windowId = "xdwin-" + id,
                    xdWindow = document.getElementById(windowId),
                    layxShade = document.getElementById(windowId + '-shade'),
                    winform = that.windows[id];
                if (xdWindow && winform) {
                    that.updateZIndex(id);
                    if (Utils.Util.isFunction(winform.event.ondestroy.before)) {
                        var revel = winform.event.ondestroy.before(xdWindow, winform);
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
                    that.updateMinLayout();
                    if (Utils.Util.isFunction(winform.event.ondestroy.after)) {
                        winform.event.ondestroy.after();
                    }
                    for (var key in winform) {
                        delete winform[key];
                    }
                    winform = undefined;
                }
            }
        }]);

        return XdMain;
    }(config_1.default);

    xdwin.XdMain = XdMain;

    var XdwinDrag = function (_XdMain) {
        _inherits(XdwinDrag, _XdMain);

        function XdwinDrag() {
            _classCallCheck(this, XdwinDrag);

            return _possibleConstructorReturn(this, (XdwinDrag.__proto__ || Object.getPrototypeOf(XdwinDrag)).call(this));
        }

        return XdwinDrag;
    }(XdMain);

    var XdwinResize = function (_XdMain2) {
        _inherits(XdwinResize, _XdMain2);

        function XdwinResize(handle, isTop, isLeft, lockX, lockY) {
            _classCallCheck(this, XdwinResize);

            var _this3 = _possibleConstructorReturn(this, (XdwinResize.__proto__ || Object.getPrototypeOf(XdwinResize)).call(this));

            _this3.handle = handle;
            _this3.isTop = isTop;
            _this3.isLeft = isLeft;
            _this3.lockX = lockX;
            _this3.lockY = lockY;
            _this3.isResizing = false;
            _this3.isFirstResizing = true;
            return _this3;
        }

        _createClass(XdwinResize, [{
            key: "drag",
            value: function drag(e) {
                e = e || window.event;
                var button = e.button || e.which;
                if (button == 1 && e.shiftKey == false) {
                    var moveMouseCoord = Utils.Util.getMousePosition(e),
                        distX = moveMouseCoord.x - this.handle.mouseStartCoord.x,
                        distY = moveMouseCoord.y - this.handle.mouseStartCoord.y,
                        _top = this.handle.winform.area.top + distY,
                        _left = this.handle.winform.area.left + distX,
                        _height = this.isTop ? this.handle.winform.area.height - distY : this.handle.winform.area.height + distY,
                        _width = this.isLeft ? this.handle.winform.area.width - distX : this.handle.winform.area.width + distX;
                    if (distX !== 0 || distY !== 0) {
                        this.isResizing = true;
                        document.body.classList.add('xdwin-body');
                        if (this.isFirstResizing === true) {
                            this.isFirstResizing = false;
                            if (Utils.Util.isFunction(this.handle.winform.event.onresize.before)) {
                                var reval = this.handle.winform.event.onresize.before(this.handle.layxWindow, this.handle.winform);
                                if (reval === false) {
                                    this.isResizing = false;
                                    this.isFirstResizing = true;
                                    document.onmouseup = null;
                                    document.onmousemove = null;
                                    return;
                                }
                            }
                        }
                        _width = Math.max(_width, this.handle.winform.area.minWidth);
                        if (this.isLeft) {
                            _left = Math.min(_left, this.handle.winform.area.left + this.handle.winform.area.width - this.handle.winform.area.minWidth);
                            _left = Math.max(0, _left);
                            _width = Math.min(_width, this.handle.winform.area.left + this.handle.winform.area.width);
                        } else {
                            _left = Math.min(_left, this.handle.winform.area.left);
                            _left = Math.max(this.handle.winform.area.left, _left);
                            _width = Math.min(_width, this.handle.innerArea.width - this.handle.winform.area.left);
                        }
                        _height = Math.max(_height, this.handle.winform.area.minHeight);
                        if (this.isTop) {
                            _top = Math.min(_top, this.handle.winform.area.top + this.handle.winform.area.height - this.handle.winform.area.minHeight);
                            _top = Math.max(0, _top);
                            _height = Math.min(_height, this.handle.winform.area.top + this.handle.winform.area.height);
                        } else {
                            _top = Math.min(_top, this.handle.winform.area.top);
                            _top = Math.max(this.handle.winform.area.top, _top);
                            _height = Math.min(_height, this.handle.innerArea.height - this.handle.winform.area.top);
                        }
                        if (this.lockY) {
                            this.handle.layxWindow.style.width = _width + 'px';
                            this.handle.layxWindow.style.left = _left + 'px';
                        }
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
                        if (Utils.Util.isFunction(this.handle.winform.event.onresize.progress)) {
                            this.handle.winform.event.onresize.progress(this.handle.layxWindow, this.handle.winform);
                        }
                    }
                }
            }
        }, {
            key: "dragstart",
            value: function dragstart(e) {
                e = e || window.event;
                var xdwinWindow = Utils.Util.getNodeByClassName(this.handle, 'xdwin-window', this.win);
                if (xdwinWindow) {
                    var id = xdwinWindow.getAttribute("id").substr(5),
                        winform = config_1.default.windows[id];
                    if (winform) {
                        if (winform.status !== "min" && winform.resizable === true) {
                            var xdwinMove = document.getElementById("xdwin-window-move");
                            if (!xdwinMove) {
                                xdwinMove = document.createElement("div");
                                xdwinMove.setAttribute("id", "xdwin-window-move");
                                document.body.appendChild(xdwinMove);
                            }
                            this.updateZIndex(id);
                            xdwinMove.style.zIndex = String(winform.zIndex - 1);
                            var mouseCoord = Utils.Util.getMousePosition(e);
                            this.handle.mouseStartCoord = mouseCoord;
                            this.handle.xdwinWindow = xdwinWindow;
                            this.handle.winform = winform;
                            this.handle.innerArea = Utils.Util.innerArea();
                            e.preventDefault();
                            e.stopPropagation();
                            var mousePreventDefault = xdwinWindow.querySelector(".xdwin-mouse-preventDefault");
                            if (!mousePreventDefault) {
                                mousePreventDefault = document.createElement("div");
                                mousePreventDefault.classList.add("xdwin-mouse-preventDefault");
                                var main = xdwinWindow.querySelector(".xdwin-main");
                                if (main) {
                                    main.appendChild(mousePreventDefault);
                                }
                            }
                            document.onmouseup = this.dragend;
                            document.onmousemove = this.drag;
                        } else {
                            this.restore(id);
                        }
                    }
                }
                return false;
            }
        }, {
            key: "dragend",
            value: function dragend(e) {
                e = e || window.event;
                document.onmouseup = null;
                document.onmousemove = null;
                var mousePreventDefault = this.handle.layxWindow.querySelector(".xdwin-mouse-preventDefault");
                if (mousePreventDefault) {
                    mousePreventDefault.parentNode.removeChild(mousePreventDefault);
                }
                var layxMove = document.getElementById("xdwin-window-move");
                if (layxMove) {
                    layxMove.parentNode.removeChild(layxMove);
                }
                if (this.isResizing === true) {
                    this.isResizing = false;
                    this.isFirstResizing = true;
                    this.handle.winform.area.top = this.handle.layxWindow.offsetTop;
                    this.handle.winform.area.left = this.handle.layxWindow.offsetLeft;
                    this.handle.winform.area.width = this.handle.layxWindow.offsetWidth;
                    this.handle.winform.area.height = this.handle.layxWindow.offsetHeight;
                    if (document.body.classList.contains("xdwin-body")) {
                        document.body.classList.remove('xdwin-body');
                    }
                    if (Utils.Util.isFunction(this.handle.winform.event.onresize.after)) {
                        this.handle.winform.event.onresize.after(this.handle.layxWindow, this.handle.winform);
                    }
                }
            }
        }]);

        return XdwinResize;
    }(XdMain);
})(xdwin || (xdwin = {}));

},{"./Utils":1,"./config":2}]},{},[3])

//# sourceMappingURL=bundle.js.map
