const sectionSelectPlayerAttack = document.getElementById('selectAttack')
const sectionRestar = document.getElementById('restar')
const btnSkull = document.getElementById('btnSkull')
const btnRestar = document.getElementById('btnRestar')
const sectionSelectPlayerSkull = document.getElementById('selectSkull')
const spanPlayerSkull = document.getElementById('playerSkull')
const spanEnemySkull = document.getElementById('enemySkull')
const resultadoParcial = document.getElementById('result')
const ataqueJugador = document.getElementById('attack_Player')
const sectionMessage = document.getElementById('message')
const ataqueEnemigo = document.getElementById('attack_Enemy')
const spanPlayerLives = document.getElementById('lives-player')
const spanEnemyLives = document.getElementById('lives-enemy')
const containerCards = document.getElementById('container_cards')
const containerAttacks = document.getElementById('container_Attacks')

sectionRestar.style.display = 'none'

let mosters = []
let attackPlayer = []
let attackEnemy = []
let botones = []
let ataquejugador = []
let optionMosters
let inputCmd 
let inputTres86 
let inputDat
let inputIni
let inputMsi
let inputOtf
let inputBin
let inputCda
let inputDun
let inputIvf
let inputPsd
let inputReg
let playerPet
let attackSPlayer
let ataquesMoster
let btnWhaling
let btnRansomware
let btnPhishing
let btnSpyware 
let btnSpear
let attackMosterEnemy
let indexAttackEnemy
let indexAttackPlayer
let winsPlayer =0
let winsEnemy = 0

class Moster{
    constructor(name, img, live){
        this.name = name
        this.img = img
        this.live = live
        this.attacks = []
    }
}

let tres86 = new Moster('386','img/386.png',6) //1
let cmd = new Moster('CMD','img/cmd.png',6) //2
let otf = new Moster('OTF','img/otf.png',6) //3
let ini = new Moster('INI', 'img/ini.png',6) //4
let reg = new Moster('REG','img/reg.png',6) //5
let psd = new Moster('PSD','img/psd.png',6) //6

tres86.attacks.push( 
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Ransomware', id:'btn_Ransomware'},
    {nombre: 'Ransomware', id:'btn_Ransomware'},
    {nombre: 'Phishing', id:'btn_Phishing'},
    {nombre: 'Spyware', id:'btn_Spyware'},
    {nombre: 'Spear', id:'btn_Spear'},
)
cmd.attacks.push( 
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Ransomware', id:'btn_Ransomware'},
    {nombre: 'Phishing', id:'btn_Phishing'},
    {nombre: 'Spyware', id:'btn_Spyware'},
    {nombre: 'Spear', id:'btn_Spear'},
    {nombre: 'Whaling', id:'btn_Whaling'},
)
otf.attacks.push(
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Ransomware', id:'btn_Ransomware'},
    {nombre: 'Phishing', id:'btn_Phishing'},
    {nombre: 'Spyware', id:'btn_Spyware'},
    {nombre: 'Spear', id:'btn_Spear'},
)
ini.attacks.push(
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Ransomware', id:'btn_Ransomware'},
    {nombre: 'Phishing', id:'btn_Phishing'},
    {nombre: 'Spyware', id:'btn_Spyware'},
    {nombre: 'Spyware', id:'btn_Spyware'},
    {nombre: 'Spear', id:'btn_Spear'},
)
reg.attacks.push(
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Whaling', id:'btn_Whaling'},
)
psd.attacks.push(
    {nombre: 'Whaling', id:'btn_Whaling'},
    {nombre: 'Ransomware', id:'btn_Ransomware'},
    {nombre: 'Spear', id:'btn_Spear'},
    {nombre: 'Spyware', id:'btn_Spyware'},
    {nombre: 'Spear', id:'btn_Spear'},
    {nombre: 'Phishing', id:'btn_Phishing'},
)

mosters.push(tres86,cmd,otf,ini,reg,psd)

function starGame(){
    sectionSelectPlayerAttack.style.display = 'none'

    mosters.forEach((moster) => {
        optionMosters = ` 
        <label class="petCard" for=${moster.name}>
            <img src=${moster.img} alt=${moster.name}>
            <p>${moster.name}</p>
        </label>
        <input type="radio" name="skull" id=${moster.name}>
        `
        containerCards.innerHTML += optionMosters

        inputCmd = document.getElementById('CMD')
        inputTres86 = document.getElementById('386')
        inputIni = document.getElementById('INI')
        inputOtf = document.getElementById('OTF')  
        inputPsd = document.getElementById('PSD')
        inputReg = document.getElementById('REG') 
    })

    btnSkull.addEventListener('click', selectPlayerSkull)

    btnRestar.addEventListener('click', restarGame)
}

function selectPlayerSkull(){
    sectionSelectPlayerSkull.style.display = 'none'
    sectionSelectPlayerAttack.style.display = 'flex'

    if (inputCmd.checked) {
        spanPlayerSkull.innerHTML = inputCmd.id
        playerPet = inputCmd.id
    }else if (inputTres86.checked){
        spanPlayerSkull.innerHTML = inputTres86.id
        playerPet = inputTres86.id
    }else if(inputIni.checked){
        spanPlayerSkull.innerHTML = inputIni.id
        playerPet = inputIni.id
    }else if(inputOtf.checked){
        spanPlayerSkull.innerHTML = inputOtf.id
        playerPet = inputOtf.id
    }else if(inputPsd.checked){
        spanPlayerSkull.innerHTML = inputPsd.id
        playerPet = inputPsd.id
    }else if(inputReg.checked){
        spanPlayerSkull.innerHTML = inputReg.id
        playerPet = inputReg.id        
    }else{
        alert('CHOOSE A MONSTER')
    }

    extractAttacks(playerPet)
    selectEnemySkull()
}

function extractAttacks(playerPet){
    let ataques
    for (let i = 0; i < mosters.length; i++) {
        if (playerPet === mosters[i].name) {
            ataques = mosters[i].attacks
        }
    }
              
    showAttacks(ataques)
}

function showAttacks(ataques){
    ataques.forEach((attacks) => {
        ataquesMoster =`<button id=${attacks.id} class="btnAttack BAtaque">${attacks.nombre}</button>`
        containerAttacks.innerHTML += ataquesMoster
    })
   
    btnWhaling = document.getElementById('btn_Whaling')
    btnRansomware = document.getElementById('btn_Ransomware') 
    btnPhishing = document.getElementById('btn_Phishing') 
    btnSpyware = document.getElementById('btn_Spyware') 
    btnSpear = document.getElementById('btn_Spear')

    botones= document.querySelectorAll('.BAtaque')
}  
function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'Whaling') {
                attackPlayer.push('Whaling') 
                console.log(attackPlayer)
                boton.style.background ='#0a8792'
                boton.disabled = true
            }else if (e.target.textContent === 'Ransomware' ) {
                attackPlayer.push('Ransomware') 
                console.log(attackPlayer)
                boton.style.background ='#0a8792'
                boton.disabled = true
            }else if (e.target.textContent === 'Phishing' ) {
                attackPlayer.push('Phishing') 
                console.log(attackPlayer)
                boton.style.background ='#0a8792'
                boton.disabled = true
            }else if (e.target.textContent === 'Spyware' ) {
                attackPlayer.push('Spyware') 
                console.log(attackPlayer)
                boton.style.background ='#0a8792'
                boton.disabled = true
            }else /* if (e.target.textContent === 'Spear' ) */ {
                attackPlayer.push('Spear') 
                console.log(attackPlayer)
                boton.style.background ='#0a8792'
                boton.disabled = true
            }
            enemyRandomAttack()
        })
    })
}
function selectEnemySkull(){
    let attackEnemy = random(0, mosters.length-1)
    spanEnemySkull.innerHTML = mosters[attackEnemy].name
    attackMosterEnemy = mosters[attackEnemy].attacks
    secuenciaAtaque()
}
//funcion de seleccion de ataque del enemigo
function enemyRandomAttack(){
    let aux = random(0,attackMosterEnemy.length-1)

    if (aux == 0) {
        attackEnemy.push('Whaling')
    }else if(aux ==1){
        attackEnemy.push('Ransomware')
    }else if(aux == 2){
        attackEnemy.push('Phishing')
    }else if(aux == 3){
        attackEnemy.push('Spyware')
    }else if(aux == 4){
        attackEnemy.push('Spear')
    }
    

    console.log(attackEnemy)
     //fight() 
     iniciarPelea()
}
function iniciarPelea(){ 
    if (attackPlayer.length === 6) {
        fight()
    }
} 
/*funcion crear mensaje*/
function createMessages(result){

    let resultado = document.createElement('p')
    resultado.innerHTML = result
    resultadoParcial.appendChild(resultado)
    
    let nuevoAtaqueJugador = document.createElement('p')
    nuevoAtaqueJugador.innerHTML = indexAttackPlayer
    ataqueJugador.appendChild(nuevoAtaqueJugador)

    let nuevoAtaqueEnemigo = document.createElement('p')
    nuevoAtaqueEnemigo.innerHTML = indexAttackEnemy
    ataqueEnemigo.appendChild(nuevoAtaqueEnemigo)

}
function indexAmbosOponentes(player, enemy){
    indexAttackPlayer = attackPlayer[player]
    indexAttackEnemy = attackEnemy[enemy]
}

function fight(){

    for (let index = 0; index < attackPlayer.length; index++) {
        
        if (attackPlayer[index] === attackEnemy[index]) {
            indexAmbosOponentes(index, index)
            createMessages('TIE!')
        }else if (((attackPlayer[index] == 'Whaling' ) && (attackEnemy[index] == 'Phishing')) || ((attackPlayer[index] == 'Whaling' ) && (attackEnemy[index] == 'Spear'))) {
            indexAmbosOponentes(index, index)
            createMessages('WIN!')
            winsPlayer++ 
            spanPlayerLives.innerHTML = winsPlayer
        }else if (((attackPlayer[index] == 'Ransomware' ) && (attackEnemy[index] == 'Whaling')) || ((attackPlayer[index] == 'Ransomware' ) && (attackEnemy[index] == 'Spyware'))) {
            indexAmbosOponentes(index, index)
            createMessages('WIN!')
            winsPlayer++ 
            spanPlayerLives.innerHTML = winsPlayer
        }else if (((attackPlayer[index] == 'Phishing' ) && (attackEnemy[index] == 'Ransomware')) || ((attackPlayer[index] == 'Phishing' ) && (attackEnemy[index] == 'Spear'))) {
            indexAmbosOponentes(index, index)
            createMessages('WIN!')
            winsPlayer++ 
            spanPlayerLives.innerHTML = winsPlayer
        }else if (((attackPlayer[index] == 'Spyware' ) && (attackEnemy[index] == 'Whaling')) || ((attackPlayer[index] == 'Spyware' ) && (attackEnemy[index] == 'Phishing'))) {
            indexAmbosOponentes(index, index)
            createMessages('WIN!')
            winsPlayer++ 
            spanPlayerLives.innerHTML = winsPlayer
        }else if (((attackPlayer[index] == 'Spear' ) && (attackEnemy[index] == 'Ransomware')) || ((attackPlayer[index] == 'Spear' ) && (attackEnemy[index] == 'Spyware'))) {
            indexAmbosOponentes(index, index)
            createMessages('WIN!')
            winsPlayer++ 
            spanPlayerLives.innerHTML = winsPlayer
        }else{
            indexAmbosOponentes(index, index)
            createMessages('LOST!')
            winsEnemy++
            spanEnemyLives.innerHTML = winsEnemy
        }
        
    }
    
    /*
    1-'Whaling'  1 > 3 & 5
    2-'Ransomware' 2 > 1 & 4
    3-'Phishing' 3 > 2 & 5
    4-'Spyware' 4 > 1 & 3
    5-'Spear' 5 > 2 & 4 
    */
 
    reviewLives()
}
//revision de vidas//
function reviewLives(){

    if (winsPlayer === winsEnemy) {
        createFinalMessages('EMPATE')
    }else if(winsPlayer > winsEnemy){
        createFinalMessages('GANASTE')
    }else{
        createFinalMessages('PERDISTE')
    }
}
//funcion mensaje final//
function createFinalMessages(finalresult){
    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = finalresult
    sectionMessage.appendChild(paragraph) 
    sectionRestar.style.display = 'block'
}
//funcion de recargar pagina 
function restarGame(){
    location.reload()
}
//funcion aleatoria
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
starGame()








