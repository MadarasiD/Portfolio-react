import React from 'react'
import {motion} from 'framer-motion'
import '../styles/Skills.css'
import {GrCompliance} from 'react-icons/gr'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Skills = () => {
  return (
    <motion.div  className='bg-color' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
    >
        <div className="card-base">   

          

               <h4>Skills learned</h4>

        <div className="container">

        <div className="row justify-content-center">

              <section className="col-lg-6">
               <Card className="card" border="primary" style={{ width: '18rem' }}>
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                    <ProgressBar now={60} />
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                </section>
                <section className="col-lg-6">
               <Card className="card" border="primary" style={{ width: '18rem' }}>
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                    <ProgressBar now={60} />
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                </section>
                <Card className="card" border="primary" >
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                        
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card" border="primary" >
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                        
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card" border="primary" >
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                        
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card" border="primary" >
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                        
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card" border="primary" >
                    <Card.Header className="cardheader"><GrCompliance /></Card.Header>
                    <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text className='cardtext'>
                    HyperText Markup Language
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                  </div>
                </div>    
                                                    
        </div>
    </motion.div>
  )
}

export default Skills