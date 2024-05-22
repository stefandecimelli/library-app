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
import Link from 'next/link';
import './Header.scss';

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
					<Link href="/" passHref legacyBehavior>
						<HeaderMenuItem >Library</HeaderMenuItem>
					</Link>
					<Link href="/settings" passHref legacyBehavior>
						<HeaderMenuItem>Settings</HeaderMenuItem>
					</Link>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}
				>
					<SideNavItems>
						<HeaderSideNavItems>
							<Link href="/" passHref legacyBehavior>
								<HeaderMenuItem >Library</HeaderMenuItem>
							</Link>
							<Link href="/settings" passHref legacyBehavior>
								<HeaderMenuItem>Settings</HeaderMenuItem>
							</Link>
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
					<Link href="/settings" passHref legacyBehavior>
						<HeaderGlobalAction
							aria-label="Profile"
							className="action-icons"
						>
							<UserAvatar size={20} />
						</HeaderGlobalAction>
					</Link>
					<HeaderGlobalAction aria-label="More" tooltipAlignment="center">
						<Switcher size={20} />
					</HeaderGlobalAction>
				</HeaderGlobalBar>
			</Header >
		)}
	/>
);

export default TutorialHeader;
