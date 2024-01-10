import { isClientLogedIn } from 'Utils/user';
import ForAgents from './ForAgents';
import ForClients from './ForClients';

function SmartPriceList() {
  const isClient = isClientLogedIn();

  return isClient ? <ForClients /> : <ForAgents />;
}
export default SmartPriceList;
