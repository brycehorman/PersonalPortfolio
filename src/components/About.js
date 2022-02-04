import '../style/About.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import headshot from '../images/Headshot2.jpg';
import croatia from '../images/Croatia.JPG';
import maine from '../images/Maine.JPG';
import graduation from '../images/graduation.jpg';





const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
  }));

export default function About(){
    return(
        <div className='min-h-screen bg-blue-100 p-12'>
            <Box class="box" sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                            <img class="image" src={headshot}></img>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <div className='aboutTitle'>
                                SUMMARY
                            </div>
                            <div class="summary"> 
                            <b>Bryce</b> is a Software Engineer currently working at CapTech Consulting in Richmond, Virginia, doing mostly front-end 
                            web development. He graduated from the University of Richmond in May of 2021 with a B.S.B.A in Business Administration 
                            and Computer Science and concentrations in Finance and Business Analytics. Bryce is ambitious and career oriented and has
                            been working hard since joining CapTech to develop his skillset and professional network.

                            <br></br>
                            <br></br>

                            <b>In</b> his personal life, Bryce likes to stay active by running, hiking and playing basketball.
                            He is a fan of the New York Yankees, Brooklyn Nets, and New York Giants and enjoys watching and going to all
                            of their games when he gets the chance. He grew up in Basking Ridge, New Jersey, but currently lives in 
                            Richmond, Virginia.
                            <br></br>
                            <br></br>

                            <b>Bryce</b> also loves to learn and does so by
                            reading books and experimenting with new technologies. He is hoping to chronicle
                            the personal projects that come out of this learning under the <a href="">blog</a> section of this site. 
                            </div>
                        </Item>
                    </Grid>

                    
                    <Grid item xs={6}>
                        <Item>
                            <div className='aboutTitle'>
                                SKILLS
                            </div>
                            <div class="summary paragraph"> 
                                <ul class="list">
                                    <li>
                                        Web Development
                                        <ul class="nested">
                                            <li>
                                                ReactJS
                                            </li>
                                            <li>
                                                Salesforce Lightning Web Components
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Amazon Web Services
                                        <ul class="nested">
                                            <li>
                                                AWS Certfified Developer Associate Certificate
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Programming Languages
                                        <ul class="nested">
                                            <li>
                                                Java
                                            </li>
                                            <li>
                                                C++
                                            </li>
                                            <li>
                                                Python
                                            </li>
                                            <li>
                                                Javascript, HTML, CSS
                                            </li>
                                            <li>
                                                SQL
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Soft Skills
                                        <ul class="nested">
                                            <li>
                                                Agile development 
                                            </li>
                                            <li>
                                                Jira 
                                            </li>
                                            <li>
                                                Git version control 
                                            </li>
                                            <li>
                                                Written and Verbal Communication 
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                            <div className='imageCaption'>
                                <img class="image" src={croatia}></img>
                                <h2>Bryce (left) and friends in Dubrovnik, Croatia (Fall 2019)</h2>
                            </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className='imageCaption'>
                            <img class="image" src={maine}></img>
                            <h2>Bryce (left) and his family in Bar Harbor, Maine (Summer 2021)</h2>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <div className='aboutTitle'>
                                EXPERIENCE
                            </div>
                            <div class="summary"> 
                            CapTech Consulting (August 2021 - Present)
                            <br></br>
                            <i>Software Engineer</i>
                                <ul class="list2">
                                    <li>
                                        Works as a front-end engineer on a project at a top 5 global hotel brand
                                    </li>
                                    <li>
                                        Helps to create and maintain web pages through the use of Salesforce Lightning Web Components, Apex code, and the SLDS library 
                                    </li>
                                    <li>
                                        Works with Salesforce admins to connect backend data systems with the front end user experience    
                                    </li>
                                </ul>
                            </div>
                        </Item>
                    </Grid>

                    
                    <Grid item xs={6}>
                        <Item>
                            <div className='aboutTitle'>
                                EDUCATION
                            </div>
                            <div class="summary"> 
                            University of Richmond '21
                            <br></br>
                            B.S.B.A in Business Administration and Computer Science
                            <br></br>
                            Concentrations in Business Analytics and Finance
                            <br></br>
                            GPA: 3.71
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                            <div className='imageCaption'>
                                <img class="image" src={graduation}></img>
                                <h2>Bryce (middle) and his family at his graduation from the University of Richmond (May 2021)</h2>
                            </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}