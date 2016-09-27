import React from "react";
import {render} from "react-dom";
import {Table, Column, Cell} from 'fixed-data-table';
export default class StadiumTable extends React.Component {
    constructor (props) {
        super(props)
        // P.S: 仅能在构造函数中设置 state
        // 在其他地方绝不能使用 this.state.XXX = XXX
        // 只能使用 this.setState({ XXX: XXX })
        this.state = { rows: [
            ['a1', 'b1', 'c1'],
            ['a2', 'b2', 'c2'],
            ['a3', 'b3', 'c3']
            // .... and more
        ] }

    } 
	render(){
		return (
			<Table
	            rowHeight={50}
	            rowsCount={resData.length}
	            width={1000}
	            height={1000}
	            headerHeight={50}>
	          
	            <Column
	                header={<Cell>场馆名称</Cell>}
	                cell={({rowIndex, ...props}) => (
	                    <Cell {...props}>
	                      {rowIndex.name}
	                    </Cell>
	                 )}
	                width={100}
	            />

	            <Column
	                header={<Cell>所在城市</Cell>}
	                cell={({rowIndex, ...props}) => (
	                    <Cell {...props}>
	                      {rowIndex.city}
	                    </Cell>
	                 )}
	                width={100}
	            />

	            <Column
	                header={<Cell>运营单位</Cell>}
	                cell={({rowIndex, ...props}) => (
	                    <Cell {...props}>
	                      {rowIndex.mainUnit}
	                    </Cell>
	                 )}
	                width={100}
	            />

	            <Column
	                header={<Cell>提交时间</Cell>}
	                cell={({rowIndex, ...props}) => (
	                    <Cell {...props}>
	                      {rowIndex.buildDate}
	                    </Cell>
	                 )}
	                width={100}
	            />

	            <Column
	                header={<Cell>审核状态</Cell>}
	                cell={({rowIndex, ...props}) => (
	                    <Cell {...props}>
	                      {rowIndex.state}
	                    </Cell>
	                 )}
	                width={100}
	            />

	            <Column
	                header={<Cell>操作</Cell>}
	                cell={({rowIndex, ...props}) => (
	                    <Cell {...props}>
	                      <span className="auditBtn"><a>审核</a></span> | 
	                      <span className="auditViewBtn"><a>查看运营数据</a></span> | 
	                      <span className="auditCountBtn"><a>查看数据统计</a></span>
	                    </Cell>
	                 )}
	                width={260}
	            />
	        </Table>
		)
	}
}