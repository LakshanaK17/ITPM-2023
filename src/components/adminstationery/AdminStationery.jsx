import "./adminstationery.css"
import Sidebar from "../sidebar/Sidebar"
// import Navbar from "../../Component/navbar/Navbar"
import StationeryTable from "./StationeryTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <StationeryTable/>
      </div>
    </div>
    
  )
}

export default List