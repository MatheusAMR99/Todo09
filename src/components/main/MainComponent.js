import './MainComponent.css'
const MainComponent = () => {
    return (
        <div>
            <main className="info-main">
                <div className="sections-conteiner">
                    <section className="section-text">
                        <h3>Ajude o algoritimo a ser mais certeiro</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta <br />
                            convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper <br />
                            pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat <br />
                            ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti <br />
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna <br />
                            tortor. Vivamus et arcu non felis tristique eleifend. <br />
                            <br />
                            <br />
                            Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. <br />
                            Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula <br />
                            pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat <br />
                            vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante <br />
                            suscipit libero, at mattis augue est vel metus.</p>
                    </section>
                    <section section-forms>
                        <form>
                            <div className="section-forms-input">
                                <label className="section-forms-text">Nome:</label>
                                <br />
                                <input type="text" name="name" className="section-forms-submit" />
                            </div>

                            <div className="section-forms-input">
                                <label className="section-forms-text">E-mail</label>
                                <br />
                                <input type="email" name="email" className="section-forms-submit" />
                            </div>
                            <div className="section-forms-input">
                                <label className="section-forms-text">CPF:</label>
                                <br />
                                <input type="text" name="CPF " className="section-forms-submit" />
                            </div >
                            <div className="input-genero-conteiner">

                                <input id="M" name="genero" type="radio" value='M'></input>
                                <label className="Label-genero" for="gênero">Masculino</label>

                                <input id="F" name="genero" type="radio" value='F'></input>
                                <label className="Label-genero" for="gênero">Feminino</label>
                            </div>
                        </form>
                    </section>
                </div>
               
            </main>
            </div>
    )
}

export default MainComponent

