import '../../../themes/Student/ClassSelection/ScreenStudentClassSelectionStyle.css';

export function ScreenStudentClassSelection(){

    return(
        <>
        <div className="container">
        
        <div className="firstGrade">
            <h3 className="gradeTitleOne">
                Primeiros anos
            </h3>
            
            <div className='firstRow'>
                <button className='botao'>
                    1A
                </button>
                <button className='botao'>
                    1B
                </button>
            </div>

            <div className='secondRow'>
                <button className='botao'>
                    1C
                </button>
                <button className='botao'>
                    1D
                </button>
            </div>
        </div>


        <div className="secondGrade">
            <h3 className="gradeTitleTwo">
                Segundos anos
            </h3>
            
            <div className='firstRow'>
                <button className='botao'>
                    2A
                </button>
                <button className='botao'>
                    2B
                </button>
            </div>

            <div className='secondRow'>
                <button className='botao'>
                    2C
                </button>
                <button className='botao'>
                    2D
                </button>
            </div>
        </div>
           

        <div className="thirdGrade">
            <h3 className="gradeTitleThree">
                Terceiros anos
            </h3>
            
            <div className='firstRow'>
                <button className='botao'>
                    3A
                </button>
                <button className='botao'>
                    3B
                </button>
            </div>

            <div className='secondRow'>
                <button className='botao'>
                    3C
                </button>
                <button className='botao'>
                    3D
                </button>
            </div>
        </div>
        
        </div>
        </>
    )

}

export default ScreenStudentClassSelection;