'use client'

import {
	Header,
	HeaderContainer,
	HeaderName,
	HeaderNavigation,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
	SideNav,
	SideNavItems,
	HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import './style.scss';

const TutorialHeader = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="Carbon Tutorial" className={"main-header"}>
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<HeaderName href="/" prefix="Stefan">
					Library
				</HeaderName>
				<HeaderNavigation aria-label="Carbon Tutorial">
					<HeaderMenuItem href="/library">Library</HeaderMenuItem>
					<HeaderMenuItem href="/settings">Settings</HeaderMenuItem>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}
				>
					<SideNavItems>
						<HeaderSideNavItems>
							<HeaderMenuItem href="/library">Library</HeaderMenuItem>
							<HeaderMenuItem href="/settings">Settings</HeaderMenuItem>
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
				<HeaderGlobalBar>
					{/* <HeaderGlobalAction
						aria-label="Notifications"
						tooltipAlignment="center"
						className="action-icons"
					>
						<Notification size={20} />
					</HeaderGlobalAction> */}
					<HeaderGlobalAction
						aria-label="User Avatar"
						tooltipAlignment="center"
						className="action-icons"
					>
						<UserAvatar size={20} />
					</HeaderGlobalAction>
					{/* <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
						<Switcher size={20} />
					</HeaderGlobalAction> */}
				</HeaderGlobalBar>
			</Header>
		)}
	/>
);

export default TutorialHeader;
