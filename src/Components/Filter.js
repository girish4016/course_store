import React from 'react'

const Filter = ( {filterData,setCriteria,Criteria} ) => {
  return (
    <div className='flex flex-row flex-wrap gap-3 justify-center text-center my-4 px-6 ' >{
      filterData.map((type) => { 
            return (<button 
              onClick = {()=>{ if(Criteria!==type.title)setCriteria(type.title);}} 
              key={type.id}  className= {`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${Criteria===type.title? ("bg-opacity-60 border-white"):("bg-opacity-40 border-transparent")  }  transition-all duration-300`}
               >{type.title}</button>)
            })
    }</div>
  )
}

export default Filter;
