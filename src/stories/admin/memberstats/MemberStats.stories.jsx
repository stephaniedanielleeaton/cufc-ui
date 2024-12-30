import AdminStats from './AdminStats';

export default {
  title: 'Admin/AdminStats',
  component: AdminStats,
};

const mockStats = {
  total: 150,
  active: 120,
  coaches: 8,
  checkedIn: 45,
  recentlyCheckedIn: 85,
};

export const Default = {
  args: {
    stats: mockStats,
  },
};
