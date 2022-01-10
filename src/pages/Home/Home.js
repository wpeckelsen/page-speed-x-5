import React from 'react';
import "./Home.scss"
import Button from "../../components/Button/Button";

function Home() {
    return (
        <div>
            <header>
                <h1 className="title">
                    Page Speed x 5
                </h1>

                <Button
                content="Run test"
                />
            </header>

            <div className="blog-section">

            </div>


        </div>
    );
}

export default Home;