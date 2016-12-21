/**
 * Created by yaoshining on 16/8/12.
 */
// import * as angular from 'angular';
import Layout from './Layout';
import Row from './Row';

export class FourColumn extends Layout {
    static get thumbnail() {
        return $(`
            <div class="layout-thumbnail">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3"></div>
            </div>
        `);
    }

    rows: any[];
    container: JQuery;

    constructor(bloc) {
        super(bloc);
        this.addRow(new Row(12, 4));
    }

    render() {
        angular.forEach(this.rows, row => {
            this.container.append(row.render());
        });
        return this.container;
    }
}