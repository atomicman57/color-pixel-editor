import { convertHSLToRGB, convertRGBToHex } from '../utils/converter'

class Picker {
    constructor(colorContainer) {
        this.state = {
            inputValue: 0,
            h: 180,
            s: 100,
            l: 50,
            r: 0,
            g: 255,
            b: 255,
            hex: ''
        }

        this.colorContainer = colorContainer;
        this.onColorChange(this.state['h'])
    }

    getState(variable) {
        return this.state[variable];
    }

    setState(variable, value) {
        this.state[variable] = value;
    }

    convertValueToRgb(value) {
        const rgb =  convertHSLToRGB(value,  this.getState('s'),this.getState('l'))
        this.setState('r', rgb.r)
        this.setState('g', rgb.g)
        this.setState('g', rgb.b)
        return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    }

    onColorChange(value) {
        const rgb = this.convertValueToRgb(value)
        this.updateSliderThumbColor(rgb)
        this.colorContainer.style.backgroundColor = rgb;
        const hex = convertRGBToHex(this.getState('r'), this.getState('g'), this.getState('b'))
        this.setState('hex', hex);
        this.colorContainer.innerHTML = hex;
    }

    updateSliderThumbColor(color) {
        const styles = `.slider::-webkit-slider-thumb, .slider-2::-webkit-slider-thumb { background-color: ${color}; }`
        this.updateStyle(styles)
    }

    updateStyle(styles) {
        let style = document.querySelector('[name="updateStyle"]')
        style.innerHTML = styles
    }
}

export default Picker