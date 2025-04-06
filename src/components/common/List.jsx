import React from 'react'

const List = ({listArr , boxStyle , listStyle , link , icon }) => {
  return (
    <ul className={boxStyle}>
        {listArr.map((item , index)=>  link ? <li key={index} ><a href={link} className={listStyle}>{icon && item.icon}{item.list}</a></li> : <li key={index} className={listStyle}>{item.list}</li>)}
    </ul>
  )
}

export default List