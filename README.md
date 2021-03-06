<p align="center">
  <img width="600px" src="https://github.com/shubhamjha25/Clarify/blob/main/src/components/img/Clarify.png" alt="CLARIFY-LOGO" />
  <h1 align="center">CLARIFY - A Place To Clear All Your Doubts Hassle Free!</h3>
</p>

<br />

## Overview
- The Internet is a huge resource of knowledge and information where we can find virtually anything. But, very often there are situations where we aren’t able to find the answers to our questions.  Our question may require local knowledge or particular expertise.
- So, to overcome this issue, We have developed a simple web app known as **“Clarify”**. It is somewhat similar to _Quora_, _Stack Overflow_, _Askville_ etc.
- Clarify is a web application that solves this problem smoothly. Users can post their questions and other users will be able to answer the question accordingly. 

<br />

## TECHNOLOGY STACK
<img align="left" alt="REACT" width="45x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Redux" width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
<img align="left" alt="MATERIAL-UI" width="45px" src="https://camo.githubusercontent.com/58423e406b227112756822122631d9eca5ab83334a6f0d8f2a6305b086815747/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667" />
<img align="left" alt="CSS3" width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="FIREBASE" width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
<img align="left" alt="Figma" width="45px" src="https://4.bp.blogspot.com/-LiJZ5I8E7K8/XIe_GeI5glI/AAAAAAAAIuw/4Awu8j8r0P8TKBXzyxyslHEfplOlK9-6QCK4BGAYYCw/s1600/icon%2Bfigma%2Bvector.png" />
<img align="left" alt="Heroku" width="45px" src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png" />

<br /> <br /> <br />

## PROJECT SETUP
**1.** Fork [this](https://github.com/shubhamjha25/Clarify) repository. 🍴 <br />

**2.** Clone the forked repository on your local machine by writing the following command on your terminal: 👨🏻‍💻 <br />
```
git clone https://github.com/<your_user_name>/Clarify.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd Clarify
```

**4.** Go to [Firebase](https://firebase.google.com) Console and Create a New Project

**5.** Enable _User Authentication_ and _Firestore Database_.

**6.** Put Your Firebase API Access Keys inside ./src/firebase.js
```
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

**7.** Install the necessary _node_modules_
```
npm install
```

**8.** Run the `localhost` server
```
npm start
```

After this complete setup, you will find that your react sever is up and running on the port **3000** which can be accessed through [http://localhost:3000/](http://localhost:3000/) <br />
You are good to go! 👍

<br /> 

## SCOPE OF IMPROVEMENT
As this is an initial work while starting of a project, there are plenty of new features which are currently not present. Some of them which we are working on are listed below :
- [ ] Image Upload
- [ ] User Profiles
- [ ] Category-wise Question Set
- [ ] Upvote / Downvote Answer
- [ ] Multi - Language Support

<br /> <br />

## CONTRIBUTION GUIDELINES
If you want to add a new feature, fix any typo feel free to do so. All sorts of contributions are welcomed. Please follow the following steps as it really helps tp manage the repository.

**1.**  Fork [this](https://github.com/shubhamjha25/Clarify) repository.

**2.**  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/Clarify.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd Clarify
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/shubhamjha25/Clarify.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your main branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant Message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.


**15** Voila :exclamation: You have made a PR to the **Clarify** :boom: . It is up and ready to be merged.

<br />

## SUPPORTING
A Simple Star ⭐ to this project repo is enough to keep me motivated for days.

<br />

## LICENSE
This project is under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT License</a>. Copyright (c) 2020 Shubham Jha
