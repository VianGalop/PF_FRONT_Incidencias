import { Dashboard } from '../components/Dashboard';
import { Bienvenido } from '../components/Bienvenido';
import { DashboardAdmin } from '../components/DashboardAdmin';


const InicioAdmin = () => {
    return (
      <>
        <DashboardAdmin >
          <Bienvenido/>
        </DashboardAdmin>        
      </>
    );
  };
  
  export default InicioAdmin;