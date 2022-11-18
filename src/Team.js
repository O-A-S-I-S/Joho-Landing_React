import { useState } from "react";
import "./Team.css";
import PhotoProfileIan from "./img/image 1.png"
import PhotoProfileLuis from "./img/image 2.png"
import PhotoProfileRoberto from "./img/image 3.png"
import PhotoProfileSam from "./img/image 4.png"
import PhotoProfileIam from "./img/image 5.png"

export function Team() {
  const [ian, setIan] = useState(false);
  const [luis, setLuis] = useState(false);
  const [iam, setIam] = useState(false);
  const [sam, setSamuel] = useState(false);
  const [roberto, setRoberto] = useState(false);

  const manageStates={
    ian:()=>setIan(!ian),
    luis:()=>setLuis(!luis),
    iam:()=>setIam(!iam),
    roberto:()=>setRoberto(!roberto),
    sam:()=>setSamuel(!sam),

  }
  function showOverlay(props){
   manageStates[props]();
  }
  return (
    <main>
      <div className="view_the_team">
        <div className="view_the_team-box">
          <div className="view_the_team-content">
            <div className="grid-container">
              <div className="grid-item item1">
                {ian ? (
                  <div className="member" onClick={() => showOverlay('ian')}>
                    <div id="overlay">
                      <div id="text">
                        <table>
                          <tr>
                            <th>
                              <img src={PhotoProfileIan} alt="Avatar" />
                            </th>
                            <th>
                              <div className="space-col-inv"></div>
                            </th>
                            <th>
                              <h1>Ian Steve González Vidalón</h1>
                              <p>
                                Estudiante de la carrera de ciencias de la
                                computación en la UPC.
                              </p>
                              <ul>
                                <p>Intereses:</p>
                                <li>Ciberseguridad</li>
                                <li>Inteligencia artificial</li>
                                <li>Programación competitiva</li>
                              </ul>
                            </th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className="view_the_team-space-click"
                  onClick={() => showOverlay('ian')}
                >
                  <div className="member-content">
                    <img src={PhotoProfileIan} alt="Avatar" />
                    <h4>
                      <b>
                        IAN<br></br>GONZÁLEZ
                      </b>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid-item item2">
                {luis ? (<div className="member" onClick={() => showOverlay('luis')}>
                  <div id="overlay">
                    <div id="text">
                      <div className="grid-cotainer">
                        <table>
                          <tr>
                            <th>
                              <img src={PhotoProfileLuis} alt="Avatar" />
                            </th>
                            <th>
                              <div className="space-col-inv"></div>
                            </th>
                            <th>
                              <h1>Luis Roberto Arroyo Bonifaz</h1>
                              <p>
                                Estudiante de la carrera de ciencias de la
                                computación en la UPC.
                              </p>
                              <ul>
                                <p>Intereses:</p>
                                <li>Web Design</li>
                                <li>Programación Competitiva</li>
                                <li>Inteligencia Artificial</li>
                              </ul>
                            </th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>):(
                  ""
                )}
                <div className="view_the_team-space-click" onClick={() => showOverlay('luis')}>
                  <div className="member-content">
                    <img src={PhotoProfileLuis} alt="Avatar" />
                    <h4>
                      <b>
                        LUIS<br></br>ARROYO
                      </b>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid-item item3">
                {roberto ? (<div className="member">
                  <div id="overlay" onClick={() => showOverlay('roberto')}>
                    <div id="text">
                      <div className="grid-cotainer">
                        <table>
                          <tr>
                            <th>
                              <img src={PhotoProfileRoberto} alt="Avatar" />
                            </th>
                            <th>
                              <div className="space-col-inv"></div>
                            </th>
                            <th>
                              <h1>Roberto Carlos Basauri Quispe</h1>
                              <p>
                                Estudiante de la carrera de ciencias de la
                                computación en la UPC.
                              </p>
                              <ul>
                                <p>Intereses:</p>
                                <li>Programación de videojuegos</li>
                                <li>Data Analytics</li>
                                <li>Machine Learning</li>
                              </ul>
                            </th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>):(
                  ""
                )}
                <div className="view_the_team-space-click" onClick={() => showOverlay('roberto')}>
                  <div className="member-content">
                    <img src={PhotoProfileRoberto} alt="Avatar" />
                    <h4>
                      <b>
                        ROBERTO<br></br>BASAURI
                      </b>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid-item item4">
                {iam ? (<div className="member">
                  <div id="overlay" onClick={() => showOverlay('iam')}>
                    <div id="text">
                      <div className="grid-cotainer">
                        <table>
                          <tr>
                            <th>
                              <img src={PhotoProfileIam} alt="Avatar" />
                            </th>
                            <th>
                              <div className="space-col-inv"></div>
                            </th>
                            <th>
                              <h1>Iam Anthony Marcelo Alvarez Orellana</h1>
                              <p>
                                Estudiante de la carrera de ciencias de la
                                computación en la UPC.
                              </p>
                              <ul>
                                <p>Intereses:</p>
                                <li>Baloncesto</li>
                                <li>Desportes de contacto</li>
                                <li>Programar</li>
                              </ul>
                            </th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>):(
                  ""
                )}
                <div className="view_the_team-space-click" onClick={() => showOverlay('iam')}>
                  <div className="member-content">
                    <img src={PhotoProfileIam} alt="Avatar" />
                    <h4>
                      <b>
                        IAM<br></br>ALVAREZ
                      </b>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid-item item5">
                {sam ? (<div className="member">
                  <div id="overlay" onClick={() => showOverlay('sam')}>
                    <div id="text">
                      <div className="grid-cotainer">
                        <table>
                          <tr>
                            <th>
                              <img src={PhotoProfileSam} alt="Avatar" />
                            </th>
                            <th>
                              <div className="space-col-inv"></div>
                            </th>
                            <th>
                              <h1>Samuel Esteban Cano Chocce</h1>
                              <p>
                                Estudiante de la carrera de ciencias de la
                                computación en la UPC.
                              </p>
                              <ul>
                                <p>Intereses:</p>
                                <li>Ajedrez</li>
                                <li>Baloncesto</li>
                                <li>Programación competitiva</li>
                              </ul>
                            </th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>) : (
                  ""
                )}
                <div
                  className="view_the_team-space-click"
                  onClick={() => showOverlay('sam')}
                >
                  <div className="member-content">
                    <img src={PhotoProfileSam} alt="Avatar" />
                    <h4>
                      <b>
                        SAMUEL<br></br>CANO
                      </b>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
