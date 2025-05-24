import { useOutletContext } from "react-router-dom";
import './Marks.css';
function Marks() {
    const {marks} = useOutletContext();
    const terms = marks.physics;
    console.log(terms);
    return(
        <div className='marks'>
          <span></span>
          {
            terms.map((item,index) => (
                <span>Term {index + 1}</span>
            ))
          }
            {
            Object.keys(marks).map((sub) =>{
                const values = marks[sub];
                const items = [sub,...values];
                return items.map((item) => {
                    return (
                        <span key={item}>{item}</span>
                    )
                })
            })
            }
        </div>
        
    );
}

export default Marks;