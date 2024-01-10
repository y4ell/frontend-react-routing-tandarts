import React from 'react';
import Header from '../../components/header/Header';
import gaatjes from '../../assets/dentist.svg';
import './Cavities.css';
import { useNavigate } from "react-router-dom";


// import { useNavigate } from "react-router-dom";
//
// function Login() {
//     const navigate = useNavigate(); // We roepen de hook eenmalig aan;
//
//     function onFormSubmit(e) {
//         e.preventDefault();
//         navigate("/profile"); // <--- We kunnen navigate-methode oneindig vaak gebruiken!
//     }
//
//     return (
//         {/* formulier... */ }
//     );
// }
function Cavities() {

        const navigate = useNavigate();

        function onButtonClick() {
            console.log("We gaan direct door naar de afspraken pagina!")
            navigate("/afspraken")
        }


        return (
    <main className="page-container">
      <Header icon={gaatjes} title="Gaatjes" />
      <p>
        Consectetur adipisicing elit. Consequuntur doloremque esse fuga illum, impedit necessitatibus non officiis sapiente tempora velit.
        Amet consequuntur deleniti distinctio ea eveniet id, labore magni neque obcaecati praesentium quibusdam quidem, quod, repellat sequi ut.
        Blanditiis, reiciendis.
      </p>

      <button type="button" onClick={onButtonClick} className="appointment-button">
        Maak direct uw afspraak!
      </button>

      <p className="content-container-col3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis cumque exercitationem minus optio, perferendis quos sunt.
        Accusamus ad aliquid autem consequatur, eos ex excepturi illum impedit maiores molestias nam quod rem, voluptatibus. Mollitia, quidem voluptas?
        Consectetur dolorem dolorum exercitationem iure magni molestias quaerat quas reprehenderit sit voluptates? Adipisci eius eveniet quas ullam!
        Atque autem deserunt esse et fuga laudantium nostrum omnis repudiandae voluptates voluptatibus. At, corporis cupiditate dolor eligendi eos
        exercitationem harum impedit maxime molestias neque perferendis praesentium, provident reprehenderit sapiente sequi voluptates voluptatum?
        Debitis odio perferendis repellendus ullam vel? At beatae dolore dolorem nihil sed. Blanditiis consequatur consequuntur distinctio eum harum hic,
        illo inventore mollitia nostrum quos repellendus sint vel voluptate. A ad animi doloremque doloribus ea enim et ipsam iure laboriosam libero natus,
        neque nihil pariatur possimus quam quas quibusdam quidem quis quisquam tempore ut veritatis vitae. At autem blanditiis cum, dignissimos dolore
        facere illo quis ullam vero. Cum deleniti dolorum earum et, explicabo facilis hic illo minima nisi obcaecati odio omnis porro rerum vel velit.
        Autem cum delectus deserunt exercitationem, fugiat illum iste iusto natus nobis nostrum perferendis provident qui quos recusandae sapiente tempora
        tempore unde, voluptas. Ab, deserunt est fugiat fugit ipsam saepe sint ullam?
      </p>
    </main>
  );
}

export default Cavities;