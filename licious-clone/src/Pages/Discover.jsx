import {IoIosArrowDown} from "react-icons/io"
import "../module.css"
export const Discover =()=>{
    return(
        <div className="discover-main">
        <div className="discover">
            <div className="disc-1">
                <p className="disc-p extra1">Premium Produce</p>
                <p className="disc-p extra4">World-Class Central Production Unit</p>
                <p className="disc-p extra"></p>
                <p className="disc-p extra2">Delivered Fresh Everyday</p>
                <p className="disc-p extra3">Extraordinary Cooking</p>
            </div>
            <div className="disc-2">
                <h3 className="disc-w">Know the Licious way</h3>
                <p>150 Quality Checks</p>
                <button className="disc-btn"><b>Discover How<IoIosArrowDown></IoIosArrowDown></b></button>
            </div>
        </div>
        </div>
    )
}