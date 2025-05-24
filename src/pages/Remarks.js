import { useOutletContext } from "react-router-dom";

function Remarks() {    
    const {remarks} = useOutletContext();
    console.log(remarks);
    return (
        <div className="remarks">
            {
                remarks.map((item) => {
                    return <div key={item}>{item}</div>
                })
            }
        </div>
      )
    }
export default Remarks;