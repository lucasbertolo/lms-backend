import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
  canManageMainInfo: checkbox({
    defaultValue: false,
    label: 'User can Update and delete any main info',
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: 'User can query other users',
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: 'User can Edit other users',
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: 'User can CRUD roles',
  }),
  canReadProjects: checkbox({
    defaultValue: false,
    label: 'User can read project items',
  }),
  canManageProjects: checkbox({
    defaultValue: false,
    label: 'User can see and manage project items',
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields,
) as Permission[];
