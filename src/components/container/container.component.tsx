import React, { useRef } from 'react'
import styles from './style.module.scss';
import MiddleContent from 'components/middelContent/middelContent.component';
import PreFooter from 'components/pre-footer/pre-footer.component';
import FixedBottomFooter from '../footer/footer.component';
import { NavBarComponent } from '../navbar/navbar.component';
import SectionOne from '../sectionOne/sectionOne.component';

interface Props { }

const Container = (props: Props) => {
  const element = useRef(null);
  const handleScroll = () => {
    const { current }:any = element;
    current && current.scrollIntoView({behavior: "smooth"})
  }
  return (
    <div className={styles.main_container}>
      <NavBarComponent />
      <SectionOne  handleScroll={handleScroll}/>
      <MiddleContent refElement={element} />
      <PreFooter handleScroll={handleScroll}/>
      <FixedBottomFooter/>
    </div>
  )
}

export default Container;