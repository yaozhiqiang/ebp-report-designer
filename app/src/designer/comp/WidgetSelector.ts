/**
 * Created by yaoshining on 16/8/16.
 */
import * as widgets from './Widgets';

function WidgetSelector() {

    const self = this;

    class WidgetSelector {

        private enable: boolean = false;
        private widgets = widgets;
        private selectedWidget = widgets['BarChart'];

        constructor() {
            this.enable = false;
            this.widgets = widgets;
            this.selectedWidget = widgets['BarChart'];
            Object.defineProperties(self, {
                cursor: {
                    get: () => {
                        if(this.enable) {
                            return 'cursor-' + this.selectedWidget.name;
                        }
                        return '';
                    }
                }
            });
        }

        toggle() {
            this.enable = !this.enable;
        }

        select(widget) {
            this.selectedWidget = widget;
        }

    }

    return new WidgetSelector();
}

export default WidgetSelector;