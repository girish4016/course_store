import { useEffect, useState } from "react"
import Card from "./Card"

const Courses = ( { apiData , Criteria} ) => {
    const [allElements, setAllElements] = useState([]);
    
    function makeCourseArray(){
        const Arr = [];
        Object.keys(apiData.data).forEach( (KEY ) => {
            if(Criteria==='All' || Criteria ===  KEY){
                apiData.data[KEY].map((elements) => {
                    return Arr.push(elements);
                } )
            }
         })
        setAllElements(Arr);
    }

    useEffect(makeCourseArray,[Criteria,apiData] );

    return (<div className="flex max-w-[1200px] flex-row flex-wrap gap-4 justify-center text-center pb-8
    " >{
        allElements.map( element => {return( <Card key={element.id} element = {element} ></Card> )})
    }</div>)
}
export default Courses;