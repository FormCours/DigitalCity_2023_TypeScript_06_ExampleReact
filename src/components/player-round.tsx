import { usePlayerToken } from '../hooks/player.hook';


const PlayerRound = () => {

    const [currentPlayer, nextPlayer] = usePlayerToken(4);

    return (
        <div>
            <p>Joueur actuelle {currentPlayer}</p>
            <button onClick={nextPlayer}>Suivant !</button>
        </div>
    );
}

export default PlayerRound;