
import Card from './components/Cards.jsx' ;
import './assets/all.min.css'
import {data} from './data.js' ;

export default function App() {

    var dataShow = data.map((ele,index) => {
        return <Card image = {ele.image} title = {ele.title} desc = {ele.desc} price = {ele.price} rate = {ele.rate} key={index} />
    })

    return(
        <div style={{display : 'flex' , gap : '20px' , alignItems : 'center' , justifyContent: 'center' , margin : '40px' , flexWrap: 'wrap'}}>
            {dataShow}
        </div>
    )
};