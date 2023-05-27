var dadoAtual;
var dadoMatriz;
var dadoMatrizUpper;

function MatrizJogo(){
    var celula = [      [0   ,0   ,0   ,0   ,0   ,"c"   ,"p"   ,"u"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0   ,0   ,0   ,0   ,"l"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],                        
                        [0   ,0   ,0   ,0   ,0   ,0   ,"c"   ,"a"   ,"c"   ,"h"   ,"e"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],    
                        [0   ,0   ,0   ,0   ,0   ,0   ,"s"   ,0   ,0   ,0   ,"p"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"r"   ,0   ,0   ,0   ,"d"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"r"  ,0  ,0   ,0   ,"5"   ,0   ,0   ,0   ,"o"   ,0   ,0   ,0   ,"u"   ,0   ,0   ,"t"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,"m"  ,"e"  ,"m"  ,"o"   ,"r" ,"i" ,"a"  ,"d"   ,"e"   ,"m"   ,"a"   ,"s"   ,"s"   ,"a"   ,0   ,0   ,"h"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"g"  ,0  ,0   ,"a"   ,"7"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"l"   ,0   ,0   ,"r"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"i"  ,0  ,0   ,"m"   ,0   ,0   ,0   ,0   ,"q"  ,"u"   ,"a"   ,"d"   ,"c"   ,"o"   ,"r"   ,"e"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"s"  ,0  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"d"   ,0   ,"o"   ,0   ,0   ,"a"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        ["d" ,"a" ,"t" ,"a" ,"b" ,"u" ,"s" ,0   ,0   ,0   ,0   ,0   ,"d"   ,0   ,"r"   ,0   ,0   ,"d"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"r"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"r"   ,0   ,"e"   ,0   ,0   ,"s"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"a"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"e"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"d"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"s"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"o"  ,0   ,"d"   ,0   ,0   ,0   ,0   ,"f"   ,"l"   ,"a"   ,"s"   ,"h"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"r"  ,"o" ,"m"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"b"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0    ,"a"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"u"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0    ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"s"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ]    
]; 
return celula;
}

function MatrizJogoUpper() {
    var celulaUpper =   [[0   ,0   ,0   ,0   ,0   ,"C"   ,"P"   ,"U"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0   ,0   ,0   ,0   ,"L"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],                        
                        [0   ,0   ,0   ,0   ,0   ,0   ,"C"   ,"A"   ,"C"   ,"H"   ,"E"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],    
                        [0   ,0   ,0   ,0   ,0   ,0   ,"S"   ,0   ,0   ,0   ,"P"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"R"   ,0   ,0   ,0   ,"D"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"R"  ,0  ,0   ,0   ,"5"   ,0   ,0   ,0   ,"O"   ,0   ,0   ,0   ,"U"   ,0   ,0   ,"T"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,"M"  ,"E"  ,"M"  ,"O"   ,"R" ,"I" ,"A"  ,"D"   ,"E"   ,"M"   ,"A"   ,"S"   ,"S"   ,"A"   ,0   ,0   ,"H"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"G"  ,0  ,0   ,"A"   ,"7"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"l"   ,0   ,0   ,"R"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"I"  ,0  ,0   ,"M"   ,0   ,0   ,0   ,0   ,"Q"  ,"U"   ,"A"   ,"D"   ,"C"   ,"O"   ,"R"   ,"E"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"S"  ,0  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"D"   ,0   ,"O"   ,0   ,0   ,"A"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        ["D" ,"A" ,"T" ,"A" ,"B" ,"U" ,"S" ,0   ,0   ,0   ,0   ,0   ,"D"   ,0   ,"R"   ,0   ,0   ,"D"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"R"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"R"   ,0   ,"E"   ,0   ,0   ,"S"   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"A"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"E"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"D"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"S"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"O"  ,0   ,"D"   ,0   ,0   ,0   ,0   ,"F"   ,"L"   ,"A"   ,"S"   ,"H"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,"R"  ,"O" ,"M"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"B"  ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0    ,"A"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"U"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ],
                        [0   ,0   ,0   ,0    ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,"S"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0  ]
                        ];
    return celulaUpper;
}


function inicializar(){
    var tabela = document.getElementById("palavras_cruzadas");
    dadoMatriz = MatrizJogo();
    dadoMatrizUpper = MatrizJogoUpper();

        for (var i=0 ; i < dadoMatriz.length ; i++){
            var linha = tabela.insertRow(-1);
            var dadoLinha = dadoMatriz[i];

            for(var j=0 ; j < dadoLinha.length ; j++){
                var cel = linha.insertCell(-1);

                if(dadoLinha[j] != 0){
                    var textoID = String('texto' + '_' + i + '_' + j);
                    cel.innerHTML ='<input type="text" class="formulario" style="text-transform: uppercase" maxlength="1" ' + 'id="' + textoID + '">';
                } else {
                    cel.style.backgroundColor = "black";
                }
            }
        }
        numeros_Dica();
    }


        function numeros_Dica(){
            document.getElementById("texto_0_5").placeholder = "1";
            document.getElementById("texto_0_7").placeholder = "2";
            document.getElementById("texto_5_2").placeholder = "3";
            document.getElementById("texto_6_5").placeholder = "4";
            document.getElementById("texto_15_2").placeholder = "5";
            document.getElementById("texto_2_10").placeholder = "6";
            document.getElementById("texto_14_9").placeholder = "7";
            document.getElementById("texto_6_1").placeholder = "8";
            document.getElementById("texto_14_4").placeholder = "9";
            document.getElementById("texto_2_6").placeholder = "10";
            document.getElementById("texto_8_12").placeholder = "11";
            document.getElementById("texto_10_0").placeholder = "12";
            document.getElementById("texto_6_6").placeholder = "13 & 14";
            document.getElementById("texto_4_14").placeholder = "15";
            document.getElementById("texto_8_10").placeholder = "16";
            document.getElementById("texto_5_17").placeholder = "17";
            document.getElementById("texto_2_6").placeholder = "18";
        }


function checar() {
    for (var i = 0; i < dadoMatriz.length; i++) {
        var dadoLinha = dadoMatriz[i];
        for (var j = 0; j < dadoLinha.length; j++) {
            if (dadoLinha[j] != 0) {
                var elemento = document.getElementById('texto' + '_' + i + "_" + j);
                if ((elemento.value != dadoMatriz[i][j]) && (elemento.value != dadoMatrizUpper[i][j])) {
                    elemento.style.backgroundColor = 'red';
                } else {
                    elemento.style.backgroundColor = 'green';
                }
            }    
        }
    }
}

function reiniciar() {
    currentTextInput = '';
    var tabela = document.getElementById("palavras_cruzadas");
    tabela.innerHTML = '';
    inicializar();
}