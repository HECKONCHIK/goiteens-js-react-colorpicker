import { Component } from "react";
import "../todo.json"
import { StickerList } from "./Sticker/StickerList";
import stickers from "../sticker.json"
 

export class App extends Component {
  state = {
    stickerLabel: null
  }

  labelHandler = label => {
    this.setState({stickerLabel: label})
  }

  render() {
    const {stickerLabel} = this.state 
      return (
    <>
      { stickerLabel && <h1>{stickerLabel}</h1>}
      <StickerList stickers={stickers} labelHandler={this.labelHandler} />
       {/* <ColorPicker options={colorOptions}/> */}
  </>
  );
  }
};