import '../Styles/style.css';
import Images from '../Assets/Images.js'

// Display image
const Display = (props) => {
    
    return (
        <div>
            <img src={Images[props.img]} alt={props.img}/>
        </div>
    )
};
export default Display;