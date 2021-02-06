import styles from './TeamMember.module.css'
import React, { useState } from 'react';

import { fetchEntries } from '@util/contentfulPosts'

export default function TeamMember({advisors, mampuProgramme, legalDivision, donorEngagement, digitalFundraising, onGroundFundraising }) {
    // console.log(advisors);
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
                    <div style={{display: show1? "flex":"none"}} className={styles.expandedContent}>
                        {advisors.map((a) =>(
                            <div>
                                <div className={styles.teamImage}>
                                    <img alt={a.namaAdvisor} src={`https:${a.fotoAdvisor.fields.file.url}`}/>
                                </div>
                                <div className={styles.teamDesc}>
                                    <p className={styles.teamName} >{a.namaAdvisor}</p>
                                    <p className={styles.teamRole}>{a.jabatanAdvisor}</p>
                                    <p className={styles.teamStory}>{a.deskripsiAdvisor}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={toggle2} className={styles.roleItem}>MAMPU Programme</button>
                    <div style={{display: show2? "flex":"none"}} className={styles.expandedContent}>
                        {mampuProgramme.map((m) =>(
                            <div>
                                <div className={styles.teamImage}>
                                    <img alt={m.namaAdvisor} src={`https:${m.fotoAdvisor.fields.file.url}`}/>
                                </div>
                                <div className={styles.teamDesc}>
                                    <p className={styles.teamName} >{m.namaAdvisor}</p>
                                    <p className={styles.teamRole}>{m.jabatanAdvisor}</p>
                                    <p className={styles.teamStory}>{m.deskripsiAdvisor}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={toggle3} className={styles.roleItem}>On-Ground Fundraising</button>
                    <div style={{display: show3? "flex":"none"}} className={styles.expandedContent}>
                        {onGroundFundraising.map((o) =>(
                            <div>
                                <div className={styles.teamImage}>
                                    <img alt={o.namaAdvisor} src={`https:${o.fotoAdvisor.fields.file.url}`}/>
                                </div>
                                <div className={styles.teamDesc}>
                                    <p className={styles.teamName} >{o.namaAdvisor}</p>
                                    <p className={styles.teamRole}>{o.jabatanAdvisor}</p>
                                    <p className={styles.teamStory}>{o.deskripsiAdvisor}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={toggle4} className={styles.roleItem}>Donor Engagement</button>
                    <div style={{display: show4? "flex":"none"}} className={styles.expandedContent}>
                        {donorEngagement.map((de) =>(
                            <div>
                                <div className={styles.teamImage}>
                                    <img alt={de.namaAdvisor} src={`https:${de.fotoAdvisor.fields.file.url}`}/>
                                </div>
                                <div className={styles.teamDesc}>
                                    <p className={styles.teamName} >{de.namaAdvisor}</p>
                                    <p className={styles.teamRole}>{de.jabatanAdvisor}</p>
                                    <p className={styles.teamStory}>{de.deskripsiAdvisor}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={toggle5} className={styles.roleItem}>Legal Division</button>
                    <div style={{display: show5? "flex":"none"}} className={styles.expandedContent}>
                        {legalDivision.map((l) =>(
                            <div>
                                <div className={styles.teamImage}>
                                    <img alt={l.namaAdvisor} src={`https:${l.fotoAdvisor.fields.file.url}`}/>
                                </div>
                                <div className={styles.teamDesc}>
                                    <p className={styles.teamName} >{l.namaAdvisor}</p>
                                    <p className={styles.teamRole}>{l.jabatanAdvisor}</p>
                                    <p className={styles.teamStory}>{l.deskripsiAdvisor}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={toggle6} className={styles.roleItem}>Digital Fundraising</button>
                    <div style={{display: show6? "flex":"none"}} className={styles.expandedContent}>
                        {digitalFundraising.map((df) =>(
                            <div>
                                <div className={styles.teamImage}>
                                    <img alt={df.namaAdvisor} src={`https:${df.fotoAdvisor.fields.file.url}`}/>
                                </div>
                                <div className={styles.teamDesc}>
                                    <p className={styles.teamName} >{df.namaAdvisor}</p>
                                    <p className={styles.teamRole}>{df.jabatanAdvisor}</p>
                                    <p className={styles.teamStory}>{df.deskripsiAdvisor}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    )
}

