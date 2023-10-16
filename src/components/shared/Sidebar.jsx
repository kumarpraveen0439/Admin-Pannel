import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FcBullish } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiMenuFill } from 'react-icons/ri';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {

	const [isShow, setIsShow] = useState(false);

	function openSideBar(){
		setIsShow(true);
	}

	function closeSideBar(){
		setIsShow(false);
	}

	return (
		<>
		<div className="menu_bar" onClick={()=>openSideBar()}> 
			<RiMenuFill /> 
		</div>
		<div className="side_bar_small side_bar_large bg-neutral-900 w-60 p-3 flex flex-col" style={{ display: isShow ? 'block' : '' }}>
			<div className="flex items-center gap-2 px-1 py-3 relative">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">OpenShop</span>
				<span className="cross_icon text-white hidden absolute right-[0]" onClick={()=>closeSideBar()}>&#10005;</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
		</>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
