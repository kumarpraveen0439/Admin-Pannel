// import React from 'react'
// import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

// export default function DashboardStatsGrid() {
// 	return (
// 		<div className="flex flex-col sm:flex-row flex-wrap gap-4">
// 			<BoxWrapper>
// 				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
// 					<IoBagHandle className="text-2xl text-white" />
// 				</div>
// 				<div className="pl-4">
// 					<span className="text-sm text-gray-500 font-light">Total Sales</span>
// 					<div className="flex items-center">
// 						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
// 						<span className="text-sm text-green-500 pl-2">+343</span>
// 					</div>
// 				</div>
// 			</BoxWrapper>
// 			<BoxWrapper>
// 				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
// 					<IoPieChart className="text-2xl text-white" />
// 				</div>
// 				<div className="pl-4">
// 					<span className="text-sm text-gray-500 font-light">Total Expenses</span>
// 					<div className="flex items-center">
// 						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
// 						<span className="text-sm text-green-500 pl-2">-343</span>
// 					</div>
// 				</div>
// 			</BoxWrapper>
// 			<BoxWrapper>
// 				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
// 					<IoPeople className="text-2xl text-white" />
// 				</div>
// 				<div className="pl-4">
// 					<span className="text-sm text-gray-500 font-light">Total Customers</span>
// 					<div className="flex items-center">
// 						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
// 						<span className="text-sm text-red-500 pl-2">-30</span>
// 					</div>
// 				</div>
// 			</BoxWrapper>
// 			<BoxWrapper>
// 				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
// 					<IoCart className="text-2xl text-white" />
// 				</div>
// 				<div className="pl-4">
// 					<span className="text-sm text-gray-500 font-light">Total Orders</span>
// 					<div className="flex items-center">
// 						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
// 						<span className="text-sm text-red-500 pl-2">-43</span>
// 					</div>
// 				</div>
// 			</BoxWrapper>
// 		</div>
// 	)
// }

// function BoxWrapper({ children }) {
// 	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center mb-4 sm:mb-0 sm:mr-4 sm:last:mr-0 sm:w-1/2">{children}</div>
// }
import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';

export default function DashboardStatsGrid() {
  return (
    <div className="DashboardStatsGrid_ flex flex-col sm:flex-row flex-wrap gap-4">
		<span className="flex BoxWrapper_">
			<BoxWrapper bgColor="bg-sky-500" title="Total Sales" amount="$54232" change="+343">
				<IoBagHandle className="text-2xl text-white" />
			</BoxWrapper>
			<BoxWrapper bgColor="bg-orange-600" title="Total Expenses" amount="$3423" change="-343">
				<IoPieChart className="text-2xl text-white" />
			</BoxWrapper>
	 	</span>
		<span className="flex BoxWrapper_">
			<BoxWrapper bgColor="bg-yellow-400" title="Total Customers" amount="12313" change="-30">
				<IoPeople className="text-2xl text-white" />
			</BoxWrapper>
			<BoxWrapper bgColor="bg-green-600" title="Total Orders" amount="16432" change="-43">
				<IoCart className="text-2xl text-white" />
			</BoxWrapper>
		</span>
    </div>
  );
}

function BoxWrapper({ children, bgColor, title, amount, change }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center sm:mb-0 sm:mr-0 sm:last:mr-4 sm:w-1/2">
      <div className={`rounded-full h-12 w-12 flex items-center justify-center ${bgColor}`}>
        {children}
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">{title}</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">{amount}</strong>
          <span className="text-sm text-green-500 pl-2">{change}</span>
        </div>
      </div>
    </div>
  );
}
