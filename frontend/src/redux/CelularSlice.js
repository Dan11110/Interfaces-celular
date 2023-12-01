const initialCelulares = [
    {id:1, Marca: 'Samsung', Modelo: 'A10', Data:'10/10/2010' },
    {id:2, Marca: 'Iphone', Modelo: 'XS MAX', Data:'12/12/2012'}
]

export default function celularesReducer( celulares = initialCelulares, action ){
    switch(action.type){
        case 'add_celular':
            let proxId = 1 + celulares.map(c => c.id).reduce((x,y)=> Math.max(x,y));
            return celulares.concat([{...action.payload, id:proxId}]);
        case 'update_celular':
            let index = celulares.map(c => c.id).indexOf(action.payload.id);
            let celularesUpdated = celulares.slice();
            celularesUpdated.splice(index, 1, action.payload);
            return celularesUpdated;
        case 'delete_celular':
            return celulares.filter((c)=> c.id !== action.payload);
        default:
            return celulares;  
    }
}