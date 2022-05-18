const gameBootcamp = {
    student: {
        name: 'Movsar',
        age: 27,
    },
    skill: 3,
    perspective: 3,
    energy: 3,
    garantiya: 1,
    
    learn: function () {
        this.skill++
        this.perspective++
        this.energy = this.energy - 2;
    },
    sleep: function () {
        this.energy++
        this.perspective--
    },
    opozdatb: function () {
        this.garantiya--
        console.log('хьа гаранти яьгга хьун')
    },
    boltatbVmestoRaboty: function () {
        this.perspective--
        this.garantiya--
        this.energy++
    },
    work: function () {
        this.perspective++
        this.energy--
    }
}