import { Component } from 'react';
import { Container, Title, Option } from './ColorPicker.styled.jsx'
    
export class ColorPicker extends Component {

    state = {
        currentOpttionIdx: 0 
    }

    handleActive = (idx) => {
        this.setState({currentOpttionIdx: idx})
    } 

    render() {
        return (
            <Container>
                <Title>Color Picker</Title>
                <div>
                    {this.props.options.map((option, idx) => {
                        return <Option key={option.label}
                                       onClick={()=>{this.handleActive(idx)}}
                                       currentidx={this.state.currentOpttionIdx}
                                       idx={idx}
                                       backgroundColor={option.color}
                                        >{option.label}</Option>
                    })}
                </div>
            </Container>
        )
    }
}

export default ColorPicker;