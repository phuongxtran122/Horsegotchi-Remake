import '../Styles/style.css';
import Display from './Display';

const Game = (props) => {
    let namee = props.namee;
    let curScreen = props.screenn;     
        let show;
        // display images corresponding to curScreen
        if (curScreen === 'menu') {
            show = <div className="container">
                <Display img={'Horse_Bounce_Idle'}/>
            </div>
        }
        else if (curScreen === 'feed'){
            show = <div className="container">
            <Display img={'Horse_Eat'}/>
        </div>
        }
        else if (curScreen === 'pet'){
            show = <div className="container">
            <Display img={'Horse_Gets_Pets'}/>
        </div>
        }
        else if (curScreen === 'walk'){
            show = <div className="container">
            <Display img={'Horse_Travels'}/>
        </div>
        }
        else if (curScreen === 'mail') {
            show = <div className="container">
            <Display img={'Letter_Background'}/>
        </div>
        }
        else {
            show = <div>Wrong screen, man.</div>
        }
    return (<div>{show}{namee}</div>);
}

export default Game;