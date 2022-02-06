import React from 'react';
import styles from './footer.module.css';
import FooterBlockMenu from "../footer_block_menu/FooterBlockMenu";
import {textSubscribe,textAuthor,blocksMenuFooter,arrSocial} from "../../footer_content"
import FooterSocialImg from "../footer_social_img/FooterSocialImg";

const Footer = () => {
    const rowsBlock = blocksMenuFooter.map(item=><FooterBlockMenu rowsMenu={item} key={item}/>)
    const rowsImg = arrSocial.map(item=><FooterSocialImg imgSocial={item} key={item}/>)

    return (
        <footer className="footer">
            <div className={styles.container}>
                <div className={styles.wrapper_left}>
                    <div className={styles.blockText}>{textSubscribe}</div>
                    <div className={styles.search}>
                        <input className={styles.inputFooter} type="text" name="email" placeholder="Enter your email"/>
                        <button className={styles.but}>Ok</button>
                    </div>
                </div>
                {rowsBlock}
                <div className={styles.wrapper_right}>
                    <div className={styles.wrapper_social}>
                        {rowsImg}
                    </div>
                    <div className={styles.author}>{textAuthor}</div>
                </div>
            </div>
        </footer>
    )

}
export default Footer