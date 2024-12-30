import MemberStats from './MemberStats';

export default {
  title: 'Admin/MemberStats',
  component: MemberStats,
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
