// import * as layx from './config'
declare interface WinForm {
  // 存储窗口Id
  id: string,
  // 存储窗口domId
  windowId: string,
  // 存储窗口dom对象
  window: any,
  // 存储窗口创建时间
  createDate: Date,
  // 存储窗口状态
  status: string,
  // 存储窗口类型
  type: any,
  // 存储按钮集合
  buttons: any;
  // 存储子窗口
  frames: any;
  // 存储子窗口索引
  groupCurrentId: any
  // 存储窗口初始化区域信息
  area: {
    width: any,
    height: any,
    minWidth: any,
    minHeight: any,
    top: any,
    left: any
  };
  // 存储置顶状态
  isStick: boolean;
  // 存储窗口层级别
  zIndex: any;
  // 存储拖动状态
  movable: any;
  // 存储拖动限制配置信息
  moveLimit: any;
  // 存储拖曳状态
  resizable: any;
  // 存储拖曳限制配置信息
  resizeLimit: any;
  // 存储内置按钮操作信息
  stickable: any;
  minable: any;
  maxable: any;
  restorable: any;
  closable: any;
  // 存储事件
  event: any;
}

declare interface DefaultFrames {
  id: string,
  title: string,
  type: string,
  url: string,
  content: string,
  useFrameTitle: boolean,
}