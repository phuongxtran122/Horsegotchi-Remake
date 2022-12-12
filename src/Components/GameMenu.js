import React, { Component } from 'react';
import '../Styles/style.css';
import Icons from '../Assets/Icons';
import Game from './Game';
import Ending from './Ending';



class GameMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            namee: props.namee,
            player: props.player,
            feed: 0,
            pet: 0,
            walk: 0,
            days: 0,
            curAction: '',
            buttonDisabled: false,
            pressFeed: false,
            pressPet: false,
            pressWalk: false,
            removeButtons: false,
            gotMail: false,
            doctorsNote: false
        }
    }
    componentDidMount(){
        this.handleFeedButton();
        this.handlePetButton();
        this.handleWalkButton();
        this.setState({
            feed: 0,
            pet: 0,
            walk: 0,
            days: 10,
            curAction: 'menu',
            pressFeed: false,
            pressPet: false,
            pressWalk: false,
            removeButtons: false,
            doctorsNote: false

        });
    }
    // feed button increments feed value and decrement days value
    handleFeedButton = () => {
        if (this.state.pressFeed){
            this.setState({
                feed: this.pressFeed ? this.state.feed : this.state.feed+1,
                days: this.pressFeed ? this.state.days : this.state.days-1
            })
        }
        this.setState({
            curAction: 'feed',
            pressFeed: !this.state.pressFeed
        })

    }
    // pet button increments pet value and decrement days value
    handlePetButton = () => {
        if (this.state.pressPet){
            this.setState({
                pet: this.pressPet ? this.state.pet : this.state.pet+1,
                days: this.pressPet ? this.state.days : this.state.days-1

            })
        }
        this.setState({
            curAction: 'pet',
            pressPet: !this.state.pressPet

        })
    }

    // walk button increments walk value and decrement days value
    handleWalkButton = () => {
        if (this.state.pressWalk){
            this.setState({
                walk: this.pressWalk ? this.state.walk : this.state.walk+1,
                days: this.pressWalk ? this.state.days : this.state.days-1

            })
        }
        this.setState({
            curAction: 'walk',
            pressWalk: !this.state.pressWalk

        })
    }
    // change display to default if no buttons are pressed
    handleDisableButton = () => {
        // if all pressbuttons are not pressed
        if (!this.state.pressFeed){
            this.setState({
                curAction: 'menu'
            })
        }
    }

    render(){   
        const feed = this.state.feed;
        const pet = this.state.pet;
        const walk = this.state.walk;
        const pressFeed = this.state.pressFeed;
        const pressPet = this.state.pressPet;
        const pressWalk = this.state.pressWalk;

        const curAction = this.state.curAction; 
        
        let screen;
        // If buttons are pressed, display animation associated with button
        if (!pressFeed && !pressPet && !pressWalk){
            screen= <div><Game screenn={'menu'}/></div>
        }
        else if (curAction === 'feed'){
            screen= <div><Game screenn={curAction}/></div>
        }
        else if (curAction === 'pet'){
            screen= <div><Game screenn={curAction}/></div>
        }
        else if (curAction === 'walk'){
            screen= <div><Game screenn={curAction}/></div>
        }
        
        // if presspet || presswlak is true, then feed is disabled
        return (<div className='container'> 
            {this.state.feed >5 ? 
                <div><Ending namee={this.state.namee} player={this.state.player} feed={feed} pet={pet} walk={walk}/></div> :
            <div>{this.state.days<0 ? 
            <div><Ending namee={this.state.namee} player={this.state.player} feed={feed} pet={pet} walk={walk}/></div> : 
            <div>
                {screen}
                
                <div className='counter'>
                    Days Left: {this.state.days}{this.state.days===0 ? 
                        <div>Any last words?</div> : 
                        <div></div>
                        }
                </div> 
                <div className='grid-container'>
                    <button className='icons-button' title={pressFeed ? "Stop Feeding":"Feed"} disabled={pressPet||pressWalk ? true : false} onClick={() => {this.handleFeedButton(); }}><img src={pressFeed ? Icons['feed_pressed'] : Icons['feed'] } alt='feed'/></button>
                    <button className='icons-button' title={pressPet ? "Stop Petting":"Pet"} disabled={pressFeed||pressWalk ? true : false} onClick={() => {this.handlePetButton(); }}><img src={pressPet ? Icons['pet_pressed'] : Icons['pet']} alt='pet'/></button>
                    <button className='icons-button' title={pressWalk ? "Stop Walking":"Walk"} disabled={pressPet||pressFeed ? true : false} onClick={() => {this.handleWalkButton(); }}><img src={pressWalk ? Icons['walk_pressed'] : Icons['walk']} alt='walk'/></button>
                </div>
            </div>}</div>} 
            </div>);
    }
}

export default GameMenu;