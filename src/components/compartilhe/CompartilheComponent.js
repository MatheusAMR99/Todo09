
import './CompartilheComponent.css'

const CompartilheComponent = () => {
    return (
        <div>

            <div className="selecao">
                <div className="style"><hr /></div>
                <div ><h3 id="p">Compartilhe a novidade</h3></div>
                <div className="style"> <hr /></div>
            </div>
            <div id = "text">
                <h4> Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h4>
            </div>
            <form className ="forms-conteiner" >
                <div className="forms-info">
                <div className="forms-input">
                    <label className="section-forms-text">Nome do seu amigo:</label>
                    <br />
                    <input type="text" name="name" className="forms-submit" />
                </div>
                <div className="forms-input">
                    <label className="section-forms-text">E-mail:</label>
                    <br />
                    <input type="email" name="name" className="forms-submit" />
                </div>
                </div>
                <div id="enviar-form">
                    <button  id="enviar-form-button" type ="submit" > Enviar agora</button>
                </div>
            </form>
        </div>
    )
}

export default CompartilheComponent