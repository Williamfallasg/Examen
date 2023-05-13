import React from "react";


const Nosotros = () => {
   

    const[repo,setrepo]= React.useState ([])

    React.useEffect(() =>{
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () =>
    {
      const data = await fetch ('https://github.com/Williamfallasg?tab=repositories')
      const users = await data.json 
      setrepo(users)
    } 
    return(
        <div>
            <h1> Nosotros</h1>
            <ul>
                {setrepo.map(item =>(<li key={item.id}>
                    {item.name}
                </li>))

                }


            </ul>


        </div>
    )
}
export default Nosotros.jsx 