import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
 return (
    <header>
        <table>
          <tbody>
            <tr>
              {props.navAction == 'actionStep1' ? <td className="active"><a>Step 1</a></td> : <td><a>Step 1</a></td>}
              {props.navAction == 'actionStep2' ? <td className="active"><a>Step 2</a></td> : <td><a>Step 2</a></td>}
              {props.navAction == 'actionStep3' ? <td className="active"><a>Step 3</a></td> : <td><a>Step 3</a></td>}
              {props.navAction == 'actionReview' ? <td className="active"><a>Review</a></td> : <td><a>Review</a></td>}
            </tr>
          </tbody>
        </table>
    </header>
  );
}

export default Header;