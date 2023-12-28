import React from "react";

export default function CartItem({ course, removeFromCart }) {
	const handleRemoveClick = () => {
		// Call the removeFromCart function with the course.id
		removeFromCart(course.title);
	};
	return (
		<div>
			<ul className='flex flex-col divide-y divide-gray-700'>
				<li className='flex flex-col py-2 sm:flex-row sm:justify-between'>
          <div id="cartmobitem" className='flex w-full space-x-2 sm:space-x-4'>
            <div>
						<img id="mobimage"
							src={`http://localhost:3001/uploads/${course.image}`}
							style={{ width: "150px",height:"110px",border:"none",borderRadius:"10px" }}
						/></div>
						<div className='flex flex-col justify-between w-full pb-4'>
							<div className='flex justify-between pb-2 space-x-2'>
								<div className='space-y-1 px-3'>
									<h3
										className='text-lg font-semibold sm:pr-8'
										style={{ marginTop: "10px" }}>
										{course.title}
									</h3>

									<div class='flex items-center space-x-1'>
										<i
											class='fa-solid fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-solid fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-solid fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-solid fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-solid fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
									</div>
								</div>
								<div id="mobprice" className='text-right' style={{ marginTop: "10px" }}>
									<p className='text-lg font-semibold' style={{color:"#a11afe"}}> ₹ {course.price}</p>
									<p className='text-sm line-through dark:text-gray-600'>
										₹3899
									</p>
								</div>
							</div>
							<div className='flex text-sm divide-x mt-3'>
								<button
									type='button'
									className='flex items-center px-3 py-2 pl-0 space-x-1'
									onClick={handleRemoveClick}>
									<i
										class='fa-solid fa-trash-can fa-lg'
										style={{ paddingLeft: "8px", paddingRight: "8px" }}></i>
									Remove
								</button>

								<button
									type='button'
									className='flex items-center px-2 py-1 space-x-1'>
									<i
										class='fa-regular fa-heart fa-lg'
										style={{ paddingLeft: "8px", paddingRight: "8px" }}></i>
									<span>Add to favorites</span>
								</button>
							</div>
						</div>
					</div>
				</li>
      </ul>
      
		</div>
	);
}
