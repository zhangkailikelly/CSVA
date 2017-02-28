import React from "react";
import {render} from "react-dom";

export default class Footer extends React.Component {

  constructor () {
    super()
  }
  render () {
      return (  <footer className="footer">
                <span>版权所有：中国体育场馆协会</span>
                <span style={{marginLeft:"40px"}}>技术支持：华亿创新</span>
        </footer>  )
    }
}  
