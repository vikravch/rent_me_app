import styles from './footer_row_menu.module.css'

const FooterRowMenu = ({row})=>{
    return <>
        <div className={styles.row}>{row}</div>
    </>
}

export default FooterRowMenu;