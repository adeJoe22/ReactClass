import React, {useState, useEffect} from 'react'



const Poker = () => {

    const [computer, setComputer] = useState(0);
    
    const randNum = (min, max)=> {
        const generator = Math.floor(Math.random() * (max - min + 1)) + min;
        setComputer(generator);
        
    }
    useEffect( ()=> {
        setInterval( ()=> {
            randNum(0, 9)
        }, 3000)
    }, [])
    const [player, setPlayer] = useState(0);

    const [cards, setCards] = useState(0)


    return (
        <div className="mainContainer">
            <div>CodeLab</div>
            <div>Poker Game</div>
            <div className="cardHolder">
                <div className="left">
                    <div className="Line1">
                        <div className="card1 blue" 
                            onClick={ ()=> {
                                setPlayer(1)
                            }}>1</div>
                        <div className="card1 red">2</div>
                        <div className="card1 yellow">3</div>
                    </div>
                    <div className="Line1">
                        <div className="card1 aqua">4</div>
                        <div className="card1 green">5</div>
                        <div className="card1 purple">6</div>
                    </div>
                    <div className="Line1">
                        <div className="card1 grey">7</div>
                        <div className="card1 lime">8</div>
                        <div className="card1 black">9</div>
                    </div>
                </div>
                <div className="right">
                    <div className="resultCard">
                        <div className="cardOutput">{computer}</div>
                        <div>output</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Poker
