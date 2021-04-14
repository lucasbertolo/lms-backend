import { permissionsList } from './schemas/PermissionFields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatePermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function checkPermission({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ]),
);

export const permissions = { ...generatePermissions };

export const rules = {
  canManageProjects({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) return false;

    if (permissions.canManageProjects({ session })) {
      return true;
    }

    return { user: { id: session.itemId } };
  },

  canReadProjects({ session }: ListAccessArgs) {
    if (permissions.canManageProjects({ session })) {
      return true;
    }

    return { status: 'AVAILABLE' };
  },

  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) return false;

    if (permissions.canManagerUsers({ session })) {
      return true;
    }

    return { id: session.itemId };
  },
};
