/**
 * Created by yaoshining on 16/8/25.
 */
import Widget from './Widget';

export class Table extends Widget {

    category: string;
    name: string;
    title: string;
    config: any;
    element: JQuery;


    static get name() {
        return 'table';
    }

    constructor() {
        super();
        this.category = 'table';
        this.name = Table.name;
        this.title = '表格';
        this.config = {
            title: '未命名表格',
            dataSource: {
                url: '',
                params: []
            },
            displayFields: []
        };
    }

    render() {
        super.render();
        this.element.on('click', clickHandler.bind(this));
        return this.element;
    }
}

function clickHandler() {
    const sidemenu = this.$designer.sidemenu;
    sidemenu.changeTab(2, 'src/designer/templates/table-props.tpl.html');
    this.$designer.select(this);
}