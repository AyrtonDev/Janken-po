alert('bem vindo ao jogo do Joken Po!')

alert('Faça sua escolha!')

let start: boolean = true

while (start) {
  const choice = prompt('PEDRA, PAPEL e TESOURA? Ou digite SAIR para parar o jogo!')

  if (choice) {
    const choiceH: string = choice.toLocaleLowerCase()

    if (choiceH === 'pedra' || choiceH === 'papel'|| choiceH === 'tesoura') {

      const choiceB = createChoiceBot()

      let tryAgain = true

      alert('O bot escolheu ' + choiceB)

      alert(verifyWin(choiceH, choiceB))

      while (tryAgain) {

        const data2Brute = prompt('Deseja tentar de novo? Sim ou Nao')

        if (data2Brute) {
          const again: string = data2Brute.toLocaleLowerCase()

          if (again === 'sim' || again === 's') {
            alert('Ebaaaaa! *-*')

            tryAgain = false
          } else if (again === 'nao' || again === 'n') {
            alert('Até mais!!! S2')

            tryAgain = false
            start = false
          } else {
            alert('Escolha invalida! Tente novamente!')
          }
        } else {
          alert('Escolha invalida! Tente novamente!')
        }
      }

    } else if (choiceH === 'sair') {
      alert('Até mais!!! S2')
      start = false
    } else {
      alert('Escolha invalida! Tente novamente!')
    }
  } else {
    alert('Escolha invalida! Tente novamente!')
  }
}

function createChoiceBot(): string {
  const dataBrute: number = Math.floor(Math.random() * 3)

  if (dataBrute === 0) {
    return 'pedra'
  } else if (dataBrute === 1) {
    return 'papel'
  } else {
    return 'tesoura'
  }
}

function verifyWin(human: string, bot: string): string {
  if (human === bot) {
    return 'EMPATE!!!'
  } else {
    if ((human === 'pedra' && bot === 'tesoura') || (human === 'papel' && bot === 'pedra') || (human === 'tesoura' && bot === 'papel')) {
      return 'Parabens! Você Ganhou! \o/'
    } else {
      return 'Poxa. Você perdeu! S/2'
    }
  }
}