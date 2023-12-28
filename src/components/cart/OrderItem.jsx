import React from "react";

export default function OrderItem({ course }) {
	return (
		<div>
			<ul className='flex flex-col divide-y divide-gray'>
				<li className='flex flex-col py-2 sm:flex-row sm:justify-between'>
					<div id="cartmobitem" className='flex w-full space-x-2 sm:space-x-4'>
						<div>
							<img
								src={`http://localhost:3001/uploads/${course.image}`}
								style={{
									width: "150px",
									height: "110px",
									border: "none",
									borderRadius: "10px",
								}}
							/>
						</div>
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
											class='fa-regular fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-regular fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-regular fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-regular fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
										<i
											class='fa-regular fa-star'
											style={{ color: "gray", cursor: "pointer" }}></i>
									</div>
								</div>
								<div className='text-right' style={{ marginTop: "10px" }}>
									<p className='text-lg font-semibold' style={{color:"#a11afe"}}> ₹ {course.price}</p>
									<p className='text-sm line-through dark:text-gray-600'>
										₹3899
									</p>
								</div>
							</div>
							<div className='flex text-sm divide-x mt-3'></div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
