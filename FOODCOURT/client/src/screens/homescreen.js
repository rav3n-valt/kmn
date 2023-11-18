import React from 'react'
import Item from '../components/Item'
import items from '../fooditems'

export default function Homescreen(){
    return(
        <div>
            <div className='row'>
                {items.map(item=>{
                    return <div key={item.name} className='col-md-4 p-1'>
                        <div>
                            <Item item={item}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
//padding 30-p3