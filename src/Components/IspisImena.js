import ConfitionalRendering from './ConditionalRendering';

export default function IspisImena(props){
    let imena = props.imena;

    console.log(imena);
    return (
    <>
    <h4>Tu ce biti imena: </h4>

    {imena <= 9 ? <ConfitionalRendering broj={imena} /> : <ConfitionalRendering broj={imena} /> }
   
    </>
    )
}