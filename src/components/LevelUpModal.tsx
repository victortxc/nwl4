import styles from '../styles/components/LevelUpModal.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';

export function LevelUpModal() {
    const {level, closeLevelUpModal} = useContext(ChallengeContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcancou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </button>
            </div>
        </div>
    );
}