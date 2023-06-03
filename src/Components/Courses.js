import Card from "./Card"

const Courses = ( { apiData , Criteria} ) => {
    
    function makeCourseArray(){
        const Arr = [];
        if(Criteria!=='All')return apiData.data[Criteria];
        Object.keys(apiData.data).forEach( (KEY ) => {
            apiData.data[KEY].map((elements) => {
                return Arr.push(elements);
            } )
         })
        return Arr;
    }
    makeCourseArray();
    

    return (<div className="flex max-w-[1200px] flex-row flex-wrap gap-4 justify-center text-center pb-8
    " >{
        makeCourseArray().map( element => {return( <Card key={element.id} element = {element} ></Card> )})
    }</div>)
}
export default Courses;
