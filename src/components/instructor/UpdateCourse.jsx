
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import '../header/header.css'


function UpdateCourse({ onUpdate }) {
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");
  const [courseData, setCourseData] = useState({
    cname: "",
    title: "",
    description: "",
    price: "",
  });
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    // Fetch the list of courses from the server when the component mounts
    axios
      .get("http://localhost:3001/allcourses")
      .then((response) => {
        setCourseList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  

  const handleSelectChange = (e) => {
    const selectedCourseTitle = e.target.value;
    setSelectedCourseTitle(selectedCourseTitle);

    // Fetch the selected course's details when a course is selected
    axios
      .get(`http://localhost:3001/allcourses/${selectedCourseTitle}`)
      .then((response) => {
        // Set the course data in the form
        const course = response.data.data;
        setCourseData({
          cname: course.cname,
          title: course.title,
          description: course.description,
          price: course.price,
        });
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  };
  

  const handleUpdate = (e) => {
    e.preventDefault();

    // Prepare the updated course data
    const updatedCourse = {
      cname: courseData.cname,
      title: courseData.title,
      description: courseData.description,
      price: courseData.price,
    };

    // Send an HTTP request to update the course based on the selected title
    axios
      .post(
        `http://localhost:3001/allcourses/updatecourse/${selectedCourseTitle}`,
        updatedCourse
      )
      .then((response) => {
        toast.success("Course Updated successfully")
         console.log("Course Updated")
        
          // onUpdate();
       
      })
      .catch((error) => {
        console.error("Error updating course:", error);
        toast.error("Error Updating Course")
      });
  };

  return (
    <>
     <div id="createcoursemobhead"><h2 className="createcoursehead ml-5">Update Course</h2></div> 
      <ToastContainer/>
      <form onSubmit={handleUpdate} className='ml-5'>
        <div className="mb-3 mobilecourseinput" >
          <label htmlFor="courseTitle" className="form-label">
            Select a course to Update
          </label>
          <select
            id="courseTitle"
            name="courseTitle"
            className="form-select"
            value={selectedCourseTitle}
            onChange={handleSelectChange}
            required
            
          >
            <option value="" disabled>
              Select a course
            </option>
            {courseList.map((course) => (
              <option
                key={course._id}
                value={course.title}
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                {course.title}
              </option>
            ))}
          </select>
        </div>

        {/* Conditional rendering of course update fields */}
        {selectedCourseTitle && (
          <div>
            {/* Input fields for updating course details */}
            <div className="mb-3 mobilecourseinput">
              <label htmlFor="instructor" className="createcourselabel">
                Instructor
              </label>
              <input
                type="text"
                className="form-control"
                id="cname"
                name="cname"
                value={courseData.cname}
                required
                placeholder="Update Instructor Name"
                onChange={(e) =>
                  setCourseData({ ...courseData, cname: e.target.value })
                }
               
              />
            </div>

            <div className="mb-3 mobilecourseinput">
              <label htmlFor="title" className="createcourselabel">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={courseData.title}
                required
                placeholder="Update Course Title"
                onChange={(e) =>
                  setCourseData({ ...courseData, title: e.target.value })
                }
               
              />
            </div>

            <div className="mb-3 mobilecourseinput">
              <label htmlFor="description" className="createcourselabel">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={courseData.description}
                required
                placeholder="Update Description"
                onChange={(e) =>
                  setCourseData({ ...courseData, description: e.target.value })
                }
                
              ></textarea>
            </div>

            <div className="mb-3 mobilecourseinput">
              <label htmlFor="price" className="createcourselabel">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={courseData.price}
                required
                placeholder="Update Price"
                onChange={(e) =>
                  setCourseData({ ...courseData, price: e.target.value })
                }
                
              />
            </div>

            <button type="submit" className="coursebtn">
              Update Course
            </button>
          </div>
        )}
      </form>
     
    </>
  );
}

export default UpdateCourse;
