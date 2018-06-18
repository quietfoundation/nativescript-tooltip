import { ToolTipConfig } from './tooltip.common';
export declare class ToolTip {
  private tip;
  private config;
  private view;
  constructor(view: any, containerView: any, config: ToolTipConfig);
  show(): void;
  hide(): void;
}
