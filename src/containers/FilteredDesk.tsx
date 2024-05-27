import { useMemo, useState } from 'react';
import { Card } from '../components/Card/Card';
import { TagsButton } from '../components/TagsButton/TagsButton'
import { makeTagsList } from '../utils/dataPreparation'
import './FilteredDesk.scss'
import { AppProps, CourseItem } from '../utils/types';




export const FilteredDesk: React.FC<AppProps> = (props: AppProps) => {

    const tags = Array.from(makeTagsList(props.data))
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    const setFilter = (filter: null | string) => {

        setActiveFilter(filter)
    }
    const filterCards = (filter: string | null, items: CourseItem[]) => {

        return items.filter(el => (!filter || el.tags.includes(filter))
        )
    }
    const filteredCards = useMemo(() => filterCards(activeFilter, props.data), [activeFilter, props.data]);


    return (
        <main className='FilteredDesk'>
            <aside>
                <div className='menuBox'>
                    {
                        tags.map(element => (
                            <TagsButton tag={element}
                                action={setFilter}
                                state={activeFilter === element.id}
                                key={element.id} />
                        ))
                    }
                </div>
            </aside>
            <section>
                <div className='Cards'>
                    <div className='MovedBlock'>
                        {
                            filteredCards.map(element => (
                                <Card {...element} key={element.id} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>)
}

