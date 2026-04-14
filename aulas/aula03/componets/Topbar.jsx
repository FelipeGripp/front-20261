import user from '../assets/avatar.svg';

function Topbar(props) {
    return (
        <header>
        <h1>{props.titulo}</h1>
        <img src={user} alt="imagem avatar" />
      </header>
    );
}

export default Topbar;