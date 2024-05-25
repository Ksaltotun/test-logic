import { useState } from 'react';
import { Card } from '../components/Card/Card';
import { TagsButton } from '../components/TagsButton/TagsButton'
import { makeTagsList } from '../utils/dataPreparation'
import './FilteredDesk.scss'
import { AppProps } from '../utils/types';




export const FilteredDesk: React.FC<AppProps> = (props: AppProps) => {

    const tags = Array.from(makeTagsList(props.data))
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    const setFilter = (filter: null | string) => {

        setActiveFilter(filter)
    }

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
                        props.data.filter(el => (!activeFilter || el.tags.includes(activeFilter))
                        ).map(element => (
                            <Card {...element} key={element.id}/>
                        ))
                    }
                    </div>
                </div>
            </section>
        </main>)
}

