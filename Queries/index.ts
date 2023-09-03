import { UserRole } from 'Interfaces/Database';
import { Session } from 'next-auth';
import axios from 'axios';

export async function createUserOrGetExistData({
  session,
  userRole: chosenRole,
}: {
  session: Session | null;
  userRole: UserRole;
}) {
  const response = await axios.post('/api/auth/verification', {
    session,
    userRole: chosenRole,
  });
  return response;
}
