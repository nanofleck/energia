import React from 'react';

class Selector extends React.Component{
    //alert(Object.entries(props.lista[0]));
    
    render(){
        return(
            <div className="btn-group col-12 col-md-6">
                <button class="btn btn-dark dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                    Seleccione electrodomésticos
                </button>
                <ul className="dropdown-menu w-100">
                    {this.props.lista.map(l => {
                        //alert(Object.entries(l[0]));
                        //alert(l.nombre);
                        if (l.id!==null) {
                            return(
                                <li className="w-100 dropdown-item text-wrap w-100" onClick={() => this.props.selectd(l.id)} href="#">{l.nombre}</li>
                                //<Opcion nombre={l.nombre}/>
                            )
                        }else{
                            return(<></>);
                        };
                    })}
                </ul>
            </div>
        );
    }
}

export default Selector;