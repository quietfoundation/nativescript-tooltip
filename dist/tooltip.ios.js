"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var ToolTip = (function () {
    function ToolTip(view, config) {
        this.tip = AMPopTip.popTip();
        this.tip.shouldDismissOnTap = true;
        this.view = view;
        var ap = AMPopTip.appearance();
        this.config = config;
        if (config.backgroundColor) {
            ap.popoverColor = new color_1.Color(config.backgroundColor).ios;
        }
        if (config.textColor) {
            ap.textColor = new color_1.Color(config.textColor).ios;
        }
        if (config.hideArrow) {
            ap.arrowSize = CGRectMake(0, 0, 0, 0).size;
        }
        if (config.delay) {
            ap.delayIn = config.delay;
        }
    }
    ToolTip.prototype.show = function () {
        var config = this.config;
        var view = this.view;
        var pos;
        switch (config.position) {
            case 'left':
                pos = 2;
                break;
            case 'right':
                pos = 3;
                break;
            case 'bottom':
                pos = 1;
                break;
            case 'top':
                pos = 0;
                break;
            default:
                pos = 0;
                break;
        }
        if (config.viewType && config.viewType === 'native' && config.duration) {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrameDuration(config.text, pos, this.config.width, view, view.frame, config.duration / 1000);
        }
        else if (config.viewType && config.viewType === 'native') {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width, view, view.frame);
        }
        else if (config.duration) {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrameDuration(config.text, pos, config.width, view.ios, view.ios.frame, config.duration / 1000);
        }
        else {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width, view.ios, view.ios.frame);
        }
    };
    ToolTip.prototype.hide = function () {
        this.tip.hide();
    };
    return ToolTip;
}());
exports.ToolTip = ToolTip;
//# sourceMappingURL=tooltip.ios.js.map