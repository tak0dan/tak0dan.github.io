/* 
    Cambia la propiedad de dirección de los hijos
    row, column, row-reverse, column-reverse
*/
function changeDirection(direction) {
    const container = document.getElementById('flexContainer');
    const containerLayer = document.getElementById('containerLayer');
    let cadena;

    container.style.flexDirection = direction;

    switch (direction) {
        case 'row':
            container.style.flexDirection = 'row';
            container.style.height = "45%";
            cadena = "display: flex;<BR>\
                flexDirection: row;";
            break;
        case 'column':
            container.style.flexDirection = 'column';
            container.style.height = "90%";
            cadena = "display: flex;<BR>\
                flexDirection: row;";
            break;
        case 'row-reverse':
            container.style.flexDirection = 'row-reverse';
            container.style.height = "45%";
            cadena = "display: flex;<BR>\
                flexDirection: row-reverse;";
            break;
        case 'column-reverse':
            container.style.flexDirection = 'column-reverse';
            container.style.height = "90%";
            cadena = "display: flex;<BR>\
                flexDirection: column-reverse;";
            break;
        default:
            console.log("Dirección no válida");
            return;
    }

    containerLayer.innerHTML = cadena;

    // Remover la clase active-button de todos los botones
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    // Agregar la clase active-button al botón clickeado
    event.target.classList.add('active-button');
}


/* 
    Cambia como se comporta con multilinea
    row, column, row-reverse, column-reverse
*/
function changeFlexWrap(wrap) {
    const container = document.getElementById('flexContainer');
    const containerLayer = document.getElementById('containerLayer');
    let cadena;

    container.style.flexWrap = wrap;

    switch (wrap) {
        case 'nowrap':
            cadena = "display: flex;<BR>\
                flexWrap: nowrap;";
            break;
        case 'wrap':
            cadena = "display: flex;<BR>\
                flexWrap: wrap;";
            break;
        case 'wrap-reverse':
            cadena = "display: flex;<BR>\
                flexWrap: wrap-reverse;";
            break;
        default:
            console.log("Valor de flex-wrap no válido");
            return;
    }

    containerLayer.innerHTML = cadena;

    // Remover la clase active-button de todos los botones de wrap
    document.querySelectorAll('.wrap-buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    // Agregar la clase active-button al botón clickeado
    event.target.classList.add('active-button');
}

/* 
    Espacio entre los hijos del padre
*/
function changeGap(gapSize) {
    const container = document.getElementById('flexContainer');
    const containerLayer = document.getElementById('containerLayer');
    let cadena;

    container.style.gap = gapSize;

    switch (gapSize) {
        case '0px':
            cadena = "gap: 0px;";
            break;
        case '50px':
            cadena = "gap: 50px;";
            break;
        case '100px':
            cadena = "gap: 100px;";
            break;
        case '150px':
            cadena = "gap: 150px;";
            break;
        case '200px':
                cadena = "gap: 200px;";
                break;            
        case '25%':
            cadena = "gap: 25%;";
            break;            
        default:
            console.log("Tamaño de gap no válido");
            return;
    }

    containerLayer.innerHTML = cadena;

    
    // Remover la clase active-button de todos los botones
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    // Agregar la clase active-button al botón clickeado
    event.target.classList.add('active-button');
}

/* 
    Justificado de los hijos
*/
function changeJustifyContent(justifyValue) {
    const container = document.getElementById('flexContainer');
    const containerLayer = document.getElementById('containerLayer');
    let cadena;

    container.style.justifyContent = justifyValue;

    switch (justifyValue) {
        case 'flex-start':
            cadena = "justify-content: flex-start;";
            break;
        case 'flex-end':
            cadena = "justify-content: flex-end;";
            break;
        case 'center':
            cadena = "justify-content: center;";
            break;
        case 'space-between':
            cadena = "justify-content: space-between;";
            break;
        case 'space-around':
            cadena = "justify-content: space-around;";
            break;
        case 'space-evenly':
            cadena = "justify-content: space-evenly;";
            break;
        default:
            console.log("Valor de justify-content no válido");
            return;
    }

    containerLayer.innerHTML = cadena;

    // Remover la clase active-button de todos los botones
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    // Agregar la clase active-button al botón clickeado
    event.target.classList.add('active-button');
    
}


function changeAlignItems(alignment) {
    const container = document.getElementById('flexContainer');
    const containerLayer = document.getElementById('containerLayer');
    let cadena;

    container.style.alignItems = alignment;

    switch (alignment) {
        case 'flex-start':
            cadena = "alignItems: flex-start;";
            break;
        case 'flex-end':
            cadena = "alignItems: flex-end;";
            break;
        case 'center':
            cadena = "alignItems: center;";
            break;
        case 'stretch':
            cadena = "alignItems: stretch;";
            break;
        case 'baseline':
            cadena = "alignItems: baseline;";
            break;
        default:
            console.log("Valor de align-items no válido");
            return;
    }

    containerLayer.innerHTML = cadena;

    // Remover la clase active-button de todos los botones
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    // Agregar la clase active-button al botón clickeado
    event.target.classList.add('active-button');
}

/*
    Cambia align-content
*/
function changeAlignContent(alignment) {
    const container = document.getElementById('flexContainer');
    const containerLayer = document.getElementById('containerLayer');
    let cadena;

    container.style.alignContent = alignment;

    switch (alignment) {
        case 'flex-start':
            cadena = "align-Content: flex-start;";
            break;
        case 'flex-end':
            cadena = "align-Content: flex-end;";
            break;
        case 'center':
            cadena = "align-Content: center;";
            break;
        case 'stretch':
            cadena = "align-Content: stretch;";
            break;
        case 'space-between':
            cadena = "align-Content: space-between;";
            break;
        case 'space-around':
            cadena = "align-Content: space-around;";
            break;
        case 'space-evenly':
            cadena = "align-Content: space-evenly;";
            break;
        default:
            console.log("Valor de align-content no válido");
            return;
    }

    containerLayer.innerHTML = cadena;

    // Remover la clase active-button de todos los botones
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    // Agregar la clase active-button al botón clickeado
    event.target.classList.add('active-button');
}

/*
    Align-self
*/
function changeAlignSelf(alignment) {
    const especial = document.querySelector('.especial');
    especial.style.alignSelf = alignment;

    document.getElementById('containerLayer').innerHTML = `align-self: ${alignment};`;

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    event.target.classList.add('active-button');
}


function changeOrder(orderValue) {
    const especial = document.querySelector('.especial');
    especial.style.order = orderValue;

    document.getElementById('containerLayer').innerHTML = `order: ${orderValue};`;

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    event.target.classList.add('active-button');
}


function changeFlexBasis(basis) {
    const especial = document.querySelector('.especial');
    especial.style.flexBasis = basis;

    document.getElementById('containerLayer').innerHTML = `flexBasis: ${basis};`;

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    event.target.classList.add('active-button');
}

function changeFlexGrow(growFactor) {
    const especial = document.querySelector('.especial');
    especial.style.flexGrow = growFactor;

    document.getElementById('containerLayer').innerHTML = `flexGrow: ${growFactor};`;

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    event.target.classList.add('active-button');
}

function changeFlexShrink(value) {
    const especial = document.querySelector('.especial');
    especial.style.flexShrink = value;

    document.getElementById('containerLayer').innerHTML = `flex-Shrink: ${value};`;

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    event.target.classList.add('active-button');
}

function changeFlex(flexValue) {
    const especial = document.querySelector('.especial');
    especial.style.flex = flexValue;

    document.getElementById('containerLayer').innerHTML = `flex: ${flexValue};`;

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    event.target.classList.add('active-button');
}

