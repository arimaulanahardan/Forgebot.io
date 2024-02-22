import styles from '../../styles'
import TermsAndConditions from './TermsAndCondition'

function Terms() {
    return (
            <div className={`bg-primary ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <TermsAndConditions />
                </div>
            </div>
    )
}

export default Terms