const feature = document.querySelector('#feature');
const nestingFeature = document.querySelector('#nesting__feature');
const company = document.querySelector('#company');
const nestingCompany = document.querySelector('#company__nesting');
const arrowUp = document.querySelector('#arrow__up__feature');
const arrowDown = document.querySelector('#arrow__down__feature');
const arrowUpCompa = document.querySelector('#arrow__up__company');
const arrowDownCompa = document.querySelector('#arrow__down__company');
const MenuMobil = document.querySelector('#menuDektop');
let desktop = false;
let featureMenu = false;
let companyMenu = false;
let menuActivado = false;
const sinMenu = document.querySelector('.sin__menu');
const cerrar = document.querySelector('#cerrar');
const pantallaOscura =document.querySelector('.pantalla__oscura--off');
const iconoMenu = document.querySelector('.icon__menu');

pantallaOscura.addEventListener('click',()=>{
    menuActivado = false;
    MenuMobil.classList.add('menu__mobil--off');
    if (menuActivado === false){
        pantallaOscura.classList.remove('pantallaOscura')
    }
})
if (menuActivado ===true){
        pantallaOscura.classList.add('pantallaOscura');
}else{
    pantallaOscura.classList.remove('pantallaOscura');
}

iconoMenu.addEventListener('click',()=>{
    menuActivado = true;
    MenuMobil.classList.remove('menu__mobil--off');
    if (menuActivado === true){
        pantallaOscura.classList.add('pantallaOscura');
    }

})

cerrar.addEventListener('click',()=>{
    menuActivado = false;
    MenuMobil.classList.add('menu__mobil--off');
    if (menuActivado === false){
        pantallaOscura.classList.remove('pantallaOscura')
    }
 
})

if (desktop === false){
    feature.addEventListener('click',()=>{
        if (featureMenu === false){
            EnFeatureMobil();
            featureMenu = true;
        }else{
            FueraFeature();
            featureMenu = false;
        }
 
    })
    company.addEventListener('click',()=>{
        if (companyMenu === false){
            EnCompanyMobil();
            companyMenu = true;
        }else{
            FueraCompany();
            companyMenu = false;
        }
    })
}
if(window.innerWidth >=950){
    menuActivado = false;
    desktop = true;
}
else{
    menuActivado = true;
    desktop = false;
}
window.addEventListener('resize',()=>{
    if(window.innerWidth >=950){
        menuActivado = false;
        desktop = true;
    }
    else{
        menuActivado = true;
        desktop = false;
    }
})
    sinMenu.addEventListener('mouseover',()=>{
        if (desktop === true){
            FueraCompany();
            FueraFeature();
        }

    })
    feature.addEventListener('mouseover',()=>{
        if (desktop === true){
        EnFeature();
         }
    });
    nestingFeature.addEventListener('mouseout',()=>{
        if (desktop === true){
        FueraFeature();
         }
    });
    nestingFeature.addEventListener('mouseover',()=>{
        if (desktop === true){
        EnFeature();
         }
    })

    company.addEventListener('mouseover',()=>{
        if (desktop === true){
        EnCompany();
         }
    })
    nestingCompany.addEventListener('mouseover',()=>{
        if (desktop === true){
        EnCompany();
         }
    })
    nestingCompany.addEventListener('mouseout',()=>{
        if (desktop === true){
        FueraCompany();
         }
    })
function EnFeatureMobil(){

        nestingFeature.classList.remove('nesting__feature--off');
        arrowDown.classList.add('arrow__down--off');
        arrowUp.classList.remove('arrow__up--off'); 
}

function EnCompanyMobil(){
    nestingCompany.classList.remove('company__nesting--off');

    arrowDownCompa.classList.add('arrow__down--off');
    arrowUpCompa.classList.remove('arrow__up--off');
}
    function EnFeature(){
        nestingFeature.classList.remove('nesting__feature--off');
        nestingCompany.classList.add('company__nesting--off');

        arrowDown.classList.add('arrow__down--off');
        arrowUp.classList.remove('arrow__up--off'); 
        
        arrowDownCompa.classList.remove('arrow__down--off');
        arrowUpCompa.classList.add('arrow__up--off');
    };

    function FueraFeature(){
        nestingFeature.classList.add('nesting__feature--off');
        arrowDown.classList.remove('arrow__down--off');
        arrowUp.classList.add('arrow__up--off');
    }

    function EnCompany(){
        nestingCompany.classList.remove('company__nesting--off');
        nestingFeature.classList.add('nesting__feature--off');

        arrowDownCompa.classList.add('arrow__down--off');
        arrowUpCompa.classList.remove('arrow__up--off');

        arrowDown.classList.remove('arrow__down--off');
        arrowUp.classList.add('arrow__up--off'); 
    }
    function FueraCompany(){
        nestingCompany.classList.add('company__nesting--off');

        arrowDownCompa.classList.remove('arrow__down--off');
        arrowUpCompa.classList.add('arrow__up--off');
    }