const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Part1 = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p>
    </div>
  )

}

const Part2 = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.part2} {props.exercises2}</p>
    </div>
  )

}

const Part3 = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )

}



const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part1 part1 = {props.part} exercises1 = {props.exercises1}/>
      <Part2 part2 = {props.part2} exercises2 = {props.exercises2}/>
      <Part3 part3 = {props.part3} exercises3 = {props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
    {name:'Fundamentals of React',
    exercises: 10
    },
    {name:'Using props to pass data',
    exercises: 7
    },
    {name:'State of a component',
    exercises: 14
    }
  ]
}
 
  return (
    <div>
      <Header  course = {course.name}/>
      <Content part = {course.parts[0].name} exercises1 = {course.parts[0].exercises} part2 = {course.parts[1].name} exercises2 = {course.parts[1].exercises} part3 = {course.parts[2].name} exercises3 = {course.parts[2].exercises}/>
      <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}/>
    </div>
  )

}


export default App
