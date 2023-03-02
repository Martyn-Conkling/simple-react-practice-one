import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

//React 18 syntax
ReactDOM.createRoot(document.getElementById("root")).render(navbar);

// React 17 syntax
//ReactDOM.render(navbar, document.getElementById("root"))
