import { useState } from 'react';
import { Container, Title, Option } from './ColorPicker.styled.jsx'
    
export const ColorPicker = () => {
    const [currentOpttionIdx, setCurrentOpttionIdx] = useState(0);

    const handleActive = (idx) => {
        setCurrentOpttionIdx({currentOpttionIdx})
    }

return (
            <Container>
                <Title>Color Picker</Title>
                <div>
                    {this.props.options.map((option, idx) => {
                        return <Option key={option.label}
                                       onClick={()=>{handleActive(idx)}}
                                       currentidx={currentOpttionIdx}
                                       idx={idx}
                                       backgroundColor={option.color}
                                        >{option.label}</Option>
                    })}
                </div>
            </Container>
        )
}


// export class ColorPicker extends Component {

//     state = {
//         currentOpttionIdx: 0 
//     }

//     handleActive = (idx) => {
//         this.setState({currentOpttionIdx: idx})
//     } 

//     render() {
        
//     }
// }

export default ColorPicker;