import React, { Component } from 'react';
import '../Styles/style.css';
import Display from './Display';
import Icons from '../Assets/Icons';
import GameMenu from './GameMenu';




class Intro extends Component {
    state = {
        index: 0,
        intro_text: "",
        img_name: "",
        stage: 0,
        namee: "",
        player: ''
    }
    list_text = ['sdf', 'my name is phuiong', 'there is a horse']

    componentDidMount(){
        this.next_text();
        this.changeStage();
        this.changeBackground();
        this.setState({
            index: 0,
            intro_text: "",
            img_name: "title_page",
            stage: 0,
            namee: 'Herald',
            player: 'Name'
        });
    }
    // goes through list of storyline text
    next_text = (isCustom, text) => {
        if (isCustom){
            this.setState({
                intro_text: text
            })
        } else {
            
            this.setState(
                {
                    index: this.state.index+1,
                    intro_text: this.list_text[this.state.index],
                }
            )
        }
    }
    // change the screen
    changeBackground = (img) => {
        this.setState({
            img_name: img
        });
    }
    // increments the phase in the story
    changeStage = () => {
        this.setState({
            stage: this.state.stage+1,
        });
    }
    // handle player's name change
    handlePlayerChange = event => {
        this.setState({
            player: event.target.value
        })
    }
    // handle horse's name change
    handleHorseChange = event => {
        this.setState({
            namee: event.target.value
        })
    }
    render() {
        const name = this.state.namee;
        const carrot = <div id='carrot'>{name}</div>
        const title_screen = this.state.stage;
        let screen, show, buttons;
        buttons = <div className='grid-container'>
        <button className='icons-button'><img src={Icons['strawberries'] } alt='strawberries'/></button>
        <button className='icons-button'><img src={Icons['pet']} alt='pet'/></button>
        <button className='icons-button'><img src={Icons['walk']} alt='walk'/></button>
    </div>
        // intro has storyline that uses this.state.stage to keep track of current phase in the story
        switch(title_screen){
            case 0: 
                screen = <div><div onClick={ () => {this.next_text(false, 'asd'); }}></div> <button className='top-button' onClick={this.changeStage}><img src={Icons['play_game']} alt='play_game'/></button></div>
                break;
            case 1: 
                screen = <div>
                <div className='text-box'>What's your name? (Very important)</div>
                    <form className='form-box' onSubmit={event => event.preventDefault()}>
                        <input type="text" value={this.state.player} onChange={this.handlePlayerChange}/>
                    </form>
                    <button  className='top-button' onClick={() =>{this.changeStage(); this.changeBackground('title_page')}}><div className='text-button'></div><img src={Icons['continue_button']} alt='continue_button'/></button>
                </div>
                break;
            case 2:
                screen = <div>
                    <div className='text-box'>Name your pet horse.</div>
                    <form className='form-box' onSubmit={event => event.preventDefault()}>
                        <input type="text" value={name} onChange={this.handleHorseChange}/>
                    </form>
                    <button  className='top-button' onClick={() => {this.changeStage(); this.changeBackground('day_1');}}><div className='text-button'></div><img src={Icons['continue_button']} alt='continue_button'/></button>
                </div>
                break;

            case 3:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage();}}>
                    This is {carrot}. You and {carrot} have been best friends for a very long time.
                </div>
                break;
            case 4:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage();  this.changeBackground('baba_horse');}}>
                    In fact, {carrot} came to you as an orphaned foal.
                </div>
                break;
            case 5:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage(); this.changeBackground('Horse_Sad');}}>
                    [baba_horse.png goes here]
                </div>
                break;
            case 6:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage(); this.changeBackground('Horse_Happy');}}>
                    {carrot}'s favorite snacks are carrots. It's unfortunate that {carrot} is allergic to it.
                </div>
                break;
            case 7:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage();this.changeBackground('day_1');}}>
                    HOWEVER, {carrot}'s <div id='underline' title='Yes, 100th.'>100th birthday</div> is coming up so you asked the doctor if {carrot} could have a tiny bit of carrot.
                </div>
                break;
            case 8:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage(); this.changeBackground('Horse_Intrique');}}>
                    Now you and <div id='carrot'>{name}</div> have to wait for the doctor's reply. 
                </div>
                break;
            case 9:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage(); }}>
                    Oh wait! The doctor's mail has arrived. 
                </div>
                break;
            case 10:
                screen = 
                <button className='corner-button' onClick={this.changeStage}><img src={Icons['mail_red']} alt='mail'/></button>
                break;
            case 11:
                screen = 
                <button className='corner-button' onClick={() =>{this.changeStage(); this.changeBackground('Letter_Background')}}><img src={Icons['mail_pressed']} alt='mail'/></button>
                break;
            case 12:
                screen = 
                <button className='arrow-button' onClick={() =>{this.changeStage(); this.changeBackground('Letter_Background2')}}><img src={Icons['arrow']} alt='mail'/></button>
                break;
            case 13:
                screen = 
                <button className='corner-button' onClick={() =>{this.changeStage(); this.changeBackground('day_1')}}><img src={Icons['mail_pressed']} alt='mail'/></button>
                break;
            case 14:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage(); this.changeBackground('Horse_Happy')}}>
                    ...{carrot}.
                </div>
                break;
            case 15:
                screen = 
                <div className='text-box' onClick={() => {this.changeStage(); this.changeBackground('Horse_Happy')}}>
                    Doctor says you can have carrots!
                </div>
                break;
            default:
                screen = <div>Refresh the page.</div>
        }
        // if the final phase is reached, go to GameMenu
        if (this.state.stage < 16) {
            show = <div className="container">
                {screen}
                <Display img={this.state.img_name}/>
                {this.state.stage >2 ? buttons : <div></div>}
            </div>
        } else {
            show = <div><GameMenu namee={name} player={this.state.player}/></div>
        }
        return (
        <div>
            {show}
        </div>
        );
    }
}

export default Intro;