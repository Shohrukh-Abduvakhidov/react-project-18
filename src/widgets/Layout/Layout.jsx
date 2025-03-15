import {
	Home,
	Search,
	Compass,
	Clapperboard,
	MessageCircle,
	Heart,
	PlusSquare,
	User,
	MoreHorizontal,
} from 'lucide-react'
import { NavLink, Outlet } from 'react-router'

const routes = {
	Home: '/',
	Search: 'search',
	Explore: 'explore',
	Reels: 'reels',
	Messages: 'direct',
	Notifications: 'notifications',
	Create: 'create',
	Profile: 'profile',
	More: 'more',
}

const Layout = () => {
	return (
		<div className='flex gap-[10px]'>
			<aside className='w-64 border border-white h-[110vh] rounded-r-2xl border-l-transparent bg-black text-white p-4 flex flex-col'>
				<h1 className='text-2xl font-bold mb-6'>Instagram</h1>
				<nav className='space-y-4'>
					<SidebarItem icon={<Home />} text='Home' />
					<SidebarItem icon={<Search />} text='Search' />
					<SidebarItem icon={<Compass />} text='Explore' />
					<SidebarItem icon={<Clapperboard />} text='Reels' />
					<SidebarItem icon={<MessageCircle />} text='Messages' />
					<SidebarItem icon={<Heart />} text='Notifications' />
					<SidebarItem icon={<PlusSquare />} text='Create' />
					<SidebarItem
						icon={<User />}
						text='Profile'
					/>
					<SidebarItem icon={<MoreHorizontal />} text='More' />
				</nav>
			</aside>
			<Outlet />
		</div>
	)
}

const SidebarItem = ({ icon, text, badge, hasDot, avatar }) => {
	return (
		<NavLink
			to={routes[text] || '#'}
			className={({ isActive }) =>
				`flex items-center space-x-3 p-2 rounded-lg cursor-pointer relative ${
					isActive ? 'bg-gray-700' : 'hover:bg-gray-800'
				}`
			}
		>
			{avatar ? (
				<img src={avatar} alt='Profile' className='w-6 h-6 rounded-full' />
			) : (
				<span className='w-6 h-6 flex items-center justify-center'>{icon}</span>
			)}
			<span className='text-lg'>{text}</span>
			{badge && (
				<span className='absolute right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
					{badge}
				</span>
			)}
			{hasDot && (
				<span className='absolute right-2 w-2 h-2 bg-red-500 rounded-full' />
			)}
		</NavLink>
	)
}

export default Layout
