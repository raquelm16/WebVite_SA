import '../../../themes/Adm/Profile/ScreenAdmProfile.css';
import user from '../../../assets/user.png';
import whitePencil from '../../../assets/whitePencil.png';
import greyPencil from '../../../assets/greyPencil.png';

export function ScreenAdmProfile(){
    return(
        <>
        <div className='container'>
        <div className='alignRow'>
            <div className='alignColumn'>
            <img src={user} className='user'/>
            <div className='bluePencilCircle'>
                <img src={whitePencil} className='bluePencil' />
            </div>
            </div>

            <div className='alignColumn'>
                <div className='alignName'>
                    <div>
                        <h3 className='textPrimary'>Nome:</h3>
                        <h3 className='textSecondary'>Fulano Beltrano da Silva</h3>
                    </div>
                    <img src={greyPencil} className='greyPencil' />
                </div>
                <h3 className='textPrimary'>Usuário:</h3>
                <h3 className='textSecondary'>Administração</h3>
                <h3 className='textPrimary'>E-mail:</h3>
                <h3 className='textSecondary'>fulano_beltrano@estudante.sesisenai.org.br</h3>
            </div>
            <div className='alignColumn'>
                <div className='alignButton'>
                    <button className='buttonLogout'>Logout</button>
                </div>
                <div className='alignButton'>
                    <button className='buttonDelete'>Excluir Conta</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ScreenAdmProfile;