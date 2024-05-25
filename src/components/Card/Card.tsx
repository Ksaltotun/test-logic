import { CourseItem } from '../../utils/types'
import './Card.scss'

export const Card: React.FC<CourseItem> = (props: CourseItem) => {

    return (
        <div className='Card'>
            <main style={
                {
                    backgroundImage: `url(${props.image})`,
                    backgroundColor: props.bgColor
                }
            }>

            </main>
            <footer>
                {props.name}
            </footer>
        </div>
    )
}

