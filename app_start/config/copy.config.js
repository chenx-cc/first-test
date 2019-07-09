module.exports = {
    copyDragulaCss: {
        src: "{{ROOT}}/node_modules/dragula/dist/dragula.css",
        dest: "{{BUILD}}"
    },
    copyAnimatteCss: {
        src: "{{ROOT}}/node_modules/animate/animate.css",
        dest: "{{BUILD}}"
    },
    copyDatePickerCss : {
        src: "{{ROOT}}/node_modules/angularjs-datepicker/dist/angular-datepicker.css",
        dest: "{{BUILD}}"
    },
    copyDatePickerJs : {
        src: "{{ROOT}}/node_modules/angularjs-datepicker/dist/angular-datepicker.js",
        dest: "{{BUILD}}"
    }
}