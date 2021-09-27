const app = new Vue({
    el:'#app',
    data: {
        usuarios:[
            {
                nombre:'Jose',
                apellido: 'Perez',
                rut: 123456-2,
                nacimiento: '12-04-67',
                edad: 52
            },
            {
                nombre:'Maria Rodriguez',
                apellido: 'Rodriguez',
                rut: 654321-1,
                nacimiento: '30-01-90',
                edad: 29
            },
            {
                nombre:'Manuel',
                apellido: 'Patiño',
                rut: 654321-177,
                nacimiento: '300-01-90',
                edad: 298
            }
        ]
    }
})