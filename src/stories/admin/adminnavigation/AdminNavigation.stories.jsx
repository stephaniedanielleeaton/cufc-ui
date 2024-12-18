import AdminNavigation from './AdminNavigation';

export default {
  title: 'Admin/AdminNavigation',
  component: AdminNavigation,
};

export const Default = {
  args: {
    activeTab: 'Members',
    onTabChange: (tab) => console.log(`Tab changed to: ${tab}`),
  },
};

export const AttendanceActive = {
  args: {
    activeTab: 'Attendance',
    onTabChange: (tab) => console.log(`Tab changed to: ${tab}`),
  },
};

export const EmailActive = {
  args: {
    activeTab: 'Email',
    onTabChange: (tab) => console.log(`Tab changed to: ${tab}`),
  },
};
