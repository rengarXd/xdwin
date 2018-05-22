// interface thisParams {
//   handle: string;
//   isTop: object;
//   isLeft:object;
//   lockX: object;
//   lockY: object;
// }
namespace xdwin {
  class LayxResize {

    isResizing: any;
    isFirstResizing: any;
    handle: any;
    isTop: any;
    isLeft: any;
    lockX: any;
    lockY: any;

    constructor({ handle, isTop, isLeft, lockX, lockY }) {
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

    drag(e: any) {
      e = e || window.event;
      // 只允许鼠标左键拖曳
      let button = e.button || e.which;
      if (button == 1 && e.shiftKey == false) {
        let moveMouseCoord = Utils.getMousePosition(e),
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
          document.body.classList.add('layx-body');

          if (this.isFirstResizing === true) {
            this.isFirstResizing = false;

            // 绑定拖曳之前事件
            if (Utils.isFunction(this.handle.winform.event.onresize.before)) {
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
          if (Utils.isFunction(this.handle.winform.event.onresize.progress)) {
            this.handle.winform.event.onresize.progress(this.handle.layxWindow, this.handle.winform);
          }
        }
      }
    }

    dragstart(e: any) {
      e = e || window.event;

      let xdwinWindow = Utils.getNodeByClassName(this.handle, 'xdwin-window', xdwin.win);
      if (xdwinWindow) {
        let id = xdwinWindow.getAttribute("id").substr(5),
          winform = xdwin.windows[id];
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
            xdwin.updateZIndex(id);
            xdwinMove.style.zIndex = String(winform.zIndex - 1);

            // 获取鼠标点击坐标
            let mouseCoord = Utils.getMousePosition(e);
            // 存储一开始的坐标
            this.handle.mouseStartCoord = mouseCoord;
            // 存储xdwinWindow Dom对象
            this.handle.xdwinWindow = xdwinWindow;
            // 存储winform对象
            this.handle.winform = winform;
            // 存储浏览器可视区域信息
            this.handle.innerArea = Utils.innerArea();
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
            xdwin.restore(id);
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
      let mousePreventDefault = this.handle.layxWindow.querySelector(".layx-mouse-preventDefault");
      if (mousePreventDefault) {
        mousePreventDefault.parentNode.removeChild(mousePreventDefault);
      }

      let layxMove = document.getElementById("layx-window-move");
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
        if (document.body.classList.contains("layx-body")) {
          document.body.classList.remove('layx-body');
        }

        // 绑定拖曳之后事件
        if (Utils.isFunction(this.handle.winform.event.onresize.after)) {
          this.handle.winform.event.onresize.after(this.handle.layxWindow, this.handle.winform);
        }
      }
    };
  }
}
