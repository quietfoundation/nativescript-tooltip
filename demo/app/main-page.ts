import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { ToolTip } from 'nativescript-tooltip';
import { EventData } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import { TextView } from 'tns-core-modules/ui/text-view';
import { Color } from 'tns-core-modules/color';
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
}

export function pushIt(args) {
  const t = new ToolTip(args.object, {
    text: 'Testing le Tester',
    position: 'bottom',
    hideArrow: false,
    textColor: 'white',
    backgroundColor: 'blue',
    style: 'CustomToolTipLayoutStyle',
    width: 400
  });
  t.show();
}
