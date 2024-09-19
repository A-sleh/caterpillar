
import './title.css'

export default function Title({title}) {
    return (
        <div className='title-container'> 
            <h1 className='title'>{title}</h1>
        </div>
    )
}