import React, { Component } from 'react';
import '../Styles/style.css';
import Display from './Display';
import Icons from '../Assets/Icons';
import Credits from './Credits';


class Ending extends Component {
    state = {
        credits: false,
        textbox: true
    }
    componentDidMount(){
        this.setState({
            credits: false
        })
    }
    // if click, credits start rolling
    handleOnClick = () => {
        this.setState({
            credits: !this.state.credits
        })
    }
    // toggle textbox
    disableTextBox = () => {
        this.setState({
            textbox: !this.state.textbox
        })
    }
    render(){
        const namee = this.props.namee;
        const player = this.props.player;
        const feed = this.props.feed;
        const pet = this.props.pet;
        const walk = this.props.walk;
        const carrot = <div id='carrot'>{namee}</div>

        let screen, credits;
        credits = <div>< Credits namee={namee} player={player} /></div>;
        // display endings based on data, call component credits is credits=true
        if (feed < 1){
            screen =<div><div className="game-over">Game Over</div> <div className='text-box' onClick={this.handleOnClick}>{namee} starved to death. What a horrible way to go.</div>
                <Display img='Horse_Bad_Ending1'/>
            </div>
        }
        else if (feed > 5) {
            screen = <div><div className="game-over">Game Over</div>
            <div className='text-box' onClick={this.handleOnClick}>{carrot} passed away early due to overconsumption of carrots.</div>
            <Display img='Horse_Bad_Ending1'/>
            </div>
        }
        else if (pet  < 1){
            screen = <div><div className="game-over">Game Over</div>
            <div className='text-box' onClick={this.handleOnClick}>{carrot} left this world lonely. You should've pet {carrot} more.</div>
            <Display img='Horse_Bad_Ending1'/>
        </div>
        }
        else if (walk  < 1) {
            screen = <div><div className="game-over">Game Over</div>
            <div className='text-box' onClick={this.handleOnClick}>It's sad {carrot} didn't get to see any flowers before leaving.</div>
            <Display img='Horse_Bad_Ending1'/>
        </div>
        }
        
        else if (feed  === 3 && pet === 4 && walk === 4){
            screen = <div>
                {this.state.textbox ? <div className='text-box' onClick={() =>{ this.disableTextBox();}}>{carrot} is happy you two got to spend time together. Farewell, {carrot}, you will be missed.</div> :
                    <div><button className='corner-button' onClick={this.handleOnClick}><img src={Icons['arrow']} alt='arrow' /></button></div>
                }
                <Display img='Ending'/>
            </div>
        }
        else {
            screen = <div><div className="game-over">Game Over</div>
                <div className='text-box' onClick={this.handleOnClick}>Goodbye, buddy.</div>
                <Display img='Horse_General_Ending'/>
            </div>
        }
        
        return <div className='container'>{this.state.credits ? credits : screen}</div>
    }

}
export default Ending;