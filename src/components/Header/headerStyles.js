import breakpoint from '../../utils/breakpoints';

export const headerStyles = {
    background: '#b1c5d4',
    paddingRight: '20px',
    height: '80px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    [breakpoint.tablet]: {
        flexFlow: 'row nowrap',
    }
}
export const logoGroupStyles = {
    display: 'block',
    height: '70px',
}
export const headerElemStyles = {
    display: 'inline-block',
}
export const logoStyles = {
    height: '85px',	
    paddingLeft: '50px',
    paddingRight: '10px',
}
export const titleStyle = {
    color: '#686573',
    textDecoration: 'none',
    fontSize: '35px',
    lineHeight: '80px',
    fontWeight: 'bold',
    position: 'absolute',
}
export const buttonStyles = {
    height: '40px',
    marginLeft: '65px',
    [breakpoint.mobile]: {
        display: 'none',
    },
    [breakpoint.tablet]: {
        margin: 'auto 60px',
        display: 'flex'
    }
}
export const gridListButtonStyle = {
    ...headerElemStyles,
    fontSize: '13px',
    lineHeight: '25px',
    marginTop: '3px'
}