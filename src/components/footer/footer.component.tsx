import React from "react";
import styles from "./style.module.scss";

interface Props {}
const FixedBottomFooter: React.FC<Props> = () => {
	return (
		<footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.top}>
					<div className={styles.logo_details}>
						<span className={styles.logo_name}>Shortly</span>
					</div>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Company</li>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Get started</a>
                            </li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Services</li>
                            <li>
                                <a href="#">App design</a>
                            </li>
                            <li>
                                <a href="#">Web design</a>
                            </li>
                            <li>
                                <a href="#">Logo design</a>
                            </li>
                            <li>
                                <a href="#">Banner design</a>
                            </li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Account</li>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">My account</a>
                            </li>
                            <li>
                                <a href="#">Prefrences</a>
                            </li>
                            <li>
                                <a href="#">Purchase</a>
                            </li>
                        </ul>
					<div className={styles.media_icons}>
						<a href="https://www.facebook.com/markos.bahgat.376" rel="noreferrer" target="_blank">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://twitter.com/bahgat_markos" rel="noreferrer" target="_blank">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="https://www.instagram.com/markos_bahgat" rel="noreferrer" target="_blank">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/markos-bahgat-9a7178216" rel="noreferrer" target="_blank">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FixedBottomFooter;