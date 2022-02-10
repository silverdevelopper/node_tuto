// Javascriptte fonksiyonlar function ketwordu ile tanımlanır. () fonksiyon demektir. İsim almak zorunda değiller
/**
 * 
 *  İsimsiz fonkssiyonlara ananuymus fonksiyon denir.
 * 
 * function {donus_tipi} isim( {params.. } ){ kodlar }
 * */
 
// Fonksiyon tanımladık
function print_hello(/*parametre*/){
    // fonsiyonun scopu
    console.log("Hello World!");
}

function print(parametre_adi){
    console.log(parametre_adi);
}
/**print_hello();

print("Hello Nazli");
print("esdgxdfgdfxxf");
print();
**/
function sum_ints(x,y){
return x+y;
}

print( sum_ints(3,5) );

const f = (input) => console.error(input);

f("b");
(function ff(){
    console.log("İnner fun");
})();