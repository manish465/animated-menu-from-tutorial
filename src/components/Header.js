import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menueName: "Menu",
    });

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        history.listen(() => {
            setState({ clicked: false, menueName: "Menu" });
        });
    });

    const handelMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menueName: "Close",
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menueName: "Menu",
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menueName: "Close",
            });
        }
    };

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 600);
    };

    return (
        <header>
            <div className='container'>
                <div className='wrapper'>
                    <div className='inner-header'>
                        <div className='logo'>
                            <Link to='/'>HAMBRG.</Link>
                        </div>
                        <div className='menu'>
                            <button disabled={disabled} onClick={handelMenu}>
                                {state.menueName}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state} />
        </header>
    );
};

export default withRouter(Header);
