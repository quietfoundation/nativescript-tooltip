import { Color } from 'tns-core-modules/color';
import { ToolTipConfig } from './tooltip.common';
export class ToolTip {
  private tip: AMPopTip;
  private config: ToolTipConfig;
  private view: any;
  private containerView: any;

  constructor(view: any, containerView: any, config: ToolTipConfig) {
    this.tip = AMPopTip.popTip();
    this.tip.shouldDismissOnTap = true;
    this.view = view;
    this.containerView = containerView;
    const ap = AMPopTip.appearance();
    this.config = config;
    if (config.backgroundColor) {
      ap.popoverColor = new Color(config.backgroundColor).ios;
    }

    if (config.textColor) {
      ap.textColor = new Color(config.textColor).ios;
    }

    if (config.hideArrow) {
      ap.arrowSize = CGRectMake(0, 0, 0, 0).size;
    }

    if (config.delay) {
      ap.delayIn = config.delay;
    }
  }
  show() {
    const config = this.config;
    const view = this.view;
    const tip = this.tip;
    const containerView = this.containerView;
    let pos;
    switch (config.position) {
      case 'left':
        pos = AMPopTipDirection.Left;
        break;
      case 'right':
        pos = AMPopTipDirection.Right;
        break;
      case 'bottom':
        pos = AMPopTipDirection.Down;
        break;
      case 'top':
        pos = AMPopTipDirection.Up;
        break;
      default:
        pos = AMPopTipDirection.Up;
        break;
    }

    if (!config.width) {
      config.width = 400;
    }

    if (config.viewType === 'native') {
      if (config.duration) {
        tip.showTextDirectionMaxWidthInViewFromFrameDuration(
          config.text,
          pos,
          config.width,
          containerView,
          view.frame,
          config.duration / 1000
        );
      } else {
        tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width, containerView, view.frame);
      }
    } else {
      const ios = view.ios;
      const targetFrame = ios.convertRectToCoordinateSpace(ios.frame, containerView.ios);
      if (config.duration) {
        tip.showTextDirectionMaxWidthInViewFromFrameDuration(
          config.text,
          pos,
          config.width,
          containerView.ios,
          targetFrame,
          config.duration / 1000
        );
      } else {
        tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width, containerView.ios, targetFrame);
      }
    }
  }

  hide() {
    this.tip.hide();
  }
}
