// 工具库
// namespace xdwin {

// }
export let Util = {
  // 是否boolean类型
  isBoolean(obj: any) {
    return typeof obj === "boolean";
  },
  // 是否string类型
  isString(obj: any) {
    return typeof obj === "string";
  },
  // 是否数值类型
  isNumber(obj: any) {
    return typeof obj === "number";
  },
  // 是否数组类型
  isArray(o: any) {
    return Object.prototype.toString.call(o) == '[object Array]';
  },
  // 是否一个方法类型
  isFunction(func: any) {
    return func && Object.prototype.toString.call(func) === '[object Function]';
  },
  // 判断是否是dom对象
  isDom(obj: any) {
    return (typeof HTMLElement === 'object') ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  },
  // 获取包含滚动条的浏览器可视区域
  innerArea() {
    return { width: window.innerWidth, height: window.innerHeight };
  },
  // 解析窗口传入的位置参数，并转化为 {left: top: }对象
  compileLayxPosition(width: any, height: any, position: any) {
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
  //产生随机数函数
  rndNum(n: number) {
    var rnd = "";
    for (var i = 0; i < n; i++)
      rnd += Math.floor(Math.random() * 10);
    return rnd;
  },
  // 解析传入的宽度或高度
  compileLayxWidthOrHeight(type: any, widthOrHeight: any, errorValue: any) {
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
  // 向上递归查找元素
  getNodeByClassName(node: any, className: any, parentWindow: any) {
    // parentWindow = parentWindow || win;
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
  // 获取鼠标点击坐标
  getMousePosition(e: any) {
    e = e || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
  }
};
export function layxDeepClone(...args: any[]):any {
  let extend,
    _extend,
    _isObject: any;

  _isObject = function (o: any) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  _extend = function self(destination: any, source: any) {
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
