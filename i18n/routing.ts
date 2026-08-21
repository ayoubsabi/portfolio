import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // Only add prefix if it's not the default locale
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
