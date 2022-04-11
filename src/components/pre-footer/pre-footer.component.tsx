import React from 'react'
import styles from './style.module.scss';

interface Props {
    handleScroll:() => void,
}

const PreFooter:React.FC<Props> = ({handleScroll}) => {
  return (
    <div className={styles.boost_container}>
        <h1>Boost your links today</h1>
        <button onClick={handleScroll}>
            Get Started
        </button>
    </div>
  )
}

export default PreFooter;