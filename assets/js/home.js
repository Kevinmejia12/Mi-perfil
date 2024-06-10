const pos = document.documentElement;
pos.addEventListener('mousemove', e => {
    pos.style.setProperty("--x", e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
});


const hovers = (id) => {
    if(id == "navItem1"){
        document.getElementById("label1").style.opacity = "0.8";
        document.getElementById("label1").style.color = "#fff";
        document.getElementById("label1").style.fontWeight = "bold";

        document.getElementById("linea1").style.opacity = "1";
        document.getElementById("linea1").style.width = "12%";
    }
    else if (id == "navItem2"){
        document.getElementById("label2").style.opacity = "0.8";
        document.getElementById("label2").style.color = "#fff";
        document.getElementById("label2").style.fontWeight = "bold";

        document.getElementById("linea2").style.opacity = "1";
        document.getElementById("linea2").style.width = "12%";
    }
    else if (id == "navItem3"){
        document.getElementById("label3").style.opacity = "0.8";
        document.getElementById("label3").style.color = "#fff";
        document.getElementById("label3").style.fontWeight = "bold";

        document.getElementById("linea3").style.opacity = "1";
        document.getElementById("linea3").style.width = "12%";
    }
    
}

const hovers2 = (id) => {
    console.log(document.documentElement.scrollTop)
    if(id == "navItem1" && document.documentElement.scrollTop > 500){
        document.getElementById("label1").style.opacity = "0.5";
        document.getElementById("label1").style.color = "#fff";
        document.getElementById("label1").style.fontWeight = "300";

        document.getElementById("linea1").style.opacity = "0.5";
        document.getElementById("linea1").style.width = "5%";
    }
    else if (id == "navItem2"  && document.documentElement.scrollTop < 500 || document.documentElement.scrollTop > 2500 ){
        console.log(document.documentElement.scrollTop );
        document.getElementById("label2").style.opacity = "0.5";
        document.getElementById("label2").style.color = "#fff";
        document.getElementById("label2").style.fontWeight = "300";

        document.getElementById("linea2").style.opacity = "0.5";
        document.getElementById("linea2").style.width = "5%";
    }
    else if (id == "navItem3"  && document.documentElement.scrollTop < 2500 ){
        document.getElementById("label3").style.opacity = "0.5";
        document.getElementById("label3").style.color = "#fff";
        document.getElementById("label3").style.fontWeight = "300";

        document.getElementById("linea3").style.opacity = "0.5";
        document.getElementById("linea3").style.width = "5%";
    }
    
}



window.onscroll = function(){
    if (window.innerWidth < 1500){
        if(document.documentElement.scrollTop < 500){
            document.getElementById("label1").style.opacity = "0.8";
            document.getElementById("label1").style.color = "#fff";
            document.getElementById("label1").style.fontWeight = "bold";
    
            document.getElementById("linea1").style.opacity = "1";
            document.getElementById("linea1").style.width = "12%";
    
            ///
    
            document.getElementById("label2").style.opacity = "0.5";
            document.getElementById("label2").style.color = "#fff";
            document.getElementById("label2").style.fontWeight = "300";
    
            document.getElementById("linea2").style.opacity = "0.5";
            document.getElementById("linea2").style.width = "5%";
    
            ////
    
            document.getElementById("label3").style.opacity = "0.5";
            document.getElementById("label3").style.color = "#fff";
            document.getElementById("label3").style.fontWeight = "300";
    
            document.getElementById("linea3").style.opacity = "0.5";
            document.getElementById("linea3").style.width = "5%";
        }
        else if(document.documentElement.scrollTop > 100 ){
            if(document.documentElement.scrollTop > 2500){
                document.getElementById("label3").style.opacity = "0.8";
                document.getElementById("label3").style.color = "#fff";
                document.getElementById("label3").style.fontWeight = "bold";
    
                document.getElementById("linea3").style.opacity = "1";
                document.getElementById("linea3").style.width = "12%";
    
                ///
    
                document.getElementById("label1").style.opacity = "0.5";
                document.getElementById("label1").style.color = "#fff";
                document.getElementById("label1").style.fontWeight = "300";
    
                document.getElementById("linea1").style.opacity = "0.5";
                document.getElementById("linea1").style.width = "5%";
    
                ///
    
                document.getElementById("label2").style.opacity = "0.5";
                document.getElementById("label2").style.color = "#fff";
                document.getElementById("label2").style.fontWeight = "300";
    
                document.getElementById("linea2").style.opacity = "0.5";
                document.getElementById("linea2").style.width = "5%";
    
            }else{
                document.getElementById("label2").style.opacity = "0.8";
                document.getElementById("label2").style.color = "#fff";
                document.getElementById("label2").style.fontWeight = "bold";
        
                document.getElementById("linea2").style.opacity = "1";
                document.getElementById("linea2").style.width = "12%";
    
                ////
    
                document.getElementById("label1").style.opacity = "0.5";
                document.getElementById("label1").style.color = "#fff";
                document.getElementById("label1").style.fontWeight = "300";
                document.getElementById("linea1").style.opacity = "0.5";
                document.getElementById("linea1").style.width = "5%";
                
                ///
    
                document.getElementById("label3").style.opacity = "0.5";
                document.getElementById("label3").style.color = "#fff";
                document.getElementById("label3").style.fontWeight = "300";
                document.getElementById("linea3").style.opacity = "0.5";
                document.getElementById("linea3").style.width = "5%";
            }
        }
    }
    else if(window.innerWidth >= 1800){
        if(document.documentElement.scrollTop < 500){
            
            document.getElementById("label1").style.opacity = "0.8";
            document.getElementById("label1").style.color = "#fff";
            document.getElementById("label1").style.fontWeight = "bold";
    
            document.getElementById("linea1").style.opacity = "1";
            document.getElementById("linea1").style.width = "12%";
    
            ///
    
            document.getElementById("label2").style.opacity = "0.5";
            document.getElementById("label2").style.color = "#fff";
            document.getElementById("label2").style.fontWeight = "300";
    
            document.getElementById("linea2").style.opacity = "0.5";
            document.getElementById("linea2").style.width = "5%";
    
            ////
    
            document.getElementById("label3").style.opacity = "0.5";
            document.getElementById("label3").style.color = "#fff";
            document.getElementById("label3").style.fontWeight = "300";
    
            document.getElementById("linea3").style.opacity = "0.5";
            document.getElementById("linea3").style.width = "5%";
        }
        else if(document.documentElement.scrollTop >= 532 ){
            if(document.documentElement.scrollTop > 2232){
                
                document.getElementById("label3").style.opacity = "0.8";
                document.getElementById("label3").style.color = "#fff";
                document.getElementById("label3").style.fontWeight = "bold";
    
                document.getElementById("linea3").style.opacity = "1";
                document.getElementById("linea3").style.width = "12%";
    
                ///
    
                document.getElementById("label1").style.opacity = "0.5";
                document.getElementById("label1").style.color = "#fff";
                document.getElementById("label1").style.fontWeight = "300";
    
                document.getElementById("linea1").style.opacity = "0.5";
                document.getElementById("linea1").style.width = "5%";
    
                ///
    
                document.getElementById("label2").style.opacity = "0.5";
                document.getElementById("label2").style.color = "#fff";
                document.getElementById("label2").style.fontWeight = "300";
    
                document.getElementById("linea2").style.opacity = "0.5";
                document.getElementById("linea2").style.width = "5%";
    
            }else{
                document.getElementById("label2").style.opacity = "0.8";
                document.getElementById("label2").style.color = "#fff";
                document.getElementById("label2").style.fontWeight = "bold";
        
                document.getElementById("linea2").style.opacity = "1";
                document.getElementById("linea2").style.width = "12%";
    
                ////
    
                document.getElementById("label1").style.opacity = "0.5";
                document.getElementById("label1").style.color = "#fff";
                document.getElementById("label1").style.fontWeight = "300";
                document.getElementById("linea1").style.opacity = "0.5";
                document.getElementById("linea1").style.width = "5%";
                
                ///
    
                document.getElementById("label3").style.opacity = "0.5";
                document.getElementById("label3").style.color = "#fff";
                document.getElementById("label3").style.fontWeight = "300";
                document.getElementById("linea3").style.opacity = "0.5";
                document.getElementById("linea3").style.width = "5%";
            }
        }
    }
}

const verMas = (id) => {
    if(id == "oU"){
        document.getElementById("oculto1").style.display = "block";
        document.getElementById("oU").style.display = "none";
        document.getElementById("oD").style.display = "block";
    }
    else if (id == "oD"){
        document.getElementById("oculto1").style.display = "none";
        document.getElementById("oU").style.display = "block";
        document.getElementById("oD").style.display = "none";
    }
    else if (id == "oT"){
        document.getElementById("oculto2").style.display = "block";
        document.getElementById("oT").style.display = "none";
        document.getElementById("oC").style.display = "block";
    }
    else if (id == "oC"){
        document.getElementById("oculto2").style.display = "none";
        document.getElementById("oT").style.display = "block";
        document.getElementById("oC").style.display = "none";
    }
    else if (id == "oI"){
        document.getElementById("oculto3").style.display = "block";
        document.getElementById("oI").style.display = "none";
        document.getElementById("oS").style.display = "block";
    }
    else if (id == "oS"){
        document.getElementById("oculto3").style.display = "none";
        document.getElementById("oI").style.display = "block";
        document.getElementById("oS").style.display = "none";
    }
}

const enviarDatos = () => {
    const nombre = document.getElementById("nombre").value;
    const asunto = document.getElementById("nombre").value;  
    const correo = document.getElementById("nombre").value; 
    const mensaje = document.getElementById("nombre").value; 

    if(nombre == "" ||  correo == "" || asunto == "" || mensaje == ""){
        Swal.fire({
            title: "Cuidado",
            text: "Debes llenar todos los campos para enviar correctamente tus datos.",
            icon: "warning"
        });
    }else{
        const formulario = new FormData(document.getElementById("formulario"));
        const url = "https://formspree.io/f/mzbnyjda";
        fetch(url,{
            method:"POST",
            body:formulario,
            mode:"no-cors"
        }).then(response => {
            if(response.status == 0){
                Swal.fire({
                    title: "Enviado",
                    text: "Gracias por comunicarte conmigo, estare encantado de atenderte en breve",
                    icon: "success"
                });
                const nombre = document.getElementById("nombre").value = "";
                const asunto = document.getElementById("asunto").value = "";  
                const correo = document.getElementById("correo").value = ""; 
                const mensaje = document.getElementById("mensaje").value = "";
            }else if (response.status != 400){
                Swal.fire({
                    title: "Error ",
                    text: "Intenta Mas tarde",
                    icon: "error"
                });
            }
        })
    }
}
