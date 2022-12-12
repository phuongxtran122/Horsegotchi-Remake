import '../Styles/style.css';

const credits = [    
    {
        id: 1,
        title: 'Art',
        main: 'Phuong',
        co: 'Little sister'
    },
    {
        id: 2,
        title: 'Animation',
        main: 'Little sister',
        co: ''
    },
    {
        id: 3,
        title: 'Character Design',
        main: 'Phuong',
        co: ''
    },
    {
        id: 4,
        title: 'Programming',
        main: 'Phuong',
        co: ''
    },
    {
        id: 5,
        title: 'Icons',
        main: 'Phuong',
        co: ''
    },
    {
        id: 6,
        title: 'End Scenes',
        main: 'Little sister',
        co: 'Phuong'
    },
    {
        id: 7,
        title: 'Actors',
        main: '',
        co: ''
    }
    ]
// use map to display credits and people associated with each tasks
const Print = ({id,title,main, co, namee, player}) => <div><div className='credits'>{title}</div><div className='credits-body'>{main}</div><div className='credits-body'>{co}{id===7 ? <div>{namee}<div>{player}</div></div> : <div></div> }</div></div>;
const Credits = (props) => {
    const namee = props.namee;
    const player = props.player;
    return <div><h1>Credits</h1> {credits.map(({id, ...props})=><Print id={id} {...props} namee={namee} player={player}/>)}</div>;
};

export default Credits;
