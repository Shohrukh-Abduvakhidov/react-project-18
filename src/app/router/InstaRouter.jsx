import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@layout/Layout'

const CreatePage = lazy(() => import('@pages/create/Create'))
const DirectPage = lazy(() => import('@pages/direct/Direct'))
const PostsPage = lazy(() => import('@pages/posts/Posts'))
const HomePage = lazy(() => import('@pages/home/Home'))
const NotificationsPage = lazy(() =>
	import('@pages/notifications/Notifications')
)
const ProfilePage = lazy(() => import('@pages/profile/Profile'))
const SettingsPage = lazy(() => import('@pages/settings/Settings'))
const Reels = lazy(() => import('@pages/reels/Reels'))
const More = lazy(() => import('@pages/more/More'))

const Loading = () => (
	<div className='flex text-[70px] justify-center items-center h-screen text-2xl font-bold'>
		Loading...
	</div>
)

const InstaRouter = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='posts' element={<PostsPage />} />
						<Route path='create' element={<CreatePage />} />
						<Route path='notifications' element={<NotificationsPage />} />
						<Route path='reels' element={<Reels />} />
						<Route path='settings' element={<SettingsPage />} />
						<Route path='direct' element={<DirectPage />} />
						<Route path='profile' element={<ProfilePage />} />
						<Route path='more' element={<More />} />
					</Route>

					<Route path='auth/login' element={<div>Login</div>} />
					<Route path='auth/register' element={<div>Register</div>} />

					<Route
						path='*'
						element={
							<div className='text-red-600 mt-[200px] ml-[100px] text-[70px] font-bold text-4xl text-center'>
								NOT FOUND
							</div>
						}
					/>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default InstaRouter
