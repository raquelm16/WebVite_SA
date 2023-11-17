import '../../../../../../themes/Student/ClassSelection/FirstGrade/ScreenStudentFirstGrade1A.css';
import imagem from '../../../../../../assets/react.png'

export function ScreenStudentFirstGrade1A(){

    return(
        <>
        <div className="container">

        <div className="perfil">
            <button className="perfilBotao">
                <h3 className="nome">Perfil</h3>
            </button>
            </div>

            <h3 className="turno">Matutino</h3>

        <div className="card">
            <div className="align">
                <h3 className="sala">G12</h3>
            </div>
            <hr className="barra"/>
            <div>
                <h3 className="hor1">07:40</h3>
                <h3 className="hor2">10:10</h3>
            </div>
            <hr className="barra"/>

            <div>
            <h3 className="hor1">00:00</h3>
                <h3 className="hor2">00:00</h3>
            </div>
            <hr className="barra"/>

            <div className="align">
                <button className="botao">
                    Informações
                </button>
            </div>
        </div>


        <div className="card">
            <div className="align">
                <h3 className="sala">F25</h3>
            </div>
            <hr className="barra"/>
            <div>
            <h3 className="hor1">00:00</h3>
                <h3 className="hor2">00:00</h3>
            </div>
            <hr className="barra"/>
            <div>
                <h3 className="hor3">10:35</h3>
                <h3 className="hor4">13:00</h3>
            </div>
            <hr className="barra"/>

            <div className="align">
                <button className="botao">
                    Informações
                </button>
            </div>
        </div>



        <h3 className="turno">Vespertino</h3>


        <div className="card">
            <div className="align">
                <h3 className="sala">F12</h3>
            </div>
            <hr className="barra"/>
            <div>
            <h3 className="hor1">00:00</h3>
                <h3 className="hor2">00:00</h3>
            </div>
            <hr className="barra"/>
            <div>
                <h3 className="hor3">15:50</h3>
                <h3 className="hor4">17:20</h3>
            </div>
            <hr className="barra"/>

            <div className="align">
                <button className="botao">
                   Informações
                </button>
            </div>
        </div>


        <div className="card">
            <div className="align">
                <h3 className="sala">Auditório</h3>
            </div>
            <hr className="barra"/>
            <div>
                <h3 className="hor1">14:00</h3>
                <h3 className="hor2">15:30</h3>
            </div>
            <hr className="barra"/>

            <div>
            <h3 className="hor1">00:00</h3>
                <h3 className="hor2">00:00</h3>
            </div>
            <hr className="barra"/>

            <div className="align">
                <button className="botao">
                   Informações
                </button>
            </div>
        </div>


        <div className="card">
            <div className="align">
                <h3 className="sala">E12</h3>
            </div>
            <hr className="barra"/>
            <div>
            <h3 className="hor1">00:00</h3>
                <h3 className="hor2">00:00</h3>
            </div>
            <hr className="barra"/>
            <div>
                <h3 className="hor3">15:50</h3>
                <h3 className="hor4">17:20</h3>
            </div>
            <hr className="barra"/>

            <div className="align">
                <button className="botao">
                    Informações
                </button>
            </div>
        </div>


        </div>
        </>
    )

}


export default ScreenStudentFirstGrade1A;