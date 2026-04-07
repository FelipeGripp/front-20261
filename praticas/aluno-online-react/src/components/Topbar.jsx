import './Topbar.css'

function Topbar({titulo}) {
 return (
    <div>
        <header>
      <h1>{titulo}</h1>

      <img src="../src/assets/avatar.svg" width="64" />
      
      </header>
    </div>
)};

export default Topbar;