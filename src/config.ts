export default class conf {
  public version = '2.0.5';
  public defaults = {
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
    frames: new Array(), // 子框架
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
    buttons: new Array(),    // 生成状态栏按钮，必须设置statusBar=true
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
        after: function (layxWindow: any, winform: any) {
        }
      }
    }
  };
  // 按钮配置参数
  public defaultButtons = {
    label: '确定',
    callback(id: any) {
    }
  };
  // 默认子frame参数
  public defaultFrames = {
    id: '',
    title: '',
    type: 'html',
    url: '',
    content: '',
    useFrameTitle: false,
  };
  // 普通层级别
  public zIndex = 10000000;
  // 窗口集合
  public windows: any = null;

  // 置顶层级别
  public stickZIndex: number = 20000000;
}