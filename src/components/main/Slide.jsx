import "./main.css";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Slide(){
return(
<div className="card  cursor-pointer  rounded-xl  mx-4 w-11/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4 slide">
          <div className="img-section">
            <img src="./images/122.jpg" alt="" className="rounded-xl" />
          </div>
          <Link to="/coursecontent">
            <div className="content-section px-2">
              <div className="rating flex justify-between my-2">
                <div className="flex item-center justify-center">
                  <p> 12 </p>
                  <BiSolidUser className="text-md my-1 mx-1" />
                </div>

                <div className="flex item-center  justify-center ">
                  <p> 4.7 </p>
                  <AiFillStar className="text-md my-1 mx-1" />
                </div>
              </div>

              <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
               

                <p> Instructor </p>
              </div>

              <div className="heading  text-center font-bold text-md ">
                Introduction to React Programming
              </div>

              <div className="price flex my-4 justify-between">
                <p className="text-sm">Beginner Friendly </p>
                <p> ₹2,000 </p>
              </div>
            </div>
          </Link>
        </div>

)
}
export default Slide