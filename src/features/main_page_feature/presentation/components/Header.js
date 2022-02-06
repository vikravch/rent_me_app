import React from "react";
import logo from "../../../../res/images/logo-1.png";

const styles = {
    h1: {
        top: '207px',
        left: '600px',
        width: '721px',
        height: '73px',

        font: 'var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-60)/var(--unnamed-line-spacing-73) var(--unnamed-font-family-montserrat)',
        letterSpacing: 'var(--unnamed-character-spacing-0)',
        color: 'var(--unnamed-color-ffffff)',

        textAlign: 'left',
        // font: 'normal normal medium 60px/73px Montserrat',
        // letterSpacing: '0px',
        // color: '#FFFFFF',
        opacity: '1',
        position: 'absolute'
    },
    img: {
        width: '1920px',
        height: '540px',
        top: '0',
        left: '0',



        background: '#43434259 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        opacity: '1',
        zIndex: '0',
        position: 'absolute'
    },
    backgroundHeader: {
        top: '0px',
        left: '0px',
        width: '1920px',
        height: '80px',

        background: 'var(--unnamed-color-0f4c81) 0% 0% no-repeat padding-box',

        // background: '#0F4C81 0% 0% no-repeat padding-box',
        border: '1px solid #707070',
        opacity: '1',
        zIndex: '1',
        position: 'absolute'
    },
    signing:{
        top: '31px',
        left: '1155px',
        width: '395px',///95px
        height: '19px',
        textAlign: 'left',
        font: 'normal normal normal 16px/19px Montserrat',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: '1',
        position: 'relative',
        zIndex: '2',
        display: 'flex',
        // flexDirection: 'row'
    },
    box:{
        display: 'inline-block',
    },
    searching:{
        top: '389px',
        left: '555px',
        width: '300px',
        height: '50px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '5px',
        opacity: '1',
        display: 'flex',
        // position: 'absolute',
        zIndex: '2',
    }
}

export default function Header(){
    return (
        <div>
            <div style={styles.backgroundHeader}/>

            <img style={styles.img}
                 src={logo}
                 alt='lorem'/>

            <h1 className='h1' style={styles.h1}>Let Us Guide You Home</h1>

            <div style={styles.signing}>
                <div style={styles.box}>My favorites</div>
                <div style={styles.box}>Post your rental</div>
                <div style={styles.box}>Sign in</div>
                <div style={styles.box}>Sign up</div>
            </div>

            <div style={styles.searching}>
                <div>Tel Aviv, Israel</div>
                <div>Price</div>
                <div>Rooms</div>
                <div>Find place</div>
            </div>

        </div>

    )
};
