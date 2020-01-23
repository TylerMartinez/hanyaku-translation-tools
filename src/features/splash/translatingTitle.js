import React, { Component} from "react";
import "../../css/animations.css";
import "./translatingTitle.css";

class TranslatingTitle extends Component{
  // Constructor
  constructor(props){
    super(props);

    this.state = {
      class: "translating-title-eng",
      translationClass: "translating-title-jap",
      animating: false
    };
  }

  // Functions
  onEnter(){
    if(!this.state.animating) {
      this.setState({
        class: "translating-title-eng fade-out-in",
        translationClass: "translating-title-jap fade-in-out",
        animating: true
      });

      setTimeout(() => {
        this.setState({
          class: "translating-title-eng",
          translationClass: "translating-title-jap",
          animating: false
        });
      }, 2500)
    }
  }

  // Render
  render(){
    return(
      <div className="translating-title-container" onMouseEnter={() => {this.onEnter()}}>
        <div className={this.state.class}>
          {this.props.value}
        </div>
        <div className={this.state.translationClass}>
          {this.props.translation}
        </div>
    </div>
    );
  }
}

export default TranslatingTitle;