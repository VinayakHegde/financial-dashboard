export type ItemType = {
  title: string;
  icon: string;
  href: string;
  enabled?: boolean;
};

export const items: ItemType[] = [
  {
    title: 'dashboard',
    icon: 'home',
    href: '/',
    enabled: true,
  },
  {
    title: 'trasactions',
    icon: 'transaction',
    href: '/transactions',
  },
  {
    title: 'accounts',
    icon: 'user',
    href: '/accounts',
  },
  {
    title: 'investments',
    icon: 'investment',
    href: '/investments',
  },
  {
    title: 'credit cards',
    icon: 'credit-card',
    href: '/credit-cards',
  },
  {
    title: 'loans',
    icon: 'loan',
    href: '/loans',
  },
  {
    title: 'services',
    icon: 'service',
    href: '/services',
  },
  {
    title: 'my privileges',
    icon: 'privileges',
    href: '/my-privileges',
  },
  {
    title: 'setting',
    icon: 'settings',
    href: '/setting',
    enabled: true,
  },
];
