import React from "react";
import styles from './footer_block_menu.module.css'
import FooterRowMenu from "../footer_row_menu/FooterRowMenu";

const FooterBlockMenu = ({rowsMenu}) =>{

    const row = rowsMenu.map(item => <FooterRowMenu row={item} key={item}/>)

    return <>
        <div className={styles.block_menu}>{row}</div>
    </>
}

export default FooterBlockMenu;