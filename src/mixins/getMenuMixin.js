export default {
    data: () => ({
        menus: [
            {
                id: 1,
                path: '/managers',
                path_name: 'routes.MANAGERS',
                icon: require('@/assets/icons/admin.png')
            },
            {
                id: 2,
                path: '/catalogs',
                path_name: 'routes.CATALOGS',
                icon: require('@/assets/icons/catalog.png')
            },
            {
                id: 3,
                path: '/you-lead',
                path_name: 'routes.YOU_LEAD',
                icon: require('@/assets/icons/lead.png')
            },
            {
                id: 4,
                path: '/users',
                path_name: 'routes.USERS',
                icon: require('@/assets/icons/users.png')
            },
            {
                id: 5,
                path: '/my-company',
                path_name: 'routes.MY_COMPANY',
                icon: require('@/assets/icons/company.png')
            },
            {
                id: 6,
                path: '/courses',
                path_name: 'routes.COURSES',
                icon: require('@/assets/icons/courses.png')
            },
            {
                id: 7,
                path: '/you-rewards',
                path_name: 'routes.YOU_REWARD',
                icon: require('@/assets/icons/reward.png')
            },
            {
                id: 8,
                path: '/events',
                path_name: 'routes.EVENTS',
                icon: require('@/assets/icons/events.png')
            },
            {
                id: 9,
                path: '/notifications',
                path_name: 'routes.NOTIFICATIONS',
                icon: require('@/assets/icons/notify.png')
            },
            {
                id: 10,
                path: '/reports',
                path_name: 'routes.REPORTS',
                icon: require('@/assets/icons/reports.png')
            },
        ]
    })
}