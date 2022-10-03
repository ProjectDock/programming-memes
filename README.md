![alt text](src/hacktoberfest_logo.png)
# Programming memes
We are celebrating Hacktoberfest 2021 with the project where everyone can share a their favourite programming and IT memes.

## Rules
- Only IT or programming related memes will be accepted

## App
It is a basic React application that listing HTML sections. Do not worry if you are not familiar with React, you only need to modify a `<section>` which detailed below.

## Contributing

1. Fork this repo to your Github account

2. Clone your fork to your computer

3. Set remote stream with the original repo to keep updated

   - `git remote add upstream https://github.com/ProjectDock/programming-memes.git`
   - `git pull upstream main`

4. Create a branch with your Github username

5. Run `yarn install` in your local repo

6. Create a folder with your Github username in `src/MEMES/images/` directory

7. Copy your meme into `src/MEMES/images/<your_name>` folder

8. Go to the `MEMES` folder and open `MEMES.js`

9. Copy the last `<section>` paste it after it and modify with the path of your meme, name and Github account link:

    ```jsx
    <section>
        {/* Path to your meme below !Modify only the string! */}
        <img src={require('./images/YOUR_NAME/YOUR_MEME.jpg')}/>

        <div className="memes--details">
            {/* Your name below */}
            <p>YOUR_NAME</p>

            {/* Your github link below */}
            <a
                href="YOUR_GITHUB_ACCOUNT"

                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="memes--github" />
            </a>

        </div>
    </section>
    ```
10. Run `yarn start` to see your changes at `localhost:3000` in your browser

11. Commit and push the code to your fork

12. Create a pull request to the original repo


> Congratulations! You are now one step closer to getting the Hacktoberfest 2020 swags. You can check your progress at <https://hacktoberfest.digitalocean.com/profile> .

Make sure you own the rights of the uploaded meme
