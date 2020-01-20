import React, { Component} from "react";

class TranslatingTitle extends Component{
  // Constructor
  constructor(props){
    super(props);

    this.state = {
      text: this.props.value,
      class: "section-title",
      translated: false
    };
  }

  // Functions
  onEnter(){
    if(!this.state.translated) {
      this.setState({
        text: this.props.translation,
        class: "section-japanese",
        translated: true
      })
    } else {
      this.setState({
        text: this.props.value,
        class: "section-title",
        translated: false
      })
    }
  }

  // Render
  render(){
    return(
      <div 
        className={this.state.class} 
        onMouseEnter={() => {this.onEnter()}}>
        {this.state.text}
      </div>
    );
  }
}

export default TranslatingTitle;