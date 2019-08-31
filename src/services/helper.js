export function getStyle(sender){
    return{
        padding: '10px',
        margin: '5px 0px',
        color: 'white',
        width: 'fit-content',
        maxWidth: '60%',
        textAlign: 'left',
        borderRadius: '15px',
        background: sender === 'bot' ? '#3f51b5' : 'grey'
    }
}