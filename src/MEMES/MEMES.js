import React from 'react'

const MEMES = () => {
    return(
        <>
        {/*  Place your meme below  */}



            <section>
                {/* Path to your meme below !Modify only the string! */}
                <img src={require('./images/PD/spaghetti_oriented_programming.png')}/>

                <div className="memes--details">
                    {/* Your name below */}
                    <p>Project Dock</p>

                    {/* Your github link below */}
                    <a
                        href="https://github.com/ProjectDock"

                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="memes--github" />
                    </a>

                </div>
            </section>
            <section>
                {/* Path to your meme below !Modify only the string! */}
                <img src={require('./images/pi-rate14/does-he-bite.png')}/>

                <div className="memes--details">
                    {/* Your name below */}
                    <p>Apoorva Srivastava</p>

                    {/* Your github link below */}
                    <a
                        href="https://github.com/pi-rate14"

                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="memes--github" />
                    </a>

                </div>
            </section>





        {/*  Place your meme above  */}
        </>
    )
}

export default MEMES