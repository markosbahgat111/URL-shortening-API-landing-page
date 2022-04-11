import Image from 'next/image';
import React from 'react'
import styles from './style.module.scss';
import brand from 'assets/images/icon-brand-recognition.svg';
import records from 'assets/images/icon-detailed-records.svg';
import custom from 'assets/images/icon-fully-customizable.svg';
import useShortenApi from '../../api/index';
import { useEffect } from 'react';

interface Props {
  refElement:any
}

const MiddleContent: React.FC<Props> = ({ refElement }) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [buttonClicked, setButtonClicked] = React.useState<boolean>(false)
  const { data, getLink } = useShortenApi();
  useEffect(() => {
    getLink("http://markosbahgat.com")
  }, [])
  const handleSubmit = () => {
    if (inputValue) {
      getLink(inputValue);
    }
    setInputValue('');
    setButtonClicked(false);
  }
  const handleCopy = () => {
    if(navigator.clipboard) data && navigator.clipboard.writeText(data?.full_short_link)
    setButtonClicked(buttonClicked => !buttonClicked)
  }
  console.log(data);
  
  return (
    <div className={styles.middle_container} ref={refElement}>
      <div className={styles.input_container}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Shorten a link here ....' />
          <input type="submit" value="Shorten It!" onClick={handleSubmit}/>
      </div>
      <div className={styles.shorted_links_container}>
        <section>
          <h4>{data!?.original_link.length > 50 ? data?.original_link.slice(0, 50) + "..." : data?.original_link}</h4>
          <div>
            <span>{data?.full_short_link}</span>
            <button onClick={handleCopy} className={styles[`${buttonClicked ? "Copied" : "Copy"}`]}>{buttonClicked ? "Copied!" : "Copy"}</button>
          </div>
        </section>
      </div>
      <section className={styles.header_section}>
        
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </section>
      <section className={styles.illustration_squares}>
        <div>
          <div className={styles.icon}>
            <Image src={brand} alt="Brand Icon" width={40} height={40}/>
          </div>
          <h2>Brand Recognition</h2>
          <p>Boost your brand recognition with each click. generic links don&apos;t mean a thing. Branded links help install confidence in your content.</p>
        </div>
        <hr/>
        <div>
          <div className={styles.icon}>
            <Image src={records} alt="Detailed Records" width={40} height={40}/>
          </div>
          <h2>Detailed Records</h2>
          <p>Boost your brand recognition with each click. generic links don&apos;t mean a thing. Branded links help install confidence in your content.</p>
        </div>
        <div>
          <div className={styles.icon}>
            <Image src={custom} alt="Fully customizable" width={40} height={40}/>
          </div>
          <h2>Fully Customizable</h2>
          <p>Boost your brand recognition with each click. generic links don&apos;t mean a thing. Branded links help install confidence in your content.</p>
        </div>
      </section>
    </div>
  )
}

export default MiddleContent;