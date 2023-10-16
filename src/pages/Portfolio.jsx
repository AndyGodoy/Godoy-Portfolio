import Projects from "../components/Projects";

export default function Portfolio(){
    class Project {
        constructor(name, imgPath, github, live){
            this.name = name
            this.imgPath = imgPath
            this.github = github
            this.live = live
        }
    }
    
    const projects = [
        new Project('DTC SOLUTIONS', '/engineLight.jpg', 'https://github.com/jacob-kachmarek/dtc-solutions', 'https://jacob-kachmarek.github.io/dtc-solutions/'),
        new Project("BlueFin", '/BlueFin.jpg', 'https://github.com/kaylaasana/BlueFin', 'https://murmuring-thicket-14542-74d2838aa204.herokuapp.com/'),
        new Project("Weather App", "/weatherIos.webp", "https://github.com/AndyGodoy/WeatherApp_Project-", "https://andygodoy.github.io/WeatherApp_Project-/"),
        new Project("ReadMe Generator", "/readMe.jpg", "https://github.com/AndyGodoy/ReadMe-Generator", "https://github.com/AndyGodoy/ReadMe-Generator/blob/main/README.md"),
        new Project("Fun Work Scheduler", "/workSchedule.png", "https://github.com/AndyGodoy/Fun_Work_Schedule", "https://andygodoy.github.io/Fun_Work_Schedule/"),
        new Project("E-Commerce BackEnd", "/ecommerce.jpg", "https://github.com/AndyGodoy/E-commerce_BackEnd", "https://drive.google.com/file/d/1Y2HKJPu_d4VrItNzLosJyaWUdvzlkXfl/view?pli=1"),
    ]

    return(
        <div className='project-container'>
            <Projects projects={projects} />
        </div>
    )
}