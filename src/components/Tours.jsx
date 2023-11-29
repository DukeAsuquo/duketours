import Tour from "./Tour.jsx"
const Tours = ({tours, removeTour}) => {
  
  return (<section>
    <div className="title"><h1>Duke Tours</h1></div>
    <div className="title-underline"></div>
    <div className="tours">
      {tours.map((tour)=>{
        return <Tour  key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </div>
  </section>
    
  )
}

export default Tours