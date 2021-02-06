import styles from './TeamMember.module.css'
import React, { useState } from 'react';

export default function TeamMember() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    function toggle1(){
        setShow1(!show1);
    }
    function toggle2(){
        setShow2(!show2);
    }
    function toggle3(){
        setShow3(!show3);
    }
    function toggle4(){
        setShow4(!show4);
    }
    function toggle5(){
        setShow5(!show5);
    }
    function toggle6(){
        setShow6(!show6);
    }
    return (
        <div className={styles.roleList}>
            <ul>
                <li>
                    <button onClick={toggle1} className={styles.roleItem}>Advisors</button>
                    <div style={{display: show1? "block":"none"}} className={styles.expandedContent}>Halo!</div>
                </li>
                <li>
                    <button onClick={toggle2} className={styles.roleItem}>MampuProgramme</button>
                    <div style={{display: show2? "block":"none"}} className={styles.expandedContent}>Halo!</div>
                </li>
                <li>
                    <button onClick={toggle3} className={styles.roleItem}>On-Ground Fundraising</button>
                    <div style={{display: show3? "block":"none"}} className={styles.expandedContent}>Halo!</div>
                </li>
                <li>
                    <button onClick={toggle4} className={styles.roleItem}>Donor Engagement</button>
                    <div style={{display: show4? "block":"none"}} className={styles.expandedContent}>Halo!</div>
                </li>
                <li>
                    <button onClick={toggle5} className={styles.roleItem}>Legal Division</button>
                    <div style={{display: show5? "block":"none"}} className={styles.expandedContent}>Halo!</div>
                </li>
                <li>
                    <button onClick={toggle6} className={styles.roleItem}>Digital Fundraising</button>
                    <div style={{display: show6? "block":"none"}} className={styles.expandedContent}>Halo!</div>
                </li>
            </ul>
        </div>
    )
}