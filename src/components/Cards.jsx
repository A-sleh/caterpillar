export default function Card({title,desc,price,rate,image}) {
    return(
        <div style={{width : '300px'}}>
            <img src={image} alt="main picture" style={{width : "300px" , height : '300px' , borderBottomLeftRadius: '10px' , borderBottomRightRadius: '10px'}}/>
            <div style={{padding : '10px'}}>
                <div style = {{display : 'flex' , justifyContent : 'space-between' , alignItems : "center"}}>
                    <h2 style={{fontSize : '20px'}}>{title}</h2>
                    <div>
                        <i class="fa-solid fa-star" style={{color: '#FFD43B' , marginRight: '5px'}} ></i>
                        <span>{rate}</span>
                    </div>
                </div>
                <h4 style={{fontWeight : '300' , color : 'gray'}}>{desc}</h4>
                <span style={{marginTop : '20px'}}>
                    {price} $ night
                </span>
            </div>
        </div>
    )
}