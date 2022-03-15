import React from 'react'
import TableRow from './TableRow'

const Table = () => {

    let data = [
        {
            title : "Billy Elliot",
            length : 123,
            rating : 5,
            genres : ["Drama","Comedia"],
            awards : 2
        },
        {
            title : "Alicia en el país de las maravillas",
            length : 142,
            rating : 4.8,
            genres : ["Drama","Acción","Comedia"],
            awards : 3
        },
    ]
return (
    <div className='container'>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Duracion</th>
                <th scope="col">Rating</th>
                <th scope="col">Genero</th>
                <th scope="col">Premios</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, i) => (
                    <TableRow
                    key={item.title + i}
                    {...item}
                    />
                ))
            }
            
        </tbody>
        </table>

    </div>
    
  )
}

export default Table
