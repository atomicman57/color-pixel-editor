import APP_CONSTANTS from './utils/app_constants'
import Picker from './modules/Picker';


window.addEventListener('load', () => {
    const pickerElement = document.getElementById(APP_CONSTANTS.SLIDER_SELECTOR);
    const secondpickerElement = document.getElementById(APP_CONSTANTS.SLIDER_2_SELECTOR);
    const colorContainer = document.getElementById(APP_CONSTANTS.COLOR_CONTAINER_SELECTOR);
    const picker = new Picker(colorContainer)

    pickerElement.addEventListener("input", (e) => {
        secondpickerElement.value = e.target.value
        picker.onColorChange(e.target.value);
    });

    secondpickerElement.addEventListener("input", (e) => {
        pickerElement.value = e.target.value
        picker.onColorChange(e.target.value);
    });

})

