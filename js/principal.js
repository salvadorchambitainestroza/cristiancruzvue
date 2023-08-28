var app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        promedio: '',
        lista:[],
    },
    methods:{
        agregarNota: function () {
            if (this.name!="" && this.promedio!="") {
                this.lista.push({nombre: this.nombre, promedio: this.promedio, nota: this.nota()})
                this.nombre = '';
                this.promedio = '';
            } else {
                alert('Nombre y promedio son obligatorios');
            }
        },
        nota: function() {
            if (this.promedio >= 7) {
                return 'Felicidade has Aprobado';
            } else {
                return 'Lo siento estas Reprobado';
            }
        }
    }
})

