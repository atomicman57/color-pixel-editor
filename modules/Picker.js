class Picker {
    constructor(pickerElement, secondpickerElement) {
        this.state = {
            hsl: {
                h: 180,
                s: 100,
                l: 50
            },
            rgb: {
                r: '',
                g: '',
                b: ''
            }
        }

        this.pickerElement = pickerElement;
        this.secondpickerElement = secondpickerElement;
        this.onColorChange(this.state['hsl'].h)
    }

    convertValueToRgb() {

    }

    onColorChange(value) {
        console.log('value', value)
    }
}

export default Picker