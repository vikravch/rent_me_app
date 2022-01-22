import styles from "./footer_social_img.module.css";
import React from "react";

const FooterSocialImg = ({imgSocial}) => {

    return <>
        <img alt={imgSocial} className={styles.social} src={imgSocial} />
    </>
}

export default FooterSocialImg;