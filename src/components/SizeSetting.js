import React from 'react';

class SizeSetting extends React.Component{
  changeSize(value){
    this.props.onChangeSize(value);
  }
  render(){
    return(
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Sizw : { this.props.fontSize } px </h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success" onClick={ () => this.changeSize(-2) }>Giam</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={ () => this.changeSize(+2) }>Tang</button>
        </div>
      </div> 
      
      );
  }
}

export default SizeSetting;
