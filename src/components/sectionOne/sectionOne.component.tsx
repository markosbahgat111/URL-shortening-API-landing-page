import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import backgroundPattern from 'assets/images/illustration-working.svg';
interface Props {
  handleScroll:() => void,
 }

const SectionOne:React.FC<Props> = ({handleScroll}) => {
  return (
      <div className={styles.section_container}>
          <section className={styles.content_section}>
              <h1>More than just shorter links.</h1>
              <p>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
              <button onClick={handleScroll}>Get Started</button>
          </section>
          <section className={styles.draw_section}>
              <Image src={backgroundPattern} alt="illustration working" layout="fill"/>
          </section>
    </div>
  )
}

export default SectionOne