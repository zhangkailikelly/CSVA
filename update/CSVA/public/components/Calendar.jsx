import React from "react";
import {render} from "react-dom";
import '../lib/fullcalendar-2.7.0/fullcalendar.css';


export default class DailyCalendar extends React.Component {
    constructor(...arg){
        super(...arg)
    }
    componentDidMount(){
        $('#calendar').fullCalendar({
            titleFormat:{
                month: 'YYYY 年  MM 月'                           // September 2009
            },
            buttonText : {
                today : '今天',
                month : '月',
                week : '周',
                day : '天'
            },
            dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
            dayClick:function(date){
                console.log(date.format());
                // _this.setState({time:date.format()})
            },
            editable: true,
            eventLimit: true // allow "more" link when too many events
        });
    }
    render () {
        return (
            <div id='calendar' className="pull-left fc fc-cursor fc-ltr fc-unthemed" style={{maxWidth:'500px',margin:'15px 0 0 12px'}}></div>
        )
    }
}  
