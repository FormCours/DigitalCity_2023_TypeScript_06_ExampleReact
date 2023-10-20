import { useCallback, useState } from 'react';

type playerTokenResult = [number, () => void];

/**
 * Hook pour gérer le jeton de joueur
 * @param nbPlayer Nombre de joueur
 * @returns {playerTokenResult}
 */
export const usePlayerToken = (nbPlayer: number) : playerTokenResult => {

    const [player, setPlayer] = useState<number>(1);

    const nextPlayer = useCallback(() => {

        setPlayer(player => (player % nbPlayer) +1);

    }, []);

    return [player, nextPlayer];
} 