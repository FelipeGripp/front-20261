import './Topbar.css'
import useAuth from '../contexts/useAuth';

function Topbar({titulo}) {
 const { usuario } = useAuth();

 return (
    <div>
        <header className="topbar">
      <h1>{titulo || 'Dashboard'}</h1>

      <div className="topbar-user">
        <span>{usuario?.nome || usuario?.email}</span>
        <img src="../src/assets/avatar.svg" width="64" alt="Avatar do usuario" />
      </div>
      
      </header>
    </div>
)};

export default Topbar;
