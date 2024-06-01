import React from 'react';
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer1}>

    <div className={styles.footer_top}>
      <div className={styles.container}>

        <div className={styles.col2}>
        <ul className={styles.menu}>
            <li>
              <h2>FERNIT</h2>
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <h4>Foundation</h4>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <Link to="/internships">Internship</Link>
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <h4>About</h4>
            </li>
            <li>
              <Link to="/about">History</Link>
            </li>
            <li>
              <Link to="/#mission">Mission</Link>
            </li>
            <li>
              <Link to="/about/#awards">Awards</Link>
            </li>
            <li>
              <Link to="/trustees">Trustees</Link>
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <h4>Quick Links</h4>
            </li>
            <li>
              <Link to="https://www.cattrail.com/">Cat Trail</Link>
            </li>
            <li>
              <Link to="https://tally.so/r/mJ6r0R">Internship Apply</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col3}>
            <ul className={styles.menu}>
                <li>
                    <h4>Reach Us</h4>
                </li>
                <li>
                    <p>+1 (732) 666-8394</p>
                </li>
                <li>
                    <p>fadeleke57@gmail.com</p>
                </li>
                <li>
                    <p>irobeast31@gmail.com</p>
                </li>
            </ul>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.container}>
          <p>
            © 2024 FERNIT, Inc. - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;