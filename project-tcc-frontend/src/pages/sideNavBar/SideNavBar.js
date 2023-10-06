import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Overview",
			icon: "icons/grid.svg",
			link: "/",
		},
		{
			text: "Equipments",
			icon: "icons/tools.svg",
			link: "/equipments",
		},
		{
			text: "Wireline Units",
			icon: "icons/truck.svg",
			link: "*",
		},
		{
			text: "Cables",
			icon: "icons/cable-reel.png",
			link: "*",
		},
		{
			text: "Locations",
			icon: "icons/geo-alt.svg",
			link: "*",
		},
		{
			text: "Orders",
			icon: "icons/file-text.svg",
			link: "*",
		},
		{
			text: "Search",
			icon: "icons/search.svg",
			link: "*",
		},
		{
			text: "Shipping",
			icon: "icons/box-seam.svg",
			link: "*",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons\baker-hughes-icons/BKR.svg" alt="" srcSet="" />
							<h2>AssetTrack</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-footer">
					{isExpanded && (
						<div className="nav-details">
							<img
								className="nav-footer-avatar"
								src="icons/admin-avatar.svg"
								alt=""
								srcSet=""
							/>
							<div className="nav-footer-info">
								<p className="nav-footer-user-name">Admin</p>
								<p className="nav-footer-user-position">store admin</p>
							</div>
						</div>
					)}
					<img className="logout-icon" src="icons/logout.svg" alt="" srcSet="" />
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, link }) => (
						<a
							key={text}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={link}
						>
							<img className="menu-item-icon" src={icon} alt="" srcSet="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>

		</div>
	);
};

export default SideNavBar;